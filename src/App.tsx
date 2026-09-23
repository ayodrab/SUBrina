import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventsSection } from './components/EventsSection';
import { TheSoundSystem } from './components/TheSoundSystem';
import { FundraiserTracker } from './components/FundraiserTracker';
import { SupportersWall } from './components/SupportersWall';
import { Manifesto } from './components/Manifesto';
import { SoundHireAndFaq } from './components/SoundHireAndFaq';
import { Footer } from './components/Footer';
import { 
  INITIAL_FUNDRAISING_GOAL, 
  INITIAL_DONORS, 
  INITIAL_ANONYMOUS_COUNT, 
  INITIAL_ANONYMOUS_TOTAL, 
  UPCOMING_EVENTS 
} from './data';
import { Donor } from './types';

export default function App() {
  // Core dynamic fundraiser states
  const [goal] = useState(INITIAL_FUNDRAISING_GOAL);
  const [donors] = useState<Donor[]>(INITIAL_DONORS);
  const [anonymousCount] = useState(INITIAL_ANONYMOUS_COUNT);
  const [anonymousTotal, setAnonymousTotal] = useState(INITIAL_ANONYMOUS_TOTAL);

  // Compute total raised dynamically
  const namedDonorsTotal = donors.reduce((sum, d) => sum + d.amount, 0);
  const totalRaised = namedDonorsTotal + anonymousTotal;

  // Allow organizers to sync or manually adjust total raised to match the live PayPal Pool
  const handleUpdateTotalManually = (newTotal: number) => {
    const difference = newTotal - totalRaised;
    if (difference !== 0) {
      setAnonymousTotal((prev) => Math.max(0, prev + difference));
    }
  };

  return (
    <div className="min-h-screen bg-[#19092b] text-[#fdf4ff] flex flex-col selection:bg-[#ec4899] selection:text-white">
      {/* Top Fixed Header with Direct Link to PayPal Pool */}
      <Navbar
        totalRaised={totalRaised}
        goal={goal}
      />

      {/* Main One-Pager Flow */}
      <main className="flex-1">
        {/* Hero Section with Fast Facts & Running Ticker */}
        <Hero
          totalRaised={totalRaised}
          goal={goal}
        />

        {/* 01 / Calendar & Gatherings (Events first!) */}
        <EventsSection
          events={UPCOMING_EVENTS}
        />

        {/* 02 / The Sound System Architecture (Multiple Entry Horns) */}
        <TheSoundSystem />

        {/* 03 / The Community FUNdraiser (€8,500 One Goal with PayPal Pool) */}
        <FundraiserTracker
          totalRaised={totalRaised}
          goal={goal}
          totalDonorsCount={donors.length}
          anonymousCount={anonymousCount}
          anonymousTotal={anonymousTotal}
          onUpdateTotalManually={handleUpdateTotalManually}
        />

        {/* 04 / Community Supporters & Backer Wall */}
        <SupportersWall
          donors={donors}
        />

        {/* Unfurlable Mission & Origin (Down by the FAQ) */}
        <Manifesto />

        {/* Frequently Asked Questions & Contact */}
        <SoundHireAndFaq />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
