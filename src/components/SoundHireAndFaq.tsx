import React, { useState } from 'react';
import { Send, ChevronDown, MessageCircle } from 'lucide-react';

export const SoundHireAndFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Can I hire SUBrina for my party, warehouse night, or dancefloor?',
      a: 'Yes! SUBrina is built to bring warm, non-fatiguing sound to our community. We prioritize queer, underground, DIY, and community gatherings that care about audio fidelity and respectful dancefloor culture.'
    },
    {
      q: 'How can the sound system be transported and set up?',
      a: 'It actually fits in a smaller van or car! It doesn\'t have to be a long wheelbase van. It can fit in something as small as a Renault Kangoo, a family SUV, or a Miles L (or parts of it in a Miles M, depending on how many subs). You definitely don\'t need a crazy big truck.'
    },
    {
      q: 'What kind of music sounds best on SUBrina?',
      a: 'Honestly, all music sounds fantastic on SUBrina. The system has really deep and clear bass, crystal clear point-source transient response, and pristine vocal clarity without even needing excessive EQ. But yeah, deep bassy music also sounds fucking amazing because we have four big fat subwoofers for that dirty stinking bass. (Fun acoustic fact: human body resonance kicks in around 30–40 Hz, and at ~18 Hz your actual eyeballs can vibrate — SUBrina’s 18" reflex subs reach right down to 30 Hz so you feel the music in your skeleton).'
    },
    {
      q: 'Who is Horner Audio and why are they helping?',
      a: 'Horner Audio is Carlo, who is a really sweetie pie who has helped build other community sound systems in Berlin (specifically helping Angel Audio, a FLINTA-based music collective). We met him at a workshop they were hosting and were asking questions about how to bring this kind of sound system to life. He shared a lot of useful information, including: "I can help you build it."'
    },
    {
      q: 'Can I donate anonymously or with a custom perk?',
      a: 'Absolutely. In the PayPal pool you can leave any note or donate anonymously. We appreciate every single bit of support from our friends and community.'
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 bg-[#19092b] text-[#fdf4ff] border-t-2 border-[#2e1065]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
          {/* FAQ Column */}
          <div>
            <h2
              className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-8"
              style={{ fontFamily: 'var(--display)' }}
            >
              FAQ
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
              Have a question? Message us
            </span>
            <h3
              className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3 text-[#fdf4ff]"
              style={{ fontFamily: 'var(--display)' }}
            >
              Message Ayo
            </h3>

            <p className="text-xs sm:text-sm text-[#fdf4ff]/80 leading-relaxed font-normal mb-8">
              Got a question about the build, want to invite SUBrina to play, or just want to say hi? Send Ayo a message directly on Telegram!
            </p>

            <div className="space-y-3">
              <a
                href="https://t.me/ayodrab"
                target="_blank"
                rel="noreferrer"
                className="w-full button-pop button-pop-primary py-3.5 px-6 text-xs sm:text-sm font-black text-center flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Message @ayodrab on Telegram ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
