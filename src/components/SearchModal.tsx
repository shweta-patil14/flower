import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { Product, CurrencyCode, formatPriceWithCurrency } from '../data/storeData';
import { BotanicalProductSvg } from './BotanicalArt';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  currentCurrency: CurrencyCode;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  currentCurrency,
  onSelectProduct,
  onAddToCart
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const suggestions = [
    'Roses',
    'Tulips',
    'Lilies',
    'Sunflowers',
    'Orchids',
    'Classic Cubo',
    'Grande Ronde',
    'Crystal Grande'
  ];

  const filtered = query.trim() === ''
    ? []
    : products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.tag.toLowerCase().includes(query.toLowerCase()) ||
          p.boxType.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-fadeIn">
      <div className="bg-brand-surface-card max-w-2xl w-full border border-brand-border p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-black p-1 cursor-pointer"
          aria-label="Close search"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-serif text-lg tracking-wider text-brand-dark uppercase mb-3">
          Search Swaraj Florist 'N' Flower Decorators
        </h3>

        <div className="relative border-b border-brand-dark pb-2">
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type roses, cubo, vase, candle, anniversary..."
            className="w-full text-sm font-sans tracking-wide focus:outline-none placeholder:text-neutral-400 pr-8"
          />
          <Search className="w-4 h-4 absolute right-0 top-1 text-neutral-400" />
        </div>

        {/* Suggested Searches */}
        <div className="mt-4">
          <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2">
            Suggested Searches
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((sug) => (
              <button
                key={sug}
                onClick={() => setQuery(sug)}
                className="text-xs bg-neutral-100 hover:bg-neutral-200 px-3 py-1 text-neutral-700 cursor-pointer transition-colors"
              >
                {sug}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {query.trim() !== '' && (
          <div className="mt-6 max-h-80 overflow-y-auto divide-y divide-brand-border">
            {filtered.length === 0 ? (
              <p className="text-xs text-neutral-500 py-4 text-center">
                No botanical creations found matching &quot;{query}&quot;. Try exploring our Best Sellers.
              </p>
            ) : (
              filtered.map((prod) => (
                <div key={prod.id} className="py-3 flex items-center justify-between gap-3">
                  <div
                    onClick={() => {
                      onSelectProduct(prod);
                      onClose();
                    }}
                    className="flex items-center gap-3 cursor-pointer flex-1"
                  >
                    <div className="w-12 h-14 bg-neutral-900 border border-brand-border flex-shrink-0 overflow-hidden">
                      <BotanicalProductSvg
                        type={prod.svgType}
                        image={prod.image}
                        alt={prod.name}
                        variant="primary"
                      />
                    </div>
                    <div>
                      <h5 className="font-serif text-sm text-brand-dark hover:text-brand-accent transition-colors line-clamp-1">
                        {prod.name}
                      </h5>
                      <p className="text-xs text-neutral-500">
                        {formatPriceWithCurrency(prod.price, currentCurrency)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onAddToCart(prod);
                      onClose();
                    }}
                    className="btn-luxury text-[9px] py-1.5 px-3 cursor-pointer"
                  >
                    Add
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
