import React, { useState } from 'react';
import { Volume2, Users, Compass, Sliders, ShieldAlert, Sparkles, Trees, Warehouse } from 'lucide-react';

interface ZoneData {
  name: string;
  spl: string;
  splDc?: string;
  distance: string;
  distanceMax: number;
  density: string;
  outdoorCap: string;
  indoorCap: string;
  vibe: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  description: string;
}

const ZONES: ZoneData[] = [
  {
    name: 'Core Dancefloor',
    spl: '100–105 dBA',
    splDc: '110–115 dBC',
    distance: '0–10 m',
    distanceMax: 10,
    density: '0.5–0.75 m²/person',
    outdoorCap: '150–250 people',
    indoorCap: '200–350 people',
    vibe: 'Direct chest punch & physical sub-bass. Ear protection recommended.',
    color: '#f43f5e',
    badgeBg: 'bg-[#f43f5e]',
    badgeText: 'text-white',
    description:
      'Direct sound dominates. In this core zone, our 4 × 18" Horner subwoofers deliver high physical chest impact, and the SAWMOD point-source horns project surgical, fatigue-free clarity directly into the crowd.'
  },
  {
    name: 'Peripheral / Bar Zone',
    spl: '88–98 dBA',
    distance: '10–20 m',
    distanceMax: 20,
    density: '1.0–1.5 m²/person',
    outdoorCap: '150–250 people',
    indoorCap: '150–250 people',
    vibe: 'Warm musical bass & clear vocals. Speech without shouting.',
    color: '#FFB400',
    badgeBg: 'bg-[#FFB400]',
    badgeText: 'text-[#1e0538]',
    description:
      'Mid-range clarity remains pristine due to the constant-directivity horns, but sub-bass chest pressure transitions into a warm, musical bass tone. Speech intelligibility is maintained without shouting.'
  },
  {
    name: 'Background / Lounge Zone',
    spl: '75–88 dBA',
    distance: '20–40 m',
    distanceMax: 40,
    density: '>2.0 m²/person',
    outdoorCap: '200–300 people',
    indoorCap: '100–150 people',
    vibe: 'Balanced ambience & effortless conversation.',
    color: '#38bdf8',
    badgeBg: 'bg-[#38bdf8]',
    badgeText: 'text-[#1e0538]',
    description:
      'High frequencies above 8 kHz naturally roll off outdoors due to atmospheric absorption. Music is fully audible and balanced, but background conversation requires zero vocal effort.'
  }
];

