import React, { useState } from 'react';
import { productGrades } from '../../data/mockData';
import { ProductCard } from '../ui/ProductCard';

export function ProductGrades() {
  const [activeTab, setActiveTab] = useState<'all' | 'featured'>('all');
  
  const products = activeTab === 'all' ? productGrades : productGrades.filter(p => p.isFeatured);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 text-center">Export Product Grades</h2>
          <p className="text-stone-600 max-w-2xl text-center mb-8">
            Standardized grades for international markets. All products undergo rigorous testing for Volatile Oil (VO) content and moisture levels.
          </p>
          
          <div className="flex p-1 bg-stone-100 rounded-lg">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                activeTab === 'all' 
                  ? 'bg-white text-stone-900 shadow-sm' 
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              All Grades
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                activeTab === 'featured' 
                  ? 'bg-white text-stone-900 shadow-sm' 
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              Featured Specs
            </button>
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
