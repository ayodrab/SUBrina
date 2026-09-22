import React from 'react';
import { Donor } from '../types';
import { Heart, Sparkles } from 'lucide-react';

interface SupportersWallProps {
  donors: Donor[];
  onOpenDonate: () => void;
}

export const SupportersWall: React.FC<SupportersWallProps> = ({ donors, onOpenDonate }) => {
  return (
    <section id="supporters" className="py-20 sm:py-24 px-4 sm:px-6 md:px-10 bg-[#25123d] text-[#fdf4ff] border-t-2 border-[#2e1065]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Compact Heading */}
        <div className="section-kicker">05 / Community Supporters</div>
        <h2
          className="text-4xl sm:text-5xl font-black uppercase tracking-[-0.05em] leading-[0.9] mb-4"
          style={{ fontFamily: 'var(--display)' }}
        >
          Our Backer Wall.<br />
          <em className="text-[#fde047] font-normal not-italic" style={{ fontFamily: 'var(--serif)' }}>
            Powering the Dream.
          </em>
        </h2>
        <p className="text-sm sm:text-base text-[#fdf4ff]/80 max-w-lg mx-auto mb-10 font-normal leading-relaxed">
          Every contribution directly buys Baltic birch plywood, high-power drivers, and amplification.
        </p>

        {/* Compact Backer Cards List */}
        <div className="space-y-4 mb-8">
          {donors.map((donor) => (
            <div
              key={donor.id}
              className="p-6 sm:p-7 rounded-[1.6rem] bg-[#fde047] text-[#1e0538] border-4 border-[#1e0538] shadow-[8px_8px_0_#f43f5e] text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1e0538] text-[#fde047] grid place-items-center text-3xl shrink-0 shadow-[2px_2px_0_#f43f5e]">
                  {donor.monsterAvatar || '💖'}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-black uppercase tracking-tight" style={{ fontFamily: 'var(--display)' }}>
                      {donor.name}
                    </span>
                    <span className="sticker bg-[#f43f5e] text-white text-[10px] py-0.5 px-2">
                      {donor.badge || 'Founding Pillar'}
                    </span>
                  </div>
                  {donor.message && (
                    <p className="text-xs sm:text-sm font-semibold italic opacity-90 mt-1">
                      “{donor.message}”
                    </p>
                  )}
                </div>
              </div>

              <div className="text-right sm:border-l sm:border-[#1e0538]/20 sm:pl-6 shrink-0">
                <div className="text-2xl sm:text-3xl font-black text-[#1e0538]" style={{ fontFamily: 'var(--display)' }}>
                  €{donor.amount.toLocaleString()}
                </div>
                <div className="text-[11px] font-extrabold uppercase tracking-wider opacity-75">
                  {donor.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Join Callout */}
        <button
          onClick={onOpenDonate}
          className="button-pop button-pop-primary py-3.5 px-8 text-xs sm:text-sm font-black"
        >
          <span>Join the Supporter Wall via PayPal ↗</span>
        </button>
      </div>
    </section>
  );
};
