import { Donor, BudgetItem, EventItem, CrewMember, DonationTier, FundraisingMilestone, BudgetData } from './types';

export const PAYPAL_POOL_URL = 'https://www.paypal.com/pool/9sXuCfXhbW?sr=ancr';
export const TELEGRAM_AYO_URL = 'https://t.me/ayodrab';

export const INITIAL_FUNDRAISING_GOAL = 11385;
export const CURRENT_TOTAL_RAISED = 1345;

// Optional manually maintained date when the total was verified.
// Set to null to omit. When provided, shown gently alongside the progress.
export const FUNDRAISING_LAST_UPDATED: string | null = null;

export const FLAGSHIP_NEO_BUDGET: BudgetData = {
  project: "SUBrina Soundsystem Build",
  location: "Germany",
  currency: "EUR",
  buffer_percentage: 10,
  summary: {
    net_subtotal: 10350, // Equipment & materials subtotal
    contingency_buffer: 1035, // 10% contingency
    grand_total: 11385
  },
  categories: [
    {
      id: "tops",
      name: "SAWMOD Horn Tops (2 Cabinets)",
      subtotal: 2090,
      items: [
        { name: "CNC 12 mm Baltic Birch Flatpacks", cost: 400 },
        { name: "3D-Printed Waveguide & Flange Set (PET-CF)", cost: 170 },
        { name: "4 × B&C 10NDL88 LF Drivers (10\")", cost: 780 },
        { name: "4 × B&C 4NDF34 MF Drivers (4\")", cost: 320 },
        { name: "2 × B&C DE360 / DH450H HF Drivers (1\")", cost: 260 },
        { name: "Hardware, Neutrik NL8 Sockets, Grilles & Foam", cost: 160 }
      ]
    },
    {
      id: "subs",
      name: "18\" Reflex Subwoofers (4 Cabinets)",
      subtotal: 3600,
      items: [
        { name: "CNC 18 mm Baltic Birch Flatpacks (Braced)", cost: 900 },
        { name: "4 × B&C 18DS115-8 Neodymium Drivers (18\")", cost: 2220 },
        { name: "M20 Pole Sockets, Bar Handles & Feet", cost: 260 },
        { name: "Powder-Coated Steel Grilles & Acoustic Foam", cost: 220 }
      ]
    },
    {
      id: "amplification",
      name: "Amplification, DSP & Rack",
      subtotal: 2200,
      items: [
        { name: "Subwoofer Amplifier: FP14000 / Class-D Power", cost: 830 },
        { name: "Tops Amplifier: FP10000Q / 4-Channel Class-D", cost: 750 },
        { name: "Standalone 4-in / 8-out Digital Signal Processor (DSP)", cost: 350 },
        { name: "Shock-Mount Wheeled Flight Case (8U/10U Rack)", cost: 270 }
      ]
    },
    {
      id: "cabling",
      name: "Cabling, Connectors & Power Distribution",
      subtotal: 700,
      items: [
        { name: "2 × 15 m 8×2.5 mm² Sommer Elephant NL8 Speaker Mains", cost: 220 },
        { name: "NL4 Sub Cables & Jumpers (4×4 mm²)", cost: 150 },
        { name: "Neutrik Connectors & XLR Patch Lines", cost: 110 },
        { name: "Custom 1U Pre-Wired Rack Patch Panel", cost: 120 },
        { name: "16 A CEE / Schuko Power Distribution Block", cost: 100 }
      ]
    },
    {
      id: "finish",
      name: "Protective Metallic Finish & Hardware",
      subtotal: 800,
      items: [
        { name: "Wood Sealer & 2K Black Basecoat", cost: 130 },
        { name: "2K Ultra-Clear Epoxy Resin & Chrome Pigment (Custom Finish)", cost: 240 },
        { name: "2K PU Protective Clear Topcoat", cost: 110 },
        { name: "Workshop Consumables, Abrasives & Fasteners", cost: 185 },
        { name: "2 × K&M 21339 M20 Distance Speaker Poles", cost: 135 }
      ]
    },
    {
      id: "covers",
      name: "Padded Transport Slipcovers (6 Units)",
      subtotal: 960,
      items: [
        { name: "4 × 18\" Subwoofer Covers (EPE Foam + Faux-Fur Lining)", cost: 540 },
        { name: "2 × SAWMOD Topcovers (Padded Trapezoidal)", cost: 320 },
        { name: "Heavy-Duty Zippers, Cinch Straps & Hardware", cost: 100 }
      ]
    }
  ]
};

