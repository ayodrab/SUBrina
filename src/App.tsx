import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { TheSoundSystem } from './components/TheSoundSystem';
import { FundraiserTracker } from './components/FundraiserTracker';
import { EventsSection } from './components/EventsSection';
import { SupportersWall } from './components/SupportersWall';
import { SoundHireAndFaq } from './components/SoundHireAndFaq';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { 
  INITIAL_FUNDRAISING_GOAL, 
  INITIAL_BUDGET_ITEMS, 
  DONATION_TIERS, 
  INITIAL_DONORS, 
  INITIAL_ANONYMOUS_COUNT, 
  INITIAL_ANONYMOUS_TOTAL, 
  UPCOMING_EVENTS 
} from './data';
import { Donor, BudgetItem } from './types';

export default function App() {
  // Core dynamic fundraiser states
  const [goal] = useState(INITIAL_FUNDRAISING_GOAL);
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>(INITIAL_BUDGET_ITEMS);
  const [donors, setDonors] = useState<Donor[]>(INITIAL_DONORS);
  const [anonymousCount, setAnonymousCount] = useState(INITIAL_ANONYMOUS_COUNT);
  const [anonymousTotal, setAnonymousTotal] = useState(INITIAL_ANONYMOUS_TOTAL);

  // Modal states
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [donateInitialAmount, setDonateInitialAmount] = useState<number>(30);

  // Compute total raised dynamically
  const namedDonorsTotal = donors.reduce((sum, d) => sum + d.amount, 0);
  const totalRaised = namedDonorsTotal + anonymousTotal;

  const handleOpenDonate = (presetAmount?: number) => {
    setDonateInitialAmount(presetAmount || 30);
    setIsDonateOpen(true);
  };

  // Allow organizers to sync or manually adjust total raised to match the live PayPal Pool
  const handleUpdateTotalManually = (newTotal: number) => {
    const difference = newTotal - totalRaised;
    if (difference !== 0) {
      setAnonymousTotal((prev) => Math.max(0, prev + difference));
    }
  };

  const handleDonationSuccess = (donation: {
    amount: number;
    name: string;
    isAnonymous: boolean;
    isArtist: boolean;
    artistHandle?: string;
    message?: string;
    monsterAvatar: string;
    tierName?: string;
  }) => {
    if (donation.isAnonymous) {
      setAnonymousCount((prev) => prev + 1);
      setAnonymousTotal((prev) => prev + donation.amount);
    } else {
      const newDonor: Donor = {
        id: `donor-${Date.now()}`,
        name: donation.name,
        amount: donation.amount,
        date: 'Just now',
        message: donation.message,
        isArtist: donation.isArtist,
        artistHandle: donation.artistHandle,
        isAnonymous: false,
        tierName: donation.tierName,
        badge: donation.isArtist ? 'Artist Ally' : 'New Backer',
        monsterAvatar: donation.monsterAvatar,
      };
      setDonors((prev) => [newDonor, ...prev]);
    }

    // Allocate funds towards under-funded budget items dynamically
    setBudgetItems((prevItems) => {
      let remainingToDistribute = donation.amount;
      return prevItems.map((item) => {
        if (remainingToDistribute <= 0) return item;
        const deficit = item.cost - item.funded;
        if (deficit > 0) {
          const added = Math.min(deficit, remainingToDistribute);
          remainingToDistribute -= added;
          return { ...item, funded: item.funded + added };
        }
        return item;
      });
    });
  };

  return (
    <div className="min-h-screen bg-[#19092b] text-[#fdf4ff] flex flex-col selection:bg-[#ec4899] selection:text-white">
      {/* Top Fixed Header */}
      <Navbar
        totalRaised={totalRaised}
        goal={goal}
        onOpenDonate={() => handleOpenDonate(30)}
      />

      {/* Main One-Pager Flow */}
      <main className="flex-1">
        {/* Hero Section with First Card & Running Ticker */}
        <Hero
          totalRaised={totalRaised}
          goal={goal}
          onOpenDonate={() => handleOpenDonate(30)}
        />

        {/* 01 / The Mission & Vision */}
        <Manifesto />

        {/* 02 / The Sound System Architecture (Multiple Entry Horns) */}
        <TheSoundSystem />

        {/* 03 / The Community FUNdraiser (€8,500 One Goal with PayPal Pool) */}
        <FundraiserTracker
          totalRaised={totalRaised}
          goal={goal}
          totalDonorsCount={donors.length}
          anonymousCount={anonymousCount}
          anonymousTotal={anonymousTotal}
          tiers={DONATION_TIERS}
          onOpenDonate={handleOpenDonate}
          onUpdateTotalManually={handleUpdateTotalManually}
        />

        {/* 04 / Calendar & Gatherings */}
        <EventsSection
          events={UPCOMING_EVENTS}
          onOpenDonate={() => handleOpenDonate(30)}
        />

        {/* 05 / Community Supporters & Backer Wall */}
        <SupportersWall
          donors={donors}
          onOpenDonate={() => handleOpenDonate(30)}
        />

        {/* 06 / Frequently Asked Questions & Contact */}
        <SoundHireAndFaq />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Interactive PayPal Pool Pledge Modal */}
      <DonationModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
        tiers={DONATION_TIERS}
        initialAmount={donateInitialAmount}
        paypalPoolUrl="https://paypal.me/subrinasoundsystem"
        onDonationSuccess={handleDonationSuccess}
      />
    </div>
  );
}
