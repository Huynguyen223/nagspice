import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { CategoryGrid } from '../components/sections/CategoryGrid';
import { ProductGrades } from '../components/sections/ProductGrades';
import { GlobalShippingSection } from '../components/sections/GlobalShippingSection';
import { CertificationsSection } from '../components/sections/CertificationsSection';
import { ArticleGrid } from '../components/sections/ArticleGrid';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CertificationsSection />
        <CategoryGrid />
        <GlobalShippingSection />
        <ProductGrades />
        <ArticleGrid />
      </main>
      <Footer />
    </div>
  );
}
