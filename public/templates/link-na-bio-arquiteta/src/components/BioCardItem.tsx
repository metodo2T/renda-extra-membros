import React from 'react';
import { motion } from 'motion/react';
import { BioCard } from '../types';
import { LaptopMockup, MultiDeviceMockup } from './DeviceMockups';

interface BioCardItemProps {
  card: BioCard;
  index: number;
  onCardClick?: (card: BioCard) => void;
}

export const BioCardItem: React.FC<BioCardItemProps> = ({ card, index, onCardClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onCardClick) {
      e.preventDefault();
      onCardClick(card);
    } else if (card.link && card.link !== '#') {
      window.open(card.link, '_blank', 'noopener,noreferrer');
    }
  };

  // Card Background & Style configuration
  const isLight = card.style === 'light';
  const isTaupe = card.style === 'taupe';
  const isBeige = card.style === 'beige';

  // Enhanced stronger brown color scheme for higher contrast and richness
  let bgClass = 'bg-white border-[#C8BFB8] text-[#3D3530]';
  let titleClass = 'text-[#5C4B40] font-semibold'; // Stronger deep espresso brown title
  let descClass = 'text-[#524842]';

  if (isTaupe) {
    bgClass = 'bg-[#52433B] border-transparent text-white'; // Deep intense espresso/taupe brown
    titleClass = 'text-white font-medium';
    descClass = 'text-white/92';
  } else if (isBeige) {
    bgClass = 'bg-[#7A675B] border-transparent text-white'; // Rich warm dark beige brown
    titleClass = 'text-white font-medium';
    descClass = 'text-white/95';
  }

  // Card 2 is Essence with Laptop mockup on the left
  const isLaptopCard = card.id === 'card-2' || card.title.toLowerCase().includes('essence');
  // Card 4 is Combo Kit with Multi-device mockup on the left
  const isComboCard = card.id === 'card-4' || card.title.toLowerCase().includes('combo');

  return (
    <motion.a
      href={card.link || '#'}
      target={card.link && card.link !== '#' ? '_blank' : '_self'}
      rel="noopener noreferrer"
      onClick={handleClick}
      initial={{ opacity: 0, y: 40, rotateX: 18, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.025, y: -4, rotateX: -3, rotateY: 2 }}
      whileTap={{ scale: 0.97 }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`group relative w-full rounded-[16px] border transition-all duration-300 ease-out shadow-editorial-3d hover:shadow-editorial-hover cursor-pointer flex items-center overflow-hidden min-h-[96px] sm:min-h-[102px] px-4 py-3 ${bgClass}`}
    >
      {/* 1. LAPTOP CARD (ESSENCE) - Mockup on Left */}
      {isLaptopCard ? (
        <div className="w-full flex items-center justify-between gap-2.5">
          {/* Laptop Mockup extending slightly off left */}
          <div className="flex-shrink-0 -ml-3.5 sm:-ml-4 scale-95 origin-left">
            <LaptopMockup screenImage={card.notebookScreenImage || card.image} />
          </div>

          {/* Text Content on Right */}
          <div className="flex-1 text-right pl-1 min-w-0 flex flex-col justify-center">
            <h3 className={`font-serif-editorial italic text-[24px] sm:text-[26px] leading-tight tracking-tight ${titleClass}`}>
              {card.title}
            </h3>
            <p className={`font-sans-clean text-[10.5px] sm:text-[11.5px] font-light leading-snug mt-0.5 line-clamp-3 ${descClass}`}>
              {card.description}
            </p>
          </div>
        </div>
      ) : isComboCard ? (
        /* 2. COMBO KIT CARD - Multi Devices Mockup on Left */
        <div className="w-full flex items-center justify-between gap-2.5">
          {/* Stacked Devices Mockup on Left */}
          <div className="flex-shrink-0 -ml-1 sm:ml-0 scale-95 origin-left">
            <MultiDeviceMockup
              ebookImage={card.ebookImage}
              tabletImage={card.tabletImage}
              phoneImage={card.phoneImage}
            />
          </div>

          {/* Text Content on Right */}
          <div className="flex-1 text-right pl-1 min-w-0 flex flex-col justify-center">
            <h3 className={`font-serif-editorial italic text-[24px] sm:text-[26px] leading-tight tracking-tight ${titleClass}`}>
              {card.title}
            </h3>
            <p className={`font-sans-clean text-[10.5px] sm:text-[11.5px] font-light leading-snug mt-0.5 line-clamp-3 ${descClass}`}>
              {card.description}
            </p>
          </div>
        </div>
      ) : (
        /* 3. STANDARD / PREMIUM / BASIC CARDS - Text on Left, Portrait Image on Right */
        <div className="w-full flex items-center justify-between gap-3">
          {/* Text Content on Left */}
          <div className="flex-1 text-left pr-1 min-w-0 flex flex-col justify-center">
            <h3 className={`font-serif-editorial italic text-[24px] sm:text-[26px] leading-tight tracking-tight ${titleClass}`}>
              {card.title}
            </h3>
            <p className={`font-sans-clean text-[10.5px] sm:text-[11.5px] font-light leading-snug mt-0.5 line-clamp-3 ${descClass}`}>
              {card.description}
            </p>
          </div>

          {/* Portrait Photo on Right */}
          <div className="flex-shrink-0 relative w-[70px] sm:w-[78px] h-[80px] sm:h-[86px] rounded-r-[10px] overflow-hidden flex items-end justify-center">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Soft subtle fade gradient at base */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      )}
    </motion.a>
  );
};

