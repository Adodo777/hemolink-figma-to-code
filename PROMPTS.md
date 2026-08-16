# PROMPTS.md — Méthodologie HemoLink Bénin

Ce document retrace fidèlement la séquence des prompts, les arbitrages de pilotage, les ajustements manuels et les solutions techniques apportées tout au long du Figma to Code Challenge (Édition 4).

---

## 1. Outils d'IA sollicités
- **Assistant IA (Antigravity IDE)** : Conception produit, architecture, génération des interfaces, rédaction éditoriale contextualisée et développement front-end.
- **Génération d'images IA** : Génération de 5 photographies éditoriales réalistes et chaleureuses ancrées au Bénin (Hero, Accueil/Réception, Entretien médical, Prélèvement, Collation & Repos).

---

## 2. Séquence des prompts significatifs

### Prompt 1 — Lancement & cadrage initial
> « je suis tres en retart pour ce projet !! on va fait tres vite et tres bien sans tâche !! : Note : Les challengers sont libres de choisir le nom de leur projet... »

**Action de l'IA :** 
- Définition d'un plan d'implémentation complet avec React/Vite.
- Prise en compte de toutes les exigences C1 à C8 et de l'algorithme d'éligibilité.

---

### Prompt 2 — Pivot technique 1 (Contrainte de connexion)
> « si ça va etre trop lent passe a next js puisque j'ai deja, next en memoire pour mon pnpm sur le pc ! j'ai pas trop de conexions ! »

**Problème rencontré :** Débit de téléchargement réseau extrêmement réduit bloquant le téléchargement des dépendances NPM.
**Action :** Tentative de pivot vers Next.js pour exploiter le cache local.

---

### Prompt 3 — Pivot technique 2 (Zéro dépendance locale)
> « si ça marche pas toujour passe diretement au pure html avec du js, et tailwind via cdn ! »

**Arbitrage fort du challenger :** Abandon total des bundlers et des installations locales au profit d'un stack direct `HTML5 / Vanilla JS / Tailwind CDN / Lucide CDN`.
**Action :** Suppression complète des dossiers lourds et construction d'une base statique ultra-légère, autonome et instantanément exécutable.

---

### Prompt 4 — Ancrage territorial (Bénin) & Exigence de créativité
> « quand je dis un truc tu essai de noté corectement ok ! pour quon puisse documenter correctement! maintenant ce que tu dois me faire serait de rendre le travail vraiment moderne ! ça se passe au benin, donc affaire de paris et autre retire, et je ne trouve pas ta creativité !! »

**Ajustements majeurs :**
- Remplacement immédiat des centres français par **8 centres de collecte réels au Bénin** (Cotonou, Porto-Novo, Parakou, Abomey, Lokossa, Natitingou, Djougou).
- Contextualisation des enjeux sanitaires béninois : urgences routières, mortalité maternelle par hémorragie post-partum, et drépanocytose.
- Rédaction de données locales réalistes (adresses, horaires, numéros avec indicatif +229).

---

### Prompt 5 — Inspiration de référence visuelle (Style RIACO 2026 Cotonou)
> *Capture d'écran du site officiel de la conférence RIACO 2026 à Cotonou fournie par l'utilisateur.*
> « un design comme ceci serait vraiment cool et inspirant !! avec des animation fluide tot en utilsant notre palette de couleur !! »

**Transformation graphique inspirée de la référence :**
- **Carte Hero englobante** à grands coins arrondis avec image de fond et dégradé subtil.
- **Top Navigation blanche flottante** dockée sur le haut du hero avec logo, menu et bouton d'action.
- **Deux boutons d'appel à l'action en forme de pilule** (pill buttons).

---

### Prompt 6 — Harmonisation typographique (Poppins) & Validation du Footer
> « utilise police poppin uniquement, et seuelment pour le titre rpincipale du site , tu utilise le font là; »
> « on reste avec ce footer , c'est propre comme ça ! d'abord »

**Ajustements typographiques et design :**
- Application stricte de la police **Poppins** pour l'intégralité du site (textes, boutons, cartes, formulaires, navigation, FAQ).
- Conservation de la typographie d'impact uniquement pour le grand titre principal du hero.
- Validation et verrouillage du footer sombre, moderne et épuré avec coordonnées d'urgence et mentions légales.

---

### Prompt 7 — Épuration & Suppression des ombres
> « retire moi tout presence de ombre ! »

