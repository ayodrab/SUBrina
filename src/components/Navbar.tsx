import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { PAYPAL_POOL_URL } from '../data';

interface NavbarProps {
  totalRaised: number;
  goal: number;
}

export const Navbar: React.FC<NavbarProps> = ({ totalRaised, goal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const percent = Math.min(100, Math.round((totalRaised / goal) * 100));

  const navLinks = [
    { label: 'Events', href: '#events' },
    { label: 'The Sound', href: '#system' },
    { label: 'FUNdraiser & Budget', href: '#fundraiser' },
    { label: 'Supporters', href: '#supporters' },
    { label: 'Origin & FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#19092b]/95 backdrop-blur-md border-b-2 border-[#2e1065] text-[#fdf4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 h-20 flex items-center justify-between gap-4">
        {/* Playful Wordmark */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-11 h-11 rounded-2xl bg-[#ec4899] text-[#19092b] border-2 border-[#FFB400] grid place-items-center shadow-[3px_3px_0_#FFB400] group-hover:rotate-6 transition-transform">
            <span className="text-2xl leading-none select-none">👾</span>
          </div>
          <div className="flex flex-col">
            <span
              className="text-2xl sm:text-3xl font-black tracking-tight text-[#fdf4ff] uppercase leading-none"
              style={{ fontFamily: 'var(--display)' }}
            >
              SUB<span className="text-[#f43f5e]">RINA</span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-wider text-[#FFB400] leading-none mt-1">
              the bass monster
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-black uppercase tracking-wider text-[#fdf4ff]/80">
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
            className="w-11 h-11 rounded-2xl bg-[#25123d] border-2 border-[#FFB400] text-[#FFB400] grid place-items-center hover:bg-[#ec4899] hover:text-white transition-colors cursor-pointer shadow-[3px_3px_0_#1e0538]"
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Hamburger Overlay Drawer */}
      {isMenuOpen && (
        <div className="bg-[#19092b] border-b-4 border-[#f43f5e] px-4 sm:px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="max-w-7xl mx-auto flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/15">
              <span className="text-xs font-black uppercase tracking-wider text-[#FFB400]">
                Quick Navigation
              </span>
              <span className="text-xs text-[#ec4899] font-bold">
                €{totalRaised.toLocaleString()} raised of €{goal.toLocaleString()}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-[#25123d] border border-white/15 hover:border-[#FFB400] hover:bg-[#2e1065] text-xs font-black uppercase tracking-wider text-[#fdf4ff] hover:text-[#FFB400] transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 sm:hidden">
              <a
                href={PAYPAL_POOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="button-pop button-pop-primary w-full py-3 text-xs font-black text-center flex items-center justify-center"
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
