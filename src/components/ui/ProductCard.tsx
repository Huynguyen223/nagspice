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
        <Link href={`/products/${product.slug || product.id}`} className="font-bold text-lg text-stone-900 mb-4 group-hover:text-red-700 transition-colors">
          {product.name}
        </Link>
        
        <div className="mt-auto pt-4">
          {buttonStyle === 'doc-tiep' && (
            <Link 
              href={`/products/${product.slug || product.id}`}
              className="block w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white text-sm font-bold uppercase py-3 px-4 text-center transition-colors"
            >
              READ MORE
            </Link>
          )}
          {buttonStyle === 'chon' && (
            <Link 
              href={`/products/${product.slug || product.id}`}
              className="flex items-center justify-center gap-2 w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white text-sm font-bold uppercase py-3 px-4 text-center transition-colors"
            >
              <ShoppingCart className="w-4 h-4" /> ADD TO CART
            </Link>
          )}
          {buttonStyle === 'mixed' && (
            <Link 
              href={`/products/${product.slug || product.id}`}
              className="block w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white text-sm font-bold uppercase py-3 px-4 text-center transition-colors"
            >
              READ MORE
            </Link>
          )}
          {!buttonStyle && (
            <div className="flex items-center justify-between border-t border-stone-100 pt-4">
              <span className="text-xs text-stone-500 uppercase font-semibold tracking-wider">Est. FOB Price</span>
              <span className="text-lg font-bold text-stone-900">{product.fobPrice}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
