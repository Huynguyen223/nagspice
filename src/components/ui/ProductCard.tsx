import React from 'react';
import { Product } from '../../types';
import { Button } from './Button';
import { Image } from './Image';
import { FileText, ArrowRightLeft, ShoppingCart } from 'lucide-react';
import { Link } from './Link';

interface ProductCardProps {
  product: Product;
  buttonStyle?: 'doc-tiep' | 'chon' | 'mixed';
}

export function ProductCard({ product, buttonStyle }: ProductCardProps) {
  return (
    <div className="group flex flex-col bg-white overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300">
      <Link href={`/products/${product.slug || product.id}`} className="relative aspect-square overflow-hidden bg-stone-100 block">
        <Image 
          src={product.image} 
          alt={product.altText}
          fill
          className="transition-transform duration-500 group-hover:scale-105 object-cover"
        />
      </Link>
      
      <div className="p-5 flex flex-col flex-grow text-center">
        <Link href={`/products/${product.slug || product.id}`} className="font-bold text-lg text-stone-900 mb-4 group-hover:opacity-75 transition-opacity">
          {product.name}
        </Link>
        
        <div className="mt-auto pt-4">
          {buttonStyle === 'doc-tiep' && (
            <Link 
              href={`/products/${product.slug || product.id}`}
              className="block w-full text-white text-sm font-bold uppercase py-3 px-4 text-center transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--clr-primary)' }}
            >
              READ MORE
            </Link>
          )}
          {buttonStyle === 'chon' && (
            <Link 
              href={`/products/${product.slug || product.id}`}
              className="flex items-center justify-center gap-2 w-full text-white text-sm font-bold uppercase py-3 px-4 text-center transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--clr-primary)' }}
            >
              <ShoppingCart className="w-4 h-4" /> ADD TO CART
            </Link>
          )}
          {buttonStyle === 'mixed' && (
            <Link 
              href={`/products/${product.slug || product.id}`}
              className="block w-full text-white text-sm font-bold uppercase py-3 px-4 text-center transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--clr-primary)' }}
            >
              READ MORE
            </Link>
          )}
          {!buttonStyle && (
            <div className="flex flex-col gap-2 pt-4 border-t" style={{ borderColor: 'var(--clr-border)' }}>
              <Link 
                href="/contact"
                className="w-full py-2.5 rounded text-sm font-semibold text-white text-center transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                style={{ backgroundColor: 'var(--clr-primary)' }}
              >
                <FileText className="w-4 h-4" /> Request Market Quote
              </Link>
              <div className="group relative inline-block text-center mt-1">
                <span className="text-xs font-semibold uppercase tracking-wider cursor-help border-b border-dashed"
                  style={{ color: 'var(--clr-accent-red)', borderBottomColor: 'var(--clr-accent-red)' }}>
                  Flexible Pricing
                </span>
                <div className="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 text-xs text-white bg-gray-800 rounded shadow-lg z-10">
                  Prices are market-responsive to ensure the best value for bulk international trade.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
