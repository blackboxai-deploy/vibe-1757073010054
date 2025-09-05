export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  brand: string;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  features: string[];
  specifications: Record<string, string>;
  tags: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  isSale?: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterOptions {
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
  brands: string[];
  inStock?: boolean;
  rating?: number;
  tags: string[];
}

export interface SearchFilters {
  query: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  brand: string;
  sortBy: 'name' | 'price-low' | 'price-high' | 'rating' | 'newest';
  inStockOnly: boolean;
}

export interface ReviewData {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  featured?: boolean;
}

export type ViewMode = 'grid' | 'list';