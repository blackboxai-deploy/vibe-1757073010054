import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

export interface Metadata {
  title?: string | { default: string; template: string };
  description?: string;
  keywords?: string[];
  authors?: { name: string }[];
  creator?: string;
  openGraph?: Record<string, unknown>;
  twitter?: Record<string, unknown>;
  robots?: Record<string, unknown>;
  verification?: Record<string, string>;
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'MotoMax - Premium Bike Accessories',
    template: '%s | MotoMax'
  },
  description: 'Premium bike accessories including helmets, lights, locks, bags, maintenance tools, and electronics. Professional-grade quality for serious cyclists.',
  keywords: ['bike accessories', 'cycling gear', 'bike helmets', 'bike lights', 'bike locks', 'cycling equipment', 'bike maintenance'],
  authors: [{ name: 'MotoMax' }],
  creator: 'MotoMax',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://motomax.com',
    siteName: 'MotoMax',
    title: 'MotoMax - Premium Bike Accessories',
    description: 'Premium bike accessories for serious cyclists',
    images: [
      {
        url: 'https://placehold.co/1200x630?text=MotoMax+Premium+Bike+Accessories',
        width: 1200,
        height: 630,
        alt: 'MotoMax - Premium Bike Accessories',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MotoMax - Premium Bike Accessories',
    description: 'Premium bike accessories for serious cyclists',
    images: ['https://placehold.co/1200x630?text=MotoMax+Premium+Bike+Accessories'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
    yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'antialiased')}>
        {children}
      </body>
    </html>
  );
}