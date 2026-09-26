import React, { useState } from 'react';
import { Sparkles, Sliders, Volume2, ShieldCheck, Zap } from 'lucide-react';

interface StepData {
  id: number;
  tag: string;
  badge: string;
  title: string;
  subtitle: string;
  quote: string;
  description: string;
  pixelSpecs: string[];
  visualType: 'horn' | 'dsp' | 'subs';
  color: string;
  shadowColor: string;
}

export const SoundBrewingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps: StepData[] = [
    {
      id: 1,
      tag: 'Step 01 / The Woodwork & Geometry',
      badge: 'Horn Flare',
      title: 'The Multiple Entry Flare',
      subtitle: '5 Drivers · 1 Single Acoustic Horn Flare',
      quote: '“Pop, don’t blend. 5 drivers speak as one single coherent voice.”',
      description:
        'Instead of scattering woofers and tweeters in separate boxes across the room, JW Audio’s SAWMOD design feeds five drivers directly into one mathematically optimized birch horn flare. Highs and mids emerge as one unified spherical soundwave with zero comb-filtering or ear fatigue.',
      pixelSpecs: ['18mm Baltic Birch', '5 Drivers in 1 Horn', 'Zero Comb-Filtering', '90° × 60° Dispersion'],
      visualType: 'horn',
      color: 'bg-[#fdf4ff] text-[#1e0538]',
      shadowColor: '#f43f5e',
    },
    {
      id: 2,
      tag: 'Step 02 / The DSP Brain & Timing',
      badge: 'FIR Filtering',
      title: 'Sub-Millisecond Time Alignment',
      subtitle: 'Digital Signal Processing & Safety Limiting',
      quote: '“Every microsecond calculated for laser-tight phase coherence.”',
      description:
        'The brains of SUBrina. Our digital signal processor (DSP) runs precision FIR filters and delay compensation so every frequency band hits the dancefloor simultaneously. Intelligent RMS and peak limiters protect the hardware from enthusiastic DJs without suffocating dynamics.',
      pixelSpecs: ['64-Bit DSP Engine', 'Sub-ms Phase Alignment', 'Dynamic Thermal Limits', 'Neutrik speakON Looms'],
      visualType: 'dsp',
      color: 'bg-[#FFB400] text-[#1e0538]',
      shadowColor: '#1e0538',
    },
    {
      id: 3,
      tag: 'Step 03 / Physical Low-End',
      badge: 'Sub-Bass Drop',
      title: 'Four 18" Reflex Subwoofers',
      subtitle: 'Tuned down to 30 Hz by Horner Audio',
      quote: '“Bass that hugs your whole chest instead of rattling your teeth.”',
      description:
        'Massive, effortless, physical bass. Four Horner Audio 18-inch reflex cabinets crafted with internal matrix bracing to eliminate cabinet resonance. They produce musical, warm, and chest-punching low frequencies that make people smile and keep dancing until noon.',
      pixelSpecs: ['4 × 18" Heavy Drivers', 'Tuned down to 30 Hz', 'No Mud / Fast Transients', 'Up to 400 Dancers'],
      visualType: 'subs',
      color: 'bg-[#ec4899] text-white',
      shadowColor: '#FFB400',
    },
  ];

  const currentStep = steps.find((s) => s.id === activeStep) || steps[0];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 bg-[#19092b] text-[#fdf4ff] border-b-2 border-[#2e1065]">
      <div className="max-w-7xl mx-auto">
        {/* Header with Brewitty-inspired Pixel Accent */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-8 items-end mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="pixel-badge pixel-badge-yellow">
                ★ BREWED WITH LOVE
              </span>
              <span className="pixel-badge pixel-badge-pink">
                3-STEP RECIPE
              </span>
              <span className="pixel-badge pixel-badge-cyan">
                ZERO FLUFF
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.05em] leading-[0.9]"
              style={{ fontFamily: 'var(--display)' }}
            >
              How the sound<br />
              <em className="text-[#ec4899] font-normal not-italic" style={{ fontFamily: 'var(--serif)' }}>
                is brewed.
              </em>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#fdf4ff]/80 leading-relaxed font-normal">
            Great sound isn’t an accident. Here is the three-step recipe that transforms raw Baltic birch and electronics into pure dancefloor euphoria.
          </p>
        </div>

        {/* 3 Interactive Step Selector Tabs (Brewitty-Inspired Step Navigation) */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`step-tab-button ${activeStep === step.id ? 'active' : 'inactive'}`}
            >
              <span>{step.id < 10 ? `0${step.id}` : step.id}.</span> {step.badge}
            </button>
          ))}
        </div>

        {/* Interactive Step Showcase Card */}
        <div
          className={`p-6 sm:p-10 rounded-[2rem] border-4 border-[#1e0538] transition-all duration-300 ${currentStep.color} mb-16`}
          style={{ boxShadow: `12px 14px 0 ${currentStep.shadowColor}` }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="pixel-badge pixel-badge-purple">
                  {currentStep.tag}
                </span>
              </div>

              <h3
                className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-2"
                style={{ fontFamily: 'var(--display)' }}
              >
                {currentStep.title}
              </h3>

              <div className="text-sm font-black uppercase tracking-wider opacity-75 mb-4">
                {currentStep.subtitle}
              </div>

              <blockquote className="p-3.5 rounded-xl bg-black/5 border-l-4 border-current mb-4 italic text-sm font-semibold">
                {currentStep.quote}
              </blockquote>

              <p className="text-sm sm:text-base leading-relaxed font-medium mb-6 opacity-90">
                {currentStep.description}
              </p>

              {/* Pixel Spec Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-current/20">
                {currentStep.pixelSpecs.map((spec, i) => (
                  <span
                    key={i}
                    className="pixel-badge bg-white/70 text-[#1e0538]"
                  >
                    ✦ {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Interactive Visual Simulation */}
            <div className="rounded-2xl bg-[#19092b] text-[#fdf4ff] border-2 border-[#1e0538] p-6 sm:p-8 flex flex-col justify-between aspect-[4/3] relative overflow-hidden shadow-inner">
              {/* Decorative Matrix Grid */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFB400_1px,transparent_1px)] [background-size:14px_14px]" />

              {/* Status Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#34d399] animate-pulse" />
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#FFB400]">
                    SYS.RECIPE // STAGE 0{currentStep.id}
                  </span>
                </div>
                <span className="pixel-badge pixel-badge-yellow text-[9px] py-0.5 px-2">
                  ACTIVE PREVIEW
                </span>
              </div>

              {/* Central Graphic based on Step */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto py-4 text-center">
                {currentStep.visualType === 'horn' && (
                  <div className="flex flex-col items-center">
                    <div className="text-6xl sm:text-7xl mb-2 animate-bounce">
                      🎺
                    </div>
                    <div className="text-sm font-black uppercase text-[#FFB400] tracking-wider">
                      5 Drivers → 1 Horn Throat
                    </div>
                    <div className="text-xs text-white/70 font-mono mt-1">
                      Coherent Point-Source Wavefront
                    </div>
                  </div>
                )}

                {currentStep.visualType === 'dsp' && (
                  <div className="flex flex-col items-center">
                    <div className="text-6xl sm:text-7xl mb-2 animate-pulse">
                      ⚡
                    </div>
                    <div className="text-sm font-black uppercase text-[#38bdf8] tracking-wider">
                      DSP FIR Filter Engine
                    </div>
                    <div className="text-xs text-white/70 font-mono mt-1">
                      Phase alignment: 0.00ms latency error
                    </div>
                  </div>
                )}

                {currentStep.visualType === 'subs' && (
                  <div className="flex flex-col items-center">
                    <div className="text-6xl sm:text-7xl mb-2 animate-wiggle">
                      🔊
                    </div>
                    <div className="text-sm font-black uppercase text-[#f43f5e] tracking-wider">
                      4 × 18" Horner Reflex Enclosures
                    </div>
                    <div className="text-xs text-white/70 font-mono mt-1">
                      Deep Sub Tuning: 30 Hz – 90 Hz
                    </div>
                  </div>
                )}
              </div>

              {/* Live Waveform / Graphic Bar */}
              <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-white/60">
                <span>ACOUSTIC PURITY: 99.8%</span>
                <span className="text-[#FFB400]">READY FOR DANCEFLOORS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
