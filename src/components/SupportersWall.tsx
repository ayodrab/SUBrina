import React from 'react';
import { Donor } from '../types';
import { Heart, Sparkles, Send } from 'lucide-react';
import { PAYPAL_POOL_URL, TELEGRAM_AYO_URL, DONATION_TIERS } from '../data';

interface SupportersWallProps {
  donors: Donor[];
}

export const SupportersWall: React.FC<SupportersWallProps> = ({ donors }) => {
  return (
    <section id="supporters" className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-[#25123d] text-[#fdf4ff]">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#ec4899] text-white border border-[#1e0538] shadow-[2px_2px_0_#1e0538] mb-3">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Community Supporters</span>
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[-0.04em] text-[#fdf4ff]"
            style={{ fontFamily: 'var(--display)' }}
          >
            Our Supporters
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-lg mx-auto mt-2 font-normal leading-relaxed">
            Huge thanks to everyone who has backed the build so far. Every bit of support gets us closer to dancing in front of her.
          </p>
        </div>

        {/* Supporters Wall Cards */}
        <div className="space-y-4 mb-14">
          {donors.map((donor) => (
            <div
              key={donor.id}
              className="p-6 sm:p-7 rounded-[1.8rem] bg-[#FFB400] text-[#1e0538] border-3 border-[#1e0538] shadow-[8px_8px_0_#f43f5e] text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 rounded-2xl bg-[#1e0538] text-[#FFB400] grid place-items-center text-2xl shrink-0 shadow-[2px_2px_0_#f43f5e]">
                  {donor.monsterAvatar || '💖'}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-black uppercase tracking-tight" style={{ fontFamily: 'var(--display)' }}>
                      {donor.name}
                    </span>
                    <span className="sticker bg-[#f43f5e] text-white text-[10px] py-0.5 px-2">
                      {donor.badge || 'Supporter'}
                    </span>
                  </div>
                  {donor.message && (
                    <p className="text-xs sm:text-sm font-semibold italic opacity-90 mt-1">
                      “{donor.message}”
                    </p>
                  )}
                </div>
              </div>

              <div className="text-left sm:text-right sm:border-l sm:border-[#1e0538]/20 sm:pl-6 shrink-0">
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

        {/* Suggested Contribution Perks Card */}
        <div className="p-6 sm:p-8 rounded-[2rem] bg-[#19092b] border-2 border-white/15 mb-14">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFB400] block mb-1">
              Suggested Contribution Amounts
            </span>
            <p className="text-xs sm:text-sm text-white/80">
              You can chip in any amount you’d like on the PayPal pool! Here are some playful ways to think about your support:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {DONATION_TIERS.map((tier) => (
              <div
                key={tier.id}
                className="p-4 rounded-xl bg-[#25123d] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-sm font-black uppercase text-white" style={{ fontFamily: 'var(--display)' }}>
                      €{tier.minAmount} — {tier.name}
                    </span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {tier.perk}
                  </p>
                </div>
                {tier.id === 'tier-4' && (
                  <p className="text-[10px] text-white/50 italic mt-2 pt-2 border-t border-white/10">
                    *Valid for an event organised as a SUBrina event. Message Ayo to arrange your guestlist.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final Donation Invitation Box */}
        <div className="p-8 sm:p-10 rounded-[2.2rem] bg-[#19092b] border-3 border-[#1e0538] shadow-[10px_12px_0_#FFB400] text-center">
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white mb-4 leading-snug"
            style={{ fontFamily: 'var(--display)' }}
          >
            Want to help get SUBrina built?
          </h3>

          <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
            Chip in, come to a fundraiser, or send this to a friend who’d like to dance with us.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={PAYPAL_POOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button-pop button-pop-primary py-4 px-8 text-sm sm:text-base font-black inline-flex items-center justify-center shadow-lg"
            >
              <span>Chip in via PayPal Pool ↗</span>
            </a>

            <a
              href={TELEGRAM_AYO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button-pop button-pop-secondary py-4 px-7 text-xs sm:text-sm font-black bg-[#25123d] text-white hover:bg-[#341753] inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-[#38bdf8]" />
              <span>Message Ayo on Telegram ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
