import React from 'react';
import { Phone } from 'lucide-react';
import { Center } from '@/types';
import { formatPhoneNumber } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface CenterCardProps {
  center: Center;
}

export default function CenterCard({ center }: CenterCardProps) {
  return (
    <div className="bg-slate-50 hover:bg-white p-6 rounded-3xl border border-slate-200 flex flex-col justify-between interactive-card transition-all">
      <div>
        {/* Header : Ville & Statut */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200">
            {center.city}
          </span>
          <span
            className={`text-xs font-bold flex items-center gap-1.5 ${
              center.isOpen ? 'text-emerald-600' : 'text-slate-400'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                center.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'
              }`}
            />
            {center.isOpen ? 'Ouvert' : 'Fermé'}
          </span>
        </div>

        {/* Nom du centre */}
        <h3 className="font-bold text-slate-900 text-lg leading-snug">{center.name}</h3>

        {/* Adresse et Horaires */}
        <div className="mt-3 text-xs text-slate-500 space-y-1">
          <p className="line-clamp-2">{center.address}</p>
          <p className="font-semibold text-slate-700 pt-1">{center.hours}</p>
        </div>
      </div>

      {/* Footer : Téléphone et Bouton d'appel */}
      <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500">{center.phone}</span>
        <Button
          variant="dark"
          size="sm"
          href={`tel:${formatPhoneNumber(center.phone)}`}
        >
          <Phone className="w-3.5 h-3.5" />
          Appeler
        </Button>
      </div>
    </div>
  );
}
