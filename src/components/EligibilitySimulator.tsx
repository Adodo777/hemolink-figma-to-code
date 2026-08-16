'use client';

import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, Calendar } from 'lucide-react';
import { checkEligibility } from '@/lib/eligibility';
import { EligibilityResult } from '@/types';
import Button from '@/components/ui/Button';

export default function EligibilitySimulator() {
  const [age, setAge] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [gender, setGender] = useState<'homme' | 'femme' | ''>('');
  const [lastDonation, setLastDonation] = useState<string>('');
  const [result, setResult] = useState<EligibilityResult | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const ageNum = parseInt(age, 10);
    const weightNum = parseFloat(weight);

    if (isNaN(ageNum) || isNaN(weightNum) || !gender) return;

    const res = checkEligibility({
      age: ageNum,
      weight: weightNum,
      gender: gender as 'homme' | 'femme',
      lastDonationDate: lastDonation || undefined,
    });

    setResult(res);
  };

  return (
    <section id="simulateur" className="hemo-container mt-12 sm:mt-16">
      <div className="bg-white rounded-[32px] border border-blood-gray-100 shadow-sm relative overflow-hidden flex flex-col lg:flex-row items-stretch">
        {/* Colonne Gauche : Textes & Critères */}
        <div className="w-full lg:w-5/12 bg-blood-gray-950 text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Êtes-vous éligible au don ?
          </h2>
          <p className="mt-4 text-xl sm:text-2xl text-blood-300 font-script font-bold">
            Test médical immédiat en 30s
          </p>
          
          <div className="mt-10">
            <h3 className="font-bold text-white text-sm sm:text-base mb-4 uppercase tracking-wider">
              Qui peut donner ?
            </h3>
            <ul className="text-blood-gray-300 text-sm space-y-3 list-disc list-inside">
              <li>Avoir entre <strong>18 et 65 ans</strong> révolus.</li>
              <li>Peser au minimum <strong>50 kg</strong>.</li>
              <li>Être en <strong>bonne santé</strong> générale.</li>
            </ul>
          </div>
        </div>

        {/* Colonne Droite : Formulaire de simulation */}
        <div className="w-full lg:w-7/12 bg-white rounded-[32px] overflow-hidden text-blood-gray-950 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <p className="text-blood-gray-500 text-sm leading-relaxed mb-8">
            Remplissez ce formulaire pour simuler votre éligibilité en fonction de vos paramètres personnels et de l'historique de vos dons.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Âge */}
              <div>
                <label htmlFor="input-age" className="block text-xs font-bold uppercase tracking-wider text-blood-gray-700 mb-2">
                  Votre âge (en années) <span className="text-blood-600">*</span>
                </label>
                <input
                  type="number"
                  id="input-age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Ex: 26"
                  required
                  min={1}
                  max={120}
                  className="w-full px-4 py-3.5 bg-blood-gray-50 border border-blood-gray-200 rounded-2xl focus:ring-2 focus:ring-blood-600 focus:bg-white outline-none transition text-sm font-semibold"
                />
              </div>

              {/* Poids */}
              <div>
                <label htmlFor="input-weight" className="block text-xs font-bold uppercase tracking-wider text-blood-gray-700 mb-2">
                  Votre poids (en kg) <span className="text-blood-600">*</span>
                </label>
                <input
                  type="number"
                  id="input-weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Ex: 68"
                  required
                  min={1}
                  max={300}
                  className="w-full px-4 py-3.5 bg-blood-gray-50 border border-blood-gray-200 rounded-2xl focus:ring-2 focus:ring-blood-600 focus:bg-white outline-none transition text-sm font-semibold"
                />
              </div>

              {/* Sexe */}
              <div>
                <label htmlFor="input-gender" className="block text-xs font-bold uppercase tracking-wider text-blood-gray-700 mb-2">
                  Sexe biologique <span className="text-blood-600">*</span>
                </label>
                <select
                  id="input-gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value as 'homme' | 'femme')}
                  required
                  className="w-full px-4 py-3.5 bg-blood-gray-50 border border-blood-gray-200 rounded-2xl focus:ring-2 focus:ring-blood-600 focus:bg-white outline-none transition text-sm font-semibold"
                >
                  <option value="" disabled>Sélectionnez...</option>
                  <option value="homme">Homme</option>
                  <option value="femme">Femme</option>
                </select>
              </div>

              {/* Date dernier don */}
              <div>
                <label htmlFor="input-last-donation" className="block text-xs font-bold uppercase tracking-wider text-blood-gray-700 mb-2">
                  Date du dernier don <span className="text-blood-gray-400 font-normal lowercase">(optionnel)</span>
                </label>
                <input
                  type="date"
                  id="input-last-donation"
                  value={lastDonation}
                  onChange={(e) => setLastDonation(e.target.value)}
                  className="w-full px-4 py-3.5 bg-blood-gray-50 border border-blood-gray-200 rounded-2xl focus:ring-2 focus:ring-blood-600 focus:bg-white outline-none transition text-sm font-semibold"
                />
              </div>
            </div>

            {/* Bouton de calcul */}
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Calculer mon statut d&apos;éligibilité
            </Button>
            
            <p className="text-center text-xs text-blood-gray-400 mt-4 font-medium">
              * Note : Ce simulateur est à titre indicatif. Seul un entretien médical professionnel peut confirmer définitivement votre aptitude au don.
            </p>
          </form>

          {/* Boîte de résultat */}
          {result && (
            <div
              className={`mt-6 p-6 rounded-2xl border transition-all ${
                result.eligible ? 'bg-emerald-50 border-emerald-200' : 'bg-blood-50 border-blood-200'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    result.eligible ? 'bg-emerald-600 text-white' : 'bg-blood-600 text-white'
                  }`}
                >
                  {result.eligible ? <CheckCircle className="w-6 h-6" /> : <AlertTriangle className="w-6 h-6" />}
                </div>
                <div>
                  <h4 className={`font-bold text-xl ${result.eligible ? 'text-emerald-900' : 'text-blood-900'}`}>
                    {result.eligible ? 'Félicitations, vous êtes éligible !' : 'Vous ne pouvez pas donner pour le moment'}
                  </h4>
                  <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${result.eligible ? 'text-emerald-800' : 'text-blood-800'}`}>
                    {result.eligible
                      ? "D'après vos informations, toutes les conditions préalables sont validées. Vous pouvez vous rendre dès aujourd'hui dans l'un des centres de collecte."
                      : "Voici les critères réglementaires qui ne sont pas encore validés :"}
                  </p>

                  {!result.eligible && (
                    <ul className="mt-3 space-y-1.5 text-xs text-blood-900 list-disc list-inside">
                      {result.reasons.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  )}

                  {result.nextDate && (
                    <div className="mt-3 p-3 bg-white/80 rounded-xl border border-blood-200 text-xs font-bold text-blood-900 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blood-600" />
                      <span>Vous serez à nouveau éligible à partir du : <strong>{result.nextDate}</strong></span>
                    </div>
                  )}

                  {result.eligible && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Button variant="emerald" size="sm" href="#centres">
                        Trouver mon centre
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
