import { Product, ProductCategory, HeroSlide } from './types';

export const categories: ProductCategory[] = [
  {
    id: 'helmets',
    name: 'Helmets',
    slug: 'helmets',
    description: 'Professional cycling helmets for safety and comfort',
    image: 'https://placehold.co/400x300?text=Professional+cycling+helmet+with+aerodynamic+design',
    productCount: 15
  },
  {
    id: 'lights',
    name: 'Lights',
    slug: 'lights',
    description: 'LED lights and reflectors for enhanced visibility',
    image: 'https://placehold.co/400x300?text=Bright+LED+bike+lights+and+safety+reflectors',
    productCount: 12
  },
  {
    id: 'locks',
    name: 'Locks & Security',
    slug: 'locks',
    description: 'Heavy-duty locks and security systems',
    image: 'https://placehold.co/400x300?text=Heavy+duty+bike+lock+and+security+chain',
    productCount: 8
  },
  {
    id: 'bags',
    name: 'Bags & Storage',
    slug: 'bags',
    description: 'Panniers, saddle bags, and storage solutions',
    image: 'https://placehold.co/400x300?text=Waterproof+bike+panniers+and+storage+bags',
    productCount: 18
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    slug: 'maintenance',
    description: 'Tools, pumps, and maintenance equipment',
    image: 'https://placehold.co/400x300?text=Professional+bike+maintenance+tools+and+pumps',
    productCount: 10
  },
  {
    id: 'electronics',
    name: 'Electronics',
    slug: 'electronics',
    description: 'GPS devices, computers, and electronic accessories',
    image: 'https://placehold.co/400x300?text=Modern+bike+computer+and+GPS+navigation',
    productCount: 7
  }
];

