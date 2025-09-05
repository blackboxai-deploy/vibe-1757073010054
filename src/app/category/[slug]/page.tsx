"use client";

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { SearchFilters, ViewMode } from '@/lib/types';
import { getProductsByCategory, getCategoryBySlug, getFilterOptions } from '@/lib/utils-data';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = getCategoryBySlug(slug);
  const filterOptions = getFilterOptions();
  
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SearchFilters['sortBy']>('name');

  const products = useMemo(() => {
    const categoryProducts = getProductsByCategory(slug);
    
    return categoryProducts.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return 0;
      }
    });
  }, [slug, sortBy]);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Category Not Found</h1>
            <p className="text-muted-foreground mt-2">
              The category you're looking for doesn't exist.
            </p>
            <Button asChild className="mt-4">
              <a href="/products">View All Products</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Category Hero */}
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="absolute inset-0">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-background/60"></div>
          </div>
          
          <div className="relative container mx-auto px-4 text-center">
            <div className="space-y-4 max-w-3xl mx-auto">
              <Badge variant="secondary" className="w-fit mx-auto">
                {products.length} Products Available
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {category.name}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                {category.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg">
                  Shop {category.name}
                </Button>
                <Button variant="outline" size="lg">
                  Compare Products
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Listing */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  {category.name} Collection
                </h2>
                <p className="text-sm text-muted-foreground">
                  {products.length} products in this category
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Sort */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SearchFilters['sortBy'])}
                    className="px-3 py-1 border rounded-md text-sm bg-background"
                  >
                    <option value="name">Name A-Z</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>

                {/* View Mode */}
                <div className="flex items-center space-x-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {products.length > 0 ? (
              <div className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-6'
              }>
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Card>
                  <CardContent className="p-12">
                    <div className="space-y-4">
                      <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                        <svg className="h-8 w-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">No products in this category</h3>
                        <p className="text-muted-foreground mt-2">
                          We're working on adding more {category.name.toLowerCase()} to our collection.
                        </p>
                      </div>
                      <Button asChild>
                        <a href="/products">Browse All Products</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}