import React from 'react';
import { Product, CurrencyCode, formatPriceWithCurrency } from '../data/storeData';
import { NoirRougeSpotlightArt } from './SectionIllustrations';
import { BotanicalProductSvg } from './BotanicalArt';

interface FeaturedCreationsProps {
  products: Product[];
  currentCurrency: CurrencyCode;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const FeaturedCreations: React.FC<FeaturedCreationsProps> = ({
  products,
  currentCurrency,
  onSelectProduct,
  onAddToCart
}) => {
  // Find p1 (Wild Damask Rose), p2 (Amsterdam Tulips), p4 (Ruby Opulence), and p6 (Noir Velvet Roses)
  const p1 = products.find((p) => p.id === 'p1') || products[0];
  const p2 = products.find((p) => p.id === 'p2') || products[1];
  const p4 = products.find((p) => p.id === 'p4') || products[3];
  const noirProduct = products.find((p) => p.id === 'p6') || products[5];

  const featuredList = [
    { product: p1, categoryLabel: 'Velvet Damask Roses' },
    { product: p2, categoryLabel: 'Royal Dutch Tulips' },
    { product: p4, categoryLabel: 'Ruby Roses & Calla Lilies' }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-brand-border" id="featured-creations">
      <div className="mb-10 text-center lg:text-left">
        <span className="text-[10px] uppercase tracking-widest2 text-neutral-400">
          Atelier Spotlight
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-brand-dark mt-1 font-normal">
          Featured Floral Creations
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Big Featured Image Left (5 cols) */}
        <div
          onClick={() => onSelectProduct(noirProduct)}
          className="lg:col-span-5 relative aspect-[4/5] overflow-hidden border border-brand-border bg-neutral-900 shadow-sm group cursor-pointer"
        >
          <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
            <NoirRougeSpotlightArt className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
            <span className="text-[10px] uppercase tracking-widest text-brand-accent">
              Exclusive Rose Edition
            </span>
            <h4 className="font-serif text-2xl font-normal group-hover:text-brand-accent transition-colors">
              Noir &amp; Velvet Rose Symphony
            </h4>
            <p className="text-xs text-neutral-300 mt-1">
              Dark velvet Baccara roses nestled with bronze eucalyptus and berries.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-brand-accent font-medium">
                {formatPriceWithCurrency(noirProduct.price, currentCurrency)}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(noirProduct);
                }}
                className="btn-luxury-inverted text-[9px] py-1.5 px-3"
              >
                Add to Bag
              </button>
            </div>
          </div>
        </div>

        {/* 3 Products on the Right (7 cols) */}
        <div className="lg:col-span-7 divide-y divide-brand-border border-y lg:border-t-0 border-brand-border">
          {featuredList.map(({ product, categoryLabel }) => (
            <div
              key={product.id}
              className="py-6 flex flex-col sm:flex-row items-center gap-6 group hover:bg-neutral-50/50 transition-colors p-2"
            >
              <div
                onClick={() => onSelectProduct(product)}
                className="w-24 h-28 border border-brand-border flex-shrink-0 bg-neutral-900 overflow-hidden cursor-pointer"
              >
                <BotanicalProductSvg
                  type={product.svgType}
                  image={product.image}
                  alt={product.name}
                  variant="primary"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <span className="text-[9px] uppercase tracking-widest text-neutral-400">
                  {categoryLabel}
                </span>
                <h4
                  onClick={() => onSelectProduct(product)}
                  className="font-serif text-lg text-brand-dark group-hover:text-brand-accent transition-colors cursor-pointer"
                >
                  {product.name}
                </h4>
                <p className="text-xs text-neutral-500 mt-1">
                  From {formatPriceWithCurrency(product.price, currentCurrency)}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="btn-luxury text-[10px] py-2.5 px-4 whitespace-nowrap cursor-pointer"
                >
                  View this product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
