import React from 'react';
import { bloodGroupsSummary } from '@/data/bloodGroups';

export default function FloatingReserves() {
  return (
    <div className="hemo-container relative mt-8 md:mt-12 z-20">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-8 rounded-[32px] border border-blood-gray-200 bg-white px-6 py-6 md:px-10">
        <div className="text-center md:text-left md:w-1/3">
          <p className="m-0 text-sm font-bold uppercase tracking-wider text-blood-gray-900">
            Tous les groupes sont vitaux
          </p>
        </div>

        {/* 4 Groupes Sanguins Clés */}
        <div className="flex w-full md:w-2/3 justify-between gap-2 sm:gap-4">
          {bloodGroupsSummary.map((item) => (
            <div key={item.group} className="text-center flex-1">
              <span className="block text-3xl sm:text-4xl md:text-5xl leading-none font-hero-title font-black text-blood-gray-900">
                {item.group}
              </span>
              <span className="mt-2 block text-xs font-bold uppercase tracking-wider text-blood-600">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
