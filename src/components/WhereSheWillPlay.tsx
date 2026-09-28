import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export const WhereSheWillPlay: React.FC = () => {
  return (
    <section id="where" className="py-14 sm:py-20 px-4 sm:px-6 md:px-10 bg-[#19092b] text-[#fdf4ff] border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#FFB400] text-[#1e0538] border border-[#1e0538] shadow-[2px_2px_0_#1e0538] mb-3">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Community Gatherings</span>
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#fdf4ff] leading-tight"
            style={{ fontFamily: 'var(--display)' }}
          >
            Where we’ll dance in front of her
          </h2>
        </div>

        {/* Narrative Copy */}
        <div className="space-y-5 text-base sm:text-lg text-white/90 leading-relaxed font-normal">
          <p className="text-xl sm:text-2xl font-bold text-[#FFB400] leading-snug">
            At the things we already put on together: parties, weddings, retreats, small festivals and burn-style events, including Kiezburn.
          </p>

          <p>
            And hopefully at more outdoor gatherings too. Maybe we’d put something on at Fête de la Musique or 1st of May, as a possibility. Having our own sound would make it much easier to get things like that going.
          </p>

          <p className="text-sm sm:text-base text-white/70 italic bg-[#25123d] p-4 rounded-xl border border-white/10">
            These are our intended uses and hopes—not confirmed commercial bookings or promised ticket perks. We simply want our friends and community to have reliable, beautiful sound whenever we get together to dance.
          </p>
        </div>
      </div>
    </section>
  );
};
