import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { Product, CurrencyCode, formatPriceWithCurrency } from '../data/storeData';
import { BotanicalProductSvg } from './BotanicalArt';

interface AllProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  currentCurrency: CurrencyCode;
  initialFilter?: string;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const AllProductsModal: React.FC<AllProductsModalProps> = ({
  isOpen,
  onClose,
  products,
  currentCurrency,
  initialFilter = 'all',
  onAddToCart,
  onSelectProduct
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(initialFilter);

  if (!isOpen) return null;

  const filters = [
    { label: 'All Flowers', value: 'all' },
    { label: 'Roses', value: 'rose' },
    { label: 'Tulips', value: 'tulip' },
    { label: 'Lilies', value: 'lily' },
    { label: 'Sunflowers', value: 'sunflower' },
    { label: 'Orchids', value: 'orchid' },
    { label: 'Square Cubo', value: 'Cubo' },
    { label: 'Circular Ronde', value: 'Ronde' },
    { label: 'Crystal Vases', value: 'Crystal' }
  ];

  const filtered = products.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'rose') return p.flowerType === 'rose';
    if (selectedFilter === 'tulip') return p.flowerType === 'tulip';
    if (selectedFilter === 'lily') return p.flowerType === 'lily';
    if (selectedFilter === 'sunflower') return p.flowerType === 'sunflower';
    if (selectedFilter === 'orchid') return p.flowerType === 'orchid';
    if (selectedFilter === 'Cubo') return p.boxType === 'Cubo';
    if (selectedFilter === 'Ronde') return p.boxType === 'Ronde';
    if (selectedFilter === 'Crystal') return p.boxType === 'Crystal';
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-brand-surface-card max-w-5xl w-full border border-brand-border shadow-2xl relative my-8 animate-fadeIn p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-black p-1 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <span className="text-[10px] uppercase tracking-widest text-brand-accent font-medium flex items-center justify-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Atelier Botanical Catalog
          </span>
          <h3 className="font-serif text-3xl text-brand-dark mt-1 font-normal">
            Complete Floral Collection
          </h3>
          <p className="text-xs text-neutral-500 mt-1">
            Roses, Tulips, Lilies, Sunflowers, Orchids &amp; Rare Botanicals
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-brand-border pb-4">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setSelectedFilter(f.value)}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                selectedFilter === f.value
                  ? 'border-brand-dark bg-brand-dark text-white'
                  : 'border-brand-border text-neutral-600 hover:border-black'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="border border-brand-border p-3 flex flex-col justify-between group hover:shadow-md transition-shadow"
            >
              <div>
                <div
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="product-img-box relative w-full aspect-[4/5] overflow-hidden bg-neutral-900 mb-3 border border-brand-border/40 cursor-pointer"
                >
                  <span className="absolute top-2 left-2 z-10 bg-brand-surface-card/90 text-brand-dark text-[9px] uppercase tracking-wider px-2 py-0.5 font-medium shadow-xs">
                    {product.tag}
                  </span>
                  <div className="primary-art absolute inset-0 w-full h-full transition-all duration-500 group-hover:opacity-0 group-hover:scale-105">
                    <BotanicalProductSvg
                      type={product.svgType}
                      image={product.image}
                      alt={product.name}
                      variant="primary"
                    />
                  </div>
                  <div className="secondary-art absolute inset-0 w-full h-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105">
                    <BotanicalProductSvg
                      type={product.svgType}
                      image={product.secondaryImage}
                      alt={product.name}
                      variant="secondary"
                    />
                  </div>
                </div>

                <h4
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="font-serif text-sm text-brand-dark line-clamp-1 cursor-pointer group-hover:text-brand-accent transition-colors"
                >
                  {product.name}
                </h4>
                <p className="text-xs text-neutral-500 mt-1">
                  From {formatPriceWithCurrency(product.price, currentCurrency)}
                </p>
              </div>

              <button
                onClick={() => onAddToCart(product)}
                className="btn-luxury w-full py-2 mt-4 text-[10px] tracking-widest cursor-pointer"
              >
                Add to Bag
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
