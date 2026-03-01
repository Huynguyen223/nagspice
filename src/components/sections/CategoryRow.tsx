import React from 'react';
import { Image } from '../ui/Image';
import { Link } from '../ui/Link';

const categories = [
  { name: 'Shop All', isPlaceholder: true },
  { name: 'Cinnamon', image: '/images/cassia-sticks.jpg' },
  { name: 'Ginger', image: '/images/ginger.jpg' },
  { name: 'Pepper', image: '/images/pepper.jpg' },
  { name: 'Star anise', image: '/images/star-anise.jpg' },
  { name: 'Turmeric', image: '/images/turmeric.jpg' },
];

export function CategoryRow() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-stone-900 mb-10">
          Professional Spice Supply For Global Food Businesses
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {categories.map((category, index) => (
            <Link 
              key={index}
              href={`/category/${category.name.toLowerCase().replace(' ', '-')}`}
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden mb-4 relative bg-stone-100 shadow-sm group-hover:shadow-md transition-all duration-300">
                {category.isPlaceholder ? (
                  <div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-400">
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
              <span className="text-sm font-semibold text-stone-800 group-hover:text-orange-600 transition-colors">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
