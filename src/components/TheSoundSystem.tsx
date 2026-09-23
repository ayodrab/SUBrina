import React, { useState } from 'react';
import { ChevronDown, Volume2, Sparkles, Sliders, Zap, Check } from 'lucide-react';

export const TheSoundSystem: React.FC = () => {
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);

  const cards = [
    {
      emoji: '🎺',
      tag: 'Heart of the Rig',
      title: '2 × SAWMOD Tops',
      designer: 'Designed by JW Audio',
      summary: '5 speaker drivers inside each cabinet, all firing out of the exact same horn flare.',
      bg: 'bg-[#fdf4ff] text-[#1e0538]',
      tilt: 'tilt-left',
      accentColor: 'border-[#1e0538] shadow-[5px_5px_0_#f43f5e]',
      badgeColor: 'bg-[#f43f5e] text-white',
    },
    {
      emoji: '🔊',
      tag: 'Physical Low End',
      title: '4 × 18" Reflex Subs',
      designer: 'Designed by Horner Audio',
      summary: 'Four tuned 18-inch reflex subwoofers for huge, effortless physical bass without muddy distortion.',
      bg: 'bg-[#fde047] text-[#1e0538]',
      tilt: 'tilt-right',
      accentColor: 'border-[#1e0538] shadow-[5px_5px_0_#1e0538]',
      badgeColor: 'bg-[#1e0538] text-[#fde047]',
    },
    {
      emoji: '⚡',
      tag: 'Muscle & Brains',
      title: 'Amp Rack & DSP',
      designer: 'Digital Signal Processing',
      summary: 'High-headroom clean amplification with FIR filtering, dynamic safety limiters, and precision crossover.',
      bg: 'bg-[#38bdf8] text-[#1e0538]',
      tilt: 'tilt-left',
      accentColor: 'border-[#1e0538] shadow-[5px_5px_0_#1e0538]',
      badgeColor: 'bg-[#1e0538] text-white',
    },
    {
      emoji: '👥',
      tag: 'Coverage',
      title: '400 Indoors / 200 Outdoors',
      designer: 'Dancefloor Capacity',
      summary: 'Sized to fill intimate club spaces or outdoor festival fields with uncompromising presence.',
      bg: 'bg-[#ec4899] text-white',
      tilt: 'tilt-right',
      accentColor: 'border-[#1e0538] shadow-[5px_5px_0_#fde047]',
      badgeColor: 'bg-[#fde047] text-[#1e0538]',
    },
    {
      emoji: '🚐',
      tag: 'Mobility',
      title: 'Portable & Van-Ready',
      designer: 'Smart Dimensions',
      summary: 'Prioritises a very present sound while maintaining manageable dimensions and weights for transport.',
      bg: 'bg-[#fdf4ff] text-[#1e0538]',
      tilt: 'tilt-left',
      accentColor: 'border-[#1e0538] shadow-[5px_5px_0_#38bdf8]',
      badgeColor: 'bg-[#38bdf8] text-[#1e0538]',
    },
    {
      emoji: '🪵',
      tag: 'Craftsmanship',
      title: 'Baltic Birch Wood',
      designer: 'CNC Precision Joinery',
      summary: '100% void-free premium Baltic birch plywood with internal bracing to eliminate unwanted box resonances.',
      bg: 'bg-[#c084fc] text-[#1e0538]',
      tilt: 'tilt-right',
      accentColor: 'border-[#1e0538] shadow-[5px_5px_0_#1e0538]',
      badgeColor: 'bg-[#1e0538] text-white',
    },
  ];

  return (
    <section id="system" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 bg-[#19092b] text-[#fdf4ff]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-8 items-end mb-16">
          <div>
            <div className="section-kicker">02 / The Sound System</div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.05em] leading-[0.9]"
              style={{ fontFamily: 'var(--display)' }}
            >
              Exciting innovative<br />
              <em className="text-[#f43f5e] font-normal not-italic" style={{ fontFamily: 'var(--serif)' }}>
                sound architecture.
              </em>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#fdf4ff]/80 leading-relaxed font-normal">
            Specifically designed around a Multiple Entry Horn which ensures fantastic sonic coherence, delivering a tight, spacious, accurate, and very present sound.
          </p>
        </div>

        {/* 6 Playful Animated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-[1.4rem] border-2 flex flex-col justify-between cursor-default transition-all duration-300 ${c.bg} ${c.tilt} ${c.accentColor}`}
            >
              <div>
                {/* Header with Emoji & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl select-none">{c.emoji}</span>
                  <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-current ${c.badgeColor}`}>
                    {c.tag}
                  </span>
                </div>

                <h3
                  className="text-2xl font-black uppercase tracking-tight mb-1"
                  style={{ fontFamily: 'var(--display)' }}
                >
                  {c.title}
                </h3>

                <div className="text-xs font-bold uppercase tracking-wider opacity-75 mb-3">
                  {c.designer}
                </div>

                <p className="text-xs sm:text-sm font-medium leading-relaxed opacity-90">
                  {c.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Unfurlable Deep Dive Box: How the Multiple Entry Horn Works */}
        <div className="rounded-[1.6rem] bg-[#25123d] border-2 border-[#2e1065] shadow-[6px_6px_0_#f43f5e] overflow-hidden transition-all duration-300">
          <button
            onClick={() => setIsDeepDiveOpen(!isDeepDiveOpen)}
            className="w-full p-5 sm:p-7 flex items-center justify-between gap-4 text-left hover:bg-[#2e1065]/50 transition-colors cursor-pointer group"
            aria-expanded={isDeepDiveOpen}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="sticker bg-[#fde047] text-[#1e0538] text-[10px] sm:text-xs">
                WHY IT SOUNDS DIFFERENT
              </span>
              <h3
                className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#fdf4ff] group-hover:text-[#fde047] transition-colors"
                style={{ fontFamily: 'var(--display)' }}
              >
                Why a Multiple Entry Horn? (The Acoustic Magic)
              </h3>
            </div>

            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-[#fde047] shrink-0 bg-[#19092b] px-4 py-2 rounded-full border border-white/10 group-hover:border-[#fde047] transition-colors">
              <span>{isDeepDiveOpen ? 'Collapse Details' : 'Unfurl Deep Dive'}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isDeepDiveOpen ? 'rotate-180 text-[#f43f5e]' : ''
                }`}
              />
            </div>
          </button>

          {isDeepDiveOpen && (
            <div className="px-6 pb-8 sm:px-10 sm:pb-10 pt-4 border-t border-[#2e1065] animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center">
                <div>
                  <h4
                    className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#fdf4ff] mb-4"
                    style={{ fontFamily: 'var(--display)' }}
                  >
                    Point-Source Wavefront vs. Traditional Stacks
                  </h4>
                  <p className="text-sm sm:text-base text-[#fdf4ff]/85 leading-relaxed mb-4">
                    Traditional club sound systems place tweeters, mid-range speakers, and woofers in separate positions. On the dancefloor, the sound from these separate drivers arrives at your ears at slightly different times, creating phase cancellations, comb filtering, and that fatiguing harshness.
                  </p>
                  <p className="text-sm sm:text-base text-[#fdf4ff]/85 leading-relaxed">
                    In the <strong>JW Audio SAWMOD</strong>, all 5 drivers feed into the exact same horn flare at mathematically optimized entry points. They merge into a single, cohesive spherical wavefront — like a giant, supercharged point source. The result is razor-sharp transient response, fatigue-free highs, and a punchy, spacious soundstage.
                  </p>
                </div>

                {/* Quick Graphic Specs */}
                <div className="p-6 rounded-2xl bg-[#19092b] border-2 border-[#2e1065] text-xs font-bold space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-[#fdf4ff]/60 uppercase tracking-wider">Horn Model</span>
                    <span className="text-[#fde047]">SAWMOD by JW Audio</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-[#fdf4ff]/60 uppercase tracking-wider">Drivers Per Top</span>
                    <span className="text-[#f43f5e]">5 Drivers in 1 Horn</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-[#fdf4ff]/60 uppercase tracking-wider">Subwoofers</span>
                    <span className="text-[#38bdf8]">4 × 18" Horner Audio</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#fdf4ff]/60 uppercase tracking-wider">Frequency Band</span>
                    <span className="text-[#fdf4ff]">30 Hz – 20,000 Hz</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
