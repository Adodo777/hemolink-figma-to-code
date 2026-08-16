import React from 'react';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative w-full text-white pt-4 md:pt-6" style={{ paddingBottom: '40px' }}>
      {/* Image de fond encadrée (1440px max) */}
      <div className="absolute inset-x-0 top-4 md:top-6 bottom-4 flex justify-center px-4 md:px-6">
        <div className="relative w-full max-w-[1440px] h-full rounded-[32px] overflow-hidden">
          <img
            alt="Don de sang au Bénin"
            width={2048}
            height={1536}
            loading="lazy"
            className="h-full w-full object-cover object-center"
            src="/hero_bg.jpg"
          />
          <div className="absolute inset-0 bg-blood-gray-950/60" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(185,28,28,0.85)_0%,rgba(185,28,28,0.65)_38%,rgba(36,26,26,0.65)_68%,rgba(36,26,26,0.40)_100%)]" />
        </div>
      </div>

      {/* Contenu centré (hemo-container 1320px) */}
      <div className="hemo-container relative z-10 flex min-h-[440px] flex-col items-center justify-center py-20 text-center md:py-28">
        <div className="w-full flex flex-col items-center gap-6 md:gap-8">
          {/* Grand Titre */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-none font-bold tracking-[-0.03em] text-white">
            HEMOLINK <span className="font-hero-title font-black text-blood-200">2026</span>
          </h1>

          {/* Sous-titre */}
          <p className="-mt-4 sm:-mt-6 text-2xl md:text-3xl lg:text-4xl leading-none tracking-[-0.03em] font-bold text-white max-w-3xl">
            Campagne Nationale pour le Don de Sang au Bénin
          </p>

          {/* Thème Cursif */}
          <p className="-mt-3 sm:-mt-4 text-xl md:text-2xl tracking-[0.05em] font-medium text-blood-300 font-script">
            Donner son sang, un acte citoyen pour sauver des vies
          </p>

          {/* Boutons CTA Standardisés */}
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Button variant="primary" size="lg" href="#simulateur">
              Test d'éligibilité
            </Button>
            <Button variant="outline-white" size="lg" href="#centres">
              Découvrir les centres
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
