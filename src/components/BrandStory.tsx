import React from 'react';

const FLOWER_VARIETIES = [
  {
    name: 'Roses',
    botanical: 'Rosa Damascena',
    image: '/images/flowers/crimson-roses-box.jpg'
  },
  {
    name: 'Tulips',
    botanical: 'Tulipa Gesneriana',
    image: '/images/flowers/dutch-tulips-hatbox.jpg'
  },
  {
    name: 'Lilies',
    botanical: 'Lilium Casablanca',
    image: '/images/flowers/casablanca-lilies.jpg'
  },
  {
    name: 'Sunflowers',
    botanical: 'Helianthus Annuus',
    image: '/images/flowers/sunflowers-luxury-vase.jpg'
  },
  {
    name: 'Orchids',
    botanical: 'Phalaenopsis Amabilis',
    image: '/images/flowers/phalaenopsis-orchids.jpg'
  }
];

export const BrandStory: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 px-4 bg-brand-surface border-y border-brand-border" id="brand-story">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[10px] uppercase tracking-[0.28em] text-brand-accent font-medium">
          The Philosophy
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl text-brand-dark mt-2 mb-4 font-normal">
          Our Botanical Story
        </h3>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center space-x-4 my-6">
          <div className="h-[1px] w-12 bg-neutral-300"></div>
          <svg className="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"></path>
          </svg>
          <div className="h-[1px] w-12 bg-neutral-300"></div>
        </div>

        <p className="font-cormorant text-lg sm:text-xl text-neutral-700 italic leading-relaxed mb-6 font-light max-w-2xl mx-auto">
          Swaraj Florist 'N' Flower Decorators was born from a singular reverie: that botanical gifting and floral decorations ought to be an unforgettable artistic ritual. We source the finest roses from Cayambe, vibrant tulips from Holland, pure Casablanca lilies, sun-drenched sunflowers, and royal orchids harvested at peak vitality.
        </p>

        <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-sans font-light tracking-wide max-w-2xl mx-auto mb-12">
          Whether marking milestone unions, intimate reconciliations, or spontaneous declarations of affection, our bespoke packaging preserves tactile elegance and delicate floral perfume. Gifting is not merely the conveyance of blossoms; it is the artful punctuation of human connection.
        </p>

        {/* Flower Gallery Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-6 border-t border-brand-border/60">
          {FLOWER_VARIETIES.map((flower) => (
            <div key={flower.name} className="flex flex-col items-center group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-brand-accent/40 group-hover:border-brand-accent transition-all duration-300 shadow-sm mb-3">
                <img
                  src={flower.image}
                  alt={flower.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="font-serif text-sm text-brand-dark group-hover:text-brand-accent transition-colors font-medium">
                {flower.name}
              </span>
              <span className="text-[10px] text-neutral-400 font-sans italic">
                {flower.botanical}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