// Staged build order: Tops first, then Amplification & DSP, then our own Subwoofers
export const FUNDRAISING_MILESTONES: FundraisingMilestone[] = [
  {
    id: 'milestone-1',
    targetAmount: 2090,
    title: 'Stage 1: 2 × SAWMOD Horn Tops',
    summary: 'The heart of SUBrina’s clarity',
    details: 'Designed by JW Audio with building guidance from Horner Audio. Five drivers per cabinet fire out of one horn flare for smooth point-source coherence.',
    isKeyHeart: true,
    tag: 'Step 1'
  },
  {
    id: 'milestone-2',
    targetAmount: 4990,
    title: 'Stage 2: Amplification, DSP & Cabling',
    summary: 'Power, processing, and protection limiters',
    details: 'With amps and processing in hand, we can test the tops and rent compatible reflex subs for events while we raise money for our own subs.',
    isKeyHeart: false,
    tag: 'Step 2'
  },
  {
    id: 'milestone-3',
    targetAmount: 8590,
    title: 'Stage 3: 4 × 18" Reflex Subwoofers',
    summary: 'Our own subs for deep, physical low end',
    details: 'Designed by Horner Audio. Four 18-inch reflex subwoofers tuned for bass you can physically feel without distortion.',
    isKeyHeart: false,
    tag: 'Step 3'
  }
];

export const INITIAL_BUDGET_ITEMS: BudgetItem[] = [
  {
    id: 'sawmod-tops',
    category: 'The Tops (Step 1)',
    title: '2 × SAWMOD Multiple Entry Horns',
    cost: 2090,
    funded: 1345,
    description: 'Designed by JW Audio with build support from Horner Audio. Five speaker drivers inside each cabinet, all firing out of the exact same horn.',
    icon: 'Megaphone',
    specs: '5 drivers per horn • JW Audio design • Point-source wavefront'
  },
  {
    id: 'amps-dsp',
    category: 'The Power & Brains (Step 2)',
    title: 'Amp Rack, DSP Processor & Cabling',
    cost: 2900,
    funded: 0,
    description: 'Powers the system cleanly with DSP crossover filtering and safety limiters to protect the drivers.',
    icon: 'Cpu',
    specs: 'Clean power rack • DSP crossovers • Driver protection'
  },
  {
    id: 'subwoofers',
    category: 'The Low End (Step 3)',
    title: '4 × 18" Reflex Subwoofers',
    cost: 3600,
    funded: 0,
    description: 'Designed by Horner Audio. Four 18-inch reflex subwoofers tuned for deep, effortless physical bass.',
    icon: 'Speaker',
    specs: 'Horner Audio design • 4× 18" drivers • Tuned reflex'
  }
];

export const DONATION_TIERS: DonationTier[] = [
  {
    id: 'tier-1',
    name: 'Kiss on the Cheek',
    minAmount: 15,
    monsterTitle: 'Friendly Supporter',
    perk: 'A playful kiss on the cheek (or an enthusiastic high-five!) and our heartfelt gratitude for helping us build.',
    badge: '💖 €15 Suggestion',
    color: 'from-emerald-400 to-teal-500'
  },
  {
    id: 'tier-2',
    name: 'Slow Tight Dance',
    minAmount: 30,
    monsterTitle: 'Dancefloor Sweetheart',
    perk: 'A slow, tight dance on the dancefloor with us when SUBrina is playing.',
    badge: '💃 €30 Suggestion',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'tier-3',
    name: 'DJ Song Request',
    minAmount: 60,
    monsterTitle: 'Track Selector',
    perk: 'Request a track during one of Ayo & Burcu’s DJ sets (we’ll do our best to blend it into the dancefloor vibe!).',
    badge: '🎵 €60 Suggestion',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'tier-4',
    name: 'You + 5 on the Guestlist',
    minAmount: 200,
    monsterTitle: 'Crew Backer',
    perk: 'Entry for you and five friends to a SUBrina event of your choice. Message Ayo to arrange it.',
    badge: '👑 €200 Suggestion',
    color: 'from-amber-400 to-pink-500'
  }
];

