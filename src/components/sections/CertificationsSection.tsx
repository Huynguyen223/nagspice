import React from 'react';
import { certifications } from '../../data/mockData';
import { Image } from '../ui/Image';

export function CertificationsSection() {
  return (
    <section className="py-16 bg-stone-100 border-y border-stone-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">Quality & Certifications</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Our processing facilities adhere to the highest international food safety and quality management standards.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex flex-col items-center gap-3">
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-sm border border-stone-200 flex items-center justify-center p-6 overflow-hidden">
                <Image 
                  src={cert.logo} 
                  alt={`${cert.name} Certification`}
                  fill
                  className="object-contain p-6 mix-blend-multiply"
                />
              </div>
              <span className="text-sm font-semibold text-stone-700 text-center">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
