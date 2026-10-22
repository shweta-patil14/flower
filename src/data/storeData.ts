export interface Product {
  id: string;
  name: string;
  price: number; // In INR
  category: 'bestseller' | 'addon';
  flowerType: 'rose' | 'tulip' | 'lily' | 'sunflower' | 'orchid' | 'mixed';
  tag: string;
  svgType: string;
  image: string;
  secondaryImage: string;
  boxType: 'Cubo' | 'Ronde' | 'Crystal' | 'Gourmet' | 'Ceramic' | 'Bespoke';
  description: string;
  stems?: string;
  fragrance?: string;
  dimensions: string;
  origin: string;
  includedItems?: string[];
}

export type CurrencyCode = 'INR' | 'USD' | 'CAD' | 'EUR' | 'GBP';

export type PastelTheme = 'peach';

export interface PastelThemeConfig {
  id: PastelTheme;
  name: string;
  swatchBg: string;
  swatchAccent: string;
  desc: string;
}

export const PASTEL_THEMES: PastelThemeConfig[] = [
  { id: 'peach', name: 'Warm Peach', swatchBg: '#FAF5EB', swatchAccent: '#C38B56', desc: 'Buttercream & honey apricot' },
];

export interface CurrencyConfig {
  symbol: string;
  factor: number;
  label: string;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  INR: { symbol: 'Rs. ', factor: 1, label: 'INR (₹)' },
  USD: { symbol: '$', factor: 0.012, label: 'USD ($)' },
  CAD: { symbol: 'CA$', factor: 0.016, label: 'CAD (CA$)' },
  EUR: { symbol: '€', factor: 0.011, label: 'EUR (€)' },
  GBP: { symbol: '£', factor: 0.0095, label: 'GBP (£)' }
};

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Wild Damask Rose – Classic Cubo',
    price: 2800,
    category: 'bestseller',
    flowerType: 'rose',
    tag: 'Signature Rose Box',
    svgType: 'rose',
    image: '/images/flowers/crimson-roses-box.jpg',
    secondaryImage: '/images/flowers/ruby-roses-crystal.jpg',
    boxType: 'Cubo',
    description: 'An architectural union of dusky Ecuadorian garden roses and wild eucalyptus arranged in our handmade matte-black square Cubo box.',
    stems: '18-22 curated rose stems',
    fragrance: 'Damask rose, damp woodland moss, spiced berry',
    dimensions: '20cm × 20cm × 22cm',
    origin: 'Ethical boutique farms in Cayambe Valley, Ecuador & Holland'
  },
  {
    id: 'p2',
    name: 'Amsterdam Velvet – Grande Ronde',
    price: 3400,
    category: 'bestseller',
    flowerType: 'tulip',
    tag: 'Dutch Tulips Hatbox',
    svgType: 'vibrant',
    image: '/images/flowers/dutch-tulips-hatbox.jpg',
    secondaryImage: '/images/flowers/pastel-tulips-bouquet.jpg',
    boxType: 'Ronde',
    description: 'Luminous Dutch garden tulips and cream peonies crowned inside our signature heavyweight circular Parisian hatbox with gold-foil seal.',
    stems: '24-28 curated tulip stems',
    fragrance: 'Crisp green tea, sweet tulip nectar, fresh cut dew',
    dimensions: '25cm diameter × 26cm height',
    origin: 'Aalsmeer Flower Auction, Netherlands'
  },
  {
    id: 'p3',
    name: 'Casablanca Grace – Classic Ronde',
    price: 2500,
    category: 'bestseller',
    flowerType: 'lily',
    tag: 'Pure Casablanca Lilies',
    svgType: 'ivory',
    image: '/images/flowers/casablanca-lilies.jpg',
    secondaryImage: '/images/flowers/stargazer-lilies.jpg',
    boxType: 'Ronde',
    description: 'Pristine white Casablanca lilies and scented gardenias evoking timeless bridal tranquility and effortless grace.',
    stems: '16-20 curated lily stems',
    fragrance: 'White lily petals, powdery iris, light citrus peel',
    dimensions: '20cm diameter × 22cm height',
    origin: 'Sabana de Bogotá, Colombia'
  },
  {
    id: 'p4',
    name: 'Ruby Opulence – Crystal Grande',
    price: 4200,
    category: 'bestseller',
    flowerType: 'rose',
    tag: 'Luxury Red Roses',
    svgType: 'ruby',
    image: '/images/flowers/ruby-roses-crystal.jpg',
    secondaryImage: '/images/flowers/crimson-roses-box.jpg',
    boxType: 'Crystal',
    description: 'Deep crimson Baccara roses showcased in a heavy hand-cut diamond-faceted crystal glass vessel on dark marble.',
    stems: '28-32 premium long-stem roses',
    fragrance: 'Heirloom velvet rose, dark plum, spiced cassis',
    dimensions: '30cm height vase with 45cm floral spread',
    origin: 'Mount Kenya Highland Floral Reserves'
  },
  {
    id: 'p5',
    name: 'Imperial Grace – Phalaenopsis Orchids',
    price: 2900,
    category: 'bestseller',
    flowerType: 'orchid',
    tag: 'Royal Cascading Orchids',
    svgType: 'pastel',
    image: '/images/flowers/phalaenopsis-orchids.jpg',
    secondaryImage: '/images/flowers/amethyst-orchids.jpg',
    boxType: 'Cubo',
    description: 'Cascading white and magenta Phalaenopsis orchids in an artisan ceramic vessel tailored for modern luxury living spaces.',
    stems: '14-16 delicate orchid stems',
    fragrance: 'Night-blooming orchid, morning rain, spring freesia',
    dimensions: '16cm × 16cm × 18cm',
    origin: 'Chiang Mai Orchid Conservation Reserve'
  },
  {
    id: 'p6',
    name: 'Noir Velvet – Obsidian Roses',
    price: 3800,
    category: 'bestseller',
    flowerType: 'rose',
    tag: 'Black Baccara Roses',
    svgType: 'noir',
    image: '/images/flowers/noir-velvet-roses.jpg',
    secondaryImage: '/images/flowers/crimson-roses-box.jpg',
    boxType: 'Ronde',
    description: 'Midnight obsidian roses with smoky bronze ruscus nestled inside our ultra-matte charcoal textured cylindrical container.',
    stems: '22-26 dramatic dark roses',
    fragrance: 'Smoky cedar, black pepper, deep Bulgarian rose',
    dimensions: '22cm diameter × 24cm height',
    origin: 'Kazanlak Valley of the Roses'
  },
  {
    id: 'p7',
    name: 'Solar Meadow – Golden Sunflowers',
    price: 3100,
    category: 'bestseller',
    flowerType: 'sunflower',
    tag: 'Golden Sunflowers in Vase',
    svgType: 'sunset',
    image: '/images/flowers/sunflowers-luxury-vase.jpg',
    secondaryImage: '/images/flowers/sunflowers-bright.jpg',
    boxType: 'Cubo',
    description: 'Warm glowing golden sunflowers and chamomile stems in a fluted crystal glass vase bringing radiant sunlight to your interiors.',
    stems: '20-24 autumn sunflower stems',
    fragrance: 'Warm honeycomb, sun-warmed petals, golden amber',
    dimensions: '20cm × 20cm × 22cm',
    origin: 'Tuscan Hillside Biodynamic Sunflower Fields'
  },
  {
    id: 'p8',
    name: 'Monochrome Petals – Crystal Grande',
    price: 4500,
    category: 'bestseller',
    flowerType: 'rose',
    tag: 'Ivory Roses & Urn',
    svgType: 'mono',
    image: '/images/flowers/ivory-roses-peonies-urn.jpg',
    secondaryImage: '/images/flowers/casablanca-lilies.jpg',
    boxType: 'Crystal',
    description: 'Sculptural monochromatic display of ivory garden roses and champagne peonies arranged with architectural precision in a fluted crystal urn.',
    stems: '30-34 museum-grade stems',
    fragrance: 'White amber, clean cedar, botanical musk',
    dimensions: '32cm height vase with 50cm floral spread',
    origin: 'Hokkaido Precision Greenhouses'
  },
  // Additional Curated Flower Bouquets
  {
    id: 'a1',
    name: 'Stargazer Bloom – Imperial Lilies',
    price: 1850,
    category: 'addon',
    flowerType: 'lily',
    tag: 'Pink Stargazer Lilies',
    svgType: 'truffle',
    image: '/images/flowers/stargazer-lilies.jpg',
    secondaryImage: '/images/flowers/casablanca-lilies.jpg',
    boxType: 'Ronde',
    description: 'Vibrant pink Stargazer lilies with velvety speckled petals and sweet heady botanical fragrance in an artisanal ceramic vessel.',
    dimensions: 'Bouquet of 12 premium stems (45cm length)',
    origin: 'Brittany Coast Gardens, France'
  },
  {
    id: 'a2',
    name: 'Golden Radiance – Petite Sunburst',
    price: 1650,
    category: 'addon',
    flowerType: 'sunflower',
    tag: 'Sunflowers Bouquet',
    svgType: 'candle',
    image: '/images/flowers/sunflowers-bright.jpg',
    secondaryImage: '/images/flowers/sunflowers-luxury-vase.jpg',
    boxType: 'Ceramic',
    description: 'Sun-drenched miniature sunflowers paired with delicate chamomile and golden blooms in a tactile vessel.',
    dimensions: '18cm height × 16cm diameter',
    origin: 'Provence, Southern France'
  },
  {
    id: 'a3',
    name: 'Spring Romance – Dutch Pastel Tulips',
    price: 1950,
    category: 'addon',
    flowerType: 'tulip',
    tag: 'Pastel Tulips Bouquet',
    svgType: 'card',
    image: '/images/flowers/pastel-tulips-bouquet.jpg',
    secondaryImage: '/images/flowers/dutch-tulips-hatbox.jpg',
    boxType: 'Bespoke',
    description: 'Silken spring Dutch tulips hand-selected at morning auction and wrapped in embossed botanical parchment paper with a silk ribbon.',
    dimensions: 'Bouquet of 15 fresh cut stems',
    origin: 'Keukenhof Floral Growers, Netherlands'
  },
  {
    id: 'a4',
    name: 'Mystic Amethyst – Dendrobium Orchids',
    price: 2100,
    category: 'addon',
    flowerType: 'orchid',
    tag: 'Purple Dendrobium Orchids',
    svgType: 'vase',
    image: '/images/flowers/amethyst-orchids.jpg',
    secondaryImage: '/images/flowers/phalaenopsis-orchids.jpg',
    boxType: 'Ceramic',
    description: 'Exotic amethyst-purple Dendrobium orchids with graceful arching sprays in a minimal terracotta ceramic vase. Long-lasting, rare, and mesmerizing.',
    dimensions: '10 arching orchid stems (50cm spread)',
    origin: 'Kyoto Botanical Orchideries, Japan'
  }
];

