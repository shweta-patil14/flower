import React, { useState } from 'react';

interface FlowerImageProps {
  className?: string;
  src: string;
  alt: string;
}

const FlowerImage: React.FC<FlowerImageProps> = ({ className = 'w-full h-full object-cover', src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden bg-neutral-900">
      <img
        src={src}
        alt={alt}
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

export const HeroArtwork1: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <FlowerImage
    src="/images/flowers/crimson-roses-box.jpg"
    alt="Velvet Damask Red Roses in Matte-Black Box"
    className={className}
  />
);

export const HeroArtwork2: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <FlowerImage
    src="/images/flowers/dutch-tulips-hatbox.jpg"
    alt="Vibrant Dutch Spring Tulips in Parisian Hatbox"
    className={className}
  />
);

export const HeroArtwork3: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <FlowerImage
    src="/images/flowers/sunflowers-luxury-vase.jpg"
    alt="Radiant Golden Sunflowers in Fluted Crystal Vase"
    className={className}
  />
);

export const HeroArtwork4: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <FlowerImage
    src="/images/flowers/phalaenopsis-orchids.jpg"
    alt="Imperial Phalaenopsis Cascading Orchids in Ceramic Planter"
    className={className}
  />
);

export const CollectionBannerArtwork: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <FlowerImage
    src="/images/flowers/pastel-tulips-bouquet.jpg"
    alt="Luxury Botanical Flower Collection"
    className={className}
  />
);

export const CuboSilhouette: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <FlowerImage
    src="/images/flowers/crimson-roses-box.jpg"
    alt="Classic Cubo Velvet Roses in Square Keepsake Box"
    className={className}
  />
);

export const RondeSilhouette: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <FlowerImage
    src="/images/flowers/dutch-tulips-hatbox.jpg"
    alt="Classic Ronde Dutch Tulips in Parisian Hatbox"
    className={className}
  />
);

export const CrystalGrandeSilhouette: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <FlowerImage
    src="/images/flowers/ruby-roses-crystal.jpg"
    alt="Crystal Grande Ruby Roses in Hand-Cut Glass Vase"
    className={className}
  />
);

export const PoetryCraftsmanshipArt: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <FlowerImage
    src="/images/flowers/ivory-roses-peonies-urn.jpg"
    alt="Handcrafted Rose & Botanical Blooms"
    className={className}
  />
);

export const NoirRougeSpotlightArt: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <FlowerImage
    src="/images/flowers/noir-velvet-roses.jpg"
    alt="Velvet Obsidian Baccara Roses in Keepsake Box"
    className={className}
  />
);

export const LivingRoomInteriorScene: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <FlowerImage
    src="/images/flowers/casablanca-lilies.jpg"
    alt="Atelier Flower Centerpiece of Casablanca Lilies and Roses in Glass Vase"
    className={className}
  />
);
