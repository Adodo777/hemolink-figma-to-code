'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';
import { transfusionCenters } from '@/data/centers';

export default function CentersDirectory() {
  // Extraire les départements uniques
  const departments = Array.from(new Set(transfusionCenters.map((c) => c.department)));
  const [activeDept, setActiveDept] = useState(departments[0]);
  
  // États des filtres (Challenge requirement)
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterPlasma, setFilterPlasma] = useState(false);
  const [filterNoAppt, setFilterNoAppt] = useState(false);

  const activeCenters = transfusionCenters.filter((c) => {
    if (c.department !== activeDept) return false;
    if (filterOpen && !c.isOpen) return false;
    if (filterPlasma && !c.donationTypes.includes('Plasma')) return false;
    if (filterNoAppt && !c.appointment.toLowerCase().includes('sans rdv')) return false;
    return true;
  });

  return (
    <section id="centres" className="hemo-container mt-20 sm:mt-32">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
        
        {/* Partie Gauche : Titre + Menu des Départements + Filtres */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-12">
          <h2 className="text-3xl sm:text-5xl font-black text-blood-gray-950 tracking-tight leading-tight">
            Où donner votre sang ?
          </h2>
          <p className="mt-4 text-blood-gray-500 text-base sm:text-lg leading-relaxed">
            Trouvez un centre près de chez vous et vérifiez les modalités d'accueil.
          </p>

          {/* Sélecteur de département */}
          <div className="mt-8 lg:mt-10 relative">
            <select
              value={activeDept}
              onChange={(e) => setActiveDept(e.target.value)}
              className="w-full appearance-none bg-white border border-blood-gray-200 text-blood-gray-950 font-bold text-lg py-4 pl-6 pr-12 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blood-100 focus:border-blood-600 transition-all cursor-pointer hover:border-blood-gray-300 shadow-sm"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-blood-gray-400">
              <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          {/* Filtres Rapides */}
          <div className="mt-8 space-y-3">
            <h3 className="text-sm font-bold text-blood-gray-400 uppercase tracking-wider">Filtres</h3>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setFilterOpen(!filterOpen)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border ${filterOpen ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-white text-blood-gray-500 border-blood-gray-200 hover:border-blood-gray-300'}`}
              >
                Ouvert
              </button>
              <button 
                onClick={() => setFilterPlasma(!filterPlasma)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border ${filterPlasma ? 'bg-blood-50 text-blood-600 border-blood-200' : 'bg-white text-blood-gray-500 border-blood-gray-200 hover:border-blood-gray-300'}`}
              >
                Don de plasma
              </button>
              <button 
                onClick={() => setFilterNoAppt(!filterNoAppt)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border ${filterNoAppt ? 'bg-blood-50 text-blood-600 border-blood-200' : 'bg-white text-blood-gray-500 border-blood-gray-200 hover:border-blood-gray-300'}`}
              >
                Sans rendez-vous
              </button>
            </div>
          </div>
        </div>

        {/* Partie Droite : Liste des centres pour le département actif */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 gap-6">
            {activeCenters.length === 0 ? (
              <div className="bg-blood-gray-50 rounded-[32px] p-10 text-center border border-blood-gray-100">
                <p className="text-blood-gray-500 font-medium">Aucun centre ne correspond à vos critères dans ce département.</p>
                <button 
                  onClick={() => { setFilterOpen(false); setFilterPlasma(false); setFilterNoAppt(false); }}
                  className="mt-4 text-blood-600 font-bold hover:underline"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              activeCenters.map((center) => (
                <div key={center.id} className="relative py-8 sm:py-10 border-b border-blood-gray-200 last:border-0 group flex flex-col transition-all duration-500">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <span className="bg-blood-gray-50 text-blood-gray-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-blood-gray-100">
                        {center.city}
                      </span>
                      {center.isOpen ? (
                        <span className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-4 py-1.5 rounded-full">
                          <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          Ouvert
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-blood-gray-400 uppercase tracking-wider bg-blood-gray-50 px-4 py-1.5 rounded-full border border-blood-gray-100">Fermé</span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-blood-gray-950 leading-snug mb-4 group-hover:text-blood-600 transition-colors pr-8">
                      {center.name}
                    </h3>

                    {/* Badges (Types de dons & RDV) */}
                    <div className="flex flex-wrap gap-2 mb-8 pr-16 sm:pr-24">
                      {center.donationTypes.map((type) => (
                        <span key={type} className="px-3 py-1 bg-blood-gray-100 text-blood-gray-600 text-xs font-bold rounded-lg border border-blood-gray-200">
                          {type}
                        </span>
                      ))}
                      <span className="px-3 py-1 bg-blood-50 text-blood-600 text-xs font-bold rounded-lg border border-blood-100">
                        {center.appointment}
                      </span>
                    </div>

                    <div className="space-y-5 text-blood-gray-600 flex-1 pb-14 sm:pb-0 pr-0 sm:pr-32">
                      <div className="flex items-start gap-4">
                        <div className="bg-blood-gray-50 p-3 rounded-2xl text-blood-gray-400 shrink-0 group-hover:bg-blood-50 group-hover:text-blood-600 transition-colors">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <p className="text-sm font-medium mt-1 leading-relaxed">{center.address}</p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="bg-blood-gray-50 p-3 rounded-2xl text-blood-gray-400 shrink-0 group-hover:bg-blood-50 group-hover:text-blood-600 transition-colors">
                          <Clock className="w-5 h-5" />
                        </div>
                        <p className="text-sm font-medium">{center.hours}</p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-blood-gray-50 p-3 rounded-2xl text-blood-gray-400 shrink-0 group-hover:bg-blood-50 group-hover:text-blood-600 transition-colors">
                          <Phone className="w-5 h-5" />
                        </div>
                        <p className="text-sm font-bold text-blood-gray-700">{center.phone}</p>
                      </div>
                    </div>

                    {/* Actions (Appeler & Itinéraire) en bas à droite en absolute */}
                    <div className="absolute bottom-8 sm:bottom-10 right-0 flex gap-3">
                      {center.mapUrl && (
                        <a 
                          href={center.mapUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          title="Itinéraire"
                          className="w-12 h-12 rounded-full bg-white text-blood-gray-400 hover:text-blood-600 hover:bg-blood-50 border border-blood-gray-200 hover:border-blood-100 transition-all flex items-center justify-center group/btn shadow-sm"
                        >
                          <ArrowUpRight className="w-5 h-5 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </a>
                      )}
                      <a 
                        href={`tel:${center.phone.replace(/\s+/g, '')}`} 
                        title="Appeler le centre"
                        className="w-12 h-12 rounded-full bg-blood-gray-950 text-white hover:bg-blood-600 transition-all flex items-center justify-center shadow-md hover:shadow-lg hover:shadow-blood-600/20"
                      >
                        <Phone className="w-5 h-5" />
                      </a>
                    </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
