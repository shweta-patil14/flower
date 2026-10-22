import React from 'react';
import { CollectionBannerArtwork } from './SectionIllustrations';

interface ShopByCollectionBannerProps {
  onCollectionClick: () => void;
}

export const ShopByCollectionBanner: React.FC<ShopByCollectionBannerProps> = ({ onCollectionClick }) => {
  return (
    <section className="relative w-full h-80 sm:h-96 overflow-hidden bg-neutral-900">
      <div className="w-full h-full relative">
        <CollectionBannerArtwork className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-neutral-900/35 flex flex-col items-center justify-center text-center p-6">
        <span className="text-white/90 text-xs uppercase tracking-[0.3em] font-light mb-1">
          Curated Expressions
        </span>
        <h3 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-wider mb-6">
          Shop by
        </h3>
        <button
          onClick={onCollectionClick}
          className="btn-luxury-inverted cursor-pointer"
        >
          Collection
        </button>
      </div>
    </section>
  );
};
