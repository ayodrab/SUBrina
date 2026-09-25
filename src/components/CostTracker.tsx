import React, { useState } from 'react';
import { ChevronDown, ShieldAlert } from 'lucide-react';
import { BudgetData } from '../types';
import { FLAGSHIP_NEO_BUDGET } from '../data';

interface CostTrackerProps {
  data?: BudgetData;
  className?: string;
  defaultExpanded?: boolean;
}

export const CostTracker: React.FC<CostTrackerProps> = ({
  data = FLAGSHIP_NEO_BUDGET,
  className = '',
  defaultExpanded = false,
}) => {
  // The whole breakdown is unfurlable under "Where does all of this money go?"
  const [isBreakdownOpen, setIsBreakdownOpen] = useState<boolean>(defaultExpanded);

  // All individual category cards are collapsed by default to keep the interface compact
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const { summary, categories } = data;

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Distinct category accents matching the SUBrina brand palette
  const categoryAccents: Record<string, { badge: string; border: string; bar: string; icon: string }> = {
    tops: {
      badge: 'text-[#f43f5e] bg-[#f43f5e]/15 border-[#f43f5e]/30',
      border: 'hover:border-[#f43f5e]/60 focus-within:border-[#f43f5e]',
      bar: 'bg-[#f43f5e]',
      icon: '🎺',
    },
    subs: {
      badge: 'text-[#fde047] bg-[#fde047]/15 border-[#fde047]/30',
      border: 'hover:border-[#fde047]/60 focus-within:border-[#fde047]',
      bar: 'bg-[#fde047]',
      icon: '🔊',
    },
    amplification: {
      badge: 'text-[#a855f7] bg-[#a855f7]/15 border-[#a855f7]/30',
      border: 'hover:border-[#a855f7]/60 focus-within:border-[#a855f7]',
      bar: 'bg-[#a855f7]',
      icon: '⚡',
    },
    cabling: {
      badge: 'text-[#38bdf8] bg-[#38bdf8]/15 border-[#38bdf8]/30',
      border: 'hover:border-[#38bdf8]/60 focus-within:border-[#38bdf8]',
      bar: 'bg-[#38bdf8]',
      icon: '🔌',
    },
    finish: {
      badge: 'text-[#34d399] bg-[#34d399]/15 border-[#34d399]/30',
      border: 'hover:border-[#34d399]/60 focus-within:border-[#34d399]',
      bar: 'bg-[#34d399]',
      icon: '✨',
    },
    covers: {
      badge: 'text-[#ec4899] bg-[#ec4899]/15 border-[#ec4899]/30',
      border: 'hover:border-[#ec4899]/60 focus-within:border-[#ec4899]',
      bar: 'bg-[#ec4899]',
      icon: '🧸',
    },
  };

  return (
    <div className={`w-full pt-6 mt-6 border-t border-white/15 ${className}`} id="cost-tracker">
      {/* Unfurlable Trigger: Where does all of this money go? */}
      <button
        type="button"
        onClick={() => setIsBreakdownOpen(!isBreakdownOpen)}
        aria-expanded={isBreakdownOpen}
        aria-controls="budget-breakdown-panel"
        className="w-full min-h-[52px] py-4 px-4 sm:px-6 rounded-2xl bg-[#19092b]/80 hover:bg-[#19092b] border-2 border-white/15 hover:border-[#fde047] flex items-center justify-between gap-4 text-left transition-all group cursor-pointer shadow-sm active:translate-y-0.5"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-[#fde047] text-[#1e0538] flex items-center justify-center font-black text-sm shrink-0 shadow-[2px_2px_0_#1e0538] group-hover:rotate-6 transition-transform">
            €
          </div>
          <span
            className="text-base sm:text-lg font-black uppercase tracking-tight text-[#fdf4ff] group-hover:text-[#fde047] transition-colors block leading-tight truncate"
            style={{ fontFamily: 'var(--display)' }}
          >
            Where does all of this money go?
          </span>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <span className="text-xs font-black uppercase tracking-wider text-[#fde047] hidden sm:inline">
            {isBreakdownOpen ? 'Hide Breakdown' : 'View Breakdown'}
          </span>
          <div
            className={`w-8 h-8 rounded-full bg-[#25123d] border border-white/20 flex items-center justify-center text-[#fdf4ff] group-hover:border-[#fde047] group-hover:text-[#fde047] transition-all duration-300 ${
              isBreakdownOpen ? 'rotate-180 bg-[#1e0538] text-[#fde047] border-[#fde047]' : ''
            }`}
          >
            <ChevronDown className="w-4 h-4 transition-transform duration-300" />
          </div>
        </div>
      </button>

      {/* Progressive Disclosure Unfurl Container */}
      <div
        id="budget-breakdown-panel"
        role="region"
        aria-label="Itemized Budget Breakdown"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isBreakdownOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden">
          {/* Progressive Disclosure Accordion List of Categories */}
          <div className="space-y-3.5">
            {categories.map((c) => {
              const isExpanded = !!expandedCategories[c.id];
              const pct = ((c.subtotal / summary.net_subtotal) * 100).toFixed(1);
              const accent = categoryAccents[c.id] || {
                badge: 'text-[#fde047] bg-[#fde047]/15 border-[#fde047]/30',
                border: 'hover:border-[#fde047]/60 focus-within:border-[#fde047]',
                bar: 'bg-[#fde047]',
                icon: '📦',
              };

              return (
                <div
                  key={c.id}
                  className={`rounded-2xl bg-[#19092b]/90 border border-white/15 ${accent.border} shadow-sm transition-all duration-300 overflow-hidden`}
                >
                  {/* Category Row (Tap anywhere to toggle, min 48px touch target) */}
                  <button
                    type="button"
                    id={`category-header-${c.id}`}
                    aria-expanded={isExpanded}
                    aria-controls={`category-panel-${c.id}`}
                    onClick={() => toggleCategory(c.id)}
                    className="w-full min-h-[52px] py-3.5 px-4 sm:px-5 flex flex-col gap-2.5 text-left hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fde047] cursor-pointer transition-colors group"
                  >
                    {/* Main line: Name, Badges, Cost, Chevron */}
                    <div className="w-full flex items-center justify-between gap-3">
                      {/* Left: Icon, Category Name & Item Count Badge */}
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-xl select-none shrink-0 group-hover:scale-110 transition-transform">
                          {accent.icon}
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className="text-sm sm:text-base font-black uppercase tracking-tight text-[#fdf4ff] group-hover:text-[#fde047] transition-colors truncate"
                              style={{ fontFamily: 'var(--display)' }}
                            >
                              {c.name}
                            </span>
                            <span
                              className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border shrink-0 ${accent.badge}`}
                            >
                              {c.items.length} {c.items.length === 1 ? 'item' : 'items'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Subtotal & Chevron */}
                      <div className="flex items-center gap-3 shrink-0">
                        <div className="text-right">
                          <span
                            className="text-base sm:text-xl font-black text-[#fdf4ff] tracking-tight block"
                            style={{ fontFamily: 'var(--display)' }}
                          >
                            €{c.subtotal.toLocaleString()}
                          </span>
                          <span className="text-[10px] font-extrabold text-[#fdf4ff]/60 block -mt-0.5">
                            {pct}% of net
                          </span>
                        </div>

                        <div
                          className={`w-7 h-7 rounded-full bg-[#25123d] border border-white/15 flex items-center justify-center text-[#fdf4ff]/80 group-hover:text-[#fde047] group-hover:border-[#fde047] transition-all duration-300 ${
                            isExpanded ? 'rotate-180 bg-[#1e0538] text-[#fde047] border-[#fde047]' : ''
                          }`}
                        >
                          <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Percentage Progress Bar of Net Budget */}
                    <div className="w-full flex items-center gap-2">
                      <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${accent.bar} rounded-full transition-all duration-500`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#fdf4ff]/50 shrink-0">
                        {pct}%
                      </span>
                    </div>
                  </button>

                  {/* Unfurl Transition Child Panel (Silky smooth grid transition) */}
                  <div
                    id={`category-panel-${c.id}`}
                    role="region"
                    aria-labelledby={`category-header-${c.id}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-5 pt-2.5 pb-4 bg-[#120520] border-t border-white/10">
                        <div className="space-y-1">
                          {c.items.map((item, itemIdx) => (
                            <div
                              key={`${c.id}-item-${itemIdx}`}
                              className="min-h-[40px] px-3 py-2 rounded-lg flex items-center justify-between gap-3 text-xs sm:text-sm hover:bg-white/[0.04] transition-colors"
                            >
                              {/* Item Name */}
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#fde047]/70 shrink-0" />
                                <span className="text-[#fdf4ff]/90 font-medium leading-snug">
                                  {item.name}
                                </span>
                              </div>

                              {/* Line Item Cost */}
                              <div className="text-right shrink-0">
                                <span className="font-mono font-bold text-xs sm:text-sm text-[#fdf4ff] tabular-nums">
                                  €{item.cost.toLocaleString()}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Category Subtotal Footer inside child panel */}
                        <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between px-3 text-xs font-bold text-[#fdf4ff]/70">
                          <span className="uppercase tracking-wider text-[10px] font-black text-[#fde047]">
                            {c.name} Subtotal:
                          </span>
                          <span className="font-mono font-black text-sm text-[#fde047] tabular-nums">
                            €{c.subtotal.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contingency Safety Buffer Banner */}
          <div className="mt-5 p-4 rounded-2xl bg-[#19092b] border-2 border-dashed border-[#ec4899]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-start sm:items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#ec4899]/15 text-[#ec4899] flex items-center justify-center shrink-0 border border-[#ec4899]/30 mt-0.5 sm:mt-0">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-black text-[#fdf4ff] uppercase tracking-wide block leading-tight">
                  + €{summary.contingency_buffer.toLocaleString()} ({data.buffer_percentage}% Contingency Buffer)
                </span>
                <span className="text-[#fdf4ff]/70 font-normal text-xs block mt-0.5">
                  in case we fuck up and need to redo, something costs more etc.
                </span>
              </div>
            </div>

            <div className="text-left sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
              <span className="text-[10px] font-bold text-[#fdf4ff]/60 uppercase block">
                Net €{summary.net_subtotal.toLocaleString()} + Buffer
              </span>
              <span className="font-mono font-black text-sm text-[#ec4899]">
                €{summary.grand_total.toLocaleString()} Total
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
