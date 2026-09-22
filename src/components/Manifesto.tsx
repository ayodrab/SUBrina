import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 bg-[#25123d] text-[#fdf4ff] border-b-2 border-[#2e1065]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Section Kicker & Header */}
          <div>
            <div className="section-kicker">01 / The Mission & Origin</div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.05em] leading-[0.9]"
              style={{ fontFamily: 'var(--display)' }}
            >
              Taking sound into<br />
              <em className="text-[#ec4899] font-normal not-italic" style={{ fontFamily: 'var(--serif)' }}>
                our own hands.
              </em>
            </h2>
          </div>

          {/* User's Exact Story */}
          <div className="space-y-6 text-base sm:text-lg text-[#fdf4ff]/90 leading-relaxed font-normal">
            <p className="text-xl sm:text-2xl font-bold text-[#fde047] leading-snug">
              We met on the dancefloor and have been active in the nightlife scene as dancers, performers, and DJs for a really long time.
            </p>

            <p>
              Putting on events ourselves — with Burcu’s Agentur für Nightlife and Ayo’s involvement with Hardcore — one thing kept coming up: subpar technical setups. Too often, DIY venues and underground parties suffer from harsh, fatigued sound systems that just aren’t up to scratch.
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
      </div>
    </section>
  );
};
