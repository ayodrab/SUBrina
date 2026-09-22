export interface Donor {
  id: string;
  name: string;
  amount: number;
  date: string;
  message?: string;
  isArtist?: boolean;
  artistHandle?: string;
  isAnonymous: boolean;
  tierName?: string;
  badge?: string;
  monsterAvatar?: string;
}

export interface FundraisingMilestone {
  id: string;
  targetAmount: number;
  title: string;
  summary: string;
  details: string;
  isKeyHeart?: boolean;
  tag: string;
}

export interface BudgetItem {
  id: string;
  category: string;
  title: string;
  cost: number;
  funded: number;
  description: string;
  icon: string;
  specs: string;
}

export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  formattedDate: string;
  time: string;
  venue: string;
  city: string;
  description: string;
  lineup: string[];
  tags: string[];
  ticketPrice: string;
  status: 'upcoming' | 'selling_fast' | 'free_entry' | 'fundraiser_special';
  ticketLink?: string;
}

export interface CrewMember {
  id: string;
  name: string;
  monsterAlias: string;
  role: string;
  bio: string;
  monsterEmoji: string;
  specialty: string;
  favoriteHz: string;
  favoriteGenre: string;
  pronouns: string;
  accentColor: string;
}

export interface DonationTier {
  id: string;
  name: string;
  minAmount: number;
  perk: string;
  monsterTitle: string;
  badge: string;
  color: string;
  icon?: string;
}
