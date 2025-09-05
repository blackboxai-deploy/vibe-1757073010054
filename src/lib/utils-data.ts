import { Product, SearchFilters, FilterOptions } from './types';
import { products, categories } from './data';

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(product => product.category.slug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.isFeatured);
}

export function getNewProducts(): Product[] {
  return products.filter(product => product.isNew);
}

export function getSaleProducts(): Product[] {
  return products.filter(product => product.isSale);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function searchProducts(filters: SearchFilters): Product[] {
  let filtered = [...products];

  // Text search
  if (filters.query) {
    const query = filters.query.toLowerCase();
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  // Category filter
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(product => product.category.slug === filters.category);
  }

  // Price range filter
  filtered = filtered.filter(product => 
    product.price >= filters.minPrice && product.price <= filters.maxPrice
  );

  // Brand filter
  if (filters.brand && filters.brand !== 'all') {
    filtered = filtered.filter(product => product.brand === filters.brand);
  }

  // In stock filter
  if (filters.inStockOnly) {
    filtered = filtered.filter(product => product.inStock);
  }

  // Sort products
  filtered.sort((a, b) => {
    switch (filters.sortBy) {
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

  return filtered;
}

export function getFilterOptions(): FilterOptions {
  const allBrands = [...new Set(products.map(product => product.brand))];
  const allTags = [...new Set(products.flatMap(product => product.tags))];
  const prices = products.map(product => product.price);

  return {
    categories: categories.map(category => category.id),
    priceRange: {
      min: Math.min(...prices),
      max: Math.max(...prices)
    },
    brands: allBrands,
    tags: allTags
  };
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
}

export function getDiscountPercentage(originalPrice: number, currentPrice: number): number {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

export function generateStarRating(rating: number): string {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return '★'.repeat(fullStars) + 
         (hasHalfStar ? '☆' : '') + 
         '☆'.repeat(emptyStars);
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter(p => 
      p.id !== product.id && 
      (p.category.id === product.category.id || 
       p.tags.some(tag => product.tags.includes(tag)))
    )
    .slice(0, limit);
}

export function getCategoryBySlug(slug: string) {
  return categories.find(category => category.slug === slug);
}

export function getAllBrands(): string[] {
  return Array.from(new Set(products.map(product => product.brand))).sort();
}

export function getProductCountByCategory(): Record<string, number> {
  const counts: Record<string, number> = {};
  categories.forEach(category => {
    counts[category.id] = products.filter(product => product.category.id === category.id).length;
  });
  return counts;
}