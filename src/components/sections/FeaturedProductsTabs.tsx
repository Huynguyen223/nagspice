import React, { useState } from 'react';
import { ProductCard } from '../ui/ProductCard';
import { productGrades } from '../../data/mockData';

export function FeaturedProductsTabs() {
  const [activeTab, setActiveTab] = useState<'Best Sellers' | 'New Arrivals' | 'Popular Item'>('Best Sellers');

  // For demonstration, we'll just filter or shuffle the mock data based on the tab
  const getProducts = () => {
    switch (activeTab) {
      case 'Best Sellers':
        return productGrades.filter(p => p.isFeatured);
      case 'New Arrivals':
        return [...productGrades].reverse().slice(0, 4);
      case 'Popular Item':
        return productGrades.slice(0, 4);
      default:
        return productGrades;
    }
  };

  const products = getProducts();

  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Featured Products</h2>
          <div className="flex justify-center gap-4 border-b border-stone-200">
            {(['Best Sellers', 'New Arrivals', 'Popular Item'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-4 text-sm font-semibold transition-colors relative ${
                  activeTab === tab 
                    ? 'text-orange-600' 
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
