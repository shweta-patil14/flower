import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { Product, CurrencyCode, formatPriceWithCurrency } from '../data/storeData';
import { BotanicalProductSvg } from './BotanicalArt';

interface LookbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  currentCurrency: CurrencyCode;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({
  isOpen,
  onClose,
  products,
  currentCurrency,
  onAddToCart,
  onSelectProduct
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-brand-surface-card max-w-4xl w-full border border-brand-border shadow-2xl relative my-8 animate-fadeIn p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-black p-1 cursor-pointer"
          aria-label="Close lookbook"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <span className="text-[10px] uppercase tracking-widest text-brand-accent font-medium flex items-center justify-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Living Space Architecture
          </span>
          <h3 className="font-serif text-3xl text-brand-dark mt-1 font-normal">
            Atelier Floral Lookbook
          </h3>
          <p className="text-xs text-neutral-500 mt-2 max-w-lg mx-auto">
            Explore curated floral arrangements featuring premium roses, vibrant Dutch tulips, Casablanca lilies, sun-drenched sunflowers, and royal cascading orchids.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.slice(0, 9).map((product) => (
            <div
              key={product.id}
              className="border border-brand-border p-4 flex flex-col justify-between group hover:border-black transition-colors"
            >
              <div>
                <div
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="aspect-[4/5] bg-neutral-900 border border-brand-border/40 overflow-hidden mb-3 cursor-pointer"
                >
                  <BotanicalProductSvg
                    type={product.svgType}
                    image={product.image}
                    alt={product.name}
                    variant="primary"
                  />
                </div>
                <span className="text-[9px] uppercase tracking-wider text-brand-accent block mb-1">
                  {product.tag}
                </span>
                <h4
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="font-serif text-base text-brand-dark cursor-pointer group-hover:text-brand-accent transition-colors"
                >
                  {product.name}
                </h4>
                <p className="text-xs text-neutral-500 mt-1">
                  {formatPriceWithCurrency(product.price, currentCurrency)}
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
