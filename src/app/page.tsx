import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CategoryShowcase from '@/components/CategoryShowcase';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <CategoryShowcase />
        <FeaturedProducts />
      </main>
      
      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'MotoMax - Premium Bike Accessories',
  description: 'Discover premium bike accessories including helmets, lights, locks, bags, maintenance tools, and electronics. Professional-grade quality for serious cyclists.',
  keywords: 'bike accessories, cycling gear, bike helmets, bike lights, bike locks, cycling equipment',
  openGraph: {
    title: 'MotoMax - Premium Bike Accessories',
    description: 'Premium bike accessories for serious cyclists',
    type: 'website',
  }
};