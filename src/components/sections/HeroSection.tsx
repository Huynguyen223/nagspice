import React from 'react';
import { heroData } from '../../data/mockData';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-stone-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-950/90 via-stone-900/60 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-20 text-center flex flex-col items-center">
        <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4">
          B2B Wholesale Cinnamon Exporter
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl leading-tight">
          {heroData.headline}
        </h1>
        <p className="text-lg md:text-xl text-stone-300 mb-8 max-w-3xl">
          {heroData.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" size="lg">
            {heroData.ctaText}
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-stone-900">
            View Product Specifications
          </Button>
        </div>
      </div>
    </section>
  );
}
