import React from 'react';
import { PAYPAL_POOL_URL } from '../data';
import subrinaMockupWide from '../assets/images/subrina_mockup_wide.jpeg';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#19092b] text-[#fdf4ff] pt-8 sm:pt-14 pb-12 sm:pb-16 border-b border-white/10">
      {/* Background Hero Image (Mockup) with subtle directional gradient */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-start sm:items-center justify-center lg:justify-end">
        <div className="relative w-full lg:w-[85%] xl:w-[78%] h-full flex items-start sm:items-center justify-center lg:justify-end">
          <img
            src={subrinaMockupWide}
            alt="SUBrina soundsystem concept 3D mockup render"
            role="presentation"
            className="w-[90%] sm:w-full h-auto max-h-[75%] sm:max-h-full object-contain object-top sm:object-right opacity-40 sm:opacity-55 lg:opacity-75 filter contrast-[1.08] brightness-[1.02] scale-100 sm:scale-105 drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            loading="eager"
          />
        </div>

        {/* Directional gradients protecting text contrast on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#19092b] via-[#19092b]/90 sm:via-[#19092b]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#19092b] via-transparent to-[#19092b]/50 sm:to-transparent" />
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-[#ec4899]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-80 h-80 rounded-full bg-[#a855f7]/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-10 z-10">
        {/* Name and Headline */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#FFB400] text-[#1e0538] border border-[#1e0538] shadow-[2px_2px_0_#1e0538] mb-4">
            <span>SUBrina Soundsystem Build</span>
          </span>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.04em] leading-[0.95] text-[#fdf4ff]"
            style={{ fontFamily: 'var(--display)' }}
          >
            Help us bring<br />
            <span className="text-[#f43f5e]">SUBrina to life.</span>
          </h1>
        </div>

        {/* Warm Personal Intro */}
        <div className="max-w-2xl space-y-4 text-base sm:text-lg text-[#fdf4ff]/90 leading-relaxed font-normal mb-8">
          <p className="font-semibold text-lg sm:text-xl text-[#FFB400]">
            We’re Ayo & Burcu, and we’re building a soundsystem for the parties we keep throwing.
          </p>

          <p>
            Between us and our friends, there are parties, weddings, retreats, small festivals and burn-style gatherings happening all the time. They all need sound. Too often, we end up piecing something together that does the job but doesn’t quite sound how we want it to.
          </p>

          <p>
            It’s time we got the good stuff going. Big, physical bass. Clear sound. And a system we know inside out.
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#25123d]/90 border border-white/15 text-sm sm:text-base text-white/95">
            <p>
              We’re raising <strong>€11,385</strong> through fundraiser events and direct donations to build SUBrina, with help from Horner Audio. The plan is to build over winter and have her ready by spring, in time for outdoor dancing.
            </p>
          </div>
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={PAYPAL_POOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button-pop button-pop-primary py-3.5 sm:py-4 px-7 sm:px-8 text-sm sm:text-base font-black inline-flex items-center justify-center shadow-lg"
          >
            <span>Chip in via PayPal ↗</span>
          </a>

          <a
            href="#events"
            className="button-pop button-pop-secondary py-3.5 sm:py-4 px-6 sm:px-7 text-xs sm:text-sm font-black bg-[#25123d] text-white hover:bg-[#341753]"
          >
            <span>Come to a fundraiser ↓</span>
          </a>
        </div>
      </div>

      {/* Gentle Ticker */}
      <div className="mt-12 -rotate-1 bg-[#FFB400] text-[#19092b] border-y-2 border-[#1e0538] shadow-[0_4px_0_#ec4899] overflow-hidden">
        <div className="ticker-tape py-2">
          <div className="ticker-track text-xs sm:text-sm font-black uppercase tracking-wider">
            <span>✳ SUBRINA SOUNDSYSTEM</span>
            <span>✦ AYO & BURCU WITH HORNER AUDIO</span>
            <span>☻ COMMUNITY FUNDRAISER & DANCING</span>
            <span>✳ WINTER BUILD · SPRING OUTDOOR LAUNCH</span>
            <span>✦ 2 SAWMOD TOPS & 4 REFLEX SUBS</span>
            <span>☻ CHIP IN OR COME DANCE WITH US</span>
          </div>
          <div className="ticker-track text-xs sm:text-sm font-black uppercase tracking-wider" aria-hidden="true">
            <span>✳ SUBRINA SOUNDSYSTEM</span>
            <span>✦ AYO & BURCU WITH HORNER AUDIO</span>
            <span>☻ COMMUNITY FUNDRAISER & DANCING</span>
            <span>✳ WINTER BUILD · SPRING OUTDOOR LAUNCH</span>
            <span>✦ 2 SAWMOD TOPS & 4 REFLEX SUBS</span>
            <span>☻ CHIP IN OR COME DANCE WITH US</span>
          </div>
        </div>
      </div>
    </section>
  );
};
