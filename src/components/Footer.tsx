import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] mx-auto mt-20 sm:mt-32 mb-8">
      <div className="bg-blood-gray-950 text-white rounded-[32px] mx-4 p-8 sm:p-12 border border-blood-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src="/hemolink.webp" alt="HemoLink Bénin" className="h-10 sm:h-12 w-auto object-contain" />
            </div>
            <p className="text-sm sm:text-base text-zinc-400 max-w-sm leading-relaxed">
              Plateforme numérique citoyenne dédiée à la sensibilisation, à l&apos;information et à l&apos;orientation des donneurs de sang au Bénin.
            </p>
            <p className="text-sm text-zinc-500 mt-4">
              Développé pour le Figma to Code Challenge — Édition 4.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-300 mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#pourquoi-donner" className="hover:text-white transition">Pourquoi donner ?</a></li>
              <li><a href="#simulateur" className="hover:text-white transition">Test d&apos;éligibilité</a></li>
              <li><a href="#deroulement" className="hover:text-white transition">Déroulement & Conseils</a></li>
              <li><a href="#centres" className="hover:text-white transition">Centres de collecte</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ & Idées reçues</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-300 mb-4">Contact Urgence</h4>
            <p className="text-sm text-zinc-400">Centre National de Transfusion Sanguine (CNTS) :</p>
            <p className="text-base font-bold text-blood-400 mt-1">+229 21 30 01 30</p>
            <p className="text-sm text-zinc-400 mt-4">Email information :</p>
            <p className="text-sm font-medium text-zinc-200 mt-1">contact@cnts.bj</p>
          </div>
        </div>

        <div className="pt-8 border-t border-blood-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>&copy; 2026 HemoLink Bénin. Tous droits réservés. Données à visée informative.</p>
          <p className="text-sm">Conçu avec passion pour la santé publique au Bénin.</p>
        </div>
      </div>
    </footer>
  );
}