export interface Hotspot {
  id: number;
  productId: string;
  top: string;
  left?: string;
  right?: string;
  label: string;
  vignetteRole: string;
}

export const HOTSPOTS: Hotspot[] = [
  {
    id: 1,
    productId: 'p1',
    top: '48%',
    left: '48%',
    label: 'Wild Damask Rose – Classic Cubo',
    vignetteRole: '01. Focal Roses in Keepsake Box'
  },
  {
    id: 2,
    productId: 'a2',
    top: '66%',
    left: '26%',
    label: 'Golden Radiance – Sunflowers in Vase',
    vignetteRole: '02. Radiant Sunflowers Accent'
  },
  {
    id: 3,
    productId: 'a4',
    top: '32%',
    right: '24%',
    label: 'Mystic Amethyst – Orchids in Bloom',
    vignetteRole: '03. Exotic Orchid Stems'
  }
];

export const CITY_HUBS = [
  { name: 'Sangli (Ram Mandir Road)', delivery: 'Store Pickup / Express Delivery', status: 'Available' },
  { name: 'Sangli & Surrounding', delivery: 'Same Day Delivery', status: 'Available' },
  { name: 'Miraj / Kupwad', delivery: 'Same Day Dispatch', status: 'Available' },
  { name: 'Kolhapur & Nearby', delivery: 'Priority Dispatch', status: 'Available' }
];

export function formatPriceWithCurrency(amountINR: number, currency: CurrencyCode): string {
  const config = CURRENCIES[currency] || CURRENCIES.INR;
  const converted = Math.round(amountINR * config.factor);
  return `${config.symbol}${converted.toLocaleString()}`;
}
