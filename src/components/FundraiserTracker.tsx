import React, { useState } from 'react';
import { DonationTier } from '../types';
import { FUNDRAISING_MILESTONES } from '../data';
import { CheckCircle2, Clock, Sparkles, ExternalLink, Settings, RefreshCw } from 'lucide-react';

interface FundraiserTrackerProps {
  totalRaised: number;
  goal: number;
  totalDonorsCount: number;
  anonymousCount: number;
  anonymousTotal: number;
  tiers: DonationTier[];
  onOpenDonate: (presetAmount?: number) => void;
  onUpdateTotalManually?: (newTotal: number) => void;
}

export const FundraiserTracker: React.FC<FundraiserTrackerProps> = ({
  totalRaised,
  goal,
  totalDonorsCount,
  tiers,
  onOpenDonate,
  onUpdateTotalManually,
}) => {
  const percent = Math.min(100, Math.round((totalRaised / goal) * 100));

  const [showAdminSync, setShowAdminSync] = useState(false);
  const [manualSyncAmount, setManualSyncAmount] = useState<string>(totalRaised.toString());

  const handleAdminUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(manualSyncAmount);
    if (!isNaN(val) && onUpdateTotalManually) {
      onUpdateTotalManually(val);
      setShowAdminSync(false);
    }
  };

  return (
    <section id="fundraiser" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 bg-[#19092b] text-[#fdf4ff]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-8 items-end mb-14">
          <div>
            <div className="section-kicker">03 / The Community FUNdraiser</div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.05em] leading-[0.9]"
              style={{ fontFamily: 'var(--display)' }}
            >
              One Community Target:<br />
              <em className="text-[#fde047] font-normal not-italic" style={{ fontFamily: 'var(--serif)' }}>
                €8,500 to Build the Rig.
              </em>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#fdf4ff]/80 leading-relaxed font-normal">
            Transparent community budget for raw Baltic birch, 5-driver horns, amplification, and Horner Audio subwoofers — pooled together via PayPal.
          </p>
        </div>

        {/* Primary Big Card */}
        <div className="p-6 sm:p-10 rounded-[2rem] bg-[#25123d] border-4 border-[#1e0538] shadow-[12px_14px_0_#f43f5e] mb-14 relative overflow-hidden">
          {/* Top Numbers Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-8 border-b border-white/15 items-baseline">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#fde047] block mb-1">
                Raised so far
              </span>
              <div
                className="text-4xl sm:text-5xl font-black text-[#fdf4ff] tracking-tight"
                style={{ fontFamily: 'var(--display)' }}
              >
                €{totalRaised.toLocaleString()}
              </div>
              <span className="text-xs font-bold text-[#fdf4ff]/70 mt-1 block">
                First backer support from Herzberg! 💖
              </span>
            </div>

            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#fdf4ff]/60 block mb-1">
                Final Rig Target
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
                className="h-full bg-gradient-to-r from-[#f43f5e] via-[#ec4899] to-[#fde047] rounded-full border border-[#1e0538] transition-all duration-700 ease-out shadow-[0_0_12px_rgba(244,63,94,0.4)]"
                style={{ width: `${percent}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-xs font-extrabold uppercase tracking-wider mt-2.5 text-[#fdf4ff]/70">
              <span>€0</span>
              <span>€2,500 (Tops)</span>
              <span>€5,500 (Amps & DSP)</span>
              <span>€8,500 (Full Rig)</span>
            </div>
          </div>

          {/* Clean Action Row (Removed the weird uncentered button clutter) */}
          <div className="pt-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs font-black uppercase tracking-wider text-[#fde047] block">
                Contribute through our community PayPal Pool
              </span>
              <p className="text-xs sm:text-sm text-[#fdf4ff]/80 font-medium mt-0.5">
                Every euro goes straight to materials and sound hardware.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {[15, 30, 60, 200].map((amt) => (
                <button
                  key={amt}
                  onClick={() => onOpenDonate(amt)}
                  className="px-4 py-2.5 rounded-full border-2 border-[#1e0538] bg-[#fdf4ff] hover:bg-[#fde047] text-[#1e0538] text-xs font-black uppercase tracking-wider transition-all hover:-translate-y-0.5 hover:shadow-[3px_4px_0_#f43f5e] cursor-pointer"
                >
                  €{amt}
                </button>
              ))}

              <button
                onClick={() => onOpenDonate(30)}
                className="button-pop button-pop-primary py-2.5 px-6 text-xs"
              >
                <span>Chip in via PayPal ↗</span>
              </button>

              {/* Organizer Sync Tool */}
              <button
                onClick={() => setShowAdminSync(!showAdminSync)}
                title="Organizer Tool: Update Balance"
                className="p-2.5 rounded-full border border-white/20 hover:border-[#fde047] text-white/60 hover:text-[#fde047] transition-colors"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Organizer Manual Pool Sync Drawer */}
          {showAdminSync && (
            <div className="mt-6 pt-5 border-t border-dashed border-white/20 bg-[#19092b] p-4 rounded-2xl">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#fde047] flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5" />
                  Organizer Tool: Sync PayPal Pool Total
                </span>
                <span className="text-[11px] text-white/50">
                  Enter latest pool balance to update the live progress bar
                </span>
              </div>
              <form onSubmit={handleAdminUpdate} className="flex items-center gap-3">
                <input
                  type="number"
                  step="1"
                  value={manualSyncAmount}
                  onChange={(e) => setManualSyncAmount(e.target.value)}
                  className="px-3 py-1.5 rounded-full bg-[#25123d] border border-white/20 text-xs font-bold text-white w-40 focus:outline-none focus:ring-2 focus:ring-[#fde047]"
                  placeholder="e.g. 1250"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-full bg-[#fde047] text-[#1e0538] text-xs font-black uppercase hover:bg-white transition-colors"
                >
                  Save New Total
                </button>
                <button
                  type="button"
                  onClick={() => setShowAdminSync(false)}
                  className="text-xs text-white/60 hover:text-white"
                >
                  Cancel
                </button>
              </form>
            </div>
          )}
        </div>

        {/* 3 Milestone Cards (With perfected text alignment & generous padding) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch">
          {FUNDRAISING_MILESTONES.map((m, idx) => {
            const isFunded = totalRaised >= m.targetAmount;
            const isCurrent = !isFunded && (idx === 0 || totalRaised >= FUNDRAISING_MILESTONES[idx - 1].targetAmount);

            return (
              <div
                key={m.id}
                className={`p-7 rounded-[1.6rem] border-2 flex flex-col justify-between transition-all duration-300 ${
                  isFunded
                    ? 'bg-[#fde047] text-[#1e0538] border-[#1e0538] shadow-[6px_6px_0_#f43f5e]'
                    : isCurrent
                    ? 'bg-[#fdf4ff] text-[#1e0538] border-[#1e0538] shadow-[6px_6px_0_#ec4899] ring-2 ring-[#ec4899]'
                    : 'bg-[#25123d] text-[#fdf4ff]/70 border-[#2e1065] opacity-80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-4 flex-wrap">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border border-current shrink-0">
                      Milestone 0{idx + 1}
                    </span>
                    {isFunded ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-[#1e0538] shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ec4899]" /> Funded!
                      </span>
                    ) : isCurrent ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase text-[#f43f5e] bg-[#f43f5e]/10 px-2 py-0.5 rounded-full border border-[#f43f5e]/30 shrink-0">
                        <Clock className="w-3 h-3 animate-spin" /> In Progress
                      </span>
                    ) : (
                      <span className="text-[11px] font-black uppercase opacity-60 shrink-0">
                        Goal Ahead
                      </span>
                    )}
                  </div>

                  <div
                    className="text-3xl sm:text-4xl font-black tracking-tight mb-2 leading-none"
                    style={{ fontFamily: 'var(--display)' }}
                  >
                    €{m.targetAmount.toLocaleString()}
                  </div>

                  <h3
                    className="text-xl font-black uppercase tracking-tight mb-2 leading-tight"
                    style={{ fontFamily: 'var(--display)' }}
                  >
                    {m.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-bold mb-3 leading-snug">
                    {m.summary}
                  </p>

                  <p className="text-xs opacity-85 leading-relaxed pt-3 border-t border-current/20">
                    {m.details}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-current/15 flex items-center justify-between text-[11px] font-bold opacity-75">
                  <span>Target: €{m.targetAmount.toLocaleString()}</span>
                  <span>{m.tag}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Intangible Backer Rewards */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
            <h3
              className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#fdf4ff]"
              style={{ fontFamily: 'var(--display)' }}
            >
              Intangible Perks & Love
            </h3>
            <span className="text-xs text-[#fde047] font-black uppercase tracking-wide">
              Click any perk to pledge via PayPal
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                onClick={() => onOpenDonate(tier.minAmount)}
                className="p-6 rounded-[1.6rem] bg-[#fdf4ff] text-[#1e0538] border-2 border-[#1e0538] shadow-[5px_5px_0_#f43f5e] hover:shadow-[8px_8px_0_#fde047] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="text-3xl mb-3">{tier.badge.split(' ')[0] || '💖'}</div>
                  <div className="text-xs font-black uppercase tracking-wider text-[#f43f5e] mb-1">
                    from €{tier.minAmount}
                  </div>
                  <h4
                    className="text-lg font-black uppercase tracking-tight mb-2 group-hover:text-[#ec4899] transition-colors leading-tight"
                    style={{ fontFamily: 'var(--display)' }}
                  >
                    {tier.name}
                  </h4>
                  <p className="text-xs text-[#1e0538]/85 leading-relaxed font-normal">
                    {tier.perk}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/10 flex items-center justify-between text-[11px] font-bold text-[#ec4899]">
                  <span>Pledge €{tier.minAmount}</span>
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
