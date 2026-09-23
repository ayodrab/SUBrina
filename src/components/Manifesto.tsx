import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Manifesto: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 bg-[#1f0b35] text-[#fdf4ff] border-t-2 border-[#2e1065]">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[1.8rem] bg-[#25123d] border-2 border-[#2e1065] shadow-[6px_6px_0_#f43f5e] overflow-hidden transition-all duration-300">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left hover:bg-[#2e1065]/50 transition-colors cursor-pointer group"
            aria-expanded={isOpen}
          >
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[#fde047] text-[#1e0538] border border-[#1e0538] shadow-[2px_2px_0_#1e0538] shrink-0">
                OUR ORIGIN STORY
              </span>
              <div>
                <h3
                  className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#fdf4ff] group-hover:text-[#fde047] transition-colors leading-tight"
                  style={{ fontFamily: 'var(--display)' }}
                >
                  Mission & Origin: Taking sound into our own hands
                </h3>
                <p className="text-xs sm:text-sm text-[#fdf4ff]/70 font-medium mt-1">
                  How Burcu & Ayo decided to build SUBrina with Horner Audio
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#fde047] shrink-0 self-start sm:self-center bg-[#19092b] px-4 py-2.5 rounded-full border border-white/10 group-hover:border-[#fde047] transition-colors">
              <span>{isOpen ? 'Collapse' : 'Story'}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-[#f43f5e]' : ''
                }`}
              />
            </div>
          </button>

          {isOpen && (
            <div className="px-6 pb-8 sm:px-10 sm:pb-10 pt-4 border-t border-[#2e1065] animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="max-w-3xl space-y-6 text-base sm:text-lg text-[#fdf4ff]/90 leading-relaxed font-normal">
                <p className="text-xl sm:text-2xl font-bold text-[#fde047] leading-snug">
                  We met on the dancefloor and have been active in the nightlife scene as dancers, performers, and DJs for a really long time.
                </p>

                <p>
                  Putting on events ourselves — with Burcu’s Agentur für Nightlife and Ayo’s involvement with Heart Chor — one thing kept coming up: subpar technical setups. Too often, DIY venues and underground parties suffer from harsh, fatigued sound systems that just aren’t up to scratch.
                </p>

                <p>
                  We decided to take matters into our own hands and build something truly exceptional for our community. A state-of-the-art soundsystem based on exciting innovative designs — specifically a <strong>Multiple Entry Horn</strong> that delivers tight, spacious, accurate, and very present sound.
                </p>

                <p>
                  We are super grateful to <strong>Horner Audio</strong>, who are acting as our building partner and being extremely generous with their time, acoustic expertise, and workshop machinery to bring SUBrina to life.
                </p>

                <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-3">
                  <span className="sticker bg-[#fde047] text-[#1e0538]">
                    BUILT WITH LOVE
                  </span>
                  <span className="sticker bg-[#f43f5e] text-white">
                    HORNER AUDIO PARTNER
                  </span>
                  <span className="sticker bg-[#38bdf8] text-[#1e0538]">
                    ZERO EAR FATIGUE
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
