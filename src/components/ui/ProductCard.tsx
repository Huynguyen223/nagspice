import React from 'react';
import { Product } from '../../types';
import { Button } from './Button';
import { Image } from './Image';
import { FileText, ArrowRightLeft } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <Image 
          src={product.image} 
          alt={product.altText}
          fill
          className="transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Hover Actions */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex gap-2">
          <Button variant="primary" className="w-full shadow-lg text-sm">Request Quote</Button>
          <Button variant="secondary" className="px-3 shadow-lg" title="Compare Specs">
            <ArrowRightLeft className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-stone-900 mb-3 group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="space-y-2 mb-4 flex-grow">
          {product.specifications.map((spec, idx) => (
            <div key={idx} className="flex items-center text-sm text-stone-600 bg-stone-50 px-2 py-1 rounded">
              <FileText className="w-3 h-3 mr-2 text-orange-500 shrink-0" />
              <span>{spec}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
          <span className="text-xs text-stone-500 uppercase font-semibold tracking-wider">Est. FOB Price</span>
          <span className="text-lg font-bold text-stone-900">{product.fobPrice}</span>
        </div>
      </div>
    </div>
  );
}