export const DancefloorPowerZones: React.FC = () => {
  const [distance, setDistance] = useState<number>(6);
  const [envMode, setEnvMode] = useState<'outdoor' | 'indoor'>('outdoor');
  const [activeTab, setActiveTab] = useState<'zones' | 'directivity'>('zones');

  // Compute active zone from distance
  const currentZone =
    distance <= 10 ? ZONES[0] : distance <= 20 ? ZONES[1] : ZONES[2];

  // Calculated approximate SPL based on distance and environment
  // At 2m: ~104 dBA. Inverse square outdoor: -6dB per doubling. Indoor: slightly higher due to room reflection.
  const baseSpl = envMode === 'outdoor'
    ? Math.max(74, Math.round(105 - 20 * Math.log10(Math.max(1, distance / 2.5))))
    : Math.max(78, Math.round(106 - 14 * Math.log10(Math.max(1, distance / 2.5))));

  return (
    <div id="dancefloor-power" className="mt-16 pt-12 border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#FFB400] text-[#1e0538] border border-[#1e0538] shadow-[2px_2px_0_#1e0538] mb-3">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Dancefloor Power & Acoustic Zones</span>
          </div>
          <h3
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#fdf4ff] leading-none"
            style={{ fontFamily: 'var(--display)' }}
          >
            200–250 on the floor.<br />
            <span className="text-[#FFB400]">500–800 in the whole area.</span>
          </h3>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#25123d] border border-white/15 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('zones')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'zones'
                ? 'bg-[#FFB400] text-[#1e0538] shadow-[2px_2px_0_#1e0538]'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Acoustic Zones & SPL
          </button>
          <button
            onClick={() => setActiveTab('directivity')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'directivity'
                ? 'bg-[#ec4899] text-white shadow-[2px_2px_0_#1e0538]'
                : 'text-white/70 hover:text-white'
            }`}
          >
            100° Horn Isolation
          </button>
        </div>
      </div>

      {activeTab === 'zones' ? (
        <div className="space-y-8 animate-in fade-in duration-200">
          {/* Interactive Distance & SPL Radar Simulator */}
          <div className="p-6 sm:p-8 rounded-[1.8rem] bg-[#25123d] border-2 border-[#2e1065] shadow-[6px_6px_0_#FFB400]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#FFB400] block mb-1">
                  Interactive SPL & Distance Explorer
                </span>
                <h4
                  className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#fdf4ff]"
                  style={{ fontFamily: 'var(--display)' }}
                >
                  Step Into The Soundfield
                </h4>
                <p className="text-xs sm:text-sm text-[#fdf4ff]/70 mt-1 max-w-xl">
                  Slide from the sub grilles to 40 meters away to see how SPL decay, chest impact, and crowd density shift across the venue.
                </p>
              </div>

              {/* Environment toggle */}
              <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#19092b] border border-white/10 shrink-0">
                <button
                  onClick={() => setEnvMode('outdoor')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    envMode === 'outdoor'
                      ? 'bg-[#FFB400] text-[#1e0538]'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <Trees className="w-3.5 h-3.5" />
                  <span>Outdoors (Open Field)</span>
                </button>
                <button
                  onClick={() => setEnvMode('indoor')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    envMode === 'indoor'
                      ? 'bg-[#FFB400] text-[#1e0538]'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <Warehouse className="w-3.5 h-3.5" />
                  <span>Indoors (Warehouse/Club)</span>
                </button>
              </div>
            </div>

            {/* Slider & Dynamic Readouts */}
            <div className="py-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-white/70">
                  Distance From Rig Front:
                </span>
                <span className="text-lg font-black font-mono text-[#FFB400]">
                  {distance} meters ({Math.round(distance * 3.28)} ft)
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="40"
                step="1"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                className="w-full h-3 bg-[#19092b] rounded-lg appearance-none cursor-pointer accent-[#FFB400] border border-white/10"
              />

              {/* Visual Zone Markers */}
              <div className="relative w-full flex justify-between text-[10px] font-mono font-bold text-white/40 mt-2 px-1">
                <span>0m (Front)</span>
                <span className="text-[#f43f5e]">10m (Core Dancefloor)</span>
                <span className="text-[#FFB400]">20m (Bar / Peripheral)</span>
                <span className="text-[#38bdf8]">40m (Lounge / Chill)</span>
              </div>
            </div>

            {/* Live Readout Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#19092b] border border-white/10">
                <span className="text-[10px] font-black uppercase tracking-wider text-white/50 block mb-1">
                  Active Acoustic Zone
                </span>
                <span
                  className="text-base font-black uppercase tracking-tight block"
                  style={{ color: currentZone.color }}
                >
                  {currentZone.name}
                </span>
                <span className="text-[11px] font-bold text-white/60 block mt-1">
                  Radius: {currentZone.distance}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#19092b] border border-white/10">
                <span className="text-[10px] font-black uppercase tracking-wider text-white/50 block mb-1">
                  Estimated SPL Level
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black font-mono text-[#FFB400]">
                    ~{baseSpl} dBA
                  </span>
                  {distance <= 10 && (
                    <span className="text-xs font-mono text-white/50">
                      (~112 dBC)
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-bold text-white/60 block mt-1">
                  {distance <= 10 ? 'High chest impact' : distance <= 20 ? 'Warm musical bass' : 'Conversational ambient'}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#19092b] border border-white/10">
                <span className="text-[10px] font-black uppercase tracking-wider text-white/50 block mb-1">
                  Zone Capacity ({envMode === 'outdoor' ? 'Outdoors' : 'Indoors'})
                </span>
                <span className="text-xl font-black font-mono text-[#fdf4ff] block">
                  {envMode === 'outdoor' ? currentZone.outdoorCap : currentZone.indoorCap}
                </span>
                <span className="text-[11px] font-bold text-white/60 block mt-1">
                  Density: {currentZone.density}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#19092b] border border-white/10">
                <span className="text-[10px] font-black uppercase tracking-wider text-white/50 block mb-1">
                  Total Event Footprint
                </span>
                <span className="text-xl font-black font-mono text-[#ec4899] block">
                  {envMode === 'outdoor' ? '500–800 People' : '450–750 People'}
                </span>
                <span className="text-[11px] font-bold text-white/60 block mt-1">
                  Across all 3 acoustic zones
                </span>
              </div>
            </div>

            {/* Zone Description Callout */}
            <div className="mt-4 p-4 rounded-xl bg-[#19092b]/60 border border-white/10 text-xs sm:text-sm text-white/80 leading-relaxed flex items-start gap-3">
              <span className="text-lg shrink-0">💡</span>
              <div>
                <strong>{currentZone.name} Experience:</strong> {currentZone.description}
              </div>
            </div>
          </div>

          {/* Extended Area & Peripheral Capacity Table */}
          <div className="rounded-[1.8rem] bg-[#25123d] border-2 border-[#2e1065] shadow-[6px_6px_0_#ec4899] overflow-hidden">
            <div className="p-6 sm:p-7 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4
                  className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#fdf4ff]"
                  style={{ fontFamily: 'var(--display)' }}
                >
                  Extended Area & Peripheral Capacity
                </h4>
                <p className="text-xs sm:text-sm text-[#fdf4ff]/70 mt-0.5">
                  The outer zone covers a much larger footprint than the dancefloor. Speech intelligibility is maintained without shouting.
                </p>
              </div>
              <div className="text-xs font-black uppercase tracking-wider bg-[#FFB400] text-[#1e0538] px-3.5 py-1.5 rounded-full border border-[#1e0538] shrink-0 self-start sm:self-center">
                Total: 500–800 People
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#19092b] text-[#fdf4ff]/60 border-b border-white/10 uppercase tracking-wider text-[11px] font-black">
                    <th className="py-3 px-4 sm:px-6">Zone</th>
                    <th className="py-3 px-4">SPL Range</th>
                    <th className="py-3 px-4">Radius</th>
                    <th className="py-3 px-4">Crowd Density</th>
                    <th className="py-3 px-4">Outdoor Cap</th>
                    <th className="py-3 px-4 sm:px-6">Indoor Cap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-medium">
                  {ZONES.map((zone) => (
                    <tr key={zone.name} className="hover:bg-white/[0.03] transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-white flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: zone.color }}
                        />
                        <span>{zone.name}</span>
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-[#FFB400]">
                        {zone.spl}
                      </td>
                      <td className="py-3.5 px-4 font-mono">{zone.distance}</td>
                      <td className="py-3.5 px-4 text-white/70">{zone.density}</td>
                      <td className="py-3.5 px-4 font-bold text-[#fdf4ff]">
                        {zone.outdoorCap}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#fdf4ff]">
                        {zone.indoorCap}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-[#19092b]/80 font-black text-white border-t-2 border-white/15">
                    <td className="py-4 px-4 sm:px-6 uppercase tracking-wider text-[#FFB400]">
                      Total Event Footprint
                    </td>
                    <td className="py-4 px-4 font-mono text-white/60">—</td>
                    <td className="py-4 px-4 font-mono text-[#ec4899]">Up to 40 m</td>
                    <td className="py-4 px-4 text-white/60">—</td>
                    <td className="py-4 px-4 font-mono text-[#FFB400] text-sm sm:text-base">
                      500–800 people
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-mono text-[#FFB400] text-sm sm:text-base">
                      450–750 people
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Acoustic SPL Decay notes */}
            <div className="p-5 sm:p-6 bg-[#19092b]/50 border-t border-white/10 text-xs sm:text-sm text-white/75 space-y-2">
              <span className="font-black uppercase tracking-wider text-[#FFB400] block text-xs">
                Acoustic SPL Decay & Distance Mapping:
              </span>
              <p>
                Sound pressure levels follow inverse-square decay outdoors (<strong>-6 dB</strong> per doubling of distance from a point source) and room-reverberant containment indoors.
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/70 text-xs">
                <li>
                  <strong className="text-white">0–10 m (Dancefloor):</strong> Direct sound dominates (100–105 dBA / 110–115 dBC). High physical chest impact; ear protection recommended.
                </li>
                <li>
                  <strong className="text-white">10–20 m (Transition & Bar):</strong> SPL drops to 88–98 dBA. Mid-range clarity remains razor-sharp due to the constant-directivity horn, while sub-bass transitions into warm, audible tone.
                </li>
                <li>
                  <strong className="text-white">20–40 m (Outer Gathering):</strong> SPL drops to 75–88 dBA. High frequencies above 8 kHz gently roll off due to air absorption. Music is fully balanced, while conversation requires zero vocal strain.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        /* Horn Directivity & Zone Isolation Tab */
        <div className="rounded-[1.8rem] bg-[#25123d] border-2 border-[#2e1065] shadow-[6px_6px_0_#38bdf8] p-6 sm:p-8 space-y-8 animate-in fade-in duration-200">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#38bdf8] block mb-1">
              Acoustic Directivity Advantage
            </span>
            <h4
              className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#fdf4ff]"
              style={{ fontFamily: 'var(--display)' }}
            >
              Leveraging Horn Directivity for Zone Isolation
            </h4>
            <p className="text-xs sm:text-sm text-[#fdf4ff]/70 mt-1 max-w-2xl">
              The constant-directivity pattern of the SAWMOD tops (<strong>100° Horizontal × 70° Vertical</strong>) simplifies creating low-volume pockets without additional acoustic treatment.
            </p>
          </div>

          {/* Visual Schematic Diagram */}
          <div className="p-6 rounded-2xl bg-[#19092b] border border-white/10 flex flex-col items-center">
            <div className="w-full max-w-2xl relative py-8 px-4 flex flex-col items-center select-none font-mono text-xs">
              {/* Off Axis Top */}
              <div className="w-full flex items-center justify-between text-xs sm:text-sm font-bold text-[#38bdf8] mb-4">
                <span className="bg-[#38bdf8]/10 border border-[#38bdf8]/30 px-3 py-1 rounded-lg">
                  🍵 Off-Axis Chill & Bar Zone (75–85 dBA)
                </span>
                <span className="text-white/40 text-[11px]">45°–60° Off-Axis Drop (-6 to -12 dB)</span>
              </div>

              {/* Graphic Horn Cone */}
              <div className="relative w-full h-44 sm:h-52 border border-white/15 rounded-xl bg-gradient-to-r from-[#19092b] via-[#25123d] to-[#19092b] overflow-hidden flex items-center">
                {/* 100° Horn Beam polygon */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-full"
                  style={{
                    clipPath: 'polygon(0% 50%, 100% 0%, 100% 100%)',
                    background:
                      'radial-gradient(ellipse at left, rgba(255, 180, 0, 0.45) 0%, rgba(244, 63, 94, 0.35) 60%, rgba(236, 72, 153, 0.15) 100%)',
                  }}
                />

                {/* Rig representation on left */}
                <div className="relative z-10 ml-4 p-3 rounded-xl bg-black/80 border-2 border-[#FFB400] text-center shadow-lg">
                  <span className="text-lg block">🔊</span>
                  <span className="text-[10px] font-black uppercase text-[#FFB400] block mt-0.5">
                    Sub Stack +
                  </span>
                  <span className="text-[10px] font-bold text-white block">
                    SAWMOD Top
                  </span>
                </div>

                {/* Central Beam Text */}
                <div className="relative z-10 flex-1 flex flex-col items-center text-center px-4">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#FFB400] bg-black/60 px-3 py-1 rounded-full border border-[#FFB400]/40">
                    Main Beam (100° H Cone)
                  </span>
                  <span className="text-sm sm:text-base font-black text-white mt-1">
                    100–105 dBA Core Dancefloor
                  </span>
                  <span className="text-[11px] text-white/70">
                    Full frequency response & razor-sharp phase cohesion
                  </span>
                </div>

                {/* Boundary indicators */}
                <div className="absolute right-4 top-2 text-[10px] text-white/40 font-mono">
                  100° Horn Boundary
                </div>
                <div className="absolute right-4 bottom-2 text-[10px] text-white/40 font-mono">
                  100° Horn Boundary
                </div>
              </div>

              {/* Off Axis Bottom */}
              <div className="w-full flex items-center justify-between text-xs sm:text-sm font-bold text-[#38bdf8] mt-4">
                <span className="bg-[#38bdf8]/10 border border-[#38bdf8]/30 px-3 py-1 rounded-lg">
                  🍹 Off-Axis Food & Lounge Zone (75–85 dBA)
                </span>
                <span className="text-white/40 text-[11px]">Zero vocal strain for chat</span>
              </div>
            </div>
          </div>

          {/* Two-Column Explainer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#19092b] border border-white/10">
              <div className="flex items-center gap-2 mb-2 text-sm font-black uppercase tracking-wider text-[#FFB400]">
                <span>🎯</span>
                <span>On-Axis vs. Off-Axis Dynamics</span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Standing inside the <strong>100° horizontal cone</strong> delivers the full frequency response, direct transients, and impactful punch. Stepping outside that 100° arc drops mid/high frequency energy by <strong>6 to 12 dB almost immediately</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#19092b] border border-white/10">
              <div className="flex items-center gap-2 mb-2 text-sm font-black uppercase tracking-wider text-[#38bdf8]">
                <span>🗺️</span>
                <span>Smart Venue & Gathering Layout</span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Position bar, food, or chill seating areas <strong>45°–60° off-axis</strong> from the front of the tops. The high-frequency cutoff outside the horn pattern naturally creates a quiet conversational zone right next to the stage—without needing to turn down the master volume for the dancers!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
