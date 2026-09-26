import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import sawmod01 from '../assets/images/SAWMOD_01.webp';
import sawmod02 from '../assets/images/SAWMOD_02.webp';
import sawmod03 from '../assets/images/SAWMOD_03.webp';
import sawmod04 from '../assets/images/SAWMOD_04.webp';
import hornerSub01 from '../assets/images/HORNER_SUB_01.png';
import hornerSub02 from '../assets/images/HORNER_SUB_02.png';

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
}

const PHOTOS: GalleryPhoto[] = [
  { id: 'sawmod-01', src: sawmod01, title: 'SAWMOD Horn Flare' },
  { id: 'sawmod-02', src: sawmod02, title: 'Midrange Entry Ports' },
  { id: 'sawmod-03', src: sawmod03, title: 'Horn Throat & Chamber' },
  { id: 'sawmod-04', src: sawmod04, title: 'Workshop Bench Assembly' },
  { id: 'horner-01', src: hornerSub01, title: 'Horner 18" Sub Enclosure' },
  { id: 'horner-02', src: hornerSub02, title: 'Internal Matrix Bracing' },
];

export const BuildGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const activePhoto = selectedIndex !== null ? PHOTOS[selectedIndex] : null;

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % PHOTOS.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + PHOTOS.length) % PHOTOS.length : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="mt-12 pt-10 border-t border-white/10">
      {/* Simple Header with Minimal Text */}
      <div className="mb-6 text-left">
        <h3
          className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#fdf4ff]"
          style={{ fontFamily: 'var(--display)' }}
        >
          Workshop Snaps & Build Previews
        </h3>
        <p className="text-xs sm:text-sm text-[#fdf4ff]/70 mt-1">
          A glimpse into the sawdust, 3D horn throats, and sub cabinet joinery.
        </p>
      </div>

      {/* Clean 6-Photo Grid — No labels on top of images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {PHOTOS.map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => setSelectedIndex(idx)}
            className="group cursor-pointer flex flex-col"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden bg-black/60 border border-white/15 group-hover:border-[#FFB400] transition-all duration-200">
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-[#fdf4ff]/80 group-hover:text-[#FFB400] transition-colors mt-2 truncate">
              {photo.title}
            </span>
          </div>
        ))}
      </div>

      {/* Clean, Simple Lightbox */}
      {activePhoto && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FFB400]">
                {activePhoto.title}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-white/50">
                  {selectedIndex + 1} / {PHOTOS.length}
                </span>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#f43f5e] text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Photo with Prev / Next Arrows */}
            <div className="relative w-full bg-black rounded-2xl overflow-hidden border border-white/15 flex items-center justify-center max-h-[75vh]">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="w-full h-auto max-h-[75vh] object-contain select-none"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((selectedIndex - 1 + PHOTOS.length) % PHOTOS.length);
                }}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#FFB400] text-white hover:text-[#1e0538] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((selectedIndex + 1) % PHOTOS.length);
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#FFB400] text-white hover:text-[#1e0538] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
