import React from 'react';
import { EventItem } from '../types';
import { Calendar, MapPin, ExternalLink, MessageCircle } from 'lucide-react';
import { TELEGRAM_AYO_URL } from '../data';

interface EventsSectionProps {
  events: EventItem[];
}

export const EventsSection: React.FC<EventsSectionProps> = ({ events }) => {
  return (
    <section id="events" className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-[#25123d] text-[#fdf4ff] border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10 text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#f43f5e] text-white border border-[#1e0538] shadow-[2px_2px_0_#1e0538] mb-3">
            <span>Come Dance</span>
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[-0.04em] leading-tight"
            style={{ fontFamily: 'var(--display)' }}
          >
            Upcoming Fundraisers
          </h2>
          <p className="text-sm sm:text-base text-white/80 mt-2 max-w-xl">
            These nights help fund the SUBrina build. Come dance with us, hear great music, and chip into the speaker project.
          </p>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {events.map((ev, idx) => (
            <div
              key={ev.id}
              className={`p-6 sm:p-8 rounded-[1.8rem] border-3 border-[#1e0538] flex flex-col justify-between transition-all duration-300 ${
                idx === 0
                  ? 'bg-[#FFB400] text-[#1e0538] shadow-[8px_8px_0_#f43f5e]'
                  : 'bg-[#fdf4ff] text-[#1e0538] shadow-[8px_8px_0_#38bdf8]'
              }`}
            >
              <div>
                {/* Date & Time Header Pill */}
                <div className="mb-4 flex items-center justify-between gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#1e0538] text-white">
                    <Calendar className="w-3.5 h-3.5 text-[#FFB400]" />
                    <span>{ev.formattedDate}</span>
                  </span>

                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black/10 border border-current/15">
                    {ev.time}
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2.5 leading-snug"
                  style={{ fontFamily: 'var(--display)' }}
                >
                  {ev.title}
                </h3>

                <p className="text-sm leading-relaxed mb-5 font-medium opacity-90">
                  {ev.description}
                </p>

                {/* Lineup & Program */}
                {ev.lineup && ev.lineup.length > 0 && (
                  <div className="mb-6 pt-3.5 border-t border-current/15">
                    <span className="text-[11px] font-black uppercase tracking-wider block mb-2 opacity-75">
                      Lineup & Program
                    </span>
                    <ul className="space-y-1 text-xs sm:text-sm font-bold">
                      {ev.lineup.map((act, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#f43f5e] shrink-0 font-mono">✦</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Card Footer: Price & Ticket / Info Link */}
              <div className="pt-4 border-t border-current/20 space-y-3">
                {/* Mandatory Entry Price Note */}
                <div className="p-2.5 rounded-xl bg-black/10 text-xs font-black uppercase tracking-wide">
                  Entry: €15. Nobody will be turned away for lack of funds.
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                    <MapPin className="w-4 h-4 shrink-0 text-[#f43f5e]" />
                    <span>{ev.venue}</span>
                  </div>

                  {ev.ticketLink ? (
                    <a
                      href={ev.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider bg-[#1e0538] text-white hover:bg-[#ec4899] transition-colors border border-black/20 shadow-[2px_2px_0_#1e0538] shrink-0"
                    >
                      <span>Resident Advisor ↗</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href={TELEGRAM_AYO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider bg-[#1e0538] text-white hover:bg-[#38bdf8] hover:text-[#1e0538] transition-colors border border-black/20 shadow-[2px_2px_0_#1e0538] shrink-0"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Ask Ayo on Telegram ↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
