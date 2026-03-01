import React from 'react';
import { companyInfo } from '../../data/mockData';
import { Button } from '../ui/Button';
import { Image } from '../ui/Image';
import { Ship } from 'lucide-react';

export function GlobalShippingSection() {
  return (
    <section className="py-16 md:py-24 bg-stone-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-stone-800">
              <Image 
                src={companyInfo.image} 
                alt={companyInfo.altText} 
                fill
              />
              <div className="absolute inset-0 bg-orange-600/10 mix-blend-overlay" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 text-orange-400 text-sm font-medium mb-6">
              <Ship className="w-4 h-4" />
              <span>International Logistics</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {companyInfo.title}
            </h2>
            <p className="text-lg text-stone-300 mb-8 leading-relaxed">
              {companyInfo.description}
            </p>
            
            <ul className="space-y-4 mb-10">
              {companyInfo.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                  <span className="text-stone-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Discuss Container Loads
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
