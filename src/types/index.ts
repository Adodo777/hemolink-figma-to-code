export interface Center {
  id: number;
  name: string;
  city: string;
  department: string;
  address: string;
  hours: string;
  isOpen: boolean;
  phone: string;
  mapUrl?: string;
  donationTypes: string[];
  appointment: string;
}

export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export interface BloodGroupSummary {
  group: string;
  label: string;
}

export interface StepItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface PreparationTip {
  phase: 'Avant' | 'Pendant' | 'Après';
  tip: string;
  detail: string;
}

export interface EligibilityInput {
  age: number;
  weight: number;
  gender: 'homme' | 'femme';
  lastDonationDate?: string;
}

export interface EligibilityResult {
  eligible: boolean;
  reasons: string[];
  nextDate: string | null;
}
