'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqItems } from '@/data/faq';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getAccordionStyles = (index: number) => {
    switch (index) {
      case 0: return { bg: 'bg-blood-gray-50', text: 'text-zinc-950', hover: 'bg-blood-gray-100', desc: 'text-zinc-600' };
      case 1: return { bg: 'bg-blood-gray-100', text: 'text-zinc-950', hover: 'bg-blood-gray-200', desc: 'text-zinc-700' };
      case 2: return { bg: 'bg-blood-gray-200', text: 'text-zinc-950', hover: 'bg-blood-gray-300', desc: 'text-zinc-800' };
      case 3: return { bg: 'bg-blood-gray-300', text: 'text-zinc-950', hover: 'bg-blood-gray-400', desc: 'text-zinc-800' };
      case 4: return { bg: 'bg-blood-gray-400', text: 'text-zinc-950', hover: 'bg-blood-gray-500', desc: 'text-zinc-900' };
      case 5: return { bg: 'bg-blood-gray-500', text: 'text-white', hover: 'bg-blood-gray-600', desc: 'text-zinc-100' };
      case 6: return { bg: 'bg-blood-gray-600', text: 'text-white', hover: 'bg-blood-gray-700', desc: 'text-zinc-100' };
      case 7: return { bg: 'bg-blood-gray-700', text: 'text-white', hover: 'bg-blood-gray-800', desc: 'text-zinc-100' };
      default: return { bg: 'bg-blood-gray-800', text: 'text-white', hover: 'bg-blood-gray-900', desc: 'text-zinc-100' };
    }
  };

  return (
    <section id="faq" className="hemo-container mt-20 sm:mt-32">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-start">
        
        {/* Colonne Gauche : Titre et Sous-titre */}
        <div className="xl:col-span-5 xl:sticky xl:top-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
            Foire aux questions & Idées reçues
          </h2>
          <p className="mt-4 text-zinc-500 text-base sm:text-lg leading-relaxed">
            Vous hésitez encore ? Découvrez les réponses transparentes aux questions les plus courantes pour donner en toute confiance.
          </p>
        </div>

        {/* Colonne Droite : Accordéons Empilés */}
        <div className="xl:col-span-7 w-full flex flex-col">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const styles = getAccordionStyles(index);
            
            return (
              <div
                key={item.id}
                style={{ zIndex: 20 - index }}
                className={`relative rounded-[32px] overflow-hidden transition-all duration-300 shadow-sm ${
                  isOpen ? styles.hover : styles.bg
                } ${!isOpen ? styles.hover : ''} ${index > 0 ? '-mt-6 sm:-mt-8' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className={`w-full px-6 py-8 sm:px-10 sm:py-10 text-left flex items-center justify-between gap-4 font-bold ${styles.text} text-base sm:text-lg focus:outline-none`}
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{item.q}</span>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-colors ${isOpen ? 'bg-blood-600 text-white' : 'bg-white text-zinc-950'}`}>
                    {isOpen ? (
                      <Minus className="w-6 h-6" />
                    ) : (
                      <Plus className="w-6 h-6" />
                    )}
                  </div>
                </button>
                
                {isOpen && (
                  <div className={`px-6 pb-10 sm:px-10 sm:pb-12 text-sm sm:text-base ${styles.desc} leading-relaxed animate-in slide-in-from-top-2 fade-in duration-300`}>
                    <p className="whitespace-pre-line">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
