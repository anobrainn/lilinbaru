import React from 'react';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[921px] flex items-center justify-center overflow-hidden px-6 lg:px-12 py-20">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-red-600/10 via-background to-red-950/20 opacity-70"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse delay-1000"></div>
      </div>
      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-headline font-black leading-tight text-primary mb-6">
            Scent Meets Sound.
          </h1>
          <p className="text-lg md:text-xl font-body text-on-surface-variant mb-10 leading-relaxed max-w-lg">
            Elevate your atmosphere. Each hand-poured candle pairs perfectly with a curated auditory journey, blending notes of fragrance with waves of sound.
          </p>
          <Button asChild variant="primary" className="px-8 py-6 text-sm font-bold uppercase tracking-widest inline-flex items-center gap-3 rounded-xl hover:-translate-y-0.5 transition-transform">
            <a href="/collections">
              Explore Collections
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </Button>
        </div>
        <div className="relative h-[600px] w-full flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-full flex items-center justify-center ambient-glow z-20">
            <img
              alt="CANDÉ Logo"
              className="w-full h-full object-cover rounded-full mix-blend-screen opacity-90 shadow-[0_0_80px_rgba(220,38,38,0.2)]"
              src="/hero-image.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
