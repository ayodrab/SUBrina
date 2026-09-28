import React from 'react';
import { PAYPAL_POOL_URL, FUNDRAISING_LAST_UPDATED } from '../data';

interface FundraisingProgressProps {
  totalRaised: number;
  goal: number;
}

export const FundraisingProgress: React.FC<FundraisingProgressProps> = ({
  totalRaised,
  goal,
}) => {
  const remaining = Math.max(0, goal - totalRaised);
  const percentage = Math.min(100, Math.round((totalRaised / goal) * 100));

  return (
    <section id="progress" className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 bg-[#1f0b35] text-[#fdf4ff] border-b border-white/10">
      <div className="max-w-5xl mx-auto">
        {/* Main Progress Card */}
        <div className="p-6 sm:p-9 rounded-[2rem] bg-[#25123d] border-3 border-[#1e0538] shadow-[8px_10px_0_#f43f5e]">
          {/* Numbers Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#FFB400] block mb-1">
                Fundraising Progress
              </span>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span
                  className="text-4xl sm:text-5xl font-black text-[#fdf4ff] tracking-tight"
                  style={{ fontFamily: 'var(--display)' }}
                >
                  €{totalRaised.toLocaleString()}
                </span>
                <span className="text-lg sm:text-xl font-bold text-white/60">
                  of €{goal.toLocaleString()} target
                </span>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-2xl sm:text-3xl font-black text-[#ec4899] block" style={{ fontFamily: 'var(--display)' }}>
                {percentage}%
              </span>
              <span className="text-xs font-bold text-white/60">
                €{remaining.toLocaleString()} remaining to raise
              </span>
            </div>
          </div>

          {/* Tactile Progress Bar */}
          <div className="my-6">
            <div className="relative w-full h-6 bg-[#19092b] rounded-full border-2 border-[#1e0538] overflow-hidden p-1 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-[#f43f5e] via-[#ec4899] to-[#FFB400] rounded-full transition-all duration-700 ease-out"
                style={{ width: `${Math.max(4, percentage)}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[11px] sm:text-xs font-mono font-bold text-white/60 mt-2 px-1">
              <span>€0</span>
              <span>Target: €{goal.toLocaleString()}</span>
            </div>
          </div>

          {/* Context Explainer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm text-white/80">
            <p>
              Fundraising happens through our community fundraiser events and direct donations.
              {FUNDRAISING_LAST_UPDATED && (
                <span className="block sm:inline sm:ml-1 text-white/50 text-xs">
                  (Total updated {FUNDRAISING_LAST_UPDATED})
                </span>
              )}
            </p>

            <a
              href={PAYPAL_POOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button-pop button-pop-primary py-2.5 px-5 text-xs font-black shrink-0 self-start sm:self-auto text-center"
            >
              <span>Chip in via PayPal ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
