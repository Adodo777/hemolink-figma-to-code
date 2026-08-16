# PROMPTS.md — Méthodologie HemoLink Bénin

Ce document retrace fidèlement la séquence des prompts, les arbitrages de pilotage, les ajustements manuels et les solutions techniques apportées tout au long du Figma to Code Challenge (Édition 4).

---

## 1. Outils d'IA sollicités
- **Assistant IA (Antigravity IDE)** : Conception produit, architecture, génération des interfaces, rédaction éditoriale contextualisée et développement front-end.
- **Génération d'images IA** : Génération de 5 photographies éditoriales réalistes et chaleureuses ancrées au Bénin (Hero, Accueil/Réception, Entretien médical, Prélèvement, Collation & Repos).

---

## 2. Séquence des prompts significatifs

### Prompt 1 — Lancement & cadrage initial
> « Je suis très en retard pour ce projet !! On va faire très vite et très bien, sans faute !! Note : Les challengers sont libres de choisir le nom de leur projet... »

**Action de l'IA :** 
- Définition d'un plan d'implémentation complet avec React/Vite.
- Prise en compte de toutes les exigences C1 à C8 et de l'algorithme d'éligibilité.

---

### Prompt 2 — Pivot technique 1 (Contrainte de connexion)
> « Si ça va être trop lent, passe à Next.js puisque j'ai déjà Next en mémoire pour mon pnpm sur le PC ! Je n'ai pas trop de connexion ! »

**Problème rencontré :** Débit de téléchargement réseau extrêmement réduit bloquant le téléchargement des dépendances NPM.
**Action :** Tentative de pivot vers Next.js pour exploiter le cache local.

---

### Prompt 3 — Pivot technique 2 (Zéro dépendance locale)
> « Si ça ne marche toujours pas, passe directement au pur HTML avec du JS, et Tailwind via CDN ! »

**Arbitrage fort du challenger :** Abandon total des bundlers et des installations locales au profit d'un stack direct `HTML5 / Vanilla JS / Tailwind CDN / Lucide CDN`.
**Action :** Suppression complète des dossiers lourds et construction d'une base statique ultra-légère, autonome et instantanément exécutable.

---

### Prompt 4 — Ancrage territorial (Bénin) & Exigence de créativité
> « Quand je dis un truc, tu essaies de noter correctement, ok ! Pour qu'on puisse documenter correctement ! Maintenant ce que tu dois me faire, ce serait de rendre le travail vraiment moderne ! Ça se passe au Bénin, donc les affaires de Paris et autres, retire-les, et je ne trouve pas ta créativité !! »

**Ajustements majeurs :**
- Remplacement immédiat des centres français par **8 centres de collecte réels au Bénin** (Cotonou, Porto-Novo, Parakou, Abomey, Lokossa, Natitingou, Djougou).
- Contextualisation des enjeux sanitaires béninois : urgences routières, mortalité maternelle par hémorragie post-partum, et drépanocytose.
- Rédaction de données locales réalistes (adresses, horaires, numéros avec indicatif +229).

---

### Prompt 5 — Inspiration de référence visuelle (Style RIACO 2026 Cotonou)
> *Capture d'écran du site officiel de la conférence RIACO 2026 à Cotonou fournie par l'utilisateur.*
> « Un design comme ceci serait vraiment cool et inspirant !! Avec des animations fluides, tout en utilisant notre palette de couleurs !! »

**Transformation graphique inspirée de la référence :**
- **Carte Hero englobante** à grands coins arrondis avec image de fond et dégradé subtil.
- **Top Navigation blanche flottante** dockée sur le haut du hero avec logo, menu et bouton d'action.
- **Deux boutons d'appel à l'action en forme de pilule** (pill buttons).

---

### Prompt 6 — Harmonisation typographique (Poppins) & Validation du Footer
> « Utilise la police Poppins uniquement, et seulement pour le titre principal du site, tu utilises l'autre police ; »
> « On reste avec ce footer, c'est propre comme ça d'abord ! »

**Ajustements typographiques et design :**
- Application stricte de la police **Poppins** pour l'intégralité du site (textes, boutons, cartes, formulaires, navigation, FAQ).
- Conservation de la typographie d'impact uniquement pour le grand titre principal du hero.
- Validation et verrouillage du footer sombre, moderne et épuré avec coordonnées d'urgence et mentions légales.

