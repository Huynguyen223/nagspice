import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { productGrades } from '../../../data/mockData';
import { Image } from '../../../components/ui/Image';
import { Button } from '../../../components/ui/Button';
import { FeaturedProductsTabs } from '../../../components/sections/FeaturedProductsTabs';
import { Product } from '../../../types';

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = productGrades.find(p => p.slug === slug || p.id === slug);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Handle 404
      navigate('/');
    }
  }, [slug, navigate]);

  if (!product) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Breadcrumbs */}
        <div className="bg-stone-50 py-4 border-b border-stone-200">
          <div className="container mx-auto px-4 text-sm text-stone-500">
            <span className="hover:text-orange-600 cursor-pointer" onClick={() => navigate('/')}>Home</span>
            <span className="mx-2">/</span>
            <span className="hover:text-orange-600 cursor-pointer" onClick={() => navigate('/products')}>Products</span>
            <span className="mx-2">/</span>
            <span className="text-stone-900 font-medium">{product.name}</span>
          </div>
        </div>

        {/* Product Split View */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Image Left */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm">
                <Image 
                  src={product.image} 
                  alt={product.altText} 
                  fill 
                  className="object-cover"
                />
              </div>

              {/* Details Right */}
              <div className="flex flex-col">
                <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
                  {product.name}
                </h1>
                
                <div className="text-3xl font-light text-orange-600 mb-8 pb-8 border-b border-stone-200">
                  {product.fobPrice} <span className="text-lg text-stone-500 font-normal">Est. FOB Price</span>
                </div>

                {product.generalProperties && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-stone-900 mb-4">General Properties</h3>
                    <ul className="space-y-3">
                      {Object.entries(product.generalProperties).map(([key, value]) => (
                        <li key={key} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                          <span className="text-stone-500 font-medium min-w-[200px]">{key}:</span>
                          <span className="text-stone-900">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8">
                  <Button variant="primary" className="flex-1 py-4 text-lg shadow-lg hover:shadow-xl transition-shadow">
                    Request Wholesale Quote
                  </Button>
                  <Button variant="secondary" className="flex-1 py-4 text-lg">
                    Download Specs PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Details Table */}
        {product.quickDetails && (
          <section className="py-16 bg-stone-50 border-t border-stone-200">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Quick Details</h2>
              <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {Object.entries(product.quickDetails).map(([key, value], idx) => (
                    <div 
                      key={key} 
                      className={`flex flex-col sm:flex-row p-4 border-stone-100 ${
                        idx % 2 === 0 ? 'bg-stone-50/50' : 'bg-white'
                      } ${
                        idx !== Object.keys(product.quickDetails!).length - 1 && idx !== Object.keys(product.quickDetails!).length - 2 
                          ? 'border-b' 
                          : ''
                      } ${
                        idx % 2 === 0 ? 'md:border-r' : ''
                      }`}
                    >
                      <span className="text-stone-500 font-medium sm:w-1/3 mb-1 sm:mb-0">{key}</span>
                      <span className="text-stone-900 sm:w-2/3">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <FeaturedProductsTabs />
      </main>

      <Footer />
    </div>
  );
}
