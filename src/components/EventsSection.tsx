import React from 'react';
import { EventItem } from '../types';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { PAYPAL_POOL_URL } from '../data';

interface EventsSectionProps {
  events: EventItem[];
}

export const EventsSection: React.FC<EventsSectionProps> = ({ events }) => {
  return (
    <section id="events" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 bg-[#25123d] text-[#fdf4ff] border-b-2 border-[#2e1065]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-8 items-end mb-16">
          <div>
            <div className="section-kicker">01 / Calendar & Gatherings</div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.05em] leading-[0.9]"
              style={{ fontFamily: 'var(--display)' }}
            >
              Dance & Support.<br />
              <em className="text-[#fde047] font-normal not-italic" style={{ fontFamily: 'var(--serif)' }}>
                Two FUNdraiser Gatherings.
              </em>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#fdf4ff]/80 leading-relaxed font-normal">
            Come dance with Burcu and Ayo, catch early acoustic test sets, and help fund the Baltic birch plywood and drivers for the rig.
          </p>
        </div>

        {/* 2 Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((ev, idx) => (
            <div
              key={ev.id}
              className={`p-7 sm:p-9 rounded-[1.8rem] border-4 border-[#1e0538] flex flex-col justify-between transition-all duration-300 ${
                idx === 0
                  ? 'bg-[#fde047] text-[#1e0538] shadow-[10px_10px_0_#f43f5e] tilt-left'
                  : 'bg-[#fdf4ff] text-[#1e0538] shadow-[10px_10px_0_#38bdf8] tilt-right'
              } hover:-translate-y-2 hover:shadow-[14px_14px_0_#ec4899]`}
            >
              <div>
                {/* Date Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#1e0538] text-white">
                    <Calendar className="w-3.5 h-3.5" />
                    {ev.formattedDate.split('•')[0]}
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-current">
                    {ev.tags[0]}
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2 leading-tight"
                  style={{ fontFamily: 'var(--display)' }}
                >
                  {ev.title}
                </h3>

                <div className="text-xs sm:text-sm font-bold mb-4 opacity-90 text-[#f43f5e]">
                  {ev.subtitle}
                </div>

                <p className="text-xs sm:text-sm leading-relaxed mb-6 font-medium opacity-85">
                  {ev.description}
                </p>

                {/* Lineup Tag Cloud */}
                <div className="mb-6 pt-4 border-t border-current/20">
                  <span className="text-[11px] font-black uppercase tracking-widest block mb-2 opacity-75">
                    Featuring on Decks:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ev.lineup.map((artist) => (
                      <span
                        key={artist}
                        className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#1e0538]/10 text-current"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer with Venue & Action */}
              <div className="pt-4 border-t border-current/20 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs font-bold">
                  <MapPin className="w-4 h-4 shrink-0 text-[#f43f5e]" />
                  <span>{ev.venue}</span>
                </div>

                <a
                  href={PAYPAL_POOL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#1e0538] text-white hover:bg-[#f43f5e] transition-colors cursor-pointer"
                >
                  <span>RSVP / Donate</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
