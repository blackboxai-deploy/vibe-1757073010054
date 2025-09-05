"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { heroSlides } from '@/lib/data';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentHero = heroSlides[currentSlide];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentHero.image}
          alt={currentHero.title}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit mx-auto lg:mx-0">
                Premium Quality Since 2020
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {currentHero.title}
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {currentHero.subtitle}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                {currentHero.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Link href={currentHero.ctaLink}>
                  {currentHero.ctaText}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8 border-t">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Free shipping over $75</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>Expert support</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                <span>30-day returns</span>
              </div>
            </div>
          </div>

          {/* Featured Product Showcase */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://placehold.co/500x400?text=Featured+premium+bike+accessories+showcase"
                  alt="Featured bike accessories showcase"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">Premium Collection</h3>
                  <p className="text-sm opacity-90">Professional-grade accessories</p>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}