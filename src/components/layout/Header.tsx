import React from 'react';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 -ml-2 text-stone-600 hover:text-stone-900">
            <Menu className="h-6 w-6" />
          </button>
          <a href="/" className="text-2xl font-bold tracking-tighter text-stone-900">
            NAGSPICE
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-stone-600 hover:text-orange-600 transition-colors">Shop</a>
          <a href="#" className="text-sm font-medium text-stone-600 hover:text-orange-600 transition-colors">About Us</a>
          <a href="#" className="text-sm font-medium text-stone-600 hover:text-orange-600 transition-colors">Co-Packing</a>
          <a href="#" className="text-sm font-medium text-stone-600 hover:text-orange-600 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-stone-600 hover:text-orange-600 transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 text-stone-600 hover:text-orange-600 transition-colors hidden sm:block">
            <User className="h-5 w-5" />
          </button>
          <button className="p-2 text-stone-600 hover:text-orange-600 transition-colors relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-orange-600 text-[10px] font-bold text-white flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
