import React from 'react';
import { DonationTier } from '../types';
import { PAYPAL_POOL_URL, FLAGSHIP_NEO_BUDGET } from '../data';
import { CostTracker } from './CostTracker';

interface FundraiserTrackerProps {
  totalRaised: number;
  goal: number;
  totalDonorsCount: number;
  anonymousCount: number;
  anonymousTotal: number;
  tiers?: DonationTier[];
  onUpdateTotalManually?: (newTotal: number) => void;
}

export const FundraiserTracker: React.FC<FundraiserTrackerProps> = ({
  totalRaised,
  goal,
}) => {
  const percent = Math.min(100, Math.round((totalRaised / goal) * 100));

  return (
    <section id="fundraiser" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 bg-[#19092b] text-[#fdf4ff]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-8 items-end mb-14">
          <div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.05em] leading-[0.9]"
              style={{ fontFamily: 'var(--display)' }}
            >
              SUBrina needs<br />
              <em className="text-[#FFB400] font-normal not-italic" style={{ fontFamily: 'var(--serif)' }}>
                €{goal.toLocaleString()} to come alive.
              </em>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#fdf4ff]/80 leading-relaxed font-normal">
            €11,385 sounds like a lot, but for what we are building, it is actually quite cheap. Comparable commercial sound systems of this caliber cost around €50,000.
          </p>
        </div>

        {/* Primary Big Card with Integrated Target & Itemized Budget */}
        <div className="p-6 sm:p-10 rounded-[2rem] bg-[#25123d] border-4 border-[#1e0538] shadow-[12px_14px_0_#f43f5e] mb-14 relative overflow-hidden">
          {/* Top Numbers Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-8 border-b border-white/15 items-baseline">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#FFB400] block mb-1">
                Amount raised so far
              </span>
              <div
                className="text-4xl sm:text-5xl font-black text-[#fdf4ff] tracking-tight"
                style={{ fontFamily: 'var(--display)' }}
              >
                €{totalRaised.toLocaleString()}
              </div>
              <span className="text-xs font-bold text-[#fdf4ff]/70 mt-1 block">
                First backer support from Julia P! 💖
              </span>
            </div>

            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#fdf4ff]/60 block mb-1">
                Final rig target
              </span>
              <div
                className="text-4xl sm:text-5xl font-black text-[#fdf4ff] tracking-tight"
                style={{ fontFamily: 'var(--display)' }}
              >
                €{goal.toLocaleString()}
              </div>
              <span className="text-xs font-bold text-[#fdf4ff]/70 mt-1 block">
                Remaining: €{(goal - totalRaised).toLocaleString()}
              </span>
            </div>

            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#ec4899] block mb-1">
                Progress
              </span>
              <div
                className="text-4xl sm:text-5xl font-black text-[#ec4899] tracking-tight"
                style={{ fontFamily: 'var(--display)' }}
              >
                {percent}%
              </div>
              <span className="text-xs font-bold text-[#fdf4ff]/70 mt-1 block">
                Building partner: Horner Audio
              </span>
            </div>
          </div>

          {/* Tactile Progress Bar */}
          <div className="my-8">
            <div className="relative w-full h-8 bg-[#19092b] rounded-full border-2 border-[#1e0538] overflow-hidden p-1 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-[#f43f5e] via-[#ec4899] to-[#FFB400] rounded-full border border-[#1e0538] transition-all duration-700 ease-out shadow-[0_0_12px_rgba(244,63,94,0.4)]"
                style={{ width: `${percent}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-xs font-extrabold uppercase tracking-wider mt-2.5 text-[#fdf4ff]/70">
              <span>€0</span>
              <span>€2,090 (Tops)</span>
              <span>€5,690 (+ Subs)</span>
              <span>€7,890 (+ Amps)</span>
              <span>€11,385 (Full Rig)</span>
            </div>
          </div>

          {/* Action Row with Suggested Amounts & Labels */}
          <div className="pt-6 border-t border-white/15 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <span className="text-xs font-black uppercase tracking-wider text-[#FFB400] block">
                Suggested contribution
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#19092b] border border-white/15 text-xs text-[#fdf4ff]/90 font-bold">
                  <strong className="text-[#FFB400]">€15</strong> Kiss on the Cheek
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#19092b] border border-white/15 text-xs text-[#fdf4ff]/90 font-bold">
                  <strong className="text-[#f43f5e]">€30</strong> Slow Tight Dance
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#19092b] border border-white/15 text-xs text-[#fdf4ff]/90 font-bold">
                  <strong className="text-[#38bdf8]">€60</strong> DJ Song Request
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#19092b] border border-white/15 text-xs text-[#fdf4ff]/90 font-bold">
                  <strong className="text-[#ec4899]">€200</strong> Guestlist: You + 5
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={PAYPAL_POOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button-pop button-pop-primary py-3.5 px-8 text-xs sm:text-sm font-black inline-flex items-center justify-center shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                <span>Chip in via PayPal Pool ↗</span>
              </a>
            </div>
          </div>

          {/* Integrated Itemized Cost Breakdown: Unfurlable underneath "Where does all of this money go?" */}
          <CostTracker data={FLAGSHIP_NEO_BUDGET} />
        </div>
      </div>
    </section>
  );
};
