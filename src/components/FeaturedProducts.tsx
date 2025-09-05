import Link from 'next/link';
import { Button } from './ui/button';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '@/lib/utils-data';

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our hand-picked selection of top-rated bike accessories, 
            chosen by cycling professionals for their exceptional quality and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 p-8 bg-muted/50 rounded-2xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">
              Ready to upgrade your ride?
            </h3>
            <p className="text-muted-foreground">
              Explore our complete collection of premium bike accessories
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/products">
                View All Products
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/category/helmets">
                Safety First
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}