import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto text-center">
          <Card>
            <CardContent className="p-12">
              <div className="space-y-6">
                {/* 404 Icon */}
                <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mx-auto">
                  <span className="text-4xl font-bold text-muted-foreground">404</span>
                </div>

                {/* Error Message */}
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold">Page Not Found</h1>
                  <p className="text-muted-foreground">
                    Sorry, we couldn't find the page you're looking for. 
                    It might have been moved, deleted, or you entered the wrong URL.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/">
                      Go to Homepage
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/products">
                      Browse Products
                    </Link>
                  </Button>
                </div>

                {/* Quick Links */}
                <div className="pt-6 border-t space-y-3">
                  <p className="text-sm text-muted-foreground">Quick Links</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Link 
                      href="/category/helmets" 
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Helmets
                    </Link>
                    <Link 
                      href="/category/lights" 
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Lights
                    </Link>
                    <Link 
                      href="/category/locks" 
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Locks
                    </Link>
                    <Link 
                      href="/category/bags" 
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Bags
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}