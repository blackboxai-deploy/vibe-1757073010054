"use client";

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductFilter from '@/components/ProductFilter';
import { SearchFilters, ViewMode } from '@/lib/types';
import { searchProducts, getFilterOptions } from '@/lib/utils-data';

export default function ProductsPage() {
  const filterOptions = getFilterOptions();
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    category: 'all',
    minPrice: filterOptions.priceRange.min,
    maxPrice: filterOptions.priceRange.max,
    brand: 'all',
    sortBy: 'name',
    inStockOnly: false
  });

  const filteredProducts = useMemo(() => {
    return searchProducts(filters);
  }, [filters]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8 space-y-4">
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              All Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our complete collection of premium bike accessories, 
              from safety gear to performance tools.
            </p>
          </div>

          {/* Quick Search */}
          <div className="max-w-md mx-auto">
            <Input
              type="search"
              placeholder="Search all products..."
              value={filters.query}
              onChange={(e) => setFilters(prev => ({ ...prev, query: e.target.value }))}
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <ProductFilter
              filters={filters}
              onFiltersChange={setFilters}
              resultCount={filteredProducts.length}
            />
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3 space-y-6">
            {/* View Controls */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} products
              </p>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">View:</span>
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Grid
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  List
                </Button>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                  : 'space-y-6'
              }>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">No products found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters or search terms
                  </p>
                  <Button onClick={() => setFilters({
                    query: '',
                    category: 'all',
                    minPrice: filterOptions.priceRange.min,
                    maxPrice: filterOptions.priceRange.max,
                    brand: 'all',
                    sortBy: 'name',
                    inStockOnly: false
                  })}>
                    Clear Filters
                  </Button>
                </div>
              </div>
            )}

            {/* Load More (for future pagination) */}
            {filteredProducts.length > 12 && (
              <div className="text-center pt-8">
                <Button variant="outline" size="lg">
                  Load More Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}