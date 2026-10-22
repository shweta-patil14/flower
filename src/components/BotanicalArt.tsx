import React, { useState } from 'react';

interface BotanicalArtProps {
  type?: string;
  image?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  alt?: string;
}

export const FLOWER_IMAGES: Record<string, { primary: string; secondary: string; label: string }> = {
  rose: {
    primary: '/images/flowers/crimson-roses-box.jpg',
    secondary: '/images/flowers/ruby-roses-crystal.jpg',
    label: 'Velvet Damask Roses in Keepsake Box'
  },
  vibrant: {
    primary: '/images/flowers/dutch-tulips-hatbox.jpg',
    secondary: '/images/flowers/pastel-tulips-bouquet.jpg',
    label: 'Dutch Royal Tulips in Parisian Hatbox'
  },
  ivory: {
    primary: '/images/flowers/casablanca-lilies.jpg',
    secondary: '/images/flowers/stargazer-lilies.jpg',
    label: 'Pure Casablanca Lilies in Crystal Glass'
  },
  ruby: {
    primary: '/images/flowers/ruby-roses-crystal.jpg',
    secondary: '/images/flowers/crimson-roses-box.jpg',
    label: 'Ruby Crimson Roses in Hand-Cut Crystal'
  },
  pastel: {
    primary: '/images/flowers/phalaenopsis-orchids.jpg',
    secondary: '/images/flowers/amethyst-orchids.jpg',
    label: 'Phalaenopsis Cascading Orchids'
  },
  noir: {
    primary: '/images/flowers/noir-velvet-roses.jpg',
    secondary: '/images/flowers/crimson-roses-box.jpg',
    label: 'Obsidian Velvet Roses in Hatbox'
  },
  sunset: {
    primary: '/images/flowers/sunflowers-luxury-vase.jpg',
    secondary: '/images/flowers/sunflowers-bright.jpg',
    label: 'Golden Solar Sunflowers in Crystal Vase'
  },
  mono: {
    primary: '/images/flowers/ivory-roses-peonies-urn.jpg',
    secondary: '/images/flowers/casablanca-lilies.jpg',
    label: 'Ivory Roses & Peonies in Crystal Urn'
  },
  truffle: {
    primary: '/images/flowers/stargazer-lilies.jpg',
    secondary: '/images/flowers/casablanca-lilies.jpg',
    label: 'Pink Stargazer Lilies'
  },
  candle: {
    primary: '/images/flowers/sunflowers-bright.jpg',
    secondary: '/images/flowers/sunflowers-luxury-vase.jpg',
    label: 'Miniature Golden Sunflowers'
  },
  card: {
    primary: '/images/flowers/pastel-tulips-bouquet.jpg',
    secondary: '/images/flowers/dutch-tulips-hatbox.jpg',
    label: 'Pastel Dutch Tulips Bouquet'
  },
  vase: {
    primary: '/images/flowers/amethyst-orchids.jpg',
    secondary: '/images/flowers/phalaenopsis-orchids.jpg',
    label: 'Purple Dendrobium Orchids'
  }
};

export const BotanicalProductSvg: React.FC<BotanicalArtProps> = ({
  type = 'rose',
  image,
  variant = 'primary',
  className = 'w-full h-full object-cover',
  alt = 'Luxury Botanical Flowers'
}) => {
  const [loaded, setLoaded] = useState(false);
  const flowerData = FLOWER_IMAGES[type] || FLOWER_IMAGES.rose;
  const src = image || (variant === 'secondary' ? flowerData.secondary : flowerData.primary);

  return (
    <div className="relative w-full h-full overflow-hidden bg-neutral-900">
      <img
        src={src}
        alt={alt || flowerData.label}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${className} transition-all duration-700 ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-neutral-900 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-brand-accent/40 border-t-brand-accent animate-spin" />
        </div>
      )}
    </div>
  );
};
