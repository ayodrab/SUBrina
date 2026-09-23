import { Donor, BudgetItem, EventItem, CrewMember, DonationTier, FundraisingMilestone } from './types';

export const PAYPAL_POOL_URL = 'https://paypal.me/subrinasoundsystem';

export const INITIAL_FUNDRAISING_GOAL = 8500;

export const FUNDRAISING_MILESTONES: FundraisingMilestone[] = [
  {
    id: 'milestone-1',
    targetAmount: 2500,
    title: '2 SAWMOD Speakers',
    summary: 'The heart and most important part of the system',
    details: 'Designed by JW audio with building support from Horner Audio. Five speaker drivers inside each cabinet, all firing out of the exact same horn for fantastic sonic coherence.',
    isKeyHeart: true,
    tag: 'Heart of the Rig'
  },
  {
    id: 'milestone-2',
    targetAmount: 5500,
    title: 'Amp Rack & DSP',
    summary: 'Dedicated power amplifiers & digital signal processing',
    details: 'Clean, reliable high-headroom power with FIR filtering and safety limiters to protect the speakers and keep the sound tight and musical.',
    isKeyHeart: false,
    tag: 'Muscle & DSP'
  },
  {
    id: 'milestone-3',
    targetAmount: 8500,
    title: '4 × 18" Reflex Subwoofers',
    summary: 'Complete system ready to shake dances up to 400 people',
    details: 'Designed by Horner Audio. Four 18-inch reflex subwoofers for huge, effortless physical bass indoors and outdoors.',
    isKeyHeart: false,
    tag: 'Full Rig Complete'
  }
];

export const INITIAL_BUDGET_ITEMS: BudgetItem[] = [
  {
    id: 'sawmod-tops',
    category: 'The Tops (Heart of the Rig)',
    title: '2 × SAWMOD Multiple Entry Horns',
    cost: 2500,
    funded: 1250,
    description: 'Designed by JW audio with building partner Horner Audio. 5 speaker drivers inside each cabinet, all playing out of the exact same horn.',
    icon: 'Megaphone',
    specs: '5 drivers per horn • JW audio design • Point-source wavefront'
  },
  {
    id: 'amps-dsp',
    category: 'The Muscle & Brains',
    title: 'Amp Rack & DSP Processor',
    cost: 3000,
    funded: 0,
    description: 'Powers the entire rig cleanly with built-in DSP processing and speaker protection limiters.',
    icon: 'Cpu',
    specs: 'Clean power rack • DSP crossovers • Driver protection'
  },
  {
    id: 'subwoofers',
    category: 'The Low End',
    title: '4 × 18" Reflex Subwoofers',
    cost: 3000,
    funded: 0,
    description: 'Designed by our building partner Horner Audio. 4 quad 18-inch reflex subwoofers tuned for deep, musical, and effortless physical bass.',
    icon: 'Speaker',
    specs: 'Horner Audio design • 4x 18" drivers • Tuned reflex'
  }
];

export const DONATION_TIERS: DonationTier[] = [
  {
    id: 'tier-1',
    name: 'Heartfelt Thank You',
    minAmount: 15,
    monsterTitle: 'Audio Gremlin First Class',
    perk: 'A heartfelt thank you, endless love, and your name etched into our community hearts.',
    badge: '💖 Heartfelt Thank You',
    color: 'from-emerald-400 to-teal-500'
  },
  {
    id: 'tier-2',
    name: 'Chest Hug of Bass',
    minAmount: 30,
    monsterTitle: 'Sub-Frequency Empress',
    perk: 'SUBrina will personally hug your whole chest with warm, physical sub-bass at our very next rave.',
    badge: '🔊 Chest Hug of Bass',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'tier-3',
    name: 'DJ Song Request',
    minAmount: 60,
    monsterTitle: 'Multiple Entry Horn VIP',
    perk: 'Wish for a song during a set! You get to make a direct track request from the DJs (Burcu & Ayo) during one of our sets.',
    badge: '🎵 DJ Song Request',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'tier-4',
    name: 'Guestlist: You + 5 Friends',
    minAmount: 200,
    monsterTitle: 'Acoustic Legend',
    perk: 'Guest list for you plus five friends (6 dancers total!) at our official debut party + community backer recognition.',
    badge: '👑 Guestlist: You + 5',
    color: 'from-amber-400 to-pink-500'
  }
];

