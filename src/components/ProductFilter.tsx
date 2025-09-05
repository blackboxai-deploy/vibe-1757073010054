"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { SearchFilters } from '@/lib/types';
import { categories } from '@/lib/data';
import { getAllBrands, getFilterOptions } from '@/lib/utils-data';

interface ProductFilterProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  resultCount: number;
}

export default function ProductFilter({ filters, onFiltersChange, resultCount }: ProductFilterProps) {
  const [localPriceRange, setLocalPriceRange] = useState([filters.minPrice, filters.maxPrice]);
  const filterOptions = getFilterOptions();
  const brands = getAllBrands();

  useEffect(() => {
    setLocalPriceRange([filters.minPrice, filters.maxPrice]);
  }, [filters.minPrice, filters.maxPrice]);

  const updateFilters = (updates: Partial<SearchFilters>) => {
    onFiltersChange({ ...filters, ...updates });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      query: '',
      category: 'all',
      minPrice: filterOptions.priceRange.min,
      maxPrice: filterOptions.priceRange.max,
      brand: 'all',
      sortBy: 'name',
      inStockOnly: false
    });
    setLocalPriceRange([filterOptions.priceRange.min, filterOptions.priceRange.max]);
  };

  const handlePriceRangeChange = (value: number[]) => {
    setLocalPriceRange(value);
    updateFilters({ minPrice: value[0], maxPrice: value[1] });
  };

  const activeFilterCount = [
    filters.query && 'search',
    filters.category !== 'all' && 'category',
    filters.brand !== 'all' && 'brand',
    filters.inStockOnly && 'stock',
    (filters.minPrice !== filterOptions.priceRange.min || filters.maxPrice !== filterOptions.priceRange.max) && 'price'
  ].filter(Boolean).length;

  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">
            Filters
            {activeFilterCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {activeFilterCount}
              </Badge>
            )}
          </CardTitle>
          {activeFilterCount > 0 && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              Clear All
            </Button>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          {resultCount} products found
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="Search products..."
            value={filters.query}
            onChange={(e) => updateFilters({ query: e.target.value })}
          />
        </div>

        <Separator />

        {/* Category Filter */}
        <div className="space-y-3">
          <Label>Category</Label>
          <Select value={filters.category} onValueChange={(value) => updateFilters({ category: value })}>
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.slug}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Price Range */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Price Range</Label>
            <span className="text-sm text-muted-foreground">
              ${localPriceRange[0]} - ${localPriceRange[1]}
            </span>
          </div>
          <Slider
            value={localPriceRange}
            onValueChange={handlePriceRangeChange}
            max={filterOptions.priceRange.max}
            min={filterOptions.priceRange.min}
            step={5}
            className="w-full"
          />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>${filterOptions.priceRange.min}</span>
            <span>${filterOptions.priceRange.max}</span>
          </div>
        </div>

        <Separator />

        {/* Brand Filter */}
        <div className="space-y-3">
          <Label>Brand</Label>
          <Select value={filters.brand} onValueChange={(value) => updateFilters({ brand: value })}>
            <SelectTrigger>
              <SelectValue placeholder="All Brands" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Stock Filter */}
        <div className="space-y-3">
          <Label>Availability</Label>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="inStock"
              checked={filters.inStockOnly}
              onCheckedChange={(checked) => updateFilters({ inStockOnly: !!checked })}
            />
            <Label htmlFor="inStock" className="text-sm font-normal">
              In stock only
            </Label>
          </div>
        </div>

        <Separator />

        {/* Sort Options */}
        <div className="space-y-3">
          <Label>Sort by</Label>
          <Select value={filters.sortBy} onValueChange={(value) => updateFilters({ sortBy: value as SearchFilters['sortBy'] })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name A-Z</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Quick Filter Tags */}
        <Separator />
        <div className="space-y-3">
          <Label>Quick Filters</Label>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filters.category === 'helmets' ? 'default' : 'outline'}
              size="sm"
              onClick={() => updateFilters({ category: 'helmets' })}
            >
              Safety Gear
            </Button>
            <Button
              variant={filters.brand === 'BrightBeam' ? 'default' : 'outline'}
              size="sm"
              onClick={() => updateFilters({ brand: 'BrightBeam' })}
            >
              BrightBeam
            </Button>
            <Button
              variant={filters.sortBy === 'rating' ? 'default' : 'outline'}
              size="sm"
              onClick={() => updateFilters({ sortBy: 'rating' })}
            >
              Top Rated
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}