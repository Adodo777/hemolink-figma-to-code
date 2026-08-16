import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'blood' | 'dark' | 'navy' | 'outline' | 'outline-white' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 focus:outline-none';

  const variants = {
    primary: 'bg-blood-50 hover:bg-blood-100 text-blood-950 border border-blood-200 hover:scale-105',
    blood: 'bg-blood-600 hover:bg-blood-700 text-white hover:scale-105',
    dark: 'bg-blood-950 hover:bg-blood-900 text-white',
    navy: 'bg-blood-900 hover:bg-blood-800 text-white',
    outline: 'border border-blood-200 text-blood-900 hover:bg-blood-50',
    'outline-white': 'border border-white/60 text-white hover:bg-white/10 hover:scale-105',
    emerald: 'bg-blood-700 hover:bg-blood-800 text-white',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-xs sm:text-sm px-6 sm:px-7 py-2.5 sm:py-3 gap-2',
    lg: 'text-sm sm:text-base px-7 sm:px-9 py-3.5 sm:py-4 gap-2',
  };

  const combinedClass = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
}
