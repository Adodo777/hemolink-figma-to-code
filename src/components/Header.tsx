'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 w-full pt-4 md:pt-6 flex justify-center z-50 px-4 md:px-6 transition-all">
        <div className="bg-white px-6 sm:px-10 py-3.5 rounded-full flex items-center justify-between gap-6 sm:gap-12 w-full max-w-[1320px] border border-blood-gray-200">
          {/* Logo Image */}
          <Link href="/" className="flex items-center group text-decoration-none" aria-label="HemoLink Accueil">
            <Image
              src="/hemolink.webp"
              alt="HemoLink Bénin"
              width={160}
              height={48}
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-700">
            <a href="#pourquoi-donner" className="hover:text-blood-600 transition-colors">À propos</a>
            <a href="#simulateur" className="hover:text-blood-600 transition-colors">Éligibilité</a>
            <a href="#deroulement" className="hover:text-blood-600 transition-colors">Parcours</a>
            <a href="#centres" className="hover:text-blood-600 transition-colors">Centres</a>
            <a href="#faq" className="hover:text-blood-600 transition-colors">FAQ</a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <Button variant="navy" size="md" href="#simulateur">
              Test d&apos;éligibilité
            </Button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-zinc-700 hover:text-blood-600"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[999] bg-blood-gray-950/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 p-6 text-white text-xl font-bold">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white"
            aria-label="Fermer le menu"
          >
            <X className="w-8 h-8" />
          </button>
          <a href="#pourquoi-donner" onClick={() => setMobileMenuOpen(false)} className="hover:text-blood-400">
            À propos
          </a>
          <a href="#simulateur" onClick={() => setMobileMenuOpen(false)} className="hover:text-blood-400">
            Simulateur d&apos;éligibilité
          </a>
          <a href="#deroulement" onClick={() => setMobileMenuOpen(false)} className="hover:text-blood-400">
            Déroulement du don
          </a>
          <a href="#centres" onClick={() => setMobileMenuOpen(false)} className="hover:text-blood-400">
            Centres au Bénin
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-blood-400">
            FAQ & Idées reçues
          </a>
        </div>
      )}
    </>
  );
}