---

### Prompt 7 — Épuration & Suppression des ombres
> « Retire-moi toute présence d'ombres ! »

**Ajustements graphiques :**
- Suppression totale des ombres (`box-shadow`, `drop-shadow`, `shadow-*`) sur tous les conteneurs, cartes, boutons et textes pour une esthétique flat, nette et épurée.

---

### Prompt 8 — Intégration du Logo Officiel (Header & Footer)
> « J'ai créé un logo pour le projet, utilise ça dans le header et ne mets plus le nom dedans ! : D:\ora\projet\hemolink.webp »
> « Footer aussi »

**Ajustements :**
- Intégration de l'image officielle fournie par le challenger (`hemolink.webp`) dans la navbar du header et dans le footer.
- Remplacement des icônes génériques et suppression du texte brut adjacent pour une identité de marque cohérente et unifiée.

---

### Prompt 9 — Calibrage Structurel Exact & Classe `.hemo-container` (1320px)
> « Tu as mal fait le hero, regarde pour riaco ! : <section ...> ... le header n'est pas inclus ! »
> « Pas 6xl, plutôt 1320px ; et je te recommande de créer une classe custom hemo-container pour ça »

**Ajustements :**
- Séparation stricte du `header` et de la section `hero`.
- Création de la classe CSS `.hemo-container` (max 1320px) appliquée sur l'ensemble des sections pour un alignement fluide et uniforme.

---

### Prompt 10 — Barre Flottante : Valorisation Universelle des Groupes Sanguins
> « Ajoute une section comme ceci : ... »
> « Les pourcentages ne me conviennent pas » -> Choix des groupes sanguins en grand avec mention valorisante : « tout sang est utile ! »

**Ajustements éditoriaux et visuels :**
- Remplacement des pourcentages de réserves par l'affichage en grand format des **Groupes Sanguins Majeurs** (`O-`, `O+`, `A+`, `AB+`).
- Sous-titres positifs et fédérateurs : *Donneur Universel*, *Le plus demandé*, *Besoin continu*, *Receveur Universel*.

---

### Prompt 11 — Épuration & Modernisation de la Section « Centres de Collecte »
> « Ici il faut revoir ! C'est bizarre pour moi, des détails inutiles dedans ! Et les cards ne sont pas très propres !! »
> « Le type de don est-il vraiment un détail important ?! Je ne crois pas, non ! »

**Ajustements :**
- Maintien du grand conteneur blanc à coins arrondis (`rounded-[32px]`) pour la section centres.
- Suppression des filtres et tags superflus de types de don.
- Focalisation exclusive sur : **Ville, Nom du centre, Adresse, Horaires, et Bouton d'appel direct**.

---

### Prompt 12 — Refonte Créative de la FAQ en 2 Colonnes
> « C'est trop moche ceci !! Ça manque clairement de créativité ! »
> « Section sans fond normalement »

**Ajustements :**
- Mise en page asymétrique en 2 colonnes sans boîte extérieure :
  - **Colonne de gauche** : Titre percutant, texte de réassurance et carte d'assistance directe du CNTS Bénin.
  - **Colonne de droite** : Accordéons blancs individuels numérotés (`01`, `02`...) avec chevrons interactifs.

---

### Prompt 13 — Transition & Compilation Next.js (Pixel-Perfect & Zéro Erreur TS)
> « Relance l'installation de Next.js, je vais voir »
> « On ne peut pas faire en sorte qu'il le fasse uniquement en utilisant ce qui est en cache ? »
> « Ce qui manque, on le télécharge »
> « Utilise la méthode font de Next !! »
> « Ici c'est une affaire de regroupement ! @layer base et utilities »
> « Pour le footer je n'ai rien demandé comme invention !! Regarde bien et reprends mon truc exact, pareil pour la première section !! D'ailleurs, fais mon travail pixel-perfect ! »

**Ajustements :**
- Installation des dépendances Next.js avec `pnpm install --prefer-offline` optimisant le cache local.
- Utilisation de `next/font/google` (`Poppins`, `Syne`, `Caveat`) dans `layout.tsx` sans import CSS externe.
- Structuration rigoureuse de `globals.css` avec `@layer base`, `@layer components` et `@layer utilities`.
- Reproduction **pixel-perfect exacte** du Hero et du Footer validés.
- Vérification stricte TypeScript (`pnpm exec tsc --noEmit`) : **0 erreur**.

