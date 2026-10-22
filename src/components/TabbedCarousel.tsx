import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product, CurrencyCode, formatPriceWithCurrency } from '../data/storeData';
import { BotanicalProductSvg } from './BotanicalArt';

interface TabbedCarouselProps {
  products: Product[];
  currentCurrency: CurrencyCode;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onViewAllProducts: () => void;
}

type FlowerFilter = 'all' | 'rose' | 'tulip' | 'lily' | 'sunflower' | 'orchid';

export const TabbedCarousel: React.FC<TabbedCarouselProps> = ({
  products,
  currentCurrency,
  onAddToCart,
  onSelectProduct,
  onViewAllProducts
}) => {
  const [selectedFilter, setSelectedFilter] = useState<FlowerFilter>('all');
  const trackRef = useRef<HTMLDivElement>(null);

  const flowerTabs: { id: FlowerFilter; label: string }[] = [
    { id: 'all', label: 'All Flowers' },
    { id: 'rose', label: 'Roses' },
    { id: 'tulip', label: 'Tulips' },
    { id: 'lily', label: 'Lilies' },
    { id: 'sunflower', label: 'Sunflowers' },
    { id: 'orchid', label: 'Orchids' }
  ];

  const filteredProducts = selectedFilter === 'all'
    ? products
    : products.filter((p) => p.flowerType === selectedFilter);

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmt = 280 * 2 * (direction === 'left' ? -1 : 1);
      trackRef.current.scrollBy({ left: scrollAmt, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto" id="tabbed-carousel">
      {/* Section Header & Flower Filter Tabs */}
      <div className="flex flex-col items-center text-center mb-10">
        <span className="text-[10px] uppercase tracking-widest2 text-neutral-400 mb-2">
          Curated Floral Atelier
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl text-brand-dark mb-6 font-normal">
          Signature Flower Collections
        </h3>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 border-b border-brand-border pb-2">
          {flowerTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`font-serif text-base sm:text-xl tracking-wide pb-2 border-b-2 transition-all cursor-pointer px-2 ${
                selectedFilter === tab.id
                  ? 'border-brand-dark text-brand-dark font-medium'
                  : 'border-transparent text-neutral-400 hover:text-brand-dark'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel Container with Arrows */}
      <div className="relative group/carousel">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-brand-surface-card border border-brand-border flex items-center justify-center shadow-md hover:bg-brand-surface transition-all opacity-90 hover:opacity-100 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-brand-dark" />
        </button>

        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-brand-surface-card border border-brand-border flex items-center justify-center shadow-md hover:bg-brand-surface transition-all opacity-90 hover:opacity-100 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 text-brand-dark" />
        </button>

        {/* Carousel Track */}
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth no-scrollbar py-2 px-1"
        >
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="product-card flex-shrink-0 w-[240px] sm:w-[270px] bg-brand-surface-card border border-brand-border p-3 flex flex-col justify-between group transition-shadow hover:shadow-lg"
            >
              <div>
                {/* Artwork Box with Hover Transform */}
                <div
                  onClick={() => onSelectProduct(p)}
                  className="product-img-box relative w-full aspect-[4/5] overflow-hidden bg-neutral-900 mb-3 border border-brand-border/40 cursor-pointer"
                >
                  <span className="absolute top-2 left-2 z-10 bg-brand-surface-card/90 backdrop-blur-xs text-brand-dark text-[9px] uppercase tracking-wider px-2 py-0.5 font-medium shadow-xs">
                    {p.tag}
                  </span>
                  <div className="primary-art absolute inset-0 w-full h-full transition-all duration-500 group-hover:opacity-0 group-hover:scale-105">
                    <BotanicalProductSvg
                      type={p.svgType}
                      image={p.image}
                      alt={p.name}
                      variant="primary"
                    />
                  </div>
                  <div className="secondary-art absolute inset-0 w-full h-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105">
                    <BotanicalProductSvg
                      type={p.svgType}
                      image={p.secondaryImage}
                      alt={p.name}
                      variant="secondary"
                    />
                  </div>
                </div>

                {/* Details */}
                <h4
                  onClick={() => onSelectProduct(p)}
                  className="font-serif text-sm text-brand-dark group-hover:text-brand-accent transition-colors line-clamp-1 cursor-pointer"
                >
                  {p.name}
                </h4>
                <p className="text-xs text-neutral-500 font-sans mt-1">
                  From {formatPriceWithCurrency(p.price, currentCurrency)}
                </p>
              </div>

              {/* Action */}
              <button
                onClick={() => onAddToCart(p)}
                className="btn-luxury w-full py-2 mt-3 text-[10px] tracking-widest cursor-pointer"
              >
                Add to Bag
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button
          onClick={onViewAllProducts}
          className="btn-luxury cursor-pointer"
        >
          View all floral collections
        </button>
      </div>
    </section>
  );
};
