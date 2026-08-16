import { StepItem, PreparationTip } from '@/types';

export const donationSteps: StepItem[] = [
  {
    number: '01',
    title: 'Accueil & Enregistrement',
    subtitle: 'Formalités simples et bienveillantes',
    description: "Présentation d'une pièce d'identité valide et remplissage d'un court questionnaire médical strictement confidentiel auprès de notre équipe d'accueil.",
    image: '/step-1.jpg',
  },
  {
    number: '02',
    title: 'Entretien médical préalable',
    subtitle: 'Validation confidentielle par un soignant',
    description: "Prise de tension et échange confidentiel avec un médecin ou infirmier qualifié pour confirmer votre parfaite aptitude au don sans le moindre risque.",
    image: '/step-2.jpg',
  },
  {
    number: '03',
    title: 'Le Prélèvement',
    subtitle: 'Rapide, stérile et totalement indolore',
    description: "Confortablement installé, le prélèvement ne dure que quelques minutes. L'ensemble du matériel utilisé est stérile, individuel et à usage unique.",
    image: '/step-3.jpg',
  },
  {
    number: '04',
    title: 'Collation & Repos',
    subtitle: 'Moment convivial et boissons locales offertes',
    description: "Dégustation d'une collation réparatrice (jus de fruits locaux, eau minérale, biscuits) et court repos supervisé avant de reprendre votre journée avec la fierté d'avoir sauvé 3 vies.",
    image: '/step-4.jpg',
  },
];

export const preparationTips: PreparationTip[] = [
  {
    phase: 'Avant',
    tip: 'Bien manger et s’hydrater',
    detail: 'Ne venez jamais à jeun et buvez au moins 500ml d’eau.',
  },
  {
    phase: 'Pendant',
    tip: 'Rester détendu',
    detail: 'Respirez calmement, l’équipe médicale reste à vos côtés.',
  },
  {
    phase: 'Après',
    tip: 'Récupérer tranquillement',
    detail: 'Évitez les efforts physiques intenses pendant 24 heures.',
  },
];