---

### Prompt 14 — Refactoring Architectural & Composants UI
> « Fais un refactoring propre du travail, les composants UI, tout bien propre, et les data à leur place, dans lib ou dossier data. Je veux que les trucs soient très clairs ! »
> « Ceci devrait être un composant, et les boutons sur le site sont du n'importe quoi, il faut un composant UI bouton »

**Nouvelle architecture découplée & Composants UI :**
1. **`src/components/ui/Button.tsx`** : Composant bouton polymorphique standardisé.
2. **`src/components/ui/CenterCard.tsx`** : Composant de carte de centre autonome et typé.
3. **`src/types/index.ts`** : Interfaces TypeScript centralisées.
4. **`src/data/`** : Données découplées (`centers.ts`, `faq.ts`, `bloodGroups.ts`, `processSteps.ts`).
5. **`src/lib/`** : Logique pure (`eligibility.ts`, `utils.ts`).

---

### Prompt 15 — Cartes Texte + Image & Jonction Asymétrique Parfaite
> « La partie texte va occuper 5/12, et la partie image 7/12, et on aura un truc du genre : la partie texte seule aura le fond de couleur, mais la partie image sera un peu plus grande en hauteur »
> « Pas d'espace entre les deux ! »
> « C'est comme si l'image montait sur la partie texte ! »
> « On ne verra pas de rounded à ce niveau de croisement »

