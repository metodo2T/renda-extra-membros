import React, { useState } from 'react';
import { NetflixHeroBillboard } from './components/NetflixHeroBillboard';
import { NetflixMovieCard } from './components/NetflixMovieCard';
import { NetflixProfileModal } from './components/NetflixProfileModal';
import { ActionModals } from './components/ActionModals';
import { JMLogoFooter } from './components/JMLogoFooter';

export default function App() {
  const [activeModal, setActiveModal] = useState<'orcamentos' | 'mentoria' | 'comunidade' | 'instagram' | 'playlist' | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [currentProfile, setCurrentProfile] = useState('Bruno Cesar');

  return (
    <div className="min-h-screen bg-[#141414] text-slate-100 flex flex-col items-center justify-start relative pb-12 overflow-x-hidden selection:bg-[#E50914] selection:text-white font-sans">
      
      {/* Background Ambient Red Netflix Glows */}
      <div className="fixed top-[-5%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#E50914]/15 blur-[150px] pointer-events-none z-0"></div>
      <div className="fixed bottom-10 right-10 w-[400px] h-[400px] bg-red-900/10 blur-[160px] pointer-events-none z-0"></div>

      {/* Subtle Grid Pattern Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] z-0"></div>

      {/* Main Container Constrained to 400px Mobile Bio View */}
      <main className="relative z-10 w-full max-w-[400px] mx-auto flex flex-col items-center px-4 pt-6">
        
        {/* 1. Hero Feature Poster (Bruno Cesar - Billboard Expanded) */}
        <NetflixHeroBillboard
          name="BRUNO CESAR"
          roleBadge="Gestor de Tráfego para Infoprodutores"
          avatarUrl="https://i.postimg.cc/MKQH4wrR/Bruno-Ce-sar-jpg-(1).jpg"
          onPlayClick={() => setActiveModal('orcamentos')}
          onInfoClick={() => setActiveModal('orcamentos')}
        />

        {/* Category Row 1 Header */}
        <div className="w-full flex items-center justify-between mt-2 mb-3 px-1">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-[#E50914] rounded-full"></div>
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
              Continuar Assistindo
            </h2>
          </div>
          <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">T1 : 3 Ep</span>
        </div>

        {/* 2. Episode 1 Card - ORÇAMENTOS */}
        <NetflixMovieCard
          index={0}
          episodeNumber={1}
          title="ORÇAMENTOS"
          subtitle="Tenha uma gestão de anúncios profissional com foco em ROI"
          matchScore="99% Match"
          duration="25 min"
          badgeText="Lançamentos"
          progressPercent={85}
          coverImageUrl="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
          onClick={() => setActiveModal('orcamentos')}
        />

        {/* 3. Episode 2 Card - MENTORIA */}
        <NetflixMovieCard
          index={1}
          episodeNumber={2}
          title="MENTORIA"
          subtitle="Acelere seus resultados de maneira simples ao vivo"
          matchScore="98% Match"
          duration="45 min"
          badgeText="Novo Episódio"
          progressPercent={60}
          coverImageUrl="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
          onClick={() => setActiveModal('mentoria')}
        />

        {/* 4. Episode 3 Card - COMUNIDADE */}
        <NetflixMovieCard
          index={2}
          episodeNumber={3}
          title="COMUNIDADE"
          subtitle="Entre para a comunidade VIP e exclusiva no Telegram"
          matchScore="99% Match"
          duration="Indeterminado"
          badgeText="TOP 10 Hoje"
          progressPercent={40}
          coverImageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
          onClick={() => setActiveModal('comunidade')}
        />

        {/* Category Row 2 Header */}
        <div className="w-full flex items-center justify-between mt-5 mb-3 px-1">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-[#E50914] rounded-full"></div>
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
              Em Alta no Perfil
            </h2>
          </div>
          <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Redes</span>
        </div>

        {/* 5. Episode 4 Card - INSTAGRAM */}
        <NetflixMovieCard
          index={3}
          episodeNumber={4}
          title="INSTAGRAM"
          subtitle="Diário e bastidores de anúncios no @brunocesar"
          matchScore="97% Match"
          duration="Diário"
          badgeText="Bastidores"
          progressPercent={90}
          coverImageUrl="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800"
          onClick={() => setActiveModal('instagram')}
        />

        {/* 6. Episode 5 Card - PLAYLIST */}
        <NetflixMovieCard
          index={4}
          episodeNumber={5}
          title="PLAYLIST DO GESTOR"
          subtitle="Músicas de foco e concentração para impulsionar suas campanhas"
          matchScore="99% Match"
          duration="Trilha Sonora"
          badgeText="Spotify"
          progressPercent={70}
          coverImageUrl="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
          onClick={() => setActiveModal('playlist')}
        />

        {/* 7. Footer */}
        <JMLogoFooter />
      </main>

      {/* Profile Switcher Modal ("Quem está assistindo?") */}
      <NetflixProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        currentProfile={currentProfile}
        onSelectProfile={setCurrentProfile}
      />

      {/* Interactive Netflix Action Modal */}
      <ActionModals
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        type={activeModal}
        whatsappNumber="5511999999999"
        telegramUrl="https://t.me"
        instagramUrl="https://instagram.com"
        spotifyUrl="https://open.spotify.com"
      />
    </div>
  );
}

