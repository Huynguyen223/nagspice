import React from 'react';
import { heroData } from '../../data/mockData';
import { Link } from '../ui/Link';

export function HeroSection() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: '88vh', backgroundColor: '#1c1205' }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroData.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.45,
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to top, rgba(15,9,2,0.95) 0%, rgba(15,9,2,0.55) 50%, rgba(15,9,2,0.2) 100%)' }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center flex flex-col items-center py-24">
        <span className="inline-block mb-5 px-5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.25em]"
          style={{ backgroundColor: 'rgba(180, 83, 9, 0.2)', color: '#f59e0b', border: '1px solid rgba(180,83,9,0.4)' }}>
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
            className="inline-flex items-center justify-center px-8 py-4 rounded text-base font-semibold transition-all"
            style={{
              backgroundColor: 'transparent',
              border: '1.5px solid #8a7260',
              color: '#e8d5b0',
              fontFamily: 'var(--font-body)',
            }}
          >
            View Product Catalogue
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-3 gap-8 md:gap-16 border-t pt-8"
          style={{ borderColor: 'rgba(255,255,255,0.1)', maxWidth: '600px', width: '100%' }}>
          {[
            { value: '4.0%+', label: 'Volatile Oil Content' },
            { value: '15+', label: 'Years Exporting' },
            { value: 'FCL', label: 'Container-Load Ready' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: '#f59e0b' }}>{value}</div>
              <div style={{ fontSize: '0.72rem', color: '#8a7260', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.25rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
