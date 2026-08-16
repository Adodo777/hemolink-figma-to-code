import { EligibilityInput, EligibilityResult } from '@/types';

/**
 * Moteur de calcul d'éligibilité au don de sang (Règles médicales Bénin)
 * - Âge : 18 à 65 ans
 * - Poids : >= 50 kg
 * - Délai : 3 mois (homme) / 4 mois (femme)
 */
export function checkEligibility(input: EligibilityInput): EligibilityResult {
  const blockingReasons: string[] = [];
  let nextDateStr: string | null = null;

  // 1. Contrôle d'âge
  if (input.age < 18) {
    blockingReasons.push(`Vous avez ${input.age} an(s). L'âge minimum légal pour faire un don de sang est de 18 ans.`);
  } else if (input.age > 65) {
    blockingReasons.push(`Vous avez ${input.age} ans. La limite d'âge pour donner son sang est de 65 ans révolus.`);
  }

  // 2. Contrôle de poids
  if (input.weight < 50) {
    blockingReasons.push(`Votre poids est de ${input.weight} kg. Un minimum de 50 kg est obligatoire pour garantir le volume de prélèvement sans risque.`);
  }

  // 3. Contrôle du délai depuis le dernier don
  if (input.lastDonationDate) {
    const lastDate = new Date(input.lastDonationDate);
    const today = new Date();
    const requiredMonths = input.gender === 'homme' ? 3 : 4;
    const nextDate = new Date(lastDate);
    nextDate.setMonth(nextDate.getMonth() + requiredMonths);

    if (today < nextDate) {
      nextDateStr = nextDate.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      blockingReasons.push(`Le délai réglementaire de ${requiredMonths} mois depuis votre dernier don n'est pas encore écoulé.`);
    }
  }

  return {
    eligible: blockingReasons.length === 0,
    reasons: blockingReasons,
    nextDate: nextDateStr,
  };
}
