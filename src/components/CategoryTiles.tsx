import React from 'react';
import { CuboSilhouette, RondeSilhouette, CrystalGrandeSilhouette } from './SectionIllustrations';

interface CategoryTilesProps {
  onSelectCategory: (boxType: string) => void;
}

export const CategoryTiles: React.FC<CategoryTilesProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto border-t border-brand-border" id="category-tiles">
      <div className="text-center mb-8">
        <span className="text-[10px] uppercase tracking-widest2 text-neutral-400">
          Curated Silhouettes
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-brand-dark mt-1 font-normal">
          Sculptural Floral Vessels
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Tile 1: Classic Cubo - Velvet Damask Roses in Box */}
        <div className="group relative overflow-hidden aspect-[3/4] bg-neutral-900 border border-brand-border shadow-sm">
          <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
            <CuboSilhouette className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 text-white text-center pointer-events-none">
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-accent mb-1 font-medium">
              Velvet Damask Roses
            </span>
            <h4 className="font-serif text-2xl font-normal mb-3">Classic Cubo</h4>
            <button
              onClick={() => onSelectCategory('Cubo')}
              className="pointer-events-auto text-[11px] uppercase tracking-widest text-white underline underline-offset-4 hover:text-brand-accent transition-colors cursor-pointer self-center"
            >
              Shop Roses &rarr;
            </button>
          </div>
        </div>

        {/* Tile 2: Classic Ronde - Dutch Tulips in Vase */}
        <div className="group relative overflow-hidden aspect-[3/4] bg-neutral-900 border border-brand-border shadow-sm">
          <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
            <RondeSilhouette className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 text-white text-center pointer-events-none">
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-accent mb-1 font-medium">
              Dutch Tulips &amp; Peonies
            </span>
            <h4 className="font-serif text-2xl font-normal mb-3">Classic Ronde</h4>
            <button
              onClick={() => onSelectCategory('Ronde')}
              className="pointer-events-auto text-[11px] uppercase tracking-widest text-white underline underline-offset-4 hover:text-brand-accent transition-colors cursor-pointer self-center"
            >
              Shop Tulips &rarr;
            </button>
          </div>
        </div>

        {/* Tile 3: Crystal Grande - Casablanca Lilies in Crystal Glass */}
        <div className="group relative overflow-hidden aspect-[3/4] bg-neutral-900 border border-brand-border shadow-sm">
          <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
            <CrystalGrandeSilhouette className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 text-white text-center pointer-events-none">
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-accent mb-1 font-medium">
              Casablanca Lilies &amp; Orchids
            </span>
            <h4 className="font-serif text-2xl font-normal mb-3">Crystal Grande</h4>
            <button
              onClick={() => onSelectCategory('Crystal')}
              className="pointer-events-auto text-[11px] uppercase tracking-widest text-white underline underline-offset-4 hover:text-brand-accent transition-colors cursor-pointer self-center"
            >
              Shop Lilies &amp; Orchids &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