**Ajustements majeurs :**
- **Proportions 5/12 (texte) & 7/12 (image)**.
- **Jonction sans rupture (`gap-0`)** : Suppression des arrondis internes au point de jonction (`rounded-l-none` / `rounded-r-none` selon l'alternance).
- **Hauteur asymétrique de l'image** (`h-[460px]` vs texte `h-[380px]`) donnant l'effet dynamique où l'image domine et s'adosse au bloc texte.
- Effet **Stacking Cards on Scroll** préservé.
- Vérification TypeScript validée avec 0 erreur.

---

### Prompt 16 — Refonte Landing Page de l'Annuaire des Centres (Adieu l'effet Dashboard)
> « Ici pour les cards, je les trouve un peu trop bizarres pour une landing. Si c'était un Dashboard, il n'y aurait aucun souci ! Mais sur une landing, ça ne correspond pas vraiment ! Fais-moi une autre proposition »

**Arbitrage fort du challenger :** 
Refus d'une grille de cartes classiques avec barre de recherche (trop orienté "Application Web") au profit d'une approche "Landing Page" immersive.
**Action :**
- Remplacement par une navigation par onglets (départements) avec scroll horizontal sur mobile et sticky latéral sur desktop.
- Cartes minimalistes épurées et transformation des boutons d'appels à l'action en icônes circulaires flottantes (flèche sortante à 45° pour l'itinéraire).

---

### Prompt 17 — Mise en conformité stricte avec le Brief du Challenge
> « En fait, regarde ce que le challenge dit ! [...] Le projet doit inclure un minimum de 8 centres répartis sur plusieurs villes afin de permettre une évaluation pertinente des fonctions de recherche et de filtrage. [...] »

**Ajustements de conformité (Pixel-Perfect & Brief-Perfect) :**
- **C2 & C3 (Éligibilité)** : Restauration immédiate du simulateur. Ajout explicite d'un encart "Qui peut donner" rappelant les 3 critères (18-65 ans, 50kg, santé) et ajout de la mention légale obligatoire concernant l'entretien médical professionnel.
- **C6 (Où donner - Centres)** : Ajout des types de dons (Sang total, Plasma, Plaquettes) et modalités de RDV dans les données brutes (`centers.ts`). Intégration de filtres rapides ("Ouvert", "Sans RDV", "Plasma") fonctionnels et intégrés au design épuré pour satisfaire les critères de recherche sans dénaturer l'esthétique Landing Page.
- UX Flow : Inversion judicieuse de l'ordre des sections (Centres *avant* Éligibilité) pour répondre à une logique d'entonnoir naturel ("Où est le centre le plus proche ?" -> "Super, suis-je éligible pour y aller ?").

---

### Prompt 18 — Résolution des Conflits de Couleurs & Ajustements Manuels du Challenger
> « Mais sans te mentir je ne kiffe pas la couleur blood-gray depuis !! On dirait que je travaille avec un design marron !! »
> *(Le challenger intervient manuellement dans `tailwind.config.ts` pour écraser `blood-gray` avec les valeurs de `blood` (rouge pur), puis demande à l'IA de corriger la lisibilité du texte)*
> « Je préfère mieux comme je viens de le faire, sauf que certains textes ne devront pas être de rouge... »
> *(Le challenger ajuste également manuellement les espacements (margins) de plusieurs sections pour peaufiner le rendu final selon sa vision).*

**Ajustements :**
- Remplacement global de toutes les classes de texte (`text-blood-gray-*`) par des gris neutres standards (`text-zinc-*`) via un script automatisé pour rétablir une lisibilité parfaite sur les fonds devenus 100% rouges.
- Documentation des interventions directes du challenger sur le code (configuration Tailwind, gestion des marges inter-sections) prouvant sa maîtrise du rendu final et sa direction artistique stricte.

---

### Prompt 19 — Standardisation Typographique & Configurations SEO Finales
> « Ici je veux un rounded complet de la partie formulaire ! »
> « Maintenant vérifie les textes dans tout le projet ! La taille pour s'assurer que c'est conforme et uniforme... »
> « Fais le minimum pour le SEO, je viens d'ajouter l'open graph d'ailleurs... Et le favicon ? »

**Ajustements :**
- Refonte de la structure du simulateur : isolement du formulaire en une véritable carte flottante blanche avec des arrondis parfaits (`rounded-[32px]`) incrustée sur un fond sombre.
- Uniformisation stricte des titres de section `<h2>` (`text-3xl sm:text-4xl lg:text-5xl font-black`) et correction de la hiérarchie typographique du Footer.
- Implémentation du SEO natif Next.js dans `layout.tsx` (Métadonnées, Mots-clés, Favicon, Open Graph, Twitter Cards).

---

### Prompt 20 — Git Remote, Branche Main & Push Final
> « add le remote : https://github.com/Adodo777/hemolink-figma-to-code.git »
> « n'oublie pas le prompt ! et profite pour me cree la branche main et fait le push »

**Ajustements :**
- Ajout du dépôt distant GitHub.
- Renommage de la branche locale en `main`.
- Validation de l'ensemble des ajustements (SEO, typographie, nettoyage des fichiers inutilisés).
- Déploiement du code (push) sur le dépôt distant officiel du challenge.

---

## 3. Limites rencontrées avec l'outil IA & Arbitrages humains
1. **Réseau et pragmatisme :** L'optimisation du cache local PNPM (`--prefer-offline`) a permis d'installer Next.js sans saturation de bande passante.
2. **Fidélité au design validé :** L'exigence de conformité pixel-perfect du challenger garantit que chaque itération validée sur le HTML est fidèlement transposée dans les composants React/Next.js.
3. **Design asymétrique haute précision :** L'arbitrage du challenger pour la fusion sans gap avec suppression des arrondis internes crée une composition graphique percutante et d'un niveau pro.
4. **UX de Landing Page vs Application :** L'IA a initialement proposé un annuaire de centres type "Moteur de recherche". Le challenger est intervenu pour imposer un design asymétrique (menu sticky latéral) plus fluide et esthétique pour une vitrine informative.
5. **Gestion des Hallucinations & Recadrage technique :** Face à certaines hallucinations de l'IA (notamment sur les harmonies de couleurs complexes ou des espacements structurels incohérents), le challenger est intervenu directement dans la base de code pour fixer la direction (ex: écrasement manuel du `tailwind.config.ts`, ajustement des marges). Ce recadrage manuel a permis de réorienter précisément l'IA avant de lui déléguer le peaufinement global (polishing).
6. **Non-exhaustivité de la documentation :** Dans la précipitation et l'intensité du sprint (hackathon), plusieurs micro-ajustements itératifs (retouches CSS en direct, fix de bugs mineurs, ajustements de padding/margin) ont été réalisés directement par le challenger sans passer par des prompts formalisés. Ce document retrace les piliers majeurs du processus mais ne capte pas l'intégralité des dizaines d'interventions manuelles de l'auteur.