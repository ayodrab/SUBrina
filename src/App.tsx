import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FundraisingProgress } from './components/FundraisingProgress';
import { WhereSheWillPlay } from './components/WhereSheWillPlay';
import { EventsSection } from './components/EventsSection';
import { TheSoundSystem } from './components/TheSoundSystem';
import { BudgetSection } from './components/BudgetSection';
import { SoundHireAndFaq } from './components/SoundHireAndFaq';
import { SupportersWall } from './components/SupportersWall';
import { Footer } from './components/Footer';
import { 
  INITIAL_FUNDRAISING_GOAL, 
  CURRENT_TOTAL_RAISED,
  INITIAL_DONORS, 
  UPCOMING_EVENTS 
} from './data';
import { Donor } from './types';

export default function App() {
  const [goal] = useState(INITIAL_FUNDRAISING_GOAL);
  const [totalRaised] = useState(CURRENT_TOTAL_RAISED);
  const [donors] = useState<Donor[]>(INITIAL_DONORS);

  return (
    <div className="min-h-screen bg-[#19092b] text-[#fdf4ff] flex flex-col selection:bg-[#ec4899] selection:text-white">
      {/* Top Fixed Header with Direct Link to PayPal Pool */}
      <Navbar
        totalRaised={totalRaised}
        goal={goal}
      />

      {/* Main One-Pager Flow strictly following the requested order */}
      <main className="flex-1">
        {/* 1. Opening and clear donation invitation */}
        <Hero />

        {/* 2. Fundraising progress */}
        <FundraisingProgress
          totalRaised={totalRaised}
          goal={goal}
        />

        {/* 3. A short section about where SUBrina will play */}
        <WhereSheWillPlay />

        {/* 4. Upcoming fundraiser events */}
        <EventsSection
          events={UPCOMING_EVENTS}
        />

        {/* 5. What we’re building, including the staged build plan */}
        <TheSoundSystem />

        {/* 6. Budget summary with an expandable detailed breakdown */}
        <BudgetSection />

        {/* 7. Practical FAQ */}
        <SoundHireAndFaq />

        {/* 8. Supporters and a final donation invitation */}
        <SupportersWall
          donors={donors}
        />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
