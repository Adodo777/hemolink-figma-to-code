'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ContactSection() {
  return (
    <section className="hemo-container mt-20 sm:mt-32">
      <div className="bg-blood-gray-50 rounded-[32px] p-10 sm:p-14 lg:p-16 border border-blood-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Colonne Gauche : Grand Titre */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
              Une question médicale ?
            </h2>
          </div>

          {/* Colonne Droite : Texte et Bouton */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-8">
              L&apos;équipe médicale du Centre National de Transfusion Sanguine (CNTS) du Bénin est disponible pour vous orienter en toute confidentialité. Si vous avez le moindre doute sur votre éligibilité, n&apos;hésitez pas à nous contacter avant votre don. <strong>Discrétion et écoute garanties.</strong>
            </p>
            
            <Button
              variant="navy"
              size="lg"
              href="tel:+22921300130"
              className="rounded-full px-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              Appeler le CNTS (+229)
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