export const products: Product[] = [
  // HELMETS
  {
    id: 'helm-001',
    name: 'AeroMax Pro Cycling Helmet',
    description: 'Professional-grade aerodynamic helmet with advanced ventilation and MIPS technology for maximum protection.',
    price: 149.99,
    originalPrice: 179.99,
    category: categories[0],
    brand: 'AeroMax',
    image: 'https://placehold.co/600x400?text=AeroMax+Pro+aerodynamic+cycling+helmet+with+ventilation',
    images: [
      'https://placehold.co/600x400?text=AeroMax+Pro+helmet+front+view',
      'https://placehold.co/600x400?text=AeroMax+Pro+helmet+side+profile',
      'https://placehold.co/600x400?text=AeroMax+Pro+helmet+interior+padding'
    ],
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    features: ['MIPS Technology', '21 Air Vents', 'Adjustable Fit System', 'Reflective Elements'],
    specifications: {
      'Weight': '280g',
      'Sizes': 'S, M, L, XL',
      'Certification': 'CPSC, EN 1078',
      'Material': 'In-mold polycarbonate'
    },
    tags: ['professional', 'aerodynamic', 'safety', 'ventilated'],
    isNew: false,
    isFeatured: true,
    isSale: true
  },
  {
    id: 'helm-002',
    name: 'Urban Commuter Helmet',
    description: 'Stylish and practical helmet designed for city commuting with integrated LED light and rain visor.',
    price: 89.99,
    category: categories[0],
    brand: 'CityRide',
    image: 'https://placehold.co/600x400?text=Urban+commuter+helmet+with+integrated+LED+lights',
    images: [
      'https://placehold.co/600x400?text=Urban+commuter+helmet+LED+on',
      'https://placehold.co/600x400?text=Urban+helmet+with+rain+visor',
      'https://placehold.co/600x400?text=Urban+helmet+side+view'
    ],
    rating: 4.5,
    reviewCount: 89,
    inStock: true,
    features: ['Integrated LED', 'Rain Visor', 'Urban Design', 'Comfortable Padding'],
    specifications: {
      'Weight': '320g',
      'Sizes': 'M, L, XL',
      'Battery Life': '6 hours',
      'Water Resistance': 'IPX4'
    },
    tags: ['urban', 'commuter', 'led', 'practical'],
    isNew: true,
    isFeatured: false,
    isSale: false
  },

  // LIGHTS
  {
    id: 'light-001',
    name: 'BrightBeam Pro 2000',
    description: 'Ultra-bright 2000 lumen front light with multiple modes and USB-C charging for serious cyclists.',
    price: 79.99,
    category: categories[1],
    brand: 'BrightBeam',
    image: 'https://placehold.co/600x400?text=Ultra+bright+2000+lumen+bike+headlight+LED',
    images: [
      'https://placehold.co/600x400?text=BrightBeam+Pro+2000+beam+pattern',
      'https://placehold.co/600x400?text=BrightBeam+mounting+system',
      'https://placehold.co/600x400?text=BrightBeam+USB-C+charging+port'
    ],
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    features: ['2000 Lumens', 'USB-C Charging', '5 Light Modes', 'IPX6 Waterproof'],
    specifications: {
      'Brightness': '2000 lumens',
      'Runtime': '2-12 hours',
      'Charging': 'USB-C',
      'Mount': 'Quick-release'
    },
    tags: ['bright', 'rechargeable', 'waterproof', 'professional'],
    isNew: false,
    isFeatured: true,
    isSale: false
  },
  {
    id: 'light-002',
    name: 'SafeGlow Rear Light Set',
    description: 'High-visibility rear light set with laser lane projection and smart brake detection.',
    price: 34.99,
    category: categories[1],
    brand: 'SafeGlow',
    image: 'https://placehold.co/600x400?text=Smart+rear+bike+light+with+laser+lane+projection',
    images: [
      'https://placehold.co/600x400?text=SafeGlow+laser+lane+projection+active',
      'https://placehold.co/600x400?text=SafeGlow+brake+detection+mode',
      'https://placehold.co/600x400?text=SafeGlow+rear+light+mounting'
    ],
    rating: 4.6,
    reviewCount: 203,
    inStock: true,
    features: ['Laser Projection', 'Brake Detection', 'Motion Sensor', 'Weather Resistant'],
    specifications: {
      'Battery Life': '8-15 hours',
      'Modes': '6 flash patterns',
      'Sensor': 'Accelerometer',
      'Visibility': '500m range'
    },
    tags: ['safety', 'smart', 'laser', 'brake-detection'],
    isNew: true,
    isFeatured: false,
    isSale: false
  },

  // LOCKS
  {
    id: 'lock-001',
    name: 'SecureMax U-Lock Pro',
    description: 'Heavy-duty U-lock with hardened steel construction and anti-theft protection guarantee.',
    price: 59.99,
    category: categories[2],
    brand: 'SecureMax',
    image: 'https://placehold.co/600x400?text=Heavy+duty+steel+U-lock+with+security+keys',
    images: [
      'https://placehold.co/600x400?text=SecureMax+U-lock+hardened+steel',
      'https://placehold.co/600x400?text=SecureMax+lock+mechanism+detail',
      'https://placehold.co/600x400?text=SecureMax+mounting+bracket'
    ],
    rating: 4.9,
    reviewCount: 342,
    inStock: true,
    features: ['Hardened Steel', '16mm Shackle', 'Pick Resistant', 'Theft Protection'],
    specifications: {
      'Shackle': '16mm hardened steel',
      'Security Rating': 'Sold Secure Gold',
      'Dimensions': '230 x 110mm',
      'Weight': '1.8kg'
    },
    tags: ['security', 'heavy-duty', 'anti-theft', 'premium'],
    isNew: false,
    isFeatured: true,
    isSale: false
  },
  {
    id: 'lock-002',
    name: 'FlexGuard Chain Lock',
    description: 'Flexible fabric-covered chain lock perfect for securing multiple bikes or accessories.',
    price: 39.99,
    category: categories[2],
    brand: 'FlexGuard',
    image: 'https://placehold.co/600x400?text=Flexible+chain+lock+with+fabric+cover+protection',
    images: [
      'https://placehold.co/600x400?text=FlexGuard+chain+lock+flexibility',
      'https://placehold.co/600x400?text=FlexGuard+fabric+cover+detail',
      'https://placehold.co/600x400?text=FlexGuard+lock+cylinder'
    ],
    rating: 4.4,
    reviewCount: 78,
    inStock: true,
    features: ['Fabric Cover', '12mm Chain', 'Flexible Design', 'Weather Resistant'],
    specifications: {
      'Chain': '12mm hardened steel',
      'Length': '90cm',
      'Cover': 'Fabric sleeve',
      'Weight': '1.2kg'
    },
    tags: ['flexible', 'chain', 'weather-resistant', 'versatile'],
    isNew: false,
    isFeatured: false,
    isSale: true
  },

  // BAGS & STORAGE
  {
    id: 'bag-001',
    name: 'TourMaster Pannier Set',
    description: 'Professional waterproof pannier set with quick-release system and reflective details.',
    price: 179.99,
    originalPrice: 219.99,
    category: categories[3],
    brand: 'TourMaster',
    image: 'https://placehold.co/600x400?text=Waterproof+bike+pannier+bags+with+reflective+strips',
    images: [
      'https://placehold.co/600x400?text=TourMaster+panniers+mounted+on+bike',
      'https://placehold.co/600x400?text=TourMaster+quick+release+system',
      'https://placehold.co/600x400?text=TourMaster+pannier+interior+compartments'
    ],
    rating: 4.8,
    reviewCount: 94,
    inStock: true,
    features: ['100% Waterproof', 'Quick-Release', 'Reflective Strips', '35L Capacity'],
    specifications: {
      'Capacity': '35L (17.5L each)',
      'Material': 'Waterproof PVC',
      'Mounting': 'Quick-release hooks',
      'Reflectivity': '3M strips'
    },
    tags: ['waterproof', 'touring', 'panniers', 'high-capacity'],
    isNew: false,
    isFeatured: true,
    isSale: true
  },
  {
    id: 'bag-002',
    name: 'FramePack Pro Saddle Bag',
    description: 'Aerodynamic saddle bag with tool storage and tire lever integration for road cyclists.',
    price: 24.99,
    category: categories[3],
    brand: 'FramePack',
    image: 'https://placehold.co/600x400?text=Aerodynamic+saddle+bag+with+tool+storage',
    images: [
      'https://placehold.co/600x400?text=FramePack+saddle+bag+mounted',
      'https://placehold.co/600x400?text=FramePack+tool+organization',
      'https://placehold.co/600x400?text=FramePack+tire+lever+integration'
    ],
    rating: 4.3,
    reviewCount: 167,
    inStock: true,
    features: ['Aerodynamic Design', 'Tool Organization', 'Tire Lever Slots', 'Secure Velcro'],
    specifications: {
      'Capacity': '0.8L',
      'Dimensions': '18 x 8 x 8cm',
      'Attachment': 'Velcro straps',
      'Weight': '85g'
    },
    tags: ['aerodynamic', 'tools', 'compact', 'road-cycling'],
    isNew: true,
    isFeatured: false,
    isSale: false
  },

  // MAINTENANCE
  {
    id: 'maint-001',
    name: 'ProTech Multi-Tool 21',
    description: 'Professional 21-function bike tool with premium steel construction and compact design.',
    price: 42.99,
    category: categories[4],
    brand: 'ProTech',
    image: 'https://placehold.co/600x400?text=Professional+21+function+bike+multi-tool',
    images: [
      'https://placehold.co/600x400?text=ProTech+multi-tool+all+functions+open',
      'https://placehold.co/600x400?text=ProTech+tool+steel+construction',
      'https://placehold.co/600x400?text=ProTech+compact+folded+design'
    ],
    rating: 4.7,
    reviewCount: 218,
    inStock: true,
    features: ['21 Functions', 'Heat-treated Steel', 'Chain Tool', 'Spoke Wrenches'],
    specifications: {
      'Functions': '21 tools',
      'Material': 'Heat-treated steel',
      'Weight': '240g',
      'Length': '10cm folded'
    },
    tags: ['tools', 'professional', 'compact', 'steel'],
    isNew: false,
    isFeatured: true,
    isSale: false
  },
  {
    id: 'maint-002',
    name: 'PowerPump Elite Floor Pump',
    description: 'Professional floor pump with digital gauge and dual-head compatibility for all valve types.',
    price: 69.99,
    category: categories[4],
    brand: 'PowerPump',
    image: 'https://placehold.co/600x400?text=Professional+floor+pump+with+digital+pressure+gauge',
    images: [
      'https://placehold.co/600x400?text=PowerPump+Elite+digital+gauge+display',
      'https://placehold.co/600x400?text=PowerPump+dual+head+valve+compatibility',
      'https://placehold.co/600x400?text=PowerPump+stable+base+design'
    ],
    rating: 4.6,
    reviewCount: 145,
    inStock: true,
    features: ['Digital Gauge', 'Dual-Head System', 'Steel Construction', 'Stable Base'],
    specifications: {
      'Max Pressure': '160 PSI',
      'Gauge': 'Digital LCD',
      'Valves': 'Presta/Schrader',
      'Height': '65cm'
    },
    tags: ['pump', 'digital', 'professional', 'accurate'],
    isNew: true,
    isFeatured: false,
    isSale: false
  },

  // ELECTRONICS
  {
    id: 'elec-001',
    name: 'NaviCycle GPS Pro',
    description: 'Advanced GPS bike computer with turn-by-turn navigation, performance tracking, and smartphone connectivity.',
    price: 299.99,
    originalPrice: 349.99,
    category: categories[5],
    brand: 'NaviCycle',
    image: 'https://placehold.co/600x400?text=Advanced+GPS+bike+computer+with+color+display',
    images: [
      'https://placehold.co/600x400?text=NaviCycle+GPS+color+touchscreen',
      'https://placehold.co/600x400?text=NaviCycle+performance+metrics+display',
      'https://placehold.co/600x400?text=NaviCycle+smartphone+app+connectivity'
    ],
    rating: 4.9,
    reviewCount: 76,
    inStock: true,
    features: ['Turn-by-Turn Navigation', 'Color Display', 'ANT+ Compatible', 'Smartphone Sync'],
    specifications: {
      'Display': '3.2" color touchscreen',
      'Battery': '20+ hours',
      'GPS': 'Multi-satellite',
      'Connectivity': 'Bluetooth, ANT+'
    },
    tags: ['gps', 'navigation', 'performance', 'smart'],
    isNew: true,
    isFeatured: true,
    isSale: true
  },

  // Additional products for variety
  {
    id: 'helm-003',
    name: 'Mountain Shield Helmet',
    description: 'Rugged mountain biking helmet with extended coverage and goggle compatibility.',
    price: 119.99,
    category: categories[0],
    brand: 'MountainShield',
    image: 'https://placehold.co/600x400?text=Rugged+mountain+bike+helmet+with+extended+coverage',
    images: [
      'https://placehold.co/600x400?text=Mountain+Shield+helmet+profile',
      'https://placehold.co/600x400?text=Mountain+Shield+goggle+compatibility',
      'https://placehold.co/600x400?text=Mountain+Shield+ventilation+system'
    ],
    rating: 4.4,
    reviewCount: 92,
    inStock: true,
    features: ['Extended Coverage', 'Goggle Compatible', 'MIPS Technology', 'Removable Visor'],
    specifications: {
      'Weight': '350g',
      'Coverage': 'Extended back',
      'Ventilation': '18 vents',
      'Visor': 'Removable'
    },
    tags: ['mountain', 'rugged', 'protection', 'goggles'],
    isNew: false,
    isFeatured: false,
    isSale: false
  },

  {
    id: 'bag-003',
    name: 'HydroFrame Water Bottle Cage',
    description: 'Lightweight carbon fiber water bottle cage with secure grip and tool-free installation.',
    price: 18.99,
    category: categories[3],
    brand: 'HydroFrame',
    image: 'https://placehold.co/600x400?text=Carbon+fiber+water+bottle+cage+lightweight',
    images: [
      'https://placehold.co/600x400?text=HydroFrame+carbon+fiber+construction',
      'https://placehold.co/600x400?text=HydroFrame+bottle+secure+grip',
      'https://placehold.co/600x400?text=HydroFrame+frame+mounting'
    ],
    rating: 4.5,
    reviewCount: 134,
    inStock: true,
    features: ['Carbon Fiber', 'Secure Grip', 'Lightweight', 'Easy Installation'],
    specifications: {
      'Material': 'Carbon fiber',
      'Weight': '22g',
      'Bottle Fit': 'Standard 74mm',
      'Installation': 'Tool-free'
    },
    tags: ['carbon-fiber', 'lightweight', 'hydration', 'premium'],
    isNew: false,
    isFeatured: false,
    isSale: false
  },

  {
    id: 'light-003',
    name: 'StrobeTech Safety Set',
    description: 'Complete lighting safety set with front and rear lights plus wheel spoke lights.',
    price: 49.99,
    originalPrice: 64.99,
    category: categories[1],
    brand: 'StrobeTech',
    image: 'https://placehold.co/600x400?text=Complete+bike+lighting+safety+set+with+spoke+lights',
    images: [
      'https://placehold.co/600x400?text=StrobeTech+front+and+rear+lights',
      'https://placehold.co/600x400?text=StrobeTech+wheel+spoke+lights',
      'https://placehold.co/600x400?text=StrobeTech+complete+set+package'
    ],
    rating: 4.2,
    reviewCount: 187,
    inStock: true,
    features: ['Complete Set', 'Spoke Lights', 'Multiple Modes', 'Battery Powered'],
    specifications: {
      'Front Light': '400 lumens',
      'Rear Light': '100 lumens',
      'Spoke Lights': '20 LED each',
      'Battery': 'AAA included'
    },
    tags: ['complete-set', 'visibility', 'safety', 'affordable'],
    isNew: false,
    isFeatured: false,
    isSale: true
  }
];

