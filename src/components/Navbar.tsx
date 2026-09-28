import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PAYPAL_POOL_URL } from '../data';

interface NavbarProps {
  totalRaised: number;
  goal: number;
}

export const Navbar: React.FC<NavbarProps> = ({ totalRaised, goal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const percent = Math.min(100, Math.round((totalRaised / goal) * 100));

  const navLinks = [
    { label: "Where She'll Play", href: '#where' },
    { label: 'Fundraisers', href: '#events' },
    { label: 'The Build', href: '#the-build' },
    { label: 'Budget', href: '#budget' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Supporters', href: '#supporters' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#19092b]/95 backdrop-blur-md border-b-2 border-[#2e1065] text-[#fdf4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 h-20 flex items-center justify-between gap-4">
        {/* Wordmark */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-10 h-10 rounded-2xl bg-[#ec4899] text-[#19092b] border-2 border-[#FFB400] grid place-items-center shadow-[3px_3px_0_#FFB400] group-hover:rotate-6 transition-transform">
            <span className="text-xl leading-none select-none">🔊</span>
          </div>
          <div className="flex flex-col">
            <span
              className="text-2xl sm:text-3xl font-black tracking-tight text-[#fdf4ff] uppercase leading-none"
              style={{ fontFamily: 'var(--display)' }}
            >
              SUB<span className="text-[#f43f5e]">RINA</span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-wider text-[#FFB400] leading-none mt-1">
              soundsystem build
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-black uppercase tracking-wider text-[#fdf4ff]/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#FFB400] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action & PayPal Chip In + Hamburger */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-end text-right pr-1">
            <span className="text-[11px] font-black uppercase text-[#FFB400] tracking-wider">
              €{totalRaised.toLocaleString()} / €{goal.toLocaleString()}
            </span>
            <span className="text-[10px] text-[#fdf4ff]/60 font-bold">
              {percent}% funded
            </span>
          </div>

          <a
            href={PAYPAL_POOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex button-pop button-pop-primary text-xs py-2.5 px-5"
          >
            <span>Chip in via PayPal ↗</span>
          </a>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 rounded-2xl bg-[#25123d] border-2 border-[#FFB400] text-[#FFB400] grid place-items-center hover:bg-[#ec4899] hover:text-white transition-colors cursor-pointer shadow-[3px_3px_0_#1e0538] lg:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#19092b] border-b-4 border-[#f43f5e] px-4 sm:px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="max-w-7xl mx-auto flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/15">
              <span className="text-xs font-black uppercase tracking-wider text-[#FFB400]">
                Quick Navigation
              </span>
              <span className="text-xs text-[#ec4899] font-bold">
                €{totalRaised.toLocaleString()} of €{goal.toLocaleString()}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-3 rounded-xl bg-[#25123d] border border-white/10 text-xs font-black uppercase tracking-wider text-white hover:text-[#FFB400] hover:border-[#FFB400] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={PAYPAL_POOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full button-pop button-pop-primary py-3 px-5 text-xs text-center font-black flex items-center justify-center"
              >
                <span>Chip in via PayPal Pool ↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
