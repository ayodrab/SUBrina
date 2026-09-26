import React, { useState } from 'react';
import burcuCardImg from '../assets/images/burcu_pokemon_card_1790065630032.jpg';
import ioCardImg from '../assets/images/io_pokemon_card_1790065644693.jpg';

export const TheCrew: React.FC = () => {
  const [activeCard, setActiveCard] = useState<'burcu' | 'ayo'>('burcu');

  return (
    <section id="crew" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 bg-[#19092b] text-[#fdf4ff] border-t-2 border-[#2e1065]">
      <div className="max-w-7xl mx-auto">
        {/* Story Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start mb-20">
          <div>
            <div className="section-kicker">06 / The Crew: Burcu & Ayo</div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.05em] leading-[0.9] mb-6"
              style={{ fontFamily: 'var(--display)' }}
            >
              From the dancefloor<br />
              <em className="text-[#ec4899] font-normal not-italic" style={{ fontFamily: 'var(--serif)' }}>
                to the workshop.
              </em>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#fdf4ff]/90 leading-relaxed font-normal">
              <p>
                SUBrina is built by the two of us — <strong>Burcu and Ayo</strong>. We met and connected in the nightlife scene as dancers, performers, and DJs over many years.
              </p>
              <p>
                Through putting on our own events with Burcu’s Agentur für Nightlife and Ayo’s involvement with Hardcore, we kept hitting the same wall: subpar sound systems. In DIY venues and underground clubs, the sound is all too often harsh, fatiguing, or just not up to scratch.
              </p>
              <p>
                We decided to take matters into our own hands and build something better for our friends and scene. With the generous guidance and building partnership of <strong>Horner Audio</strong>, we’re building a rig that sounds as beautiful and yassified as our community.
              </p>
            </div>
          </div>

          {/* Quote Block */}
          <div className="self-center">
            <blockquote className="p-8 sm:p-10 rounded-[1.8rem] bg-[#25123d] text-[#fdf4ff] border-2 border-[#2e1065] shadow-[10px_10px_0_#FFB400]">
              <p className="text-xl sm:text-2xl font-serif italic mb-4 leading-snug text-[#FFB400]">
                “We just want to take it into our own hands and make something better for the community. Sound that embraces you with physical bass and zero ear fatigue.”
              </p>
              <cite className="text-xs font-black uppercase tracking-widest text-[#fdf4ff]/70 not-italic block">
                — Burcu & Ayo (SUBrina Founders)
              </cite>
            </blockquote>
          </div>
        </div>

        {/* Pokémon Trading Cards Section */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-white/15">
            <div>
              <div className="flex items-center gap-2">
                <span className="pixel-badge pixel-badge-yellow">POKÉMON TRAINER EDITION</span>
                <span className="text-xs text-[#FFB400] font-black uppercase tracking-wider">Holographic Monster Cards</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#fdf4ff] mt-1" style={{ fontFamily: 'var(--display)' }}>
                Click a card to bring to front
              </h3>
            </div>

            {/* Quick Swap Tabs */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setActiveCard('burcu')}
                className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider border-2 transition-all ${
                  activeCard === 'burcu'
                    ? 'bg-[#ec4899] text-white border-[#FFB400] shadow-[3px_3px_0_#1e0538]'
                    : 'bg-[#25123d] text-white/70 border-white/20 hover:border-[#ec4899]'
                }`}
              >
                🎀 Card 01: Burcu
              </button>
              <button
                type="button"
                onClick={() => setActiveCard('ayo')}
                className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider border-2 transition-all ${
                  activeCard === 'ayo'
                    ? 'bg-[#FFB400] text-[#1e0538] border-[#1e0538] shadow-[3px_3px_0_#f43f5e]'
                    : 'bg-[#25123d] text-white/70 border-white/20 hover:border-[#FFB400]'
                }`}
              >
                ⚡ Card 02: Ayo
              </button>
            </div>
          </div>

          {/* Cards Display Container with Interactive Swap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
            {/* CARD 1: BURCU */}
            <div
              onClick={() => setActiveCard('burcu')}
              className={`p-4 sm:p-5 rounded-[2rem] border-4 border-[#FFB400] bg-gradient-to-b from-[#FFB400] via-[#ec4899] to-[#25123d] text-[#1e0538] transition-all duration-500 cursor-pointer ${
                activeCard === 'burcu'
                  ? 'scale-105 shadow-[14px_16px_0_#ec4899] ring-4 ring-[#FFB400] z-20'
                  : 'scale-95 opacity-80 hover:opacity-100 hover:scale-100 z-10 shadow-[6px_6px_0_#1e0538]'
              }`}
            >
              {/* Inner Yellow Pokémon Border Box */}
              <div className="bg-[#fef08a] rounded-[1.4rem] border-2 border-[#1e0538] p-4 flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b-2 border-[#1e0538]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest bg-[#ec4899] text-white px-2 py-0.5 rounded">
                      STAGE 1
                    </span>
                    <h4 className="text-2xl font-black uppercase tracking-tight" style={{ fontFamily: 'var(--display)' }}>
                      BURCU
                    </h4>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-black">HP</span>
                    <span className="text-xl font-black text-[#e11d48]">260</span>
                    <span className="text-lg">💖</span>
                  </div>
                </div>

                {/* Card Portrait Frame */}
                <div className="my-3 aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#1e0538] bg-black shadow-inner">
                  <img
                    src={burcuCardImg}
                    alt="Burcu Pokémon Card"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Sub-info bar */}
                <div className="bg-[#FFB400] text-[10px] font-black uppercase text-center py-1 rounded-md border border-[#1e0538] mb-3">
                  Species: Nightlife Curatrix · Agentur für Nightlife · Dancer & Performer
                </div>

                {/* Attacks */}
                <div className="space-y-3 pt-1 border-t-2 border-[#1e0538] text-xs">
                  {/* Attack 1 */}
                  <div className="pb-2 border-b border-black/15">
                    <div className="flex items-center justify-between font-black uppercase">
                      <div className="flex items-center gap-1.5">
                        <span>🎀⚡</span>
                        <span className="text-sm">Nightlife Alchemy</span>
                      </div>
                      <span className="text-sm">90</span>
                    </div>
                    <p className="text-[11px] font-semibold text-[#1e0538]/85 mt-0.5 leading-tight">
                      Curates safe, inclusive spaces and elevates DIY culture with immaculate aesthetics.
                    </p>
                  </div>

                  {/* Attack 2 */}
                  <div>
                    <div className="flex items-center justify-between font-black uppercase">
                      <div className="flex items-center gap-1.5">
                        <span>💖💖💖</span>
                        <span className="text-sm">Bass Hug Wave</span>
                      </div>
                      <span className="text-sm">160</span>
                    </div>
                    <p className="text-[11px] font-semibold text-[#1e0538]/85 mt-0.5 leading-tight">
                      Banishes ear fatigue from the scene. All dancers gain +100 joy and physical chest warmth.
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-4 pt-2 border-t-2 border-[#1e0538] flex items-center justify-between text-[10px] font-bold">
                  <span>Weakness: Subpar Sound</span>
                  <span>Resistance: Bad Vibes -30</span>
                  <span className="font-mono text-[#f43f5e]">01/02 ★ HOLO</span>
                </div>
              </div>
            </div>

            {/* CARD 2: AYO */}
            <div
              onClick={() => setActiveCard('ayo')}
              className={`p-4 sm:p-5 rounded-[2rem] border-4 border-[#38bdf8] bg-gradient-to-b from-[#38bdf8] via-[#a855f7] to-[#19092b] text-[#1e0538] transition-all duration-500 cursor-pointer ${
                activeCard === 'ayo'
                  ? 'scale-105 shadow-[14px_16px_0_#FFB400] ring-4 ring-[#38bdf8] z-20'
                  : 'scale-95 opacity-80 hover:opacity-100 hover:scale-100 z-10 shadow-[6px_6px_0_#1e0538]'
              }`}
            >
              {/* Inner Cyan/Yellow Pokémon Border Box */}
              <div className="bg-[#e0f2fe] rounded-[1.4rem] border-2 border-[#1e0538] p-4 flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b-2 border-[#1e0538]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest bg-[#0284c7] text-white px-2 py-0.5 rounded">
                      STAGE 1
                    </span>
                    <h4 className="text-2xl font-black uppercase tracking-tight" style={{ fontFamily: 'var(--display)' }}>
                      AYO
                    </h4>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-black">HP</span>
                    <span className="text-xl font-black text-[#0284c7]">270</span>
                    <span className="text-lg">⚡</span>
                  </div>
                </div>

                {/* Card Portrait Frame */}
                <div className="my-3 aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#1e0538] bg-black shadow-inner">
                  <img
                    src={ioCardImg}
                    alt="Ayo Pokémon Card"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Sub-info bar */}
                <div className="bg-[#bae6fd] text-[10px] font-black uppercase text-center py-1 rounded-md border border-[#1e0538] mb-3">
                  Species: Acoustic Tinkerer · DJ & Hardcore Collective · Rig Builder
                </div>

                {/* Attacks */}
                <div className="space-y-3 pt-1 border-t-2 border-[#1e0538] text-xs">
                  {/* Attack 1 */}
                  <div className="pb-2 border-b border-black/15">
                    <div className="flex items-center justify-between font-black uppercase">
                      <div className="flex items-center gap-1.5">
                        <span>🎺⚡</span>
                        <span className="text-sm">Synergy Horn Flare</span>
                      </div>
                      <span className="text-sm">90</span>
                    </div>
                    <p className="text-[11px] font-semibold text-[#1e0538]/85 mt-0.5 leading-tight">
                      Combines 5 drivers into 1 horn flare with Horner Audio. Eliminates comb-filtering completely.
                    </p>
                  </div>

                  {/* Attack 2 */}
                  <div>
                    <div className="flex items-center justify-between font-black uppercase">
                      <div className="flex items-center gap-1.5">
                        <span>🔊🔊🔊</span>
                        <span className="text-sm">Horner 30Hz Slam</span>
                      </div>
                      <span className="text-sm">170</span>
                    </div>
                    <p className="text-[11px] font-semibold text-[#1e0538]/85 mt-0.5 leading-tight">
                      Fires four 18" tuned reflex enclosures into the dancefloor. Generates unstoppable rhythm.
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-4 pt-2 border-t-2 border-[#1e0538] flex items-center justify-between text-[10px] font-bold">
                  <span>Weakness: Blown Drivers</span>
                  <span>Resistance: DSP Limiter +50</span>
                  <span className="font-mono text-[#0284c7]">02/02 ★ HOLO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
