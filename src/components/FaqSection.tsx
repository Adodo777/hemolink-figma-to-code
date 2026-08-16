'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqItems } from '@/data/faq';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="hemo-container mt-20 sm:mt-32">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-start">
        
        {/* Colonne Gauche : Titre et Sous-titre */}
        <div className="xl:col-span-5 xl:sticky xl:top-12">
          <h2 className="text-3xl sm:text-5xl font-black text-blood-gray-950 tracking-tight leading-tight">
            Foire aux questions & Idées reçues
          </h2>
          <p className="mt-4 text-blood-gray-500 text-base sm:text-lg leading-relaxed">
            Vous hésitez encore ? Découvrez les réponses transparentes aux questions les plus courantes pour donner en toute confiance.
          </p>
        </div>

        {/* Colonne Droite : Accordéons Interactifs type RIACO */}
        <div className="xl:col-span-7">
          <div className="flex flex-col gap-2">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.id}
                  className={`rounded-[32px] overflow-hidden transition-all duration-300 ${
                    isOpen ? 'bg-blood-gray-100' : 'bg-blood-gray-50 hover:bg-blood-gray-100'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-blood-gray-950 text-base sm:text-lg focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{item.q}</span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-blood-gray-950" />
                      ) : (
                        <Plus className="w-5 h-5 text-blood-gray-950" />
                      )}
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-blood-gray-600 leading-relaxed animate-in slide-in-from-top-2 fade-in duration-300">
                      <p className="whitespace-pre-line">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
