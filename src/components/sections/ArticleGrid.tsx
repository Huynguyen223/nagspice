import React from 'react';
import { articles } from '../../data/mockData';
import { ArticleCard } from '../ui/ArticleCard';
import { ArrowRight } from 'lucide-react';

export function ArticleGrid() {
  return (
    <section className="py-16 md:py-24 bg-stone-50 border-t border-stone-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Market Insights & Company News</h2>
            <p className="text-stone-600 max-w-2xl">
              Stay informed with the latest updates on crop yields, quality standards, and global shipping logistics from our expert team.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors group">
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