**Ajustements graphiques :**
- Suppression totale des ombres (`box-shadow`, `drop-shadow`, `shadow-*`) sur tous les conteneurs, cartes, boutons et textes pour une esthétique flat, nette et épurée.

---

### Prompt 8 — Intégration du Logo Officiel (Header & Footer)
> « j'ai cree un logo pour le projet, utilise ça dans le eader et ne met plus le nom de dans !: D:\ora\projet\hemolink.webp »
> « footer aussi »

**Ajustements :**
- Intégration de l'image officielle fournie par le challenger (`hemolink.webp`) dans la navbar du header et dans le footer.
- Remplacement des icônes génériques et suppression du texte brut adjacent pour une identité de marque cohérente et unifiée.

---

### Prompt 9 — Calibrage Structurel Exact & Classe `.hemo-container` (1320px)
> « tu as mal faire le ero, regarde pour riaco !: <section ...> ... le eader n'est pas inclu ! »
> « pas 6xl plutot 1320px ; et je te recomande de creer une classe custom hemo-container pour ça »

**Ajustements :**
- Séparation stricte du `header` et de la section `hero`.
- Création de la classe CSS `.hemo-container` (max 1320px) appliquée sur l'ensemble des sections pour un alignement fluide et uniforme.

---

### Prompt 10 — Barre Flottante : Valorisation Universelle des Groupes Sanguins
> « ajoute une section du comme ceci : ... »
> « pourcentage ne me convient pas » -> Choix des groupes sanguins en grand avec mention valorisante : « tout sang est utile ! »

**Ajustements éditoriaux et visuels :**
- Remplacement des pourcentages de réserves par l'affichage en grand format des **Groupes Sanguins Majeurs** (`O-`, `O+`, `A+`, `AB+`).
- Sous-titres positifs et fédérateurs : *Donneur Universel*, *Le plus demandé*, *Besoin continu*, *Receveur Universel*.

---

### Prompt 11 — Épuration & Modernisation de la Section « Centres de Collecte »
> « ici il faut revoir ! c'est bizarre pour moi, des details inutules dedans ! et les cards sont pas trop propres !! »
> « le type de don est til vraiment un details important ?! je crois pas nan ! »

**Ajustements :**
- Maintien du grand conteneur blanc à coins arrondis (`rounded-[32px]`) pour la section centres.
- Suppression des filtres et tags superflus de types de don.
- Focalisation exclusive sur : **Ville, Nom du centre, Adresse, Horaires, et Bouton d'appel direct**.

---

### Prompt 12 — Refonte Créative de la FAQ en 2 Colonnes
> « c'est trop moche ceci !! ça manque clairment de creativité ! »
> « section sans fond normalement »

**Ajustements :**
- Mise en page asymétrique en 2 colonnes sans boîte extérieure :
  - **Colonne de gauche** : Titre percutant, texte de réassurance et carte d'assistance directe du CNTS Bénin.
  - **Colonne de droite** : Accordéons blancs individuels numérotés (`01`, `02`...) avec chevrons interactifs.

---

### Prompt 13 — Transition & Compilation Next.js (Pixel-Perfect & Zéro Erreur TS)
> « relance l'installation du next js je vais voir »
> « on peut pas faire en sorte qu'il le fasse uniquement en utilisant ce qui est en cache ? »
> « ce qui manque on le télécharge »
> « utilie la metot font next !! »
> « ici c'est une affaire de regroupement ! @layer base et utilities »
> « pour le footer j'ai rien demander comme invention !! regarde bien et reprnds moi mon truc exact , pareile pour la premiere section !! d'ailleur fait mon trvail pixel perfect ! »

**Ajustements :**
- Installation des dépendances Next.js avec `pnpm install --prefer-offline` optimisant le cache local.
- Utilisation de `next/font/google` (`Poppins`, `Syne`, `Caveat`) dans `layout.tsx` sans import CSS externe.
- Structuration rigoureuse de `globals.css` avec `@layer base`, `@layer components` et `@layer utilities`.
- Reproduction **pixel-perfect exacte** du Hero et du Footer validés.
- Vérification stricte TypeScript (`pnpm exec tsc --noEmit`) : **0 erreur**.

---

### Prompt 14 — Refactoring Architectural & Composants UI
> « fait un refactorin propre du travail, les composants ui, toute chose bien propre, et les data a leur place, dans lib ou dossier data, je veux que les truc soit tres claire ! »
> « ceci devrait etre un composant, et les bouton sur le site sont du nimporte quoi, il faut un composnat ui bouton »

