"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Product } from '@/lib/types';
import { formatPrice, getDiscountPercentage } from '@/lib/utils-data';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export default function ProductCard({ product, viewMode = 'grid' }: ProductCardProps) {
  const isListView = viewMode === 'list';
  const discount = product.originalPrice 
    ? getDiscountPercentage(product.originalPrice, product.price)
    : 0;

  const renderStars = (rating: number): JSX.Element => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex items-center space-x-1">
        {Array.from({ length: fullStars }, (_, i) => (
          <span key={`full-${i}`} className="text-yellow-400">★</span>
        ))}
        {hasHalfStar && <span className="text-yellow-400">☆</span>}
        {Array.from({ length: emptyStars }, (_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">☆</span>
        ))}
      </div>
    );
  };

  if (isListView) {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          <div className="relative w-full sm:w-48 h-48 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {product.isNew && (
              <Badge className="absolute top-2 left-2 bg-green-600 hover:bg-green-700">
                NEW
              </Badge>
            )}
            {product.isSale && (
              <Badge className="absolute top-2 right-2 bg-red-600 hover:bg-red-700">
                -{discount}%
              </Badge>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Badge variant="secondary">Out of Stock</Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex flex-col h-full">
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                    <Link href={`/product/${product.id}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.brand}</p>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center space-x-2">
                  {renderStars(product.rating)}
                  <span className="text-sm text-muted-foreground">
                    ({product.reviewCount} reviews)
                  </span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {product.features.slice(0, 3).map((feature) => (
                    <Badge key={feature} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                  >
                    <Link href={`/product/${product.id}`}>
                      View Details
                    </Link>
                  </Button>
                  <Button 
                    size="sm"
                    disabled={!product.inStock}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.isNew && (
            <Badge className="absolute top-2 left-2 bg-green-600 hover:bg-green-700">
              NEW
            </Badge>
          )}
          {product.isSale && (
            <Badge className="absolute top-2 right-2 bg-red-600 hover:bg-red-700">
              -{discount}%
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="secondary">Out of Stock</Badge>
            </div>
          )}
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold group-hover:text-blue-600 transition-colors">
            <Link href={`/product/${product.id}`}>
              {product.name}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground">{product.brand}</p>
        </div>

        <div className="flex items-center space-x-2">
          {renderStars(product.rating)}
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {product.features.slice(0, 2).map((feature) => (
            <Badge key={feature} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-y-3">
        <div className="w-full space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              asChild
            >
              <Link href={`/product/${product.id}`}>
                Details
              </Link>
            </Button>
            <Button 
              size="sm" 
              className="flex-1"
              disabled={!product.inStock}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}