export const INITIAL_DONORS: Donor[] = [
  {
    id: 'donor-herzberg',
    name: 'Herzberg',
    amount: 1250,
    date: 'First Backer',
    message: 'So excited to see SUBrina roar to life! Big support for Burcu, Ayo, and the community sound! 💖⚡',
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
    subtitle: 'First gathering & FUNdraiser dance',
    date: '2026-10-09',
    formattedDate: 'FRI, OCT 09 • 22:00 - LATE',
    time: '22:00 - LATE',
    venue: 'Lark, Berlin',
    city: 'Berlin',
    description: 'Join Burcu and Ayo for the inaugural SUBrina FUNdraiser party at Lark. Quality selectors, good friends, and every single euro goes straight into plywood, drivers, and amplification.',
    lineup: ['Burcu & Ayo (B2B)', 'Friends & Community Selectors'],
    tags: ['FUNdraiser Dance', 'Lark Berlin', 'Round 01'],
    ticketPrice: 'Donations at door / Suggested €10-15',
    status: 'upcoming'
  },
  {
    id: 'ev-2',
    title: 'SUBrina FUNdraiser: Round 02 @ Secret Venue, Neukölln',
    subtitle: 'Late night bass session & community gathering',
    date: '2026-11-21',
    formattedDate: 'SAT, NOV 21 • 23:00 - LATE',
    time: '23:00 - VERY LATE',
    venue: 'Secret Venue in Neukölln (The Other Side)',
    city: 'Berlin',
    description: 'Round two of our FUNdraiser journey in an intimate secret venue in Neukölln. Deep grooves, heavy soundsystem music, and warm community vibes into the dawn.',
    lineup: ['Special Guests TBA', 'Burcu', 'Ayo'],
    tags: ['Secret Venue', 'Neukölln', 'Round 02'],
    ticketPrice: 'Donations / FUNdraiser Entry',
    status: 'upcoming'
  }
];

export const CREW_MEMBERS: CrewMember[] = [
  {
    id: 'crew-burcu',
    name: 'Burcu',
    monsterAlias: 'Nightlife Curator',
    role: 'Nightlife Curator, Producer & Performer',
    bio: 'In the Berlin nightlife scene for years as a dancer, performer, and producer through her Agentur für Nightlife. Passionate about creating safe, high-vibe spaces and taking sound quality into our own hands so our community gets the sound they truly deserve.',
    monsterEmoji: '🎀',
    specialty: 'Event production, nightlife curation, community care',
    favoriteHz: '42 Hz (Deep Chest Warmth)',
    favoriteGenre: 'Deep Grooves & Fast Rhythms',
    pronouns: 'she/her',
    accentColor: 'from-pink-500 to-purple-600'
  },
  {
    id: 'crew-ayo',
    name: 'Ayo',
    monsterAlias: 'Acoustic Alchemist',
    role: 'DJ, Sound Tinkerer & Builder',
    bio: 'Deeply involved in nightlife and club culture with Heart Chor as a DJ and event organizer. Partnering closely with Horner Audio to build, wire, and tune our Multiple Entry Horn system for laser-sharp coherence and zero ear fatigue.',
    monsterEmoji: '⚡',
    specialty: 'Acoustics, speaker building, DSP alignment, DJ sets',
    favoriteHz: '33 Hz (Physical Sub-Bass)',
    favoriteGenre: 'Bass & Breakbeats',
    pronouns: 'they/he',
    accentColor: 'from-amber-400 to-pink-500'
  }
];