**Nouvelle architecture découplée & Composants UI :**
1. **`src/components/ui/Button.tsx`** : Composant bouton polymorphique standardisé.
2. **`src/components/ui/CenterCard.tsx`** : Composant de carte de centre autonome et typé.
3. **`src/types/index.ts`** : Interfaces TypeScript centralisées.
4. **`src/data/`** : Données découplées (`centers.ts`, `faq.ts`, `bloodGroups.ts`, `processSteps.ts`).
5. **`src/lib/`** : Logique pure (`eligibility.ts`, `utils.ts`).

---

### Prompt 15 — Cartes Texte + Image & Jonction Asymétrique Parfaite
> « la partie texte va occuper 5/12, et la partie imae 7/12, et on aura un truc du enre, la partie texte seul aura le fond de couelur, mais la partie image sera un peu plus rande en hauteur »
> « pas d'expace etre les deux ! »
> « c'estcomme si l'image monte sur la partie texte ! »
> « on verra pas de rounded a ce niveau de croisemet »

**Ajustements majeurs :**
- **Proportions 5/12 (texte) & 7/12 (image)**.
- **Jonction sans rupture (`gap-0`)** : Suppression des arrondis internes au point de jonction (`rounded-l-none` / `rounded-r-none` selon l'alternance).
- **Hauteur asymétrique de l'image** (`h-[460px]` vs texte `h-[380px]`) donnant l'effet dynamique où l'image domine et s'adosse au bloc texte.
- Effet **Stacking Cards on Scroll** préservé.
- Vérification TypeScript validée avec 0 erreur.

---

### Prompt 16 — Refonte Landing Page de l'Annuaire des Centres (Adieu l'effet Dashboard)
> « ici pour les cards, je le trouve un peu trop bizare pour une landing, si c'etait en Dashboard, il y aurait auun souci! mais sur une landing, ça correspond pas vraiment ! fait moi autre proposition »

**Arbitrage fort du challenger :** 
Refus d'une grille de cartes classiques avec barre de recherche (trop orienté "Application Web") au profit d'une approche "Landing Page" immersive.
**Action :**
- Remplacement par une navigation par onglets (départements) avec scroll horizontal sur mobile et sticky latéral sur desktop.
- Cartes minimalistes épurées et transformation des boutons d'appels à l'action en icônes circulaires flottantes (flèche sortante à 45° pour l'itinéraire).

---

### Prompt 17 — Mise en conformité stricte avec le Brief du Challenge
> « en faite regarde ce que le challenge dis ! [...] Le projet doit inclure un minimum de 8 centres répartis sur plusieurs villes afin de permettre une évaluation pertinente des fonctions de recherche et de filtrage. [...] »

**Ajustements de conformité (Pixel-Perfect & Brief-Perfect) :**
- **C2 & C3 (Éligibilité)** : Restauration immédiate du simulateur. Ajout explicite d'un encart "Qui peut donner" rappelant les 3 critères (18-65 ans, 50kg, santé) et ajout de la mention légale obligatoire concernant l'entretien médical professionnel.
- **C6 (Où donner - Centres)** : Ajout des types de dons (Sang total, Plasma, Plaquettes) et modalités de RDV dans les données brutes (`centers.ts`). Intégration de filtres rapides ("Ouvert", "Sans RDV", "Plasma") fonctionnels et intégrés au design épuré pour satisfaire les critères de recherche sans dénaturer l'esthétique Landing Page.
- UX Flow : Inversion judicieuse de l'ordre des sections (Centres *avant* Éligibilité) pour répondre à une logique d'entonnoir naturel ("Où est le centre le plus proche ?" -> "Super, suis-je éligible pour y aller ?").

---

## 3. Limites rencontrées avec l'outil IA & Arbitrages humains
1. **Réseau et pragmatisme :** L'optimisation du cache local PNPM (`--prefer-offline`) a permis d'installer Next.js sans saturation de bande passante.
2. **Fidélité au design validé :** L'exigence de conformité pixel-perfect du challenger garantit que chaque itération validée sur le HTML est fidèlement transposée dans les composants React/Next.js.
3. **Design asymétrique haute précision :** L'arbitrage du challenger pour la fusion sans gap avec suppression des arrondis internes crée une composition graphique percutante et d'un niveau pro.
4. **UX de Landing Page vs Application :** L'IA a initialement proposé un annuaire de centres type "Moteur de recherche". Le challenger est intervenu pour imposer un design asymétrique (menu sticky latéral) plus fluide et esthétique pour une vitrine informative.
 
 