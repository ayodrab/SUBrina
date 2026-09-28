import React, { useState } from 'react';
import { Send, ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { TELEGRAM_AYO_URL } from '../data';

export const SoundHireAndFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who will own SUBrina?',
      a: 'SUBrina will be owned and looked after by us, Ayo & Burcu. That keeps responsibility clear and makes it easier to get things done. We’re building her to be used at events across our community.'
    },
    {
      q: 'Can I use SUBrina for an event?',
      a: 'That’s part of the idea. If you’re putting on a party, wedding, retreat or something else that needs good sound, message us and we’ll talk about what’s possible.'
    },
    {
      q: 'When will she be ready?',
      a: 'We’re aiming to build over winter and have SUBrina ready by spring, in time for outdoor events. The exact timing depends on fundraising and how the build goes.'
    },
    {
      q: 'What if you don’t raise the full amount?',
      a: 'We’ll build in stages: the tops first, then the amplification, then our own subs. We can rent reflex subs for events in the meantime, so we don’t need to buy the whole rig at once.'
    },
    {
      q: 'How will the soundsystem be transported?',
      a: 'She fits in a normal van or larger car (like a Kangoo, family SUV, or Miles L). You definitely don’t need a giant commercial truck—each cabinet is sized so two people can carry it.'
    },
    {
      q: 'Who is Horner Audio and why are they helping?',
      a: 'Horner Audio is run by Carlo, who has helped build other community soundsystems in Berlin (like Angel Audio). We met at a workshop, and he generously offered his engineering experience, guidance, and workshop space to help us build SUBrina properly.'
    },
    {
      q: 'Can I donate anonymously or leave a note?',
      a: 'Yes! In the PayPal pool you can leave any message or choose to donate anonymously if you prefer.'
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-[#19092b] text-[#fdf4ff] border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-14 items-start">
          {/* FAQ Accordion List */}
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#38bdf8] text-[#1e0538] border border-[#1e0538] shadow-[2px_2px_0_#1e0538] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions & Answers</span>
            </span>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[-0.04em] mb-8 text-[#fdf4ff]"
              style={{ fontFamily: 'var(--display)' }}
            >
              Practical FAQ
            </h2>

            <div className="space-y-3.5">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border-2 border-[#2e1065] bg-[#25123d] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-black uppercase text-sm sm:text-base text-[#fdf4ff] hover:text-[#FFB400] transition-colors cursor-pointer"
                    aria-expanded={openFaq === idx}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform text-[#ec4899] ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/85 font-normal leading-relaxed border-t border-white/10 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Telegram Direct Connection Card */}
          <div className="p-7 sm:p-8 rounded-[2rem] bg-[#25123d] border-3 border-[#1e0538] shadow-[8px_10px_0_#FFB400] lg:sticky lg:top-24">
            <div className="w-12 h-12 rounded-2xl bg-[#0088cc] text-white grid place-items-center mb-5 shadow-[3px_3px_0_#1e0538]">
              <MessageCircle className="w-6 h-6" />
            </div>

            <span className="text-xs font-black uppercase tracking-wider text-[#38bdf8] block mb-1">
              Have a question or idea?
            </span>
            <h3
              className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2 text-[#fdf4ff]"
              style={{ fontFamily: 'var(--display)' }}
            >
              Message Ayo
            </h3>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal mb-6">
              Got a question about the build, want to talk about sound for an event, or just want to say hi? Send Ayo a message directly on Telegram.
            </p>

            <a
              href={TELEGRAM_AYO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full button-pop button-pop-primary py-3.5 px-6 text-xs sm:text-sm font-black text-center flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Message @ayodrab on Telegram ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
