import React from 'react';
import { Button } from '../ui/Button';

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter">NAGSPICE</h3>
            <p className="text-sm text-stone-400 mb-6">
              Bringing the world's finest spices directly to your kitchen. Quality and authenticity in every pinch.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Our Story</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Company Profile</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Our Facility</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Commitment To Quality</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contract Manufacturing</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Our Awards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Look Up Order</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Refer a Friend</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Shipping & Delivery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-stone-400 mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-stone-900 border border-stone-800 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-orange-600 transition-colors"
              />
              <Button variant="primary" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Nagspice. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