export const heroSlides: HeroSlide[] = [
  {
    id: 'hero-1',
    title: 'MotoMax',
    subtitle: 'Premium Bike Accessories',
    description: 'Discover our extensive collection of professional-grade bike accessories designed for safety, performance, and style.',
    image: 'https://placehold.co/1920x800?text=Premium+bike+accessories+collection+professional+display',
    ctaText: 'Shop Now',
    ctaLink: '/products',
    featured: true
  },
  {
    id: 'hero-2',
    title: 'Safety First',
    subtitle: 'Professional Protection Gear',
    description: 'Helmets, lights, and safety equipment tested by professionals and trusted by cyclists worldwide.',
    image: 'https://placehold.co/1920x800?text=Professional+cycling+safety+equipment+and+protective+gear',
    ctaText: 'View Safety Gear',
    ctaLink: '/category/helmets',
    featured: false
  },
  {
    id: 'hero-3',
    title: 'Performance Tools',
    subtitle: 'Maintenance & Electronics',
    description: 'Professional-grade tools and electronic accessories to keep you riding at peak performance.',
    image: 'https://placehold.co/1920x800?text=Professional+bike+maintenance+tools+and+electronics',
    ctaText: 'Explore Tools',
    ctaLink: '/category/maintenance',
    featured: false
  }
];