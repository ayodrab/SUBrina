import React from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';

interface HeroProps {
  totalRaised: number;
  goal: number;
  onOpenDonate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ totalRaised, goal, onOpenDonate }) => {
  const percent = Math.min(100, Math.round((totalRaised / goal) * 100));

  return (
    <section className="relative overflow-hidden bg-[#19092b] text-[#fdf4ff] pt-12 sm:pt-16 pb-20 sm:pb-28">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#ec4899]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-[#a855f7]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Clean Eyebrow */}
        <div className="eyebrow text-[#fde047] font-black tracking-widest text-xs sm:text-sm">
          Acoustic Physics · Multiple Entry Horns · Built by Burcu & Ayo with Horner Audio
        </div>

        {/* Hero Content */}
        <div className="max-w-3xl my-8 sm:my-12">
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[-0.05em] leading-[0.88] mb-8"
            style={{ fontFamily: 'var(--display)' }}
          >
            SUBrina<br />
            the teenage<br />
            <em className="text-[#ec4899] font-normal not-italic" style={{ fontFamily: 'var(--serif)' }}>
              soundsystem.
            </em>
          </h1>

          {/* Confident Copy */}
          <p className="text-lg sm:text-xl text-[#fdf4ff]/90 max-w-2xl font-normal leading-relaxed mb-10">
            SUBrina is our dream of pristine, uncompromising DIY sound — built to power intimate community parties, our kiezburn soundcamp, and cultural gatherings across Berlin with warm, chest-punching bass and zero ear fatigue.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenDonate}
              className="button-pop button-pop-primary py-4 px-8 text-sm sm:text-base font-black"
            >
              <span>Chip in via PayPal Pool ↗</span>
            </button>

            <a
              href="#system"
              className="button-pop button-pop-secondary py-4 px-7 text-xs sm:text-sm font-black"
            >
              <span>Explore the System ↓</span>
            </a>
          </div>
        </div>

        {/* 3-Column Fast Facts Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 sm:pt-16 mt-8 border-t-2 border-[#2e1065]">
          <div className="p-5 rounded-2xl bg-[#25123d] border-2 border-[#2e1065] text-left">
            <span className="text-xs font-black uppercase tracking-wider text-[#fde047] block mb-1">
              One Main Target
            </span>
            <div
              className="text-3xl sm:text-4xl font-black text-[#fdf4ff] tracking-tight"
              style={{ fontFamily: 'var(--display)' }}
            >
              €{goal.toLocaleString()}
            </div>
            <p className="text-xs text-[#fdf4ff]/70 mt-1 font-medium">
              Transparent DIY budget for birch plywood, 5-driver horns, amps & Horner subs
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#25123d] border-2 border-[#2e1065] text-left">
            <span className="text-xs font-black uppercase tracking-wider text-[#ec4899] block mb-1">
              Dancefloor Power
            </span>
            <div
              className="text-3xl sm:text-4xl font-black text-[#fdf4ff] tracking-tight"
              style={{ fontFamily: 'var(--display)' }}
            >
              Up to 400
            </div>
            <p className="text-xs text-[#fdf4ff]/70 mt-1 font-medium">
              Versatile coverage for 400 people indoors and 150–200 outdoors with massive low end
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#25123d] border-2 border-[#2e1065] text-left">
            <span className="text-xs font-black uppercase tracking-wider text-[#38bdf8] block mb-1">
              Building Partner
            </span>
            <div
              className="text-3xl sm:text-4xl font-black text-[#fdf4ff] tracking-tight"
              style={{ fontFamily: 'var(--display)' }}
            >
              Horner Audio
            </div>
            <p className="text-xs text-[#fdf4ff]/70 mt-1 font-medium">
              Acoustic mentors generously dedicating time, workshop space & engineering
            </p>
          </div>
        </div>
      </div>

      {/* Running Marquee Ticker */}
      <div className="mt-14 -rotate-1 scale-105 bg-[#fde047] text-[#19092b] border-y-3 border-[#1e0538] shadow-[0_6px_0_#ec4899]">
        <div className="ticker-tape">
          <div className="ticker-track">
            <span>✳ SUBRINA · THE TEENAGE SOUNDSYSTEM</span>
            <span>✦ BUILT BY BURCU & AYO WITH HORNER AUDIO</span>
            <span>☻ MULTIPLE ENTRY HORN COHERENCE</span>
            <span>✳ 4 × 18" HORNER REFLEX SUBWOOFERS</span>
            <span>✦ KIEZBURN SOUNDCAMP & COMMUNITY PARTIES</span>
            <span>☻ TIGHT · SPACIOUS · ACCURATE SOUND</span>
            <span>✳ CHIP IN ON PAYPAL POOL</span>
          </div>
          <div className="ticker-track" aria-hidden="true">
            <span>✳ SUBRINA · THE TEENAGE SOUNDSYSTEM</span>
            <span>✦ BUILT BY BURCU & AYO WITH HORNER AUDIO</span>
            <span>☻ MULTIPLE ENTRY HORN COHERENCE</span>
            <span>✳ 4 × 18" HORNER REFLEX SUBWOOFERS</span>
            <span>✦ KIEZBURN SOUNDCAMP & COMMUNITY PARTIES</span>
            <span>☻ TIGHT · SPACIOUS · ACCURATE SOUND</span>
            <span>✳ CHIP IN ON PAYPAL POOL</span>
          </div>
        </div>
      </div>
    </section>
  );
};
