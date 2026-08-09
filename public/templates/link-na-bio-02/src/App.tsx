/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { initialProfileData, initialBioLinks, initialCarouselSlides } from './data';
import { BioLink, ProfileData } from './types';
import { Header } from './components/Header';
import { ProfileHeader } from './components/ProfileHeader';
import { PortfolioCard } from './components/PortfolioCard';
import { LinkButton } from './components/LinkButton';
import { AboutMeCard } from './components/AboutMeCard';
import { FooterCTA } from './components/FooterCTA';
import { LinkModal } from './components/LinkModal';
import { PortfolioModal } from './components/PortfolioModal';
import { EditDrawer } from './components/EditDrawer';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(initialProfileData);
  const [links, setLinks] = useState<BioLink[]>(initialBioLinks);
  
  // Modals state
  const [selectedLink, setSelectedLink] = useState<BioLink | null>(null);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleLinkClick = (link: BioLink) => {
    if (link.icon === 'whatsapp') {
      const waUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedLink(link);
    }
  };

  const handleSocialClick = (platform: string, url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenWhatsappCTA = () => {
    const waUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleResetDefaults = () => {
    setProfile(initialProfileData);
    setLinks(initialBioLinks);
  };

  return (
    <div className="min-h-screen bg-textured-light text-slate-900 flex flex-col justify-between selection:bg-purple-600 selection:text-white font-['Montserrat'] relative overflow-x-hidden">
      {/* Minimalist Top Header */}
      <Header profile={profile} />

      {/* Main Link-in-Bio Canvas */}
      <main className="w-full max-w-md mx-auto px-4 sm:px-6 flex-1 flex flex-col justify-between relative z-10 pb-6">
        <div>
          {/* Profile Avatar, Title, Subtitle, and Social Icons */}
          <ProfileHeader profile={profile} onSocialClick={handleSocialClick} />

          {/* About Me Section ("Sobre Mim") */}
          <AboutMeCard />

          {/* Main Links Heading with increased spacing */}
          <div className="text-center mt-10 sm:mt-12 mb-6">
            <h2 className="text-xl sm:text-2xl tracking-wide text-purple-950">
              <span className="font-light text-purple-800/80">Links</span>{' '}
              <span className="font-bold text-purple-950">que vão te ajudar</span>
            </h2>
          </div>

          {/* Featured Portfolio Banner Card */}
          <div className="mb-4">
            <PortfolioCard onClick={() => setIsPortfolioOpen(true)} />
          </div>

          {/* 5 Main Pill Buttons */}
          <div className="space-y-3 sm:space-y-3.5 my-4">
            {links.map((link) => (
              <LinkButton key={link.id} link={link} onClick={handleLinkClick} />
            ))}
          </div>
        </div>

        {/* Bottom WhatsApp CTA & Footer */}
        <FooterCTA profile={profile} onCtaClick={handleOpenWhatsappCTA} />
      </main>

      {/* Interactive Link Details Modal */}
      <LinkModal link={selectedLink} onClose={() => setSelectedLink(null)} />

      {/* Portfolio Showcase Modal */}
      <PortfolioModal
        isOpen={isPortfolioOpen}
        onClose={() => setIsPortfolioOpen(false)}
        onContactClick={handleOpenWhatsappCTA}
      />

      {/* Customization Drawer */}
      <EditDrawer
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        profile={profile}
        setProfile={setProfile}
        links={links}
        setLinks={setLinks}
        onResetDefault={handleResetDefaults}
      />
    </div>
  );
}
