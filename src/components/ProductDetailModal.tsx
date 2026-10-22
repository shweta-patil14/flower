import React, { useState } from 'react';
import { X, Check, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Product, CurrencyCode, formatPriceWithCurrency } from '../data/storeData';
import { BotanicalProductSvg } from './BotanicalArt';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  currentCurrency: CurrencyCode;
  onAddToCartWithSize: (product: Product, size: 'Petite' | 'Classic' | 'Grande' | 'Luxe') => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  currentCurrency,
  onAddToCartWithSize
}) => {
  const [selectedSize, setSelectedSize] = useState<'Petite' | 'Classic' | 'Grande' | 'Luxe'>('Classic');
  const [activeVariant, setActiveVariant] = useState<'primary' | 'secondary'>('primary');
  const [added, setAdded] = useState(false);

  if (!isOpen || !product) return null;

  // Price adjustment based on size
  const sizeMultiplier = {
    Petite: 0.85,
    Classic: 1.0,
    Grande: 1.35,
    Luxe: 1.7
  }[selectedSize];

  const calculatedPrice = Math.round(product.price * sizeMultiplier);

  const handleAdd = () => {
    onAddToCartWithSize(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-brand-surface-card max-w-3xl w-full border border-brand-border shadow-2xl relative my-8 animate-fadeIn overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-neutral-400 hover:text-brand-dark p-1 bg-brand-surface-card/80 rounded-full cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Visual Column */}
          <div className="bg-neutral-900 relative aspect-square sm:aspect-auto sm:min-h-[460px] p-6 flex flex-col justify-between">
            <span className="self-start bg-brand-surface-card/90 text-brand-dark text-[9px] uppercase tracking-widest px-2.5 py-1 font-medium z-10">
              {product.tag}
            </span>

            <div className="w-full h-64 sm:h-80 my-auto rounded-sm overflow-hidden border border-brand-border/30">
              <BotanicalProductSvg
                type={product.svgType}
                image={activeVariant === 'primary' ? product.image : product.secondaryImage}
                alt={product.name}
                variant={activeVariant}
              />
            </div>

            {/* Angle toggle with image thumbnails */}
            <div className="flex justify-center gap-3 pt-2 z-10">
              <button
                onClick={() => setActiveVariant('primary')}
                className={`flex items-center gap-2 text-[9px] uppercase tracking-widest px-3 py-1.5 border transition-all cursor-pointer ${
                  activeVariant === 'primary'
                    ? 'border-brand-accent text-brand-accent bg-black/40'
                    : 'border-white/30 text-white/70 hover:border-white'
                }`}
              >
                <img src={product.image} alt="Front" className="w-4 h-4 rounded-full object-cover" />
                Bloom View
              </button>
              <button
                onClick={() => setActiveVariant('secondary')}
                className={`flex items-center gap-2 text-[9px] uppercase tracking-widest px-3 py-1.5 border transition-all cursor-pointer ${
                  activeVariant === 'secondary'
                    ? 'border-brand-accent text-brand-accent bg-black/40'
                    : 'border-white/30 text-white/70 hover:border-white'
                }`}
              >
                <img src={product.secondaryImage} alt="Detail" className="w-4 h-4 rounded-full object-cover" />
                Atelier Perspective
              </button>
            </div>
          </div>

          {/* Details Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              <span className="text-[10px] uppercase tracking-widest2 text-neutral-400 block mb-1">
                {product.boxType} Floral Collection
              </span>
              <h3 className="font-serif text-2xl text-brand-dark font-normal">
                {product.name}
              </h3>
              <p className="font-serif text-lg text-brand-dark mt-2 font-medium">
                {formatPriceWithCurrency(calculatedPrice, currentCurrency)}
              </p>

              <p className="text-xs text-neutral-600 mt-4 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Size Selector */}
              {product.category === 'bestseller' && (
                <div className="mt-5">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-2 font-medium">
                    Select Vessel Size
                  </span>
                  <div className="grid grid-cols-4 gap-1.5">
                    {(['Petite', 'Classic', 'Grande', 'Luxe'] as const).map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`py-2 text-[10px] uppercase tracking-wider border text-center transition-all cursor-pointer ${
                          selectedSize === sz
                            ? 'border-brand-dark bg-brand-dark text-white font-medium'
                            : 'border-brand-border text-neutral-600 hover:border-brand-dark'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Specs */}
              <div className="mt-6 pt-5 border-t border-brand-border space-y-2 text-xs text-neutral-600">
                {product.stems && (
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Floral Count:</span>
                    <span className="font-medium text-brand-dark">{product.stems}</span>
                  </div>
                )}
                {product.fragrance && (
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Floral Fragrance:</span>
                    <span className="font-medium text-brand-dark">{product.fragrance}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-neutral-400">Dimensions:</span>
                  <span className="font-medium text-brand-dark">{product.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Farm Origin:</span>
                  <span className="font-medium text-brand-dark">{product.origin}</span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="mt-6 pt-4 border-t border-brand-border/60 grid grid-cols-2 gap-3 text-[10px] text-neutral-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                  <span>5-Day Fresh Bloom Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                  <span>Chilled White-Glove Courier</span>
                </div>
              </div>
            </div>

            {/* Add to Bag CTA */}
            <div className="mt-8 pt-4 border-t border-brand-border">
              <button
                onClick={handleAdd}
                disabled={added}
                className={`w-full py-3.5 text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  added
                    ? 'bg-emerald-800 text-white'
                    : 'bg-brand-dark text-white hover:bg-neutral-800'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Your Bag
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-brand-accent" /> Add to Bag &bull; {formatPriceWithCurrency(calculatedPrice, currentCurrency)}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
