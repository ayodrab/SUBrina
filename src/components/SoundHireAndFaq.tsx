import React, { useState } from 'react';
import { Send, ChevronDown, Sparkles, MessageCircle, HelpCircle } from 'lucide-react';

export const SoundHireAndFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Can I hire SUBrina for my party, warehouse night, or dancefloor?',
      a: 'Yes! SUBrina is built to bring warm, non-fatiguing sound to our community. We prioritize queer, underground, DIY, and community gatherings that care about audio fidelity and respectful dancefloor culture.'
    },
    {
      q: 'How can the sound system be transported and set up?',
      a: 'The entire system was designed around manageable dimensions and weight. The 2 SAWMOD horn tops and 4 Horner 18" subwoofers fit into a standard long-wheelbase van (like a Sprinter or Crafter). Setup and acoustic calibration take about 90 minutes.'
    },
    {
      q: 'What kind of music sounds best on SUBrina?',
      a: 'Everything from deep dubstep, jungle, and ghetto house to ambient listening and live acoustic sets! Because of the Multiple Entry Horn point-source design, transient response and vocal clarity are crystal clear across all genres.'
    },
    {
      q: 'Who is Horner Audio and why are they helping?',
      a: 'Horner Audio are brilliant sound engineers and craftsmen in Berlin who design high-performance acoustic enclosures. They are acting as our building partners, generously donating their time, CNC machinery, and acoustic mentorship to help Burcu & Ayo bring SUBrina to life.'
    },
    {
      q: 'Can I donate anonymously or with a custom perk?',
      a: 'Absolutely. In the PayPal pool you can leave any note or donate anonymously. We appreciate every bit of support from our friends and community.'
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 bg-[#19092b] text-[#fdf4ff] border-t-2 border-[#2e1065]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
          {/* FAQ Column */}
          <div>
            <div className="section-kicker">06 / Frequently Asked Questions</div>
            <h2
              className="text-4xl sm:text-5xl font-black uppercase tracking-[-0.05em] leading-[0.9] mb-8"
              style={{ fontFamily: 'var(--display)' }}
            >
              Sound, Hire &<br />
              <em className="text-[#ec4899] font-normal not-italic" style={{ fontFamily: 'var(--serif)' }}>
                Community Rig FAQ.
              </em>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-[1.4rem] border-2 border-[#2e1065] bg-[#25123d] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-black uppercase text-sm sm:text-base text-[#fdf4ff] hover:text-[#fde047] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform text-[#ec4899] ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#fdf4ff]/80 font-normal leading-relaxed border-t border-white/10">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Telegram Direct Connection Card */}
          <div className="p-8 sm:p-9 rounded-[2rem] bg-[#25123d] border-4 border-[#1e0538] shadow-[10px_12px_0_#fde047] sticky top-28">
            <div className="w-12 h-12 rounded-2xl bg-[#0088cc] text-white grid place-items-center mb-6 shadow-[3px_3px_0_#1e0538]">
              <MessageCircle className="w-6 h-6" />
            </div>

            <span className="text-xs font-black uppercase tracking-wider text-[#38bdf8] block mb-1">
              Direct Telegram Chat
            </span>
            <h3
              className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3 text-[#fdf4ff]"
              style={{ fontFamily: 'var(--display)' }}
            >
              Message Burcu & Ayo
            </h3>

            <p className="text-xs sm:text-sm text-[#fdf4ff]/80 leading-relaxed font-normal mb-8">
              Got a gig idea, want to collaborate, or have questions about the build? Send a message directly to Burcu and Ayo on Telegram!
            </p>

            <div className="space-y-3">
              <a
                href="https://t.me/subrinasound"
                target="_blank"
                rel="noreferrer"
                className="w-full button-pop button-pop-primary py-3.5 px-6 text-xs sm:text-sm font-black text-center flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Message on Telegram ↗</span>
              </a>

              <a
                href="mailto:contact@subrina.sound"
                className="w-full block py-3 px-6 rounded-full border border-white/20 hover:border-[#fde047] text-center text-xs font-bold text-white/80 hover:text-white transition-colors"
              >
                Or Email: contact@subrina.sound
              </a>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 text-center">
              <span className="text-[11px] font-mono text-[#fde047]">
                ⚡ Quick reply guaranteed from Burcu & Ayo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
