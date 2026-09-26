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
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[#FFB400] text-[#1e0538] border border-[#1e0538] shadow-[2px_2px_0_#1e0538] shrink-0">
                OUR ORIGIN STORY
              </span>
              <div>
                <h3
                  className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#fdf4ff] group-hover:text-[#FFB400] transition-colors leading-tight"
                  style={{ fontFamily: 'var(--display)' }}
                >
                  Our Origin Story
                </h3>
                <p className="text-xs sm:text-sm text-[#fdf4ff]/70 font-medium mt-1">
                  How Burcu & Ayo decided to build SUBrina
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FFB400] shrink-0 self-start sm:self-center bg-[#19092b] px-4 py-2.5 rounded-full border border-white/10 group-hover:border-[#FFB400] transition-colors">
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
                <p className="text-xl sm:text-2xl font-bold text-[#FFB400] leading-snug">
                  We’ve been putting on events with our friends for a long time, and honestly: often the sound systems are just shit.
                </p>

                <p>
                  We play at different gatherings and gatherings like Kiezburn — which is <em>not</em> a festival technically, and it's very important for the burners that we say that 😉 — and we got tired of having shitty sound systems that are improvised. People have a lot of good intentions, but not such good technical equipment.
                </p>

                <p>
                  So we thought: we need something much better in our scene. What is the absolute best that we can do that can be transported, taken to multiple places, and looks beautiful and fun?
                </p>

                <p>
                  It can be used indoors and outdoors, and each box weighs around 40 kilos maximum so that they can be carried even into the forest. And it’s not just a sound system — it’s a character with its own personality.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
