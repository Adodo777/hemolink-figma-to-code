/**
 * HEMOLINK BÉNIN — APPLICATION LOGIC (app.js)
 * Conforme aux spécifications du Figma to Code Challenge (Édition 4)
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. MENU MOBILE DRAWER
    // =========================================================================
    const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
    const mobileCloseBtn = document.getElementById('mobile-close-btn');
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileToggleBtn && mobileNavDrawer) {
        mobileToggleBtn.addEventListener('click', () => {
            mobileNavDrawer.classList.remove('hidden');
        });
    }

    if (mobileCloseBtn && mobileNavDrawer) {
        mobileCloseBtn.addEventListener('click', () => {
            mobileNavDrawer.classList.add('hidden');
        });
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNavDrawer) mobileNavDrawer.classList.add('hidden');
        });
    });


    // =========================================================================
    // 2. SECTION C7 : ÉTAT DES RÉSERVES PAR GROUPE SANGUIN (CNTS BÉNIN)
    // =========================================================================
    const bloodReserves = [
        { group: 'O-', percent: 18, status: 'Critique', color: 'bg-red-500' },
        { group: 'O+', percent: 45, status: 'Faible', color: 'bg-amber-500' },
        { group: 'A-', percent: 22, status: 'Critique', color: 'bg-red-500' },
        { group: 'A+', percent: 78, status: 'Optimal', color: 'bg-emerald-500' },
        { group: 'B-', percent: 35, status: 'Faible', color: 'bg-amber-500' },
        { group: 'B+', percent: 84, status: 'Optimal', color: 'bg-emerald-500' },
        { group: 'AB-', percent: 28, status: 'Critique', color: 'bg-red-500' },
        { group: 'AB+', percent: 90, status: 'Optimal', color: 'bg-emerald-500' }
    ];

    const reservesContainer = document.getElementById('reserves-list-container');
    if (reservesContainer) {
        reservesContainer.innerHTML = bloodReserves.map(item => `
            <div>
                <div class="flex justify-between items-center text-xs font-bold mb-1">
                    <div class="flex items-center gap-2">
                        <span class="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center font-bold text-sm text-white">${item.group}</span>
                        <span class="text-slate-300 font-semibold">${item.status}</span>
                    </div>
                    <span class="${item.percent < 30 ? 'text-red-400' : item.percent < 60 ? 'text-amber-400' : 'text-emerald-400'}">${item.percent}%</span>
                </div>
                <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div class="${item.color} h-full rounded-full transition-all duration-1000" style="width: ${item.percent}%"></div>
                </div>
            </div>
        `).join('');
    }


    // =========================================================================
    // 3. SECTION C6 : RÉPERTOIRE DES 8 CENTRES AU BÉNIN (AVEC RECHERCHE & FILTRES)
    // =========================================================================
    const transfusionCenters = [
        {
            id: 1,
            name: "Centre National de Transfusion Sanguine (CNTS)",
            type: "Établissement National de Référence",
            city: "Cotonou",
            department: "Littoral",
            address: "Avenue Jean-Paul II, près du CHU-MEL, Cotonou",
            hours: "07h30 - 18h00 (Lun - Sam)",
            isOpen: true,
            phone: "+229 21 30 01 30",
            acceptedDonations: ["Sang total", "Plasma", "Plaquettes"],
            accessMode: "Sans rendez-vous & Avec rendez-vous"
        },
        {
            id: 2,
            name: "Unité de Transfusion CHU Hubert Koutoukou Maga (CNHU-HKM)",
            type: "Centre Hospitalier Universitaire",
            city: "Cotonou",
            department: "Littoral",
            address: "Quartier Cadjèhoun, Route de l'Aéroport, Cotonou",
            hours: "08h00 - 17h00 (24h/24 en urgence)",
            isOpen: true,
            phone: "+229 21 30 11 11",
            acceptedDonations: ["Sang total", "Plasma"],
            accessMode: "Sans rendez-vous"
        },
        {
            id: 3,
            name: "Banque de Sang CHUD Ouémé-Plateau (CHUD-OP)",
            type: "Centre Hospitalier Départemental",
            city: "Porto-Novo",
            department: "Ouémé",
            address: "Avenue Gouverneur Bayol, Quartier Attakè, Porto-Novo",
            hours: "08h00 - 16h30 (Lun - Ven)",
            isOpen: true,
            phone: "+229 20 21 21 22",
            acceptedDonations: ["Sang total", "Plaquettes"],
            accessMode: "Avec rendez-vous"
        },
        {
            id: 4,
            name: "Centre de Transfusion Sanguine CHUD Borgou-Alibori",
            type: "Centre Hospitalier Départemental",
            city: "Parakou",
            department: "Borgou",
            address: "Avenue de l'Hôpital, Quartier Albarika, Parakou",
            hours: "07h30 - 17h00 (Lun - Sam)",
            isOpen: true,
            phone: "+229 23 61 07 00",
            acceptedDonations: ["Sang total", "Plasma", "Plaquettes"],
            accessMode: "Sans rendez-vous"
        },
        {
            id: 5,
            name: "Unité de Collecte de l'Hôpital de Zone d'Abomey",
            type: "Hôpital de Zone",
            city: "Abomey",
            department: "Zou",
            address: "Quartier Agbado, Route Principale, Abomey",
            hours: "08h00 - 15h30 (Lun - Ven)",
            isOpen: false,
            phone: "+229 22 50 04 50",
            acceptedDonations: ["Sang total"],
            accessMode: "Sans rendez-vous"
        },
        {
            id: 6,
            name: "Banque de Sang de l'Hôpital de Zone de Lokossa",
            type: "Hôpital de Zone",
            city: "Lokossa",
            department: "Mono",
            address: "Boulevard de l'Unité, Quartier Agamé, Lokossa",
            hours: "08h00 - 16h00 (Lun - Ven)",
            isOpen: false,
            phone: "+229 22 41 13 14",
            acceptedDonations: ["Sang total", "Plasma"],
            accessMode: "Avec rendez-vous"
        },
        {
            id: 7,
            name: "Centre de Transfusion CHUD Atacora-Donga",
            type: "Centre Hospitalier Départemental",
            city: "Natitingou",
            department: "Atacora",
            address: "Route de Tanguiéta, Quartier Yokossi, Natitingou",
            hours: "08h00 - 16h30 (Lun - Sam)",
            isOpen: true,
            phone: "+229 23 82 11 10",
            acceptedDonations: ["Sang total", "Plasma"],
            accessMode: "Sans rendez-vous"
        },
        {
            id: 8,
            name: "Unité de Transfusion de l'Hôpital de Zone de Djougou",
            type: "Hôpital de Zone",
            city: "Djougou",
            department: "Donga",
            address: "Quartier Onklou, Route Inter-États, Djougou",
            hours: "08h30 - 15h00 (Lun - Ven)",
            isOpen: true,
            phone: "+229 23 80 03 04",
            acceptedDonations: ["Sang total"],
            accessMode: "Sans rendez-vous"
        }
    ];

    const centersGrid = document.getElementById('centers-grid');
    const searchInput = document.getElementById('centers-search-input');
    const statusFilter = document.getElementById('centers-status-filter');
    const emptyState = document.getElementById('centers-empty-state');
    const resetFiltersBtn = document.getElementById('centers-reset-filters-btn');

    function renderCenters() {
        if (!centersGrid) return;

        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const selectedStatus = statusFilter ? statusFilter.value : 'all';

        const filtered = transfusionCenters.filter(center => {
            const matchesQuery = !query ||
                center.name.toLowerCase().includes(query) ||
                center.city.toLowerCase().includes(query) ||
                center.department.toLowerCase().includes(query) ||
                center.address.toLowerCase().includes(query);

            const matchesStatus = (selectedStatus === 'all') ||
                (selectedStatus === 'open' && center.isOpen) ||
                (selectedStatus === 'closed' && !center.isOpen);

            return matchesQuery && matchesStatus;
        });

        if (filtered.length === 0) {
            centersGrid.innerHTML = '';
            if (emptyState) emptyState.classList.remove('hidden');
            return;
        }

        if (emptyState) emptyState.classList.add('hidden');

        centersGrid.innerHTML = filtered.map(c => `
            <div class="bg-slate-50 hover:bg-white p-6 rounded-3xl border border-slate-200 flex flex-col justify-between interactive-card transition-all">
                <div>
                    <!-- Header : Ville & Statut discret -->
                    <div class="flex items-center justify-between gap-2 mb-3">
                        <span class="text-xs font-bold text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200">
                            ${c.city}
                        </span>
                        <span class="text-xs font-bold flex items-center gap-1.5 ${c.isOpen ? 'text-emerald-600' : 'text-slate-400'}">
                            <span class="w-2 h-2 rounded-full ${c.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}"></span>
                            ${c.isOpen ? 'Ouvert' : 'Fermé'}
                        </span>
                    </div>

                    <!-- Nom du centre -->
                    <h3 class="font-bold text-slate-900 text-lg leading-snug">${c.name}</h3>

                    <!-- Adresse et Horaires -->
                    <div class="mt-3 text-xs text-slate-500 space-y-1">
                        <p class="line-clamp-2">${c.address}</p>
                        <p class="font-semibold text-slate-700 pt-1">${c.hours}</p>
                    </div>
                </div>

                <!-- Footer : Téléphone direct -->
                <div class="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <span class="text-xs font-semibold text-slate-500">${c.phone}</span>
                    <a href="tel:${c.phone.replace(/\s+/g, '')}" class="bg-slate-900 hover:bg-blood-600 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors inline-flex items-center gap-1.5">
                        <i data-lucide="phone" class="w-3.5 h-3.5"></i>
                        Appeler
                    </a>
                </div>
            </div>
        `).join('');

        if (window.lucide) {
            lucide.createIcons();
        }
    }

    if (searchInput) searchInput.addEventListener('input', renderCenters);
    if (statusFilter) statusFilter.addEventListener('change', renderCenters);

    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            if (statusFilter) statusFilter.value = 'all';
            renderCenters();
        });
    }

    renderCenters();


    // =========================================================================
    // 4. SECTION C3 : SIMULATEUR D'ÉLIGIBILITÉ (ALGORITHME DU CHALLENGE)
    // =========================================================================
    const eligibilityForm = document.getElementById('eligibility-calculator-form');
    const resultBox = document.getElementById('eligibility-result-box');

    if (eligibilityForm && resultBox) {
        eligibilityForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const ageInput = document.getElementById('input-age');
            const weightInput = document.getElementById('input-weight');
            const genderInput = document.getElementById('input-gender');
            const lastDonationInput = document.getElementById('input-last-donation');

            const age = parseInt(ageInput.value, 10);
            const weight = parseFloat(weightInput.value);
            const gender = genderInput.value;
            const lastDonationVal = lastDonationInput.value;

            // Reset errors
            document.querySelectorAll('[id^="error-"]').forEach(el => el.classList.add('hidden'));

            let hasInputError = false;

            if (isNaN(age) || age < 1 || age > 120) {
                const err = document.getElementById('error-age');
                if (err) { err.textContent = "Veuillez saisir un âge valide (entre 1 et 120 ans)."; err.classList.remove('hidden'); }
                hasInputError = true;
            }

            if (isNaN(weight) || weight < 1 || weight > 300) {
                const err = document.getElementById('error-weight');
                if (err) { err.textContent = "Veuillez saisir un poids valide en kilogrammes."; err.classList.remove('hidden'); }
                hasInputError = true;
            }

            if (!gender) {
                const err = document.getElementById('error-gender');
                if (err) { err.textContent = "Veuillez sélectionner le sexe biologique."; err.classList.remove('hidden'); }
                hasInputError = true;
            }

            if (hasInputError) return;

            // ALGORITHME D'ÉLIGIBILITÉ
            const blockingReasons = [];
            let nextEligibleDateStr = null;

            if (age < 18) {
                blockingReasons.push(`Vous avez ${age} an(s). L'âge minimum légal pour faire un don de sang est de 18 ans.`);
            } else if (age > 65) {
                blockingReasons.push(`Vous avez ${age} ans. La limite d'âge pour donner son sang est de 65 ans révolus.`);
            }

            if (weight < 50) {
                blockingReasons.push(`Votre poids est de ${weight} kg. Un minimum de 50 kg est obligatoire pour garantir le volume de prélèvement sans risque pour votre santé.`);
            }

            if (lastDonationVal) {
                const lastDate = new Date(lastDonationVal);
                const today = new Date();

                const requiredMonths = (gender === 'homme') ? 3 : 4;
                const nextDate = new Date(lastDate);
                nextDate.setMonth(nextDate.getMonth() + requiredMonths);

                if (today < nextDate) {
                    const formattedDate = nextDate.toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    });
                    nextEligibleDateStr = formattedDate;
                    blockingReasons.push(`Le délai réglementaire de ${requiredMonths} mois depuis votre dernier don n'est pas encore écoulé.`);
                }
            }

            // RENDU DU RÉSULTAT
            resultBox.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-200', 'bg-red-50', 'border-red-200');

            if (blockingReasons.length === 0) {
                // ÉLIGIBLE
                resultBox.classList.add('bg-emerald-50', 'border-emerald-200');
                resultBox.innerHTML = `
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                            <i data-lucide="check-circle" class="w-6 h-6"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-emerald-900 text-xl">Félicitations, vous êtes éligible au don !</h4>
                            <p class="text-xs sm:text-sm text-emerald-800 mt-1 leading-relaxed">
                                D'après vos informations (âge, poids et délai post-don), toutes les conditions préalables sont validées. Vous pouvez vous rendre dès aujourd'hui dans l'un des centres de collecte du Bénin.
                            </p>
                            <div class="mt-4 flex flex-wrap gap-3">
                                <a href="#centres" class="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition">
                                    <i data-lucide="map-pin" class="w-4 h-4"></i> Trouver mon centre à proximité
                                </a>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                // NON ÉLIGIBLE
                resultBox.classList.add('bg-red-50', 'border-red-200');
                resultBox.innerHTML = `
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 rounded-full bg-blood-600 text-white flex items-center justify-center shrink-0">
                            <i data-lucide="alert-circle" class="w-6 h-6"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-bold text-red-900 text-xl">Non éligible pour le moment</h4>
                            <p class="text-xs text-red-700 mt-1 font-semibold">Voici les motifs identifiés :</p>
                            <ul class="mt-2 space-y-1.5 text-xs text-red-800 list-disc list-inside">
                                ${blockingReasons.map(r => `<li>${r}</li>`).join('')}
                            </ul>
                            ${nextEligibleDateStr ? `
                                <div class="mt-3 p-3 bg-white/80 rounded-xl border border-red-200 text-xs font-bold text-red-900 flex items-center gap-2">
                                    <i data-lucide="calendar" class="w-4 h-4 text-blood-600"></i>
                                    <span>Vous serez à nouveau éligible à partir du : <strong>${nextEligibleDateStr}</strong></span>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;
            }

            if (window.lucide) {
                lucide.createIcons();
            }

            resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }


    // =========================================================================
    // 5. SECTION C8 : FAQ ACCORDÉON INTERACTIF AVEC ACCESSIBILITÉ CLAVIER
    // =========================================================================
    const faqData = [
        {
            q: "Est-ce que donner son sang fait mal ?",
            a: "Non. La piqûre d'aiguille est comparable à un petit pincement de 2 secondes, similaire à une prise de sang en laboratoire. Une fois l'aiguille posée, le prélèvement est totalement indolore."
        },
        {
            q: "Combien de temps dure réellement l'expérience ?",
            a: "Prévoyez environ 45 minutes à 1 heure au total sur place. Le prélèvement de sang ne dure que 8 à 10 minutes. Le reste du temps est consacré à l'entretien médical confidentiel et à la collation conviviale de repos."
        },
        {
            q: "Y a-t-il un risque d'attraper une maladie ou une infection ?",
            a: "Aucun risque. L'ensemble du matériel utilisé (aiguille, tubulure, poche) est stérile, individuel et à usage unique. Il est déballé devant vous et jeté dans un conteneur sécurisé immédiatement après."
        },
        {
            q: "Peut-on donner son sang si on a eu le paludisme ?",
            a: "Oui, à condition d'être complètement guéri et d'avoir terminé le traitement antipaludéen depuis au moins 4 mois sans symptôme de fièvre. Le médecin du centre évaluera votre situation lors de l'entretien."
        },
        {
            q: "Est-ce que le corps remplace rapidement le sang prélevé ?",
            a: "Oui, très rapidement ! Le volume liquide (plasma) est reconstitué en moins de 24 à 48 heures grâce à une bonne hydratation. Les globules rouges et cellules se renouvellent en quelques semaines."
        },
        {
            q: "Peut-on reprendre ses activités après le don ?",
            a: "Oui, vous pouvez retourner vaquer à vos occupations quotidiennes après avoir pris votre collation et vous être reposé 15 minutes. Il est simplement recommandé d'éviter le sport intensif et le port de charges lourdes pendant 24h."
        }
    ];

    const faqContainer = document.getElementById('faq-accordion-container');
    if (faqContainer) {
        faqContainer.innerHTML = faqData.map((item, index) => `
            <div class="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-slate-300 transition-all">
                <button type="button" class="faq-toggle-btn w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base focus:outline-none"
                    aria-expanded="false" aria-controls="faq-answer-${index}" id="faq-question-${index}">
                    <div class="flex items-center gap-3">
                        <span class="text-xs font-bold text-slate-400 font-hero-title">0${index + 1}</span>
                        <span class="text-slate-900">${item.q}</span>
                    </div>
                    <div class="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0">
                        <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-slate-500 transition-transform"></i>
                    </div>
                </button>
                <div id="faq-answer-${index}" role="region" aria-labelledby="faq-question-${index}" class="faq-answer px-4 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p class="pt-2 pb-4 border-t border-slate-200/60">${item.a}</p>
                </div>
            </div>
        `).join('');

        // FAQ event listeners
        const faqButtons = document.querySelectorAll('.faq-toggle-btn');
        faqButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const answer = btn.nextElementSibling;
                const icon = btn.querySelector('.faq-icon');
                const isCurrentlyOpen = answer.classList.contains('open');

                // Close all answers
                document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
                document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('open'));
                document.querySelectorAll('.faq-toggle-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));

                // If not open, open this one
                if (!isCurrentlyOpen) {
                    answer.classList.add('open');
                    if (icon) icon.classList.add('open');
                    btn.setAttribute('aria-expanded', 'true');
                }
            });

            // Keyboard navigation (Up/Down)
            btn.addEventListener('keydown', (e) => {
                const allButtons = Array.from(document.querySelectorAll('.faq-toggle-btn'));
                const currentIndex = allButtons.indexOf(btn);

                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextIndex = (currentIndex + 1) % allButtons.length;
                    allButtons[nextIndex].focus();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prevIndex = (currentIndex - 1 + allButtons.length) % allButtons.length;
                    allButtons[prevIndex].focus();
                }
            });
        });
    }

    // Final icons creation
    if (window.lucide) {
        lucide.createIcons();
    }
});
