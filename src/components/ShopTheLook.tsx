import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Product, CurrencyCode, formatPriceWithCurrency, HOTSPOTS } from '../data/storeData';
import { LivingRoomInteriorScene } from './SectionIllustrations';
import { BotanicalProductSvg } from './BotanicalArt';

interface ShopTheLookProps {
  products: Product[];
  currentCurrency: CurrencyCode;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onOpenLookbook: () => void;
}

export const ShopTheLook: React.FC<ShopTheLookProps> = ({
  products,
  currentCurrency,
  onAddToCart,
  onSelectProduct,
  onOpenLookbook
}) => {
  const [activeHotspotId, setActiveHotspotId] = useState<number | null>(1);

  // Map the 3 vignette products: Roses, Sunflowers, Orchids
  const p1 = products.find((p) => p.id === 'p1') || products[0];
  const a2 = products.find((p) => p.id === 'a2') || products[1];
  const a4 = products.find((p) => p.id === 'a4') || products[2];

  const vignetteItems = [
    { product: p1, role: '01. Focal Roses Arrangement' },
    { product: a2, role: '02. Radiant Sunflowers Accent' },
    { product: a4, role: '03. Exotic Orchid Stems' }
  ];

  const currentHotspot = HOTSPOTS.find((h) => h.id === activeHotspotId);
  const currentHotspotProduct = currentHotspot
    ? products.find((p) => p.id === currentHotspot.productId) || p1
    : null;

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-brand-border bg-brand-surface/40" id="shop-the-look">
      <div className="text-center mb-10">
        <span className="text-[10px] uppercase tracking-widest2 text-neutral-400">
          Floral Styling
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-brand-dark mt-1 font-normal">
          Shop the Botanical Look
        </h3>
        <p className="text-xs text-neutral-500 mt-1">
          Click the active markers on the floral scene to inspect each handcrafted flower creation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Interactive Floral Scene with 3 Hotspots (7 cols) */}
        <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden border border-brand-border shadow-md bg-neutral-900">
          <LivingRoomInteriorScene className="w-full h-full object-cover" />

          {/* Hotspots */}
          {HOTSPOTS.map((hotspot) => {
            const isSelected = activeHotspotId === hotspot.id;
            return (
              <div
                key={hotspot.id}
                style={{
                  top: hotspot.top,
                  left: hotspot.left,
                  right: hotspot.right
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <button
                  onClick={() => setActiveHotspotId(isSelected ? null : hotspot.id)}
                  aria-label={`Hotspot ${hotspot.id}: ${hotspot.label}`}
                  className={`relative flex items-center justify-center w-8 h-8 rounded-full shadow-lg transition-transform focus:outline-none cursor-pointer ${
                    isSelected
                      ? 'bg-brand-dark text-white scale-110'
                      : 'bg-brand-surface-card/95 text-brand-dark hover:scale-110'
                  }`}
                >
                  <span className="hotspot-ring absolute inset-0 rounded-full border border-white"></span>
                  <span className="text-xs font-bold font-sans">
                    {isSelected ? '✓' : '+'}
                  </span>
                </button>
              </div>
            );
          })}

          {/* Interactive Hotspot Popup Card */}
          {currentHotspot && currentHotspotProduct && (
            <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:w-80 bg-brand-surface-card border border-brand-border p-4 shadow-2xl z-30 transition-all animate-fadeIn">
              <div className="flex gap-3 items-center">
                <div
                  onClick={() => onSelectProduct(currentHotspotProduct)}
                  className="w-16 h-16 border border-brand-border flex-shrink-0 bg-neutral-900 overflow-hidden cursor-pointer"
                >
                  <BotanicalProductSvg
                    type={currentHotspotProduct.svgType}
                    image={currentHotspotProduct.image}
                    alt={currentHotspotProduct.name}
                    variant="primary"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h5
                      onClick={() => onSelectProduct(currentHotspotProduct)}
                      className="font-serif text-sm text-brand-dark font-medium leading-tight cursor-pointer hover:text-brand-accent transition-colors line-clamp-1"
                    >
                      {currentHotspotProduct.name}
                    </h5>
                    <button
                      onClick={() => setActiveHotspotId(null)}
                      className="text-neutral-400 hover:text-black p-0.5 cursor-pointer"
                      aria-label="Close popup"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-neutral-600 mt-1">
                    {formatPriceWithCurrency(currentHotspotProduct.price, currentCurrency)}
                  </p>
                  <button
                    onClick={() => onAddToCart(currentHotspotProduct)}
                    className="text-[10px] uppercase tracking-widest text-brand-accent underline underline-offset-2 mt-1.5 font-medium block cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Beside It: Product List of the Same 3 Items (5 cols) */}
        <div className="lg:col-span-5 bg-brand-surface-card border border-brand-border p-6 shadow-sm">
          <h4 className="font-serif text-lg text-brand-dark border-b border-brand-border pb-3 mb-4">
            Flowers in this Arrangement
          </h4>

          <div className="space-y-4">
            {vignetteItems.map(({ product, role }) => (
              <div
                key={product.id}
                className="flex items-center gap-4 pb-4 border-b border-brand-border/60 last:border-b-0"
              >
                <div
                  onClick={() => onSelectProduct(product)}
                  className="w-16 h-16 border border-brand-border bg-neutral-900 flex-shrink-0 overflow-hidden cursor-pointer"
                >
                  <BotanicalProductSvg
                    type={product.svgType}
                    image={product.image}
                    alt={product.name}
                    variant="primary"
                  />
                </div>
                <div className="flex-1">
                  <span className="text-[9px] uppercase tracking-widest text-neutral-400">
                    {role}
                  </span>
                  <h5
                    onClick={() => onSelectProduct(product)}
                    className="font-serif text-sm text-brand-dark cursor-pointer hover:text-brand-accent transition-colors"
                  >
                    {product.name}
                  </h5>
                  <p className="text-xs text-neutral-600">
                    {formatPriceWithCurrency(product.price, currentCurrency)}
                  </p>
                </div>
                <button
                  onClick={() => onAddToCart(product)}
                  className="btn-luxury text-[9px] py-1.5 px-3 cursor-pointer"
                >
                  Add
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-brand-border">
            <button
              onClick={onOpenLookbook}
              className="btn-luxury w-full py-3 cursor-pointer"
            >
              View all flower arrangements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
