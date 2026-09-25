import React from 'react';
import { EventItem } from '../types';
import { Calendar, MapPin } from 'lucide-react';

interface EventsSectionProps {
  events: EventItem[];
}

export const EventsSection: React.FC<EventsSectionProps> = ({ events }) => {
  return (
    <section id="events" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 bg-[#25123d] text-[#fdf4ff] border-b-2 border-[#2e1065]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.05em] leading-[0.9]"
            style={{ fontFamily: 'var(--display)' }}
          >
            Fundraisers
          </h2>
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
                {/* Date & Time Header Pill */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#1e0538] text-white">
                    <Calendar className="w-3.5 h-3.5 text-[#fde047]" />
                    {ev.formattedDate}
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3 leading-tight"
                  style={{ fontFamily: 'var(--display)' }}
                >
                  {ev.title}
                </h3>

                <p className="text-sm leading-relaxed mb-6 font-medium opacity-90">
                  {ev.description}
                </p>
              </div>

              {/* Footer with Venue */}
              <div className="pt-4 border-t border-current/20 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                  <MapPin className="w-4 h-4 shrink-0 text-[#f43f5e]" />
                  <span>{ev.venue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
