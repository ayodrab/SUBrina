import React from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';
import { PAYPAL_POOL_URL } from '../data';
import subrinaMockupWide from '../assets/images/subrina_mockup_wide.jpeg';

interface HeroProps {
  totalRaised: number;
  goal: number;
}

export const Hero: React.FC<HeroProps> = ({ totalRaised, goal }) => {
  const percent = Math.min(100, Math.round((totalRaised / goal) * 100));

  return (
    <section className="relative overflow-hidden bg-[#19092b] text-[#fdf4ff] pt-6 sm:pt-10 pb-12 sm:pb-16">
      {/* Background Hero Image with Directional Gradient for Readability */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-start sm:items-center justify-center lg:justify-end">
        <div className="relative w-full lg:w-[88%] xl:w-[82%] 2xl:w-[78%] h-full flex items-start sm:items-center justify-center lg:justify-end pt-2 sm:pt-0">
          <img
            src={subrinaMockupWide}
            alt="SUBrina Sound System Render"
            role="presentation"
            className="w-[92%] sm:w-full h-auto max-h-[78%] sm:max-h-full object-contain object-top sm:object-right opacity-70 sm:opacity-85 lg:opacity-95 filter contrast-[1.12] brightness-[1.05] scale-100 sm:scale-105 lg:scale-115 xl:scale-120 drop-shadow-[0_20px_60px_rgba(0,0,0,0.95)] transition-all duration-300"
            loading="eager"
          />
        </div>

        {/* Directional gradient: protects text contrast on left, smoothly lets the rig shine clearly on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#19092b] via-[#19092b]/80 sm:via-[#19092b]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#19092b] via-transparent to-[#19092b]/40 sm:to-transparent" />
      </div>

      {/* Ambient Color Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#ec4899]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-[#a855f7]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 z-10">
        {/* Hero Content */}
        <div className="max-w-3xl my-2 sm:my-4">
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[-0.05em] leading-[0.88] mb-6 drop-shadow-md"
            style={{ fontFamily: 'var(--display)' }}
          >
            SUBrina,<br />
            <em className="text-[#ec4899] font-normal not-italic" style={{ fontFamily: 'var(--serif)' }}>
              the sound system of our dreams.
            </em>
          </h1>

          {/* Confident Copy */}
          <p className="text-lg sm:text-xl text-[#fdf4ff]/95 max-w-2xl font-normal leading-relaxed mb-10 drop-shadow-sm">
            We're building the sound system of our dreams with big, fat, super crispy clear sound.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PAYPAL_POOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button-pop button-pop-primary py-4 px-8 text-sm sm:text-base font-black inline-flex items-center justify-center shadow-lg"
            >
              <span>Chip in via PayPal Pool ↗</span>
            </a>

            <a
              href="#events"
              className="button-pop button-pop-secondary py-4 px-7 text-xs sm:text-sm font-black bg-[#25123d]/90 backdrop-blur-sm"
            >
              <span>Upcoming Events ↓</span>
            </a>
          </div>
        </div>

        {/* 3-Column Fast Facts Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 sm:pt-14 mt-8 border-t-2 border-[#2e1065]/80 backdrop-blur-xs">
          <div className="p-5 rounded-2xl bg-[#25123d]/85 backdrop-blur-md border-2 border-[#2e1065] text-left shadow-lg">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFB400] block mb-1">
              One Main Target
            </span>
            <div
              className="text-3xl sm:text-4xl font-black text-[#fdf4ff] tracking-tight"
              style={{ fontFamily: 'var(--display)' }}
            >
              €{goal.toLocaleString()}
            </div>
            <p className="text-xs text-[#fdf4ff]/70 mt-1 font-medium">
              Flagship Neo Build — Baltic birch flatpacks, 5-driver horns, amps, DSP & Horner subs
            </p>
          </div>

          <a
            href="#dancefloor-power"
            className="p-5 rounded-2xl bg-[#25123d]/85 backdrop-blur-md border-2 border-[#2e1065] hover:border-[#ec4899] text-left shadow-lg transition-all group block cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-black uppercase tracking-wider text-[#ec4899] group-hover:text-[#FFB400] transition-colors">
                Dancefloor Power
              </span>
              <span className="text-[10px] font-bold text-white/50 group-hover:text-white transition-colors">
                Explore Zones →
              </span>
            </div>
            <div
              className="text-2xl sm:text-3xl font-black text-[#fdf4ff] tracking-tight leading-tight"
              style={{ fontFamily: 'var(--display)' }}
            >
              200–250 Floor · 500–800 Area
            </div>
            <p className="text-xs text-[#fdf4ff]/70 mt-1 font-medium">
              200–250 core dancers outdoors (up to 350 indoors), and 500–800 total footprint across peripheral bar & lounge zones
            </p>
          </a>

          <div className="p-5 rounded-2xl bg-[#25123d]/85 backdrop-blur-md border-2 border-[#2e1065] text-left shadow-lg">
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
      <div className="mt-14 -rotate-1 scale-105 bg-[#FFB400] text-[#19092b] border-y-3 border-[#1e0538] shadow-[0_6px_0_#ec4899]">
        <div className="ticker-tape">
          <div className="ticker-track">
            <span>✳ SUBRINA — THE BASS MONSTER</span>
            <span>✦ BUILT BY BURCU & AYO WITH HORNER AUDIO</span>
            <span>☻ MULTIPLE ENTRY HORN COHERENCE</span>
            <span>✳ 4 × 18" HORNER REFLEX SUBWOOFERS</span>
            <span>✦ KIEZBURN SOUNDCAMP & COMMUNITY PARTIES</span>
            <span>☻ TIGHT · SPACIOUS · ACCURATE SOUND</span>
            <span>✳ CHIP IN ON PAYPAL POOL</span>
          </div>
          <div className="ticker-track" aria-hidden="true">
            <span>✳ SUBRINA — THE BASS MONSTER</span>
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