export const INITIAL_DONORS: Donor[] = [
  {
    id: 'donor-herzberg',
    name: 'Julia P',
    amount: 1250,
    date: 'First Backer',
    message: 'To make the  HRZBRN aka Erwachsenenwochenende sound even more amazing, we chip in for SUBrina',
    isArtist: false,
    isAnonymous: false,
    tierName: 'Guestlist: You + 5 Friends',
    badge: 'First Backer',
    monsterAvatar: '💖'
  }
];

export const INITIAL_ANONYMOUS_COUNT = 0;
export const INITIAL_ANONYMOUS_TOTAL = 0;

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'ev-1',
    title: 'SUBrina FUNdraiser: Round 01 @ Lark',
    subtitle: 'Come dance with us at our first fundraiser',
    date: '2026-10-09',
    formattedDate: 'OCTOBER 9, 2026 · 21:00 – 04:00',
    time: '21:00 – 04:00',
    venue: 'Lark, Berlin',
    city: 'Berlin',
    description: 'Come dance with us at our first fundraiser! We have an opening soundbath, live electronic hardware sets, drag performance, and DJs carrying us through the night. These nights help fund the SUBrina build.',
    lineup: [
      'Soundbath by Lai Raw',
      'Live electronic set by Kallairaw',
      'DJ set by JCow',
      'B2B by asphalt angel & Juicy B',
      'Zak & Luis (drag act)',
      'Live Auction!'
    ],
    tags: ['Lark Berlin'],
    ticketPrice: 'Entry: €15. Nobody will be turned away for lack of funds.',
    ticketLink: 'https://ra.co/events/2545819',
    status: 'upcoming'
  },
  {
    id: 'ev-2',
    title: 'SUBrina FUNdraiser: Round 02 @ Secret Venue',
    subtitle: 'Round two of dancing for the build',
    date: '2026-11-21',
    formattedDate: 'NOVEMBER 21, 2026 · 21:00 – 04:00',
    time: '21:00 – 04:00',
    venue: 'Secret Venue, Berlin',
    city: 'Berlin',
    description: 'Round two of our SUBrina fundraiser dances! An ambient cello soundbath, live electronic sets, and DJ selections into the early morning. Venue announced closer to the date. These nights help fund the SUBrina build.',
    lineup: [
      'Soundbath by SIC and Simon Hoffman (electronic & Cello)',
      'Live set by Avi Schneider',
      'More acts & DJs TBA'
    ],
    tags: ['Secret Venue'],
    ticketPrice: 'Entry: €15. Nobody will be turned away for lack of funds.',
    ticketLink: '', // Secret venue, contact route provided directly
    status: 'upcoming'
  }
];

export const CREW_MEMBERS: CrewMember[] = [
  {
    id: 'crew-burcu',
    name: 'Burcu',
    monsterAlias: 'Community Organizer',
    role: 'Event Producer & Performer',
    bio: 'Longtime Berlin dancer, performer, and organizer with Agentur für Nightlife. Passionate about warm, safe dancefloors and bringing sound quality into our own hands so our friends get the sound they deserve.',
    monsterEmoji: '🎀',
    specialty: 'Community events, gatherings, stage production',
    favoriteHz: '42 Hz',
    favoriteGenre: 'Deep Grooves & Fast Rhythms',
    pronouns: 'she/her',
    accentColor: 'from-pink-500 to-purple-600'
  },
  {
    id: 'crew-ayo',
    name: 'Ayo',
    monsterAlias: 'Sound Builder',
    role: 'DJ & Sound Builder',
    bio: 'DJ with Heart Chor and event organizer. Working closely with Horner Audio in the workshop to assemble, wire, and tune the SAWMOD horns and reflex subs for clear, non-fatiguing sound.',
    monsterEmoji: '⚡',
    specialty: 'Speaker building, workshop assembly, DJ sets',
    favoriteHz: '33 Hz',
    favoriteGenre: 'Bass & Breakbeats',
    pronouns: 'they/he',
    accentColor: 'from-amber-400 to-pink-500'
  }
];
