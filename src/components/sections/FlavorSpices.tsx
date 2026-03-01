import React from 'react';
import { productGrades } from '../../data/mockData';
import { Image } from '../ui/Image';
import { Link } from '../ui/Link';

export function FlavorSpices() {
  // Filter the exact 4 products requested
  const products = productGrades.filter(p => 
    ['Cigarettes cassia', 'Cassia Powder', 'Cassia Broken', 'Whole Cassia'].includes(p.name)
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Discover Our Flavor Spices
          </h2>
          <div className="flex justify-center">
            {/* Decorative red squiggly/wavy underline */}
            <svg width="120" height="12" viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6C10 6 10 1 20 1C30 1 30 11 40 11C50 11 50 1 60 1C70 1 70 11 80 11C90 11 90 1 100 1C110 1 110 6 120 6" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300">
              <Link href={`/products/${product.slug || product.id}`} className="relative aspect-square overflow-hidden bg-stone-100 block">
                <Image 
                  src={product.image} 
                  alt={product.altText}
                  fill
                  className="transition-transform duration-500 group-hover:scale-105 object-cover"
                />
              </Link>
              
              <div className="p-5 flex flex-col flex-grow text-center">
                <span className="text-xs text-stone-500 uppercase tracking-wider mb-2">
                  Cinnamon
                </span>
                <Link href={`/products/${product.slug || product.id}`} className="font-bold text-lg text-stone-900 mb-4 group-hover:text-red-700 transition-colors">
                  {product.name}
                </Link>
                
                <div className="mt-auto pt-4">
                  <Link 
                    href={`/products/${product.slug || product.id}`}
                    className="block w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white text-sm font-bold uppercase py-3 px-4 text-center transition-colors"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
