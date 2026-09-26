import React from 'react';

interface SubrinaLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export const SubrinaLogo: React.FC<SubrinaLogoProps> = ({ className = '', showSubtitle = true }) => {
  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* SVG Monster Logo directly inspired by the furry horns mockup */}
      <svg
        viewBox="0 0 900 560"
        className="w-full max-w-[620px] h-auto drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Fur linear & radial gradients */}
          <linearGradient id="hornGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef9c3" />
            <stop offset="50%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#FFB400" />
          </linearGradient>
          <linearGradient id="hornGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef9c3" />
            <stop offset="50%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#FFB400" />
          </linearGradient>

          <linearGradient id="furGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c026d3" />
            <stop offset="45%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#6b21a8" />
          </linearGradient>
          <linearGradient id="furHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#c026d3" />
          </linearGradient>

          <filter id="furFilter" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0f071d" floodOpacity="0.6" />
          </filter>

          {/* Cute monster fang gradient */}
          <linearGradient id="fangGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="80%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#FFB400" />
          </linearGradient>

          {/* Claw gradient */}
          <linearGradient id="clawGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef9c3" />
            <stop offset="100%" stopColor="#FFB400" />
          </linearGradient>
        </defs>

        {/* --- HORNS (Curving out from behind the top letters) --- */}
        {/* Left Horn */}
        <path
          d="M 230 180 C 170 150 110 120 75 70 C 68 58 65 42 70 38 C 76 34 94 48 115 80 C 145 125 185 165 245 195 Z"
          fill="url(#hornGradLeft)"
        />
        <path
          d="M 75 70 C 110 120 170 150 230 180 C 210 185 180 175 140 135 C 105 100 80 75 75 70 Z"
          fill="#ca8a04"
          opacity="0.25"
        />

        {/* Right Horn */}
        <path
          d="M 670 180 C 730 150 790 120 825 70 C 832 58 835 42 830 38 C 824 34 806 48 785 80 C 755 125 715 165 655 195 Z"
          fill="url(#hornGradRight)"
        />
        <path
          d="M 825 70 C 790 120 730 150 670 180 C 690 185 720 175 760 135 C 795 100 820 75 825 70 Z"
          fill="#ca8a04"
          opacity="0.25"
        />

        {/* --- FANGS (Peeking between the letters) --- */}
        {/* Top middle fangs pointing down */}
        <polygon points="380,240 395,290 410,240" fill="url(#fangGrad)" />
        <polygon points="465,240 480,285 495,240" fill="url(#fangGrad)" />
        <polygon points="510,240 520,275 530,240" fill="url(#fangGrad)" />

        {/* Bottom fangs pointing up */}
        <polygon points="420,330 432,285 444,330" fill="url(#fangGrad)" />
        <polygon points="525,330 538,290 550,330" fill="url(#fangGrad)" />

        {/* --- FURRY MONSTER CLAWS AT THE BOTTOM --- */}
        {/* Left Foot Claws (under 's') */}
        <ellipse cx="145" cy="485" rx="9" ry="14" fill="url(#clawGrad)" transform="rotate(-15 145 485)" />
        <ellipse cx="160" cy="492" rx="9" ry="14" fill="url(#clawGrad)" />
        <ellipse cx="175" cy="488" rx="9" ry="14" fill="url(#clawGrad)" transform="rotate(15 175 488)" />

        {/* Middle Foot Claws (under 'r' / 'i') */}
        <ellipse cx="410" cy="485" rx="8" ry="13" fill="url(#clawGrad)" />
        <ellipse cx="425" cy="488" rx="8" ry="13" fill="url(#clawGrad)" />
        <ellipse cx="440" cy="485" rx="8" ry="13" fill="url(#clawGrad)" />

        {/* Right Foot Claws (under 'a') */}
        <ellipse cx="735" cy="485" rx="9" ry="14" fill="url(#clawGrad)" transform="rotate(-20 735 485)" />
        <ellipse cx="750" cy="492" rx="9" ry="14" fill="url(#clawGrad)" />
        <ellipse cx="765" cy="486" rx="9" ry="14" fill="url(#clawGrad)" transform="rotate(20 765 486)" />

        {/* --- MAIN FURRY LETTERING: "sub" (TOP) & "rina" (BOTTOM) --- */}
        <g filter="url(#furFilter)">
          {/* TOP LINE: s u b */}
          {/* S */}
          <path
            d="M 315 125 C 290 95 245 90 205 115 C 165 140 160 190 195 220 C 230 250 315 235 315 285 C 315 325 270 345 225 340 C 185 335 155 310 145 280"
            stroke="url(#furGradPrimary)"
            strokeWidth="56"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Fur fringe tufts for S */}
          <path
            d="M 315 125 C 290 95 245 90 205 115 C 165 140 160 190 195 220 C 230 250 315 235 315 285 C 315 325 270 345 225 340 C 185 335 155 310 145 280"
            stroke="url(#furHighlight)"
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray="8 14"
            opacity="0.8"
          />

          {/* U */}
          <path
            d="M 370 150 L 370 230 C 370 275 410 290 440 290 C 470 290 510 275 510 230 L 510 150"
            stroke="url(#furGradPrimary)"
            strokeWidth="54"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* U fur fringe */}
          <path
            d="M 370 150 L 370 230 C 370 275 410 290 440 290 C 470 290 510 275 510 230 L 510 150"
            stroke="url(#furHighlight)"
            strokeWidth="18"
            strokeLinecap="round"
            strokeDasharray="10 12"
            opacity="0.8"
          />

          {/* B */}
          {/* B stem */}
          <path
            d="M 570 95 L 570 300"
            stroke="url(#furGradPrimary)"
            strokeWidth="54"
            strokeLinecap="round"
          />
          {/* B loop */}
          <circle
            cx="660"
            cy="215"
            r="65"
            stroke="url(#furGradPrimary)"
            strokeWidth="52"
            fill="none"
          />
          {/* B fur texture */}
          <circle
            cx="660"
            cy="215"
            r="65"
            stroke="url(#furHighlight)"
            strokeWidth="18"
            strokeDasharray="8 12"
            fill="none"
            opacity="0.8"
          />

          {/* BOTTOM LINE: r i n a */}
          {/* R */}
          <path
            d="M 215 480 L 215 350 C 215 330 235 310 265 310 C 295 310 320 330 330 355"
            stroke="url(#furGradPrimary)"
            strokeWidth="52"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 215 480 L 215 350 C 215 330 235 310 265 310 C 295 310 320 330 330 355"
            stroke="url(#furHighlight)"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="8 12"
            opacity="0.75"
          />

          {/* I */}
          {/* I dot (fluffy monster ball) */}
          <circle cx="370" cy="305" r="28" fill="url(#furGradPrimary)" />
          <circle cx="370" cy="305" r="16" fill="url(#furHighlight)" opacity="0.8" />
          {/* I body */}
          <path
            d="M 370 365 L 370 480"
            stroke="url(#furGradPrimary)"
            strokeWidth="52"
            strokeLinecap="round"
          />

          {/* N */}
          <path
            d="M 450 480 L 450 360 C 450 320 480 310 515 310 C 550 310 580 330 580 375 L 580 480"
            stroke="url(#furGradPrimary)"
            strokeWidth="52"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 450 480 L 450 360 C 450 320 480 310 515 310 C 550 310 580 330 580 375 L 580 480"
            stroke="url(#furHighlight)"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="8 12"
            opacity="0.75"
          />

          {/* A */}
          <circle
            cx="685"
            cy="400"
            r="60"
            stroke="url(#furGradPrimary)"
            strokeWidth="50"
            fill="none"
          />
          <path
            d="M 740 335 L 740 480"
            stroke="url(#furGradPrimary)"
            strokeWidth="52"
            strokeLinecap="round"
          />
          <circle
            cx="685"
            cy="400"
            r="60"
            stroke="url(#furHighlight)"
            strokeWidth="16"
            strokeDasharray="8 12"
            fill="none"
            opacity="0.75"
          />
        </g>

        {/* Star sparkle on the bottom right (just like in the user's mockup!) */}
        <path
          d="M 810 450 Q 810 465 825 465 Q 810 465 810 480 Q 810 465 795 465 Q 810 465 810 450 Z"
          fill="#c084fc"
          opacity="0.8"
        />
        <path
          d="M 810 457 Q 810 465 818 465 Q 810 465 810 473 Q 810 465 802 465 Q 810 465 810 457 Z"
          fill="#fef08a"
        />
      </svg>

      {showSubtitle && (
        <div className="mt-2 text-center">
          <span className="inline-block text-sm sm:text-base md:text-lg font-bold tracking-wider text-purple-200 uppercase bg-purple-950/80 px-4 py-1.5 rounded-full border border-purple-800/60 shadow-sm">
            the soundsystem
          </span>
        </div>
      )}
    </div>
  );
};
