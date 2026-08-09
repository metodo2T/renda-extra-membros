import React, { useState, useEffect } from 'react';
import { ProfileData, BioCard } from './types';
import { DEFAULT_PROFILE } from './data/defaultProfile';
import { HeroSection } from './components/HeroSection';
import { BioCardItem } from './components/BioCardItem';
import { MenuDrawer } from './components/MenuDrawer';
import { EditProfileModal } from './components/EditProfileModal';
import { CardDetailModal } from './components/CardDetailModal';
import { Settings, Share2, Heart } from 'lucide-react';

export default function App() {
  // Load initial profile data from localStorage or default
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('debora_mendes_bio_config');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load saved bio config", e);
    }
    return DEFAULT_PROFILE;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<BioCard | null>(null);

  // Save changes to localStorage whenever profile updates
  useEffect(() => {
    try {
      localStorage.setItem('debora_mendes_bio_config', JSON.stringify(profile));
    } catch (e) {
      console.error("Failed to persist bio config", e);
    }
  }, [profile]);

  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
  };

  const handleCardClick = (card: BioCard) => {
    // If card has a specific custom link (e.g. external URL), open it or show detail modal
    if (card.link && card.link !== '#' && card.link.startsWith('http')) {
      window.open(card.link, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedCard(card);
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1D1C] sm:py-8 sm:px-4 flex flex-col items-center justify-center font-sans-clean antialiased selection:bg-[#B1A49A] selection:text-white">
      {/* Container simulating a mobile viewport on desktop (Max Width 420px) */}
      <main className="w-full sm:max-w-[420px] bg-[#FAF9F6] min-h-screen sm:min-h-[840px] sm:rounded-[24px] shadow-2xl sm:border sm:border-[#383431] overflow-hidden flex flex-col justify-between relative transition-all duration-300">

        <div>
          {/* 1. HERO SECTION */}
          <HeroSection
            profile={profile}
            onOpenMenu={() => setIsMenuOpen(true)}
          />

          {/* 2. CARDS CONTAINER - Generous spacing after profession with 3D perspective */}
          <section className="relative z-20 w-[88%] max-w-[370px] mx-auto mt-6 sm:mt-8 pb-12 space-y-[18px] [perspective:1000px]">
            {profile.cards.map((card, idx) => (
              <BioCardItem
                key={card.id || idx}
                card={card}
                index={idx}
                onCardClick={handleCardClick}
              />
            ))}
          </section>
        </div>

        {/* 3. ELEGANT MINIMALIST FOOTER */}
        <footer className="w-full py-6 text-center text-[#78716D] border-t border-[#E8E5E2] bg-[#FAF9F6] mt-auto flex flex-col items-center justify-center space-y-2">
          <p className="font-serif-editorial italic text-base font-medium text-[#574E49]">
            {profile.name} {profile.surname}
          </p>
          <div className="flex items-center gap-3 text-[11px] font-medium tracking-wider text-[#96877E] uppercase">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="hover:underline hover:text-[#574E49] transition-colors"
            >
              Contatos
            </button>
          </div>
          <p className="text-[10px] text-[#A39C96] flex items-center gap-1 pt-1">
            <span>© {new Date().getFullYear()} • Todos os direitos reservados</span>
          </p>
        </footer>
      </main>

      {/* Slide-out Menu Navigation */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        profile={profile}
        onOpenEditModal={() => setIsEditModalOpen(true)}
      />

      {/* Profile & Cards Customization Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
      />

      {/* Card Details Modal */}
      <CardDetailModal
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
        whatsappNumber={profile.whatsappNumber}
        professionalName={`${profile.name} ${profile.surname}`}
      />
    </div>
  );
}
