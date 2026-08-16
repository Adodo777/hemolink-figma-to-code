import React from 'react';
import { donationSteps } from '@/data/processSteps'; // preparationTips supprimé car déplacé

export default function ProcessSteps() {
  return (
    <section id="deroulement" className=" ">
      <div className="hemo-container">
        <div className=" bg-blood-gray-950 rounded-[32px] p-6 sm:p-20 overflow-hidden">
        <div className="">
          {/* En-tête - Alignement à gauche */}
          <div className="mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Comment se déroule le don ?
            </h2>
            <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Un parcours fluide et chaleureux encadré par des professionnels bienveillants à chaque étape.
            </p>
          </div>

          {/* Timeline verticale - Thème sombre */}
          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-[20px] md:left-[30%] lg:left-[35%] top-2 bottom-0 w-[1px] bg-blood-gray-800"></div>
            
            <div className="space-y-12 sm:space-y-16 relative">
              {donationSteps.map((step, index) => {
                const isActive = index === 0;
                return (
                  <div key={step.number} className="relative flex flex-col md:flex-row items-start w-full group cursor-default">
                    
                    {/* Point central sur la ligne */}
                    <div className={`absolute left-[20px] md:left-[30%] lg:left-[35%] w-3 h-3 rounded-full -translate-x-[5px] z-10 top-2.5 transition-all duration-300 shadow-[0_0_0_4px_#241a1a] ${isActive ? 'bg-blood-500' : 'bg-blood-gray-700 group-hover:bg-blood-500'}`}></div>

                    {/* Côté gauche - Titre */}
                    <div className="pl-12 md:pl-0 w-full md:w-[30%] lg:w-[35%] md:pr-12">
                      <h3 className={`font-semibold text-2xl sm:text-3xl tracking-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                        {step.title}
                      </h3>
                    </div>

                    {/* Côté droit - Description */}
                    <div className="pl-12 md:pl-0 w-full md:w-[70%] lg:w-[65%] md:pl-12 mt-2 md:mt-1">
                      <div className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                        <span className="font-semibold text-zinc-300 block mb-1.5 uppercase tracking-wide text-sm">{step.subtitle}</span>
                        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
                          {step.description}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
}
