import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#120520] text-[#fdf4ff] border-t-2 border-[#2e1065] py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/15">
          <div>
            <div
              className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#fdf4ff] mb-2"
              style={{ fontFamily: 'var(--display)' }}
            >
              SUBrina <span className="text-[#ec4899] font-normal not-italic font-serif">the teenage soundsystem.</span>
            </div>
            <p className="text-xs sm:text-sm text-[#fdf4ff]/70 max-w-md font-medium leading-relaxed">
              Built with love by <strong>Burcu & Ayo</strong> with building partner <strong>Horner Audio</strong> for community parties, kiezburn soundcamp, and safe dancefloors across Berlin.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-black uppercase tracking-wider text-[#fdf4ff]/80">
            <a href="#about" className="hover:text-[#fde047] transition-colors">About</a>
            <a href="#system" className="hover:text-[#fde047] transition-colors">The Sound</a>
            <a href="#fundraiser" className="hover:text-[#fde047] transition-colors">FUNdraiser</a>
            <a href="#events" className="hover:text-[#fde047] transition-colors">Events</a>
            <a href="#supporters" className="hover:text-[#fde047] transition-colors">Supporters</a>
            <a href="#faq" className="hover:text-[#fde047] transition-colors">FAQ & Contact</a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#fdf4ff]/60">
          <div>
            © {new Date().getFullYear()} SUBrina · Built by Burcu & Ayo with Horner Audio · Built with Love
          </div>
          <div className="flex items-center gap-2 text-[#fde047] font-bold">
            <span>✳ Pack earplugs, drink water & hug your friends with bass ☻</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
