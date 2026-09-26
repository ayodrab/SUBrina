import React, { useState } from 'react';
import { ChevronDown, Volume2, Sparkles, Sliders, Zap, Check, Maximize2, X } from 'lucide-react';
import litUpSawmodImg from '../assets/images/lit_up_sawmod.jpg';
import subLightImg from '../assets/images/sub_light.jpeg';
import subrinaMockupWideImg from '../assets/images/subrina_mockup_wide.jpeg';
import { BuildGallery } from './BuildGallery';
import { DancefloorPowerZones } from './DancefloorPowerZones';

export const TheSoundSystem: React.FC = () => {
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);
  const [activeModalImage, setActiveModalImage] = useState<{
    src: string;
    title: string;
    tag: string;
    description: string;
    specs: string;
  } | null>(null);

  const cards = [
    {
      id: 'sawmod-tops',
      emoji: '🎺',
      tag: 'Heart of the Rig',
      title: '2 × SAWMOD Tops',
      designer: 'Designed by JW Audio',
      summary: '5 speaker drivers inside each cabinet, all firing out of the exact same horn flare.',
      image: litUpSawmodImg,
      imageAlt: 'Illuminated JW Audio SAWMOD multiple entry horn throat showing driver convergence',
      imageBadge: 'Illuminated Horn Flare',
      modalTag: 'JW Audio Prototype',
      modalTitle: '2 × SAWMOD Tops — Multiple Entry Horn Illuminated',
      modalDescription: 'Look inside the throat: five drivers enter the acoustic chamber through precision-machined ports to fire out as one single point-source wavefront.',
      modalSpecs: '5 Drivers • 1 Horn Flare',
      bg: 'bg-[#fdf4ff] text-[#1e0538]',
      tilt: 'tilt-left',
      accentColor: 'border-[#1e0538] shadow-[5px_5px_0_#f43f5e]',
      badgeColor: 'bg-[#f43f5e] text-white',
    },
    {
      id: 'reflex-subs',
      emoji: '🔊',
      tag: 'Physical Low End',
      title: '4 × 18" Reflex Subs',
      designer: 'Designed by Horner Audio',
      summary: 'Four (yes FOUR!) tuned 18-inch reflex subwoofers for huge, effortless physical bass without muddy distortion.',
      image: subLightImg,
      imageAlt: 'Horner Audio tuned 18-inch reflex subwoofers illuminated in the workshop',
      imageBadge: '18" Horner Audio Sub',
      modalTag: 'Horner Audio Subwoofer',
      modalTitle: '4 × 18" Reflex Subwoofers in Action',
      modalDescription: 'Precision tuned 18-inch bass reflex design providing deep physical authority and fast transient low-end response down to 30 Hz.',
      modalSpecs: '4 × 18" High-Excursion Reflex',
      bg: 'bg-[#FFB400] text-[#1e0538]',
      tilt: 'tilt-right',
      accentColor: 'border-[#1e0538] shadow-[5px_5px_0_#1e0538]',
      badgeColor: 'bg-[#1e0538] text-[#FFB400]',
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
      title: '200–250 Floor · 500–800 Area',
      designer: 'Dancefloor Power & Acoustic Zones',
      summary: '100–105 dBA core dancefloor impact with smooth 40m peripheral coverage scaling out to 500–800 people.',
      bg: 'bg-[#ec4899] text-white',
      tilt: 'tilt-right',
      accentColor: 'border-[#1e0538] shadow-[5px_5px_0_#FFB400]',
      badgeColor: 'bg-[#FFB400] text-[#1e0538]',
      actionLink: '#dancefloor-power',
      actionText: 'View Acoustic Zones ↓',
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
        {/* Section Heading & Rig Showcase */}
        <div className="mb-14 sm:mb-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.05em] leading-[0.9] mb-8"
            style={{ fontFamily: 'var(--display)' }}
          >
            SUBrina,<br />
            <em className="text-[#f43f5e] font-normal not-italic" style={{ fontFamily: 'var(--serif)' }}>
              candy to our ears.
            </em>
          </h2>

          {/* Smooth, minimal presentation of what the system will look like — no card, minimal graphics */}
          <div className="relative w-full max-w-5xl mx-auto my-8 sm:my-10">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-black/30">
              <img
                src={subrinaMockupWideImg}
                alt="SUBrina Sound System Complete Rig — 2 SAWMOD Tops & 4 Horner 18-inch Subwoofers"
                className="w-full h-auto object-contain max-h-[560px] mx-auto filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:scale-[1.01] transition-transform duration-500 cursor-pointer"
                onClick={() =>
                  setActiveModalImage({
                    src: subrinaMockupWideImg,
                    title: 'SUBrina Complete Rig Concept',
                    tag: 'The Full Sound System',
                    description:
                      'What SUBrina looks like in full flight: 2 × JW Audio SAWMOD multiple entry horn tops elevated above 4 × Horner Audio 18-inch reflex subwoofers.',
                    specs: 'Complete 4-Way Rig',
                  })
                }
              />
            </div>
            <p className="text-center text-xs sm:text-sm text-[#fdf4ff]/70 mt-3 font-medium">
              The full SUBrina rig · 2 × SAWMOD Multiple Entry Horn tops & 4 × Horner Audio 18" reflex subs
            </p>
          </div>
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

                {/* Direct photo in card */}
                {c.image && (
                  <div
                    className="my-3.5 relative rounded-xl overflow-hidden border-2 border-[#1e0538] shadow-[3px_3px_0_#1e0538] bg-black group cursor-pointer"
                    onClick={() =>
                      setActiveModalImage({
                        src: c.image!,
                        title: c.modalTitle || c.title,
                        tag: c.modalTag || c.tag,
                        description: c.modalDescription || c.summary,
                        specs: c.modalSpecs || '',
                      })
                    }
                  >
                    <img
                      src={c.image}
                      alt={c.imageAlt || c.title}
                      className="w-full h-44 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent flex items-end p-2.5">
                      <div className="flex items-center justify-between w-full text-[11px] font-bold text-white">
                        <span className="text-[#FFB400] flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#f43f5e] animate-pulse"></span>
                          {c.imageBadge || 'View Photo'}
                        </span>
                        <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white/90 flex items-center gap-1 group-hover:bg-[#f43f5e] transition-colors">
                          <Maximize2 className="w-3 h-3" /> Zoom
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-xs sm:text-sm font-medium leading-relaxed opacity-90">
                  {c.summary}
                </p>

                {c.actionLink && (
                  <a
                    href={c.actionLink}
                    className="inline-flex items-center gap-1.5 mt-3.5 text-xs font-black uppercase tracking-wider bg-[#1e0538] text-white hover:bg-[#FFB400] hover:text-[#1e0538] px-3.5 py-1.5 rounded-xl border border-current shadow-[2px_2px_0_#1e0538] transition-all w-fit cursor-pointer"
                  >
                    <span>{c.actionText || 'Learn More'}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Dancefloor Power & Acoustic Zones */}
        <DancefloorPowerZones />

        {/* Unfurlable Deep Dive Box: How the Multiple Entry Horn Works */}
        <div className="mt-14 rounded-[1.6rem] bg-[#25123d] border-2 border-[#2e1065] shadow-[6px_6px_0_#f43f5e] overflow-hidden transition-all duration-300">
          <button
            onClick={() => setIsDeepDiveOpen(!isDeepDiveOpen)}
            className="w-full p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left hover:bg-[#2e1065]/50 transition-colors cursor-pointer group"
            aria-expanded={isDeepDiveOpen}
          >
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[#FFB400] text-[#1e0538] border border-[#1e0538] shadow-[2px_2px_0_#1e0538] shrink-0">
                WHY IT SOUNDS DIFFERENT
              </span>
              <h3
                className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#fdf4ff] group-hover:text-[#FFB400] transition-colors leading-tight"
                style={{ fontFamily: 'var(--display)' }}
              >
                Why a Multiple Entry Horn? (The Acoustic Magic)
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FFB400] shrink-0 self-start sm:self-center bg-[#19092b] px-4 py-2 rounded-full border border-white/10 group-hover:border-[#FFB400] transition-colors">
              <span>{isDeepDiveOpen ? 'Collapse' : 'Deep Dive'}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isDeepDiveOpen ? 'rotate-180 text-[#f43f5e]' : ''
                }`}
              />
            </div>
          </button>

          {isDeepDiveOpen && (
            <div className="px-6 pb-8 sm:px-10 sm:pb-10 pt-4 border-t border-[#2e1065] animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
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
                    <span className="text-[#fdf4ff]/60 uppercase tracking-wider">Horn Architecture</span>
                    <span className="text-[#FFB400]">SAWMOD Multiple Entry Horn</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-[#fdf4ff]/60 uppercase tracking-wider">Designer</span>
                    <span className="text-[#FFB400]">JW Audio</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-[#fdf4ff]/60 uppercase tracking-wider">Drivers Per Top</span>
                    <span className="text-[#f43f5e]">5 Drivers in 1 Horn Throat</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-[#fdf4ff]/60 uppercase tracking-wider">Subwoofers</span>
                    <span className="text-[#38bdf8]">4 × 18" Horner Audio Reflex</span>
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

        {/* SAWMOD and Horner Audio Build Gallery directly underneath why it sounds different */}
        <BuildGallery />

        {/* Modal preview when clicking any photo card */}
        {activeModalImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setActiveModalImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#19092b] border-2 border-[#f43f5e] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(244,63,94,0.4)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 sm:p-5 border-b border-[#2e1065] flex items-center justify-between bg-[#19092b]">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#FFB400] text-[#1e0538]">
                    {activeModalImage.tag}
                  </span>
                  <h4 className="text-base sm:text-lg font-black uppercase text-white truncate max-w-xs sm:max-w-md">
                    {activeModalImage.title}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveModalImage(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f43f5e] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative bg-black flex items-center justify-center max-h-[75vh]">
                <img
                  src={activeModalImage.src}
                  alt={activeModalImage.title}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>

              <div className="p-4 sm:p-5 bg-[#25123d] border-t border-[#2e1065] text-xs sm:text-sm text-[#fdf4ff]/85 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-medium">
                <span>{activeModalImage.description}</span>
                {activeModalImage.specs && (
                  <span className="text-[#FFB400] font-bold shrink-0">
                    {activeModalImage.specs}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
