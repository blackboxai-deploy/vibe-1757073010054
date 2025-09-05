import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { categories } from '@/lib/data';

export default function CategoryShowcase() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection of bike accessories, 
            carefully selected for quality, performance, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Category Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
                          {category.name}
                        </h3>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          {category.productCount} items
                        </Badge>
                      </div>
                      <p className="text-sm opacity-90 line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg 
                        className="h-4 w-4 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Categories */}
        <div className="text-center mt-12">
          <Link href="/products">
            <Card className="inline-block overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer border-dashed border-2">
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto group-hover:bg-blue-100 transition-colors">
                    <svg 
                      className="h-8 w-8 text-muted-foreground group-hover:text-blue-600 transition-colors" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 11H5m14 0l-4-4m4 4l-4 4" 
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                      View All Products
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Browse our complete collection
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}