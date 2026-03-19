import React, { useState } from 'react';
import { ProductCard } from '../ui/ProductCard';
import { productGrades } from '../../data/mockData';

export function FeaturedProductsTabs() {
  const [activeTab, setActiveTab] = useState<'Best Sellers' | 'New Arrivals' | 'Popular Item'>('Best Sellers');

  const getProducts = () => {
    switch (activeTab) {
      case 'Best Sellers':
        return productGrades.filter(p => 
          ['Ground Pepper', 'White Pepper', 'Black Pepper', 'Turmeric Powder'].includes(p.name)
        );
      case 'New Arrivals':
        return productGrades.filter(p => 
          ['Organic Cayenne Powder', 'Madras Curry Powder', 'Cinnamon Powder', 'Granulated Garlic'].includes(p.name)
        );
      case 'Popular Item':
        return productGrades.filter(p => 
          ['Cassia Powder', 'Granulated Garlic', 'Turmeric Powder', 'White Pepper'].includes(p.name)
        );
      default:
        return [];
    }
  };

  const products = getProducts();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)', color: 'var(--clr-text)' }}>Featured Products</h2>
          <div className="flex justify-center gap-8 border-b border-stone-200">
            {(['Best Sellers', 'New Arrivals', 'Popular Item'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 text-sm font-bold uppercase tracking-wider transition-colors relative ${
                  activeTab === tab 
                    ? 'text-stone-900' 
                    : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ backgroundColor: 'var(--clr-primary)' }} />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              buttonStyle={
                activeTab === 'Best Sellers' ? 'doc-tiep' : 
                activeTab === 'New Arrivals' ? 'chon' : 
                'mixed'
              } 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
