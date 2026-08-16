# HemoLink Bénin — Figma to Code Challenge (Édition 4)

**Réalisé par :** [@Adodo777](https://github.com/Adodo777)
## 📌 Présentation du Projet
**HemoLink Bénin** est une landing page moderne, accessible et pédagogique dédiée à l'information et à la sensibilisation sur le don de sang au Bénin.

Inspirée des standards graphiques modernes (comme l'événement **RIACO 2026** à Cotonou), la plateforme combine :
1. Une **identité visuelle forte et humaine** (Hero avec carte flottante, compte à rebours live, typographies *Syne*, *Caveat* et *Plus Jakarta Sans*).
2. Un **ancrage territorial 100% béninois** (8 centres de transfusion dans tout le pays, enjeux spécifiques de santé publique tels que les hémorragies post-partum et la drépanocytose).
3. Une **ergonomie soignée et accessible** sans aucun bug ni blocage réseau.

---

## 🛠️ Stack & Choix Techniques
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript** (Strict mode)
- **Tailwind CSS**
- **Lucide Icons**
- **Google Fonts** (*Poppins* en exclusivité)

> **Architecture & Données** : La page utilise une approche purement statique avec des données locales (fichiers dans `src/data/`). Aucun backend ni base de données ne sont nécessaires pour l'exécution, garantissant des performances maximales et un déploiement instantané.

---

## 📋 Sections & Fonctionnalités Implémentées

| Réf. | Section | Implémentation |
|---|---|---|
| **C1** | **Pourquoi donner** | Enjeux majeurs au Bénin (accidents, santé maternelle, drépanocytose) intégrés dans une UI asymétrique texte/image. |
| **C2** | **Qui peut donner** | Rappel visuel direct des 3 critères clés (18-65 ans, poids &ge; 50 kg, santé) avant le formulaire. |
| **C3** | **Test d'éligibilité** | Simulateur fonctionnel (âge, poids, délai H/F) avec message bloquant explicite, calcul de date future et mention médicale obligatoire. |
| **C4** | **Déroulement du don** | Parcours clair des 4 grandes étapes via le composant `ProcessSteps`. |
| **C5** | **Préparation au don** | Inclus nativement dans la FAQ (Conseils Avant, Pendant, Après). |
| **C6** | **Où donner (Centres)** | Annuaire "Landing Page Style" groupé par départements. Affichage des **types de dons** et **modalités de RDV** avec filtres fonctionnels pour **8 centres réels au Bénin**. |
| **C7** | **État des réserves** | Barre flottante continue valorisant l'universalité de tous les groupes sanguins. |
| **C8** | **FAQ & Idées reçues** | Accordéon en 2 colonnes déconstruisant les peurs courantes (douleur, hygiène, durée). |

---

## 🚀 Lancement Local
```bash
pnpm install
pnpm dev
```
Rendez-vous sur [http://localhost:3000](http://localhost:3000).

## 🌍 Déploiement
Ce projet est prêt à être déployé sur **Vercel** ou **Netlify** sans configuration supplémentaire.
