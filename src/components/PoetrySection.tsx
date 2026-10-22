import React from 'react';
import { PoetryCraftsmanshipArt } from './SectionIllustrations';

interface PoetrySectionProps {
  onOpenAboutModal: () => void;
}

export const PoetrySection: React.FC<PoetrySectionProps> = ({ onOpenAboutModal }) => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto" id="poetry-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Side A: Large Bespoke Graphic */}
        <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square overflow-hidden border border-brand-border shadow-sm bg-neutral-900">
          <PoetryCraftsmanshipArt className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 bg-brand-surface-card/90 backdrop-blur-sm px-4 py-2 border border-brand-border text-[10px] uppercase tracking-widest text-brand-dark font-medium shadow-xs">
            Hand-Crafted in Atelier
          </div>
        </div>

        {/* Side B: Content Split */}
        <div className="flex flex-col justify-center items-start lg:pl-6">
          <span className="text-[10px] uppercase tracking-widest2 text-neutral-400 mb-2">
            Artisanal Dedication
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-dark leading-tight mb-5">
            Poetry In A Box
          </h3>
          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6 font-light">
            Every arrangement embodies an unscripted verse. Inside our custom heavyweight Parisian-finish boxes, moisture-locking botanical cushions protect fragile petals while concealed water reserves keep your arrangements radiant for days. It is an elevated unboxing experience meticulously orchestrated to evoke wonder.
          </p>
          <div className="text-xs font-mono tracking-widest text-brand-accent uppercase mb-8">
            #PoetryInABox
          </div>
          <button
            onClick={onOpenAboutModal}
            className="btn-luxury cursor-pointer"
          >
            About
          </button>
        </div>
      </div>
    </section>
  );
};
