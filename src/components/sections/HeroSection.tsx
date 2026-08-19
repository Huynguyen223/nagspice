import React, { useState, useEffect } from 'react';
import { heroData } from '../../data/mockData';
import { Link } from '../ui/Link';

const BACKGROUND_IMAGES = [
  '/images/hero-farming.jpg',
  '/images/cassia-sticks.jpg',
  '/images/star-anise.jpg',
  '/images/pepper.jpg',
  '/images/container-loading.jpg'
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: '88vh', backgroundColor: 'var(--clr-bg)' }}>
      {/* Background Images */}
      {BACKGROUND_IMAGES.map((img, index) => (
         <div
           key={img}
           className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out"
           style={{
             backgroundImage: `url(${img})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             opacity: index === currentImageIndex ? 0.35 : 0,
           }}
         />
      ))}
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to top, rgba(250,250,249,0.95) 0%, rgba(250,250,249,0.7) 50%, rgba(250,250,249,0.2) 100%)' }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center flex flex-col items-center py-24">
        <span className="inline-block mb-6 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em] shadow-lg"
          style={{ backgroundColor: 'var(--clr-primary)', color: '#ffffff', border: '1px solid var(--clr-primary)', boxShadow: '0 4px 6px -1px rgba(127,20,22, 0.4)' }}>
          B2B Wholesale · Premium Cinnamon Exporter
        </span>

        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.6rem, 6vw, 5.5rem)',
          fontWeight: 800,
          color: 'var(--clr-dark-text)',
          lineHeight: 1.15,
          maxWidth: '900px',
          marginBottom: '1.5rem',
          letterSpacing: '0.01em',
        }}>
          {heroData.headline}
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
          color: 'var(--clr-dark-muted)',
          maxWidth: '680px',
          marginBottom: '2.5rem',
          lineHeight: 1.8,
          fontWeight: 400,
        }}>
          {heroData.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded text-base font-semibold text-white transition-all hover:opacity-90 shadow-lg"
            style={{ backgroundColor: 'var(--clr-primary)', fontFamily: 'var(--font-body)' }}
          >
            {heroData.ctaText}
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 rounded text-base font-semibold transition-all hover:bg-stone-100"
            style={{
              backgroundColor: 'transparent',
              border: '1.5px solid var(--clr-border)',
              color: 'var(--clr-text)',
              fontFamily: 'var(--font-body)',
            }}
          >
            View Product Catalogue
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-3 gap-8 md:gap-16 border-t pt-8"
          style={{ borderColor: 'var(--clr-border)', maxWidth: '600px', width: '100%' }}>
          {[
            { value: '4.0%+', label: 'Volatile Oil Content' },
            { value: '15+', label: 'Years Exporting' },
            { value: 'FCL', label: 'Container-Load Ready' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--clr-primary)' }}>{value}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--clr-text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.25rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
