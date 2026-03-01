import React from 'react';
import { companyInfo } from '../../data/mockData';
import { Image } from '../ui/Image';
import { Link } from '../ui/Link';
import { Ship, ArrowRight } from 'lucide-react';

export function GlobalShippingSection() {
  return (
    <section className="py-16 md:py-24 text-white" style={{ backgroundColor: '#1a100a' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#2a1a10' }}>
              <Image
                src={companyInfo.image}
                alt={companyInfo.altText}
                fill
              />
              <div className="absolute inset-0" style={{ backgroundColor: 'rgba(146,64,14,0.12)', mixBlendMode: 'overlay' }} />
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: 'rgba(180,83,9,0.18)', color: '#fbbf24', border: '1px solid rgba(180,83,9,0.3)' }}>
              <Ship className="w-4 h-4" />
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, letterSpacing: '0.05em' }}>International Logistics</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              fontWeight: 700,
              marginBottom: '1.25rem',
              lineHeight: 1.2,
              color: 'var(--clr-dark-text)',   /* bright warm white */
            }}>
              {companyInfo.title}
            </h2>

            <p className="mb-8 leading-relaxed" style={{
              color: 'var(--clr-dark-muted)',   /* golden tan — clearly visible */
              fontSize: '1rem',
              fontFamily: 'var(--font-body)',
            }}>
              {companyInfo.description}
            </p>

            <ul className="space-y-3 mb-10">
              {companyInfo.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#fbbf24' }} />
                  <span style={{ color: 'var(--clr-dark-muted)', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA → /contact */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded text-base font-semibold text-white transition-all hover:opacity-90 shadow-lg"
              style={{ backgroundColor: 'var(--clr-primary)', fontFamily: 'var(--font-body)' }}
            >
              Discuss Container Loads
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
