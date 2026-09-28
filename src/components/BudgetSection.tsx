import React, { useState } from 'react';
import { ChevronDown, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';
import { FLAGSHIP_NEO_BUDGET } from '../data';

export const BudgetSection: React.FC = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const { summary, categories } = FLAGSHIP_NEO_BUDGET;

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categoryNotes: Record<string, string> = {
    finish: 'Includes wood sealer, 2K basecoat, custom epoxy resin with chrome pigment for her metallic finish, protective topcoat, fasteners, and two K&M distance mounting poles.',
    covers: 'Custom padded slipcovers with foam and soft faux-fur lining to keep the two tops and four subwoofers from scratching when hauling them in vans and cars to events.'
  };

  return (
    <section id="budget" className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-[#1f0b35] text-[#fdf4ff] border-b border-white/10">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-3xl mb-10 text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#FFB400] text-[#1e0538] border border-[#1e0538] shadow-[2px_2px_0_#1e0538] mb-3">
            <span>Transparent Budget</span>
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[-0.04em] leading-tight text-[#fdf4ff]"
            style={{ fontFamily: 'var(--display)' }}
          >
            What the money pays for
          </h2>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal mt-3">
            €11,385 is a lot of money. Building it ourselves, with Horner Audio contributing their time and workshop space, makes this possible. Here’s what we expect the build to cost.
          </p>
        </div>

        {/* Budget Summary Card (Clear categories first) */}
        <div className="p-6 sm:p-9 rounded-[2rem] bg-[#25123d] border-3 border-[#1e0538] shadow-[8px_10px_0_#f43f5e]">
          {/* Top Level Summary Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-white/60 block mb-1">
                Equipment & Materials Subtotal
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white" style={{ fontFamily: 'var(--display)' }}>
                €{summary.net_subtotal.toLocaleString()}
              </div>
              <span className="text-xs text-white/60 mt-1 block">
                Speakers, drivers, amps, cables, finish & covers
              </span>
            </div>

            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#FFB400] block mb-1">
                10% Contingency Buffer
              </span>
              <div className="text-3xl sm:text-4xl font-black text-[#FFB400]" style={{ fontFamily: 'var(--display)' }}>
                €{summary.contingency_buffer.toLocaleString()}
              </div>
              <span className="text-xs text-white/60 mt-1 block">
                Price changes, forgotten items, or redo costs
              </span>
            </div>

            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#ec4899] block mb-1">
                Total Budget
              </span>
              <div className="text-3xl sm:text-4xl font-black text-[#ec4899]" style={{ fontFamily: 'var(--display)' }}>
                €{summary.grand_total.toLocaleString()}
              </div>
              <span className="text-xs text-white/60 mt-1 block">
                Target to get the complete rig built
              </span>
            </div>
          </div>

          {/* Simple High-Level Category List */}
          <div className="py-6 border-b border-white/10 space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFB400] block mb-2">
              Main Cost Categories
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {categories.map((c) => (
                <div
                  key={c.id}
                  className="p-3.5 rounded-xl bg-[#19092b] border border-white/10 flex items-center justify-between gap-3 text-xs sm:text-sm"
                >
                  <span className="font-bold text-white/90 truncate">{c.name}</span>
                  <span className="font-mono font-black text-[#FFB400] shrink-0">
                    €{c.subtotal.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contingency Explainer */}
          <div className="my-6 p-4 rounded-xl bg-[#19092b] border border-white/15 flex items-start gap-3 text-xs sm:text-sm text-white/80">
            <ShieldAlert className="w-5 h-5 text-[#FFB400] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Why a 10% contingency buffer (€1,035)?</strong>
              <p className="mt-0.5 text-white/70">
                A bit of room for price changes, things we forgot, or something we fuck up and have to redo.
              </p>
            </div>
          </div>

          {/* Expandable Detailed Breakdown Button */}
          <button
            onClick={() => setIsDetailOpen(!isDetailOpen)}
            className="w-full py-3.5 px-5 rounded-xl bg-[#19092b] hover:bg-[#200a38] border-2 border-white/15 hover:border-[#FFB400] flex items-center justify-between gap-3 text-left transition-colors cursor-pointer"
            aria-expanded={isDetailOpen}
          >
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
              {isDetailOpen ? 'Hide Itemised Parts List' : 'View Full Itemised Parts List (All Components)'}
            </span>
            <div className="flex items-center gap-2 text-xs font-bold text-[#FFB400]">
              <span>{isDetailOpen ? 'Collapse' : 'Expand'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDetailOpen ? 'rotate-180' : ''}`} />
            </div>
          </button>

          {/* Detailed Itemised Breakdown */}
          {isDetailOpen && (
            <div className="mt-6 space-y-4 pt-4 border-t border-white/10 animate-in fade-in duration-200">
              {categories.map((c) => {
                const isExpanded = !!expandedCategories[c.id];
                return (
                  <div
                    key={c.id}
                    className="rounded-xl bg-[#19092b] border border-white/15 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleCategory(c.id)}
                      className="w-full p-4 flex items-center justify-between gap-3 text-left hover:bg-white/[0.03] transition-colors cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black uppercase text-white" style={{ fontFamily: 'var(--display)' }}>
                            {c.name}
                          </span>
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                            {c.items.length} items
                          </span>
                        </div>
                        {categoryNotes[c.id] && (
                          <p className="text-[11px] text-white/60 mt-1 max-w-xl">
                            {categoryNotes[c.id]}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-sm font-black font-mono text-[#FFB400]">
                          €{c.subtotal.toLocaleString()}
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 text-white/50 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </div>
                    </button>

                    {/* Items List */}
                    {isExpanded && (
                      <div className="px-4 pb-4 pt-1 bg-[#120520] border-t border-white/10 space-y-1.5 text-xs">
                        {c.items.map((item, i) => (
                          <div
                            key={i}
                            className="py-1.5 px-2 rounded flex items-center justify-between gap-3 text-white/80 hover:bg-white/[0.02]"
                          >
                            <span>{item.name}</span>
                            <span className="font-mono font-bold text-white shrink-0">
                              €{item.cost.toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
