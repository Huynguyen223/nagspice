import React from 'react';
import { Image } from '../ui/Image';
import { Link } from '../ui/Link';

const categories = [
  { name: 'Shop All', href: '/products', isPlaceholder: true },
  { name: 'Cinnamon', href: '/category/cinnamon', image: '/images/cassia-sticks.jpg' },
  { name: 'Ginger', href: '/category/ginger', image: '/images/ginger.jpg' },
  { name: 'Pepper', href: '/category/pepper', image: '/images/pepper.jpg' },
  { name: 'Star Anise', href: '/category/star-anise', image: '/images/star-anise.jpg' },
  { name: 'Turmeric', href: '/category/turmeric', image: '/images/turmeric.jpg' },
];

export function CategoryRow() {
  return (
    <section className="py-12" style={{ backgroundColor: 'var(--clr-surface)' }}>
      <div className="container mx-auto px-4">
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: 600,
          textAlign: 'center',
          color: 'var(--clr-text)',
          marginBottom: '2.5rem',
        }}>
          Professional Spice Supply For Global Food Businesses
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="flex flex-col items-center group"
            >
              <div
                className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden mb-3 relative shadow-sm group-hover:shadow-md transition-all duration-300"
                style={{ backgroundColor: 'var(--clr-bg-alt)' }}
              >
                {category.isPlaceholder ? (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--clr-bg-alt)', color: 'var(--clr-text-muted)' }}
                  >
                    <span className="text-sm font-medium">All</span>
                  </div>
                ) : (
                  <Image
                    src={category.image!}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>
              <span
                className="text-sm font-semibold transition-colors group-hover:text-amber-700"
                style={{ color: 'var(--clr-text)', fontFamily: 'var(--font-body)' }}
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
