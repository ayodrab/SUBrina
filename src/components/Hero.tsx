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
    <section className="relative overflow-hidden bg-[#19092b] text-[#fdf4ff] pt-12 sm:pt-20 pb-20 sm:pb-28">
      {/* Background Hero Image with Gradient Overlays for Maximum Readability */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-start sm:items-center justify-center lg:justify-end">
        <div className="relative w-full lg:w-[88%] xl:w-[82%] 2xl:w-[78%] h-full flex items-start sm:items-center justify-center lg:justify-end pt-8 sm:pt-0">
          <img
            src={subrinaMockupWide}
            alt=""
            role="presentation"
            className="w-[88%] sm:w-full h-auto max-h-[72%] sm:max-h-full object-contain object-top sm:object-right opacity-45 sm:opacity-65 lg:opacity-75 filter contrast-[1.08] scale-100 sm:scale-105 lg:scale-115 xl:scale-120 drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-300"
            loading="eager"
          />
        </div>

        {/* Darkening & directional gradient layers: deep on left/text side, smoothly revealing system on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#19092b] via-[#19092b]/85 sm:via-[#19092b]/60 to-[#19092b]/25 sm:to-[#19092b]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#19092b] via-transparent to-[#19092b]/70 sm:to-[#19092b]/50" />
        <div className="absolute inset-0 bg-[#19092b]/15 sm:bg-[#19092b]/10" />
      </div>

      {/* Ambient Color Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#ec4899]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-[#a855f7]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 z-10">
        {/* Clean Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#19092b]/80 backdrop-blur-md border border-[#fde047]/30 text-[#fde047] font-black tracking-widest text-xs sm:text-sm mb-4">
          <span>🔊 Acoustic Physics · Multiple Entry Horns · Built with Horner Audio</span>
        </div>

        {/* Hero Content */}
        <div className="max-w-3xl my-6 sm:my-10">
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[-0.05em] leading-[0.88] mb-8 drop-shadow-md"
            style={{ fontFamily: 'var(--display)' }}
          >
            SUBrina<br />
            the teenage<br />
            <em className="text-[#ec4899] font-normal not-italic" style={{ fontFamily: 'var(--serif)' }}>
              soundsystem.
            </em>
          </h1>

          {/* Confident Copy */}
          <p className="text-lg sm:text-xl text-[#fdf4ff]/95 max-w-2xl font-normal leading-relaxed mb-10 drop-shadow-sm">
            SUBrina is our dream of pristine, uncompromising DIY sound — built to power intimate community parties, our kiezburn soundcamp, and cultural gatherings across Berlin with warm, chest-punching bass and zero ear fatigue.
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
              €8,500 for materials and hardware — birch plywood, 5-driver horns, amps & Horner subs
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#25123d]/85 backdrop-blur-md border-2 border-[#2e1065] text-left shadow-lg">
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
