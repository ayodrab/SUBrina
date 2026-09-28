import React, { useState } from 'react';
import { ChevronDown, Volume2, Sparkles, Check, X } from 'lucide-react';
import litUpSawmodImg from '../assets/images/lit_up_sawmod.jpg';
import subLightImg from '../assets/images/sub_light.jpeg';
import subrinaMockupWideImg from '../assets/images/subrina_mockup_wide.jpeg';
import { BuildGallery } from './BuildGallery';

export const TheSoundSystem: React.FC = () => {
  const [isSoundNerdsOpen, setIsSoundNerdsOpen] = useState(false);
  const [activeModalImage, setActiveModalImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  return (
    <section id="the-build" className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-[#19092b] text-[#fdf4ff] border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Main Section Heading */}
        <div className="max-w-3xl mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#FFB400] text-[#1e0538] border border-[#1e0538] shadow-[2px_2px_0_#1e0538] mb-3">
            <Volume2 className="w-3.5 h-3.5" />
            <span>The Setup</span>
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[-0.04em] leading-tight text-[#fdf4ff]"
            style={{ fontFamily: 'var(--display)' }}
          >
            What we’re building
          </h2>

          <div className="mt-4 space-y-3 text-base sm:text-lg text-white/90 leading-relaxed font-normal">
            <p>
              Two SAWMOD horn speakers and four 18-inch reflex subs, plus the amps and processing to run everything. The aim is clear sound, bass you can feel, and a setup we can still transport in a van.
            </p>
            <p className="text-white/80 text-sm sm:text-base">
              Horner Audio are helping with the engineering and giving us time and workshop space to make it happen.
            </p>
          </div>
        </div>

        {/* Rig Image (Clearly Labeled as a 3D Concept Mockup) */}
        <div className="relative w-full max-w-4xl mx-auto my-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#120520] border-2 border-white/15 p-4 sm:p-6 text-center">
            <img
              src={subrinaMockupWideImg}
              alt="SUBrina soundsystem 3D concept mockup render — two SAWMOD tops and four 18-inch reflex subs"
              className="w-full h-auto object-contain max-h-[460px] mx-auto filter drop-shadow-[0_15px_40px_rgba(0,0,0,0.85)] cursor-pointer hover:scale-[1.01] transition-transform duration-300"
              onClick={() =>
                setActiveModalImage({
                  src: subrinaMockupWideImg,
                  title: 'SUBrina Soundsystem (3D Concept Mockup)',
                  description:
                    'Visual 3D design concept showing the planned chrome-epoxy finish on two SAWMOD tops stacked above four Horner 18-inch reflex subwoofers.'
                })
              }
            />

            {/* Clear Mockup Label */}
            <div className="mt-3 flex items-center justify-between text-xs text-white/60 px-2 flex-wrap gap-2">
              <span className="font-mono uppercase tracking-wider text-[11px] text-[#FFB400] font-bold">
                ✦ 3D Design Concept Mockup
              </span>
              <span>
                Tops designed by <strong>JW Audio</strong> · Subs engineered by <strong>Horner Audio</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Staged Build Plan Card */}
        <div className="p-6 sm:p-8 rounded-[1.8rem] bg-[#25123d] border-2 border-[#2e1065] shadow-[6px_6px_0_#38bdf8] my-10">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-wider text-[#38bdf8] block mb-1">
              Phased Construction Plan
            </span>
            <h3
              className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#fdf4ff] mb-3 leading-snug"
              style={{ fontFamily: 'var(--display)' }}
            >
              We don’t have to build everything at once
            </h3>

            <div className="space-y-3 text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              <p>
                We’ll start with the SAWMOD tops, then the amplification. After that come our own subs.
              </p>
              <p>
                If we don’t reach the full target straight away, we can rent compatible reflex subs for events while we keep raising money. So we can work towards getting SUBrina playing without waiting until we can afford every part of the finished rig.
              </p>
              <p className="text-xs sm:text-sm text-white/60 italic pt-1">
                Spring is our target launch, not an absolute guarantee—the timeline will follow fundraising progress and workshop building hours.
              </p>
            </div>

            {/* 3 Step Visual Sequence */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6 pt-6 border-t border-white/10">
              <div className="p-4 rounded-xl bg-[#19092b] border border-white/10">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FFB400] block mb-1">
                  Step 1
                </span>
                <span className="text-sm font-black uppercase block text-white">
                  SAWMOD Horn Tops
                </span>
                <span className="text-xs text-white/70 block mt-1">
                  Two Baltic birch cabinets with precision 5-driver acoustic flares.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#19092b] border border-white/10">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#ec4899] block mb-1">
                  Step 2
                </span>
                <span className="text-sm font-black uppercase block text-white">
                  Amps & DSP Processing
                </span>
                <span className="text-xs text-white/70 block mt-1">
                  Power rack, DSP crossovers, and limiters. Enables renting subs to play events.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#19092b] border border-white/10">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#38bdf8] block mb-1">
                  Step 3
                </span>
                <span className="text-sm font-black uppercase block text-white">
                  4 × 18" Horner Subs
                </span>
                <span className="text-xs text-white/70 block mt-1">
                  Our own dedicated subwoofers for complete autonomy and massive low end.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Section: For the sound nerds: the full setup */}
        <div className="rounded-[1.8rem] bg-[#25123d] border-2 border-[#2e1065] shadow-[6px_6px_0_#FFB400] overflow-hidden transition-all duration-300">
          <button
            onClick={() => setIsSoundNerdsOpen(!isSoundNerdsOpen)}
            className="w-full p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left hover:bg-[#2e1065]/50 transition-colors cursor-pointer group"
            aria-expanded={isSoundNerdsOpen}
          >
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#FFB400] block mb-0.5">
                Technical Specifications & Acoustical Details
              </span>
              <h3
                className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#fdf4ff] group-hover:text-[#FFB400] transition-colors leading-tight"
                style={{ fontFamily: 'var(--display)' }}
              >
                For the sound nerds: the full setup
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FFB400] shrink-0 self-start sm:self-center bg-[#19092b] px-4 py-2.5 rounded-full border border-white/10 group-hover:border-[#FFB400] transition-colors">
              <span>{isSoundNerdsOpen ? 'Hide Technical Details' : 'Explore Technical Specs'}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isSoundNerdsOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>

          {isSoundNerdsOpen && (
            <div className="px-5 pb-8 sm:px-8 sm:pb-10 pt-4 border-t border-white/10 space-y-8 animate-in fade-in duration-200">
              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* SAWMOD Horn Tops */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#19092b] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black uppercase tracking-wider text-[#f43f5e]">
                        Point-Source Tops
                      </span>
                      <span className="text-xs font-mono text-white/50">Designed by JW Audio</span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-black uppercase text-white mb-2" style={{ fontFamily: 'var(--display)' }}>
                      2 × SAWMOD Multiple Entry Horns
                    </h4>

                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      Instead of having separate speaker boxes for highs, mids, and lows (which create phase smearing when their sound waves collide), the SAWMOD mounts five precision drivers into the walls of one single horn flare. Highs, mids, and low-mids exit together as a single coherent wavefront for razor-sharp clarity without ear fatigue.
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-[#FFB400] space-y-1">
                      <div>• Highs: 1× B&C 1" compression driver</div>
                      <div>• Mids: 4× B&C 4" neodymium midrange drivers</div>
                      <div>• Low-Mids: 4× B&C 10" neodymium drivers</div>
                      <div>• 100° Horizontal × 70° Vertical constant directivity</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10">
                    <img
                      src={litUpSawmodImg}
                      alt="Illuminated prototype of the SAWMOD horn flare showing driver entry ports"
                      className="w-full h-36 object-cover rounded-xl border border-white/15 cursor-pointer hover:opacity-90"
                      onClick={() =>
                        setActiveModalImage({
                          src: litUpSawmodImg,
                          title: 'SAWMOD Multiple Entry Horn Throat',
                          description:
                            'Looking inside the horn flare prototype: acoustic ports allow midrange and low-mid drivers to enter the chamber seamlessly.'
                        })
                      }
                    />
                    <span className="text-[10px] text-white/50 block mt-1 text-center font-mono">
                      Workshop prototype throat & entry ports
                    </span>
                  </div>
                </div>

                {/* Subwoofers */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#19092b] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black uppercase tracking-wider text-[#FFB400]">
                        Sub-Bass Foundation
                      </span>
                      <span className="text-xs font-mono text-white/50">Designed by Horner Audio</span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-black uppercase text-white mb-2" style={{ fontFamily: 'var(--display)' }}>
                      4 × 18" Bass Reflex Subwoofers
                    </h4>

                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      Custom-engineered tuned reflex enclosures built from 18mm Baltic birch with internal matrix bracing. Each loaded with an 18-inch B&C neodymium driver, delivering deep physical chest pressure and fast transient bass response down to 30 Hz without distortion.
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-[#FFB400] space-y-1">
                      <div>• Drivers: 4× B&C 18DS115-8 Neodymium (18")</div>
                      <div>• Enclosure: 18mm CNC Baltic birch with internal bracing</div>
                      <div>• Tuning: Deep musical bass down to 30 Hz</div>
                      <div>• M20 threaded pole mounts for stable top mounting</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10">
                    <img
                      src={subLightImg}
                      alt="Horner Audio 18-inch reflex subwoofer enclosure"
                      className="w-full h-36 object-cover rounded-xl border border-white/15 cursor-pointer hover:opacity-90"
                      onClick={() =>
                        setActiveModalImage({
                          src: subLightImg,
                          title: 'Horner Audio 18" Reflex Subwoofer',
                          description:
                            'Enclosure built with 18mm Baltic birch plywood and internal bracing for tight, resonance-free bass reproduction.'
                        })
                      }
                    />
                    <span className="text-[10px] text-white/50 block mt-1 text-center font-mono">
                      Horner Audio subwoofer enclosure build
                    </span>
                  </div>
                </div>

                {/* Amplification, DSP & Cabinetry */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#19092b] border border-white/10 md:col-span-2">
                  <h4 className="text-base sm:text-lg font-black uppercase text-white mb-2" style={{ fontFamily: 'var(--display)' }}>
                    Power, Processing & Portability
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-white/80">
                    <div>
                      <strong className="text-[#38bdf8] block mb-1">Amplification & DSP</strong>
                      Class-D amplification paired with a standalone 4-in / 8-out digital signal processor. Features FIR phase correction and dynamic safety limiters to protect the drivers.
                    </div>
                    <div>
                      <strong className="text-[#ec4899] block mb-1">Van-Friendly Transport</strong>
                      Each cabinet is designed to be carried by two people. The entire rig packs neatly into a standard van or larger car without requiring a commercial truck.
                    </div>
                    <div>
                      <strong className="text-[#FFB400] block mb-1">Coverage Potential</strong>
                      Approximate capacity: sized to fill spaces of up to ~400 people indoors or ~150–200 outdoors with massive low end, depending on the venue layout and acoustic environment.
                    </div>
                  </div>
                </div>
              </div>

              {/* Build Gallery */}
              <BuildGallery />
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal for Preview Images */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#19092b] border-2 border-white/20 rounded-2xl p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <h4 className="text-base sm:text-lg font-black uppercase text-white" style={{ fontFamily: 'var(--display)' }}>
                {activeModalImage.title}
              </h4>
              <button
                onClick={() => setActiveModalImage(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#f43f5e] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <img
              src={activeModalImage.src}
              alt={activeModalImage.title}
              className="w-full h-auto max-h-[60vh] object-contain rounded-xl mx-auto mb-3"
            />

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {activeModalImage.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
