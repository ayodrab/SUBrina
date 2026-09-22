import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DonationTier } from '../types';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  tiers: DonationTier[];
  initialAmount?: number;
  paypalPoolUrl?: string;
  onDonationSuccess: (donation: {
    amount: number;
    name: string;
    isAnonymous: boolean;
    isArtist: boolean;
    artistHandle?: string;
    message?: string;
    monsterAvatar: string;
    tierName?: string;
  }) => void;
}

const PRESET_AMOUNTS = [15, 30, 60, 200, 350];
const MONSTER_AVATARS = ['👾', '🦄', '👹', '✨', '🐾', '🎀', '🔊', '💖'];

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  tiers,
  initialAmount = 30,
  paypalPoolUrl = 'https://paypal.me/subrinasoundsystem',
  onDonationSuccess,
}) => {
  const [amount, setAmount] = useState<number>(initialAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);
  const [name, setName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isArtist, setIsArtist] = useState(false);
  const [artistHandle, setArtistHandle] = useState('');
  const [message, setMessage] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('👾');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openedPayPal, setOpenedPayPal] = useState(false);

  useEffect(() => {
    if (initialAmount) {
      if (PRESET_AMOUNTS.includes(initialAmount)) {
        setAmount(initialAmount);
        setIsCustom(false);
      } else {
        setAmount(initialAmount);
        setCustomAmount(initialAmount.toString());
        setIsCustom(true);
      }
    }
  }, [initialAmount]);

  if (!isOpen) return null;

  const currentAmount = isCustom ? (parseFloat(customAmount) || 0) : amount;
  
  // Find earned tier
  const earnedTier = [...tiers]
    .sort((a, b) => b.minAmount - a.minAmount)
    .find((t) => currentAmount >= t.minAmount);

  const handleOpenPayPal = () => {
    setOpenedPayPal(true);
    // Open PayPal Pool in a new window
    window.open(paypalPoolUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentAmount <= 0) return;

    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#f43f5e', '#ec4899', '#fde047', '#38bdf8', '#c084fc'],
      });
    } catch {
      // safe fallback
    }

    setIsSubmitted(true);

    setTimeout(() => {
      onDonationSuccess({
        amount: currentAmount,
        name: isAnonymous ? 'Anonymous Angel' : name || 'Community Supporter',
        isAnonymous,
        isArtist,
        artistHandle: isArtist ? artistHandle : undefined,
        message: message.trim() ? message : undefined,
        monsterAvatar: selectedAvatar,
        tierName: earnedTier ? earnedTier.name : undefined,
      });

      setIsSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f051d]/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg bg-[#25123d] text-[#fdf4ff] border-2 border-[#f43f5e] rounded-[1.8rem] shadow-[14px_14px_0_#f43f5e] p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#19092b] hover:bg-[#f43f5e] text-white border border-white/20 grid place-items-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="py-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#fde047] border-2 border-[#1e0538] text-[#1e0538] grid place-items-center text-3xl mb-4 shadow-[4px_4px_0_#f43f5e]">
              ✓
            </div>
            <h3
              className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#fde047] mb-2"
              style={{ fontFamily: 'var(--display)' }}
            >
              Thank You Endless Love!
            </h3>
            <p className="text-sm text-[#fdf4ff]/80 max-w-xs font-semibold leading-relaxed">
              Your pledge of €{currentAmount} has been recorded on our live tracker. See you on the dancefloor!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <span className="sticker bg-[#fde047] text-[#1e0538] text-[10px] py-0.5 px-2.5 mb-2">
                COMMUNITY PAYPAL POOL
              </span>
              <h3
                className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#fdf4ff]"
                style={{ fontFamily: 'var(--display)' }}
              >
                Chip in to SUBrina
              </h3>
              <p className="text-xs text-[#fdf4ff]/70 mt-1 leading-relaxed">
                We are pooling our funds via PayPal! Chip in via the PayPal Pool button, then log your name and message below to appear immediately on our live backer wall.
              </p>
            </div>

            {/* Step 1: Open PayPal Pool Button */}
            <div className="p-4 rounded-2xl bg-[#19092b] border-2 border-[#2e1065] text-center">
              <div className="text-xs font-black uppercase tracking-wider text-[#fde047] mb-2">
                Step 1: Send via PayPal Pool
              </div>
              <button
                type="button"
                onClick={handleOpenPayPal}
                className="button-pop button-pop-primary w-full py-3 text-xs sm:text-sm font-black flex items-center justify-center gap-2"
              >
                <span>Open Community PayPal Pool</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-[#fdf4ff]/60 mt-2 font-medium">
                {openedPayPal ? (
                  <span className="text-[#fde047] font-bold">
                    ✓ PayPal opened in new tab! Now confirm your pledge details below:
                  </span>
                ) : (
                  'Sends directly to the collective PayPal pool without fees'
                )}
              </p>
            </div>

            {/* Step 2: Form to log pledge & reward */}
            <form onSubmit={handleSubmit} className="space-y-5 pt-2 border-t border-white/10">
              <div className="text-xs font-black uppercase tracking-wider text-[#ec4899]">
                Step 2: Choose your amount & perk
              </div>

              {/* Presets */}
              <div>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-2">
                  {PRESET_AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setAmount(amt);
                        setIsCustom(false);
                      }}
                      className={`py-2 px-1 text-xs font-black uppercase rounded-full border-2 transition-all ${
                        !isCustom && amount === amt
                          ? 'bg-[#fde047] text-[#1e0538] border-[#1e0538] shadow-[2px_2px_0_#f43f5e]'
                          : 'bg-[#19092b] text-white border-white/20 hover:border-[#fde047]'
                      }`}
                    >
                      €{amt}
                    </button>
                  ))}
                </div>

                {/* Custom input */}
                <input
                  type="number"
                  min="5"
                  step="5"
                  placeholder="Or enter custom amount in €"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setIsCustom(true);
                  }}
                  className={`w-full px-4 py-2 rounded-full text-xs font-bold border transition-colors ${
                    isCustom
                      ? 'bg-[#fde047]/20 border-[#fde047] text-[#fdf4ff]'
                      : 'bg-[#19092b] border-white/20 text-[#fdf4ff]'
                  } focus:outline-none focus:ring-2 focus:ring-[#fde047]`}
                />
              </div>

              {/* Earned Tier Banner */}
              {earnedTier && (
                <div className="p-3.5 rounded-xl bg-[#fdf4ff] text-[#1e0538] border-2 border-[#1e0538] shadow-[3px_3px_0_#ec4899] text-xs">
                  <div className="flex items-center gap-2 font-black uppercase">
                    <span>{earnedTier.icon || earnedTier.badge.split(' ')[0] || '🎁'}</span>
                    <span>Reward: {earnedTier.name}</span>
                  </div>
                  <div className="text-[11px] font-semibold mt-0.5 opacity-85">
                    {earnedTier.perk}
                  </div>
                </div>
              )}

              {/* Avatar Selection */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#fdf4ff] mb-1.5">
                  Choose your Monster Avatar
                </label>
                <div className="flex flex-wrap gap-2">
                  {MONSTER_AVATARS.map((av) => (
                    <button
                      key={av}
                      type="button"
                      onClick={() => setSelectedAvatar(av)}
                      className={`w-9 h-9 rounded-full border text-base grid place-items-center transition-all ${
                        selectedAvatar === av
                          ? 'bg-[#fde047] border-[#1e0538] shadow-[2px_2px_0_#f43f5e] scale-110'
                          : 'bg-[#19092b] border-white/20 hover:border-[#fde047]'
                      }`}
                    >
                      {av}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Anonymous Toggle */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black uppercase tracking-wider text-[#fdf4ff]">
                    Your Name / DJ Alias
                  </label>
                  <label className="inline-flex items-center gap-1.5 text-xs font-bold cursor-pointer text-[#fde047]">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded border-white/20 text-[#f43f5e] focus:ring-[#f43f5e]"
                    />
                    <span>Stay anonymous</span>
                  </label>
                </div>

                {!isAnonymous && (
                  <input
                    type="text"
                    required={!isAnonymous}
                    placeholder="e.g. Robin / DJ Slime Princess"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 rounded-full text-xs font-bold bg-[#19092b] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#fde047]"
                  />
                )}
              </div>

              {/* Artist Toggle */}
              <div className="flex items-center gap-2">
                <label className="inline-flex items-center gap-1.5 text-xs font-bold cursor-pointer text-white/80">
                  <input
                    type="checkbox"
                    checked={isArtist}
                    onChange={(e) => setIsArtist(e.target.checked)}
                    className="rounded border-white/20 text-[#ec4899] focus:ring-[#ec4899]"
                  />
                  <span>I'm a DJ / Producer / Sound Artist</span>
                </label>
              </div>

              {isArtist && (
                <input
                  type="text"
                  placeholder="Artist Handle (e.g. @dj_sample / Resident @ FIZZ)"
                  value={artistHandle}
                  onChange={(e) => setArtistHandle(e.target.value)}
                  className="w-full px-4 py-2 rounded-full text-xs font-bold bg-[#19092b] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#ec4899]"
                />
              )}

              {/* Message */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#fdf4ff] mb-1">
                  Message for the Wall (optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Can't wait for that first low-end chest slam!"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 rounded-full text-xs font-bold bg-[#19092b] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#fde047]"
                />
              </div>

              {/* Confirm Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="button-pop button-pop-pink w-full py-3.5 text-xs sm:text-sm font-black"
                >
                  <span>Confirm €{currentAmount} Pledge & Add to Wall ↗</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
