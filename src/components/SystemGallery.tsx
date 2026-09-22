import React, { useState } from 'react';
import { Maximize2, X, Camera, Hammer, Sparkles } from 'lucide-react';
import hornWorkshopImg from '../assets/images/sawmod_horn_workshop_1790063961318.jpg';
import subBuildImg from '../assets/images/subwoofer_build_photo_1790063974059.jpg';
import ampRackImg from '../assets/images/amp_rack_wiring_1790063986079.jpg';
import soundcheckImg from '../assets/images/soundcheck_test_1790063998720.jpg';

interface PhotoItem {
  id: string;
  src: string;
  title: string;
  tag: string;
  badge: string;
  description: string;
  specs: string;
}

export const SystemGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const photos: PhotoItem[] = [
    {
      id: 'horn-flare',
      src: hornWorkshopImg,
      title: 'SAWMOD Multiple Entry Horn Build',
      tag: 'JW Audio Design',
      badge: 'Workshop Day 14',
      description: 'Assembling the Baltic birch Multiple Entry Horn flare. The precision wooden geometry allows 5 drivers to merge into a single seamless point source wavefront.',
      specs: '5 Drivers in 1 Horn • Baltic Birch • Point-Source Flare',
    },
    {
      id: 'subwoofers',
      src: subBuildImg,
      title: '4 × 18" Reflex Subwoofer Cabinets',
      tag: 'Horner Audio Design',
      badge: 'Heavy Woodwork',
      description: 'Constructing the high-power reflex subwoofers with internal matrix bracing. Tuned to deliver effortless physical chest slam down to 30 Hz without boominess.',
      specs: '18-inch Drivers • Reflex Tuned • Zero-Resonance Bracing',
    },
    {
      id: 'amp-rack',
      src: ampRackImg,
      title: 'Amp Rack & DSP Signal Processing',
      tag: 'System Electronics',
      badge: 'Power & Brains',
      description: 'Shock-mounted flight case with high-headroom amplifiers, digital signal processor (DSP), protective safety limiters, and clean speakON patch bays.',
      specs: 'FIR Filters • Driver Limiting • Neutrik speakON Looms',
    },
    {
      id: 'soundcheck',
      src: soundcheckImg,
      title: 'Warehouse Prototype Soundcheck',
      tag: 'Acoustic Alignment',
      badge: 'Acoustic Test',
      description: 'First measurement and tuning session in our space with calibrated measurement microphones. Verifying phase coherence and testing for zero listener fatigue.',
      specs: 'Calibrated Mic Tuning • Phase Coherent • 400 Person Coverage',
    },
  ];

  return (
    <section id="photos" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 bg-[#25123d] text-[#fdf4ff] border-y-2 border-[#2e1065]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-8 items-end mb-16">
          <div>
            <div className="section-kicker">03 / Workshop & Build in Progress</div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.05em] leading-[0.9]"
              style={{ fontFamily: 'var(--display)' }}
            >
              Building with<br />
              <em className="text-[#fde047] font-normal not-italic" style={{ fontFamily: 'var(--serif)' }}>
                Horner Audio.
              </em>
            </h2>
          </div>
          <div>
            <p className="text-base sm:text-lg text-[#fdf4ff]/80 leading-relaxed font-normal mb-3">
              We are currently in the workshop! Sawdust is flying at Horner Audio as the Baltic birch horn flares and 18-inch sub cabinets come together.
            </p>
            <span className="sticker bg-[#f43f5e] text-white text-[10px] py-1 px-3">
              ★ Preview Visuals — Live build photos coming as cabinets finish!
            </span>
          </div>
        </div>

        {/* 4 Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {photos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className={`group p-5 rounded-[1.6rem] bg-[#19092b] border-2 border-[#2e1065] cursor-pointer transition-all duration-300 ${
                idx % 2 === 0 ? 'tilt-left' : 'tilt-right'
              } hover:shadow-[10px_10px_0_#f43f5e] hover:border-[#f43f5e]`}
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#2e1065] mb-5 bg-[#0f051d]">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Badges on Image */}
                <div className="absolute top-3 left-3">
                  <span className="sticker bg-[#fde047] text-[#1e0538] text-[10px] py-1 px-3">
                    {photo.badge}
                  </span>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#19092b]/80 backdrop-blur-sm border border-white/20 grid place-items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-[#19092b]/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] font-bold text-[#fde047] flex items-center justify-between">
                  <span>{photo.tag}</span>
                  <span className="text-[10px] text-white/70">Click to enlarge ↗</span>
                </div>
              </div>

              {/* Photo Meta Details */}
              <h3
                className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#fdf4ff] group-hover:text-[#fde047] transition-colors mb-2"
                style={{ fontFamily: 'var(--display)' }}
              >
                {photo.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#fdf4ff]/80 leading-relaxed mb-4 font-normal">
                {photo.description}
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-[#ec4899]">
                <span>{photo.specs}</span>
                <span className="text-white/60">0{idx + 1} / 04</span>
              </div>
            </div>
          ))}
        </div>

        {/* Workshop Note Callout */}
        <div className="p-6 rounded-2xl bg-[#19092b] border-2 border-[#2e1065] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ec4899] text-white grid place-items-center font-black">
              🪵
            </div>
            <div>
              <h4 className="text-sm font-black uppercase text-[#fdf4ff]">
                Want to help in the workshop?
              </h4>
              <p className="text-xs text-[#fdf4ff]/70">
                We organize sanding, painting with Warnex, and soldering sessions every week.
              </p>
            </div>
          </div>
          <a
            href="#faq"
            className="button-pop button-pop-secondary text-xs py-2 px-5 shrink-0"
          >
            <span>Join a Build Day ↗</span>
          </a>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f051d]/90 backdrop-blur-md animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#19092b] border-2 border-[#f43f5e] rounded-[1.6rem] shadow-[14px_14px_0_#f43f5e] overflow-hidden p-6 sm:p-8"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#fde047] text-[#1e0538] border-2 border-[#1e0538] grid place-items-center hover:scale-110 transition-transform cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border-2 border-[#2e1065] mb-5 bg-black">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="sticker bg-[#fde047] text-[#1e0538] text-[10px] py-0.5 px-2.5 mb-2">
                  {selectedPhoto.badge} · {selectedPhoto.tag}
                </span>
                <h3
                  className="text-2xl font-black uppercase tracking-tight text-[#fdf4ff]"
                  style={{ fontFamily: 'var(--display)' }}
                >
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#fdf4ff]/80 mt-1 max-w-xl">
                  {selectedPhoto.description}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <span className="text-xs font-bold text-[#ec4899] block">
                  {selectedPhoto.specs}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
