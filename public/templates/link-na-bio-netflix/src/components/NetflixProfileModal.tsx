import React from 'react';
import { X, Check } from 'lucide-react';

interface NetflixProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile: string;
  onSelectProfile: (profileName: string) => void;
}

const PROFILES = [
  {
    id: 'bruno',
    name: 'Bruno Cesar',
    role: 'Gestor de Tráfego',
    avatar: 'https://i.postimg.cc/MKQH4wrR/Bruno-Ce-sar-jpg-(1).jpg',
    color: 'from-red-600 to-rose-700'
  },
  {
    id: 'infoprodutor',
    name: 'Infoprodutor',
    role: 'Escala & Vendas',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'lancador',
    name: 'Lançador',
    role: 'Co-produção',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'afiliado',
    name: 'Afiliado VIP',
    role: 'Tráfego Pago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    color: 'from-emerald-500 to-teal-600'
  }
];

export const NetflixProfileModal: React.FC<NetflixProfileModalProps> = ({
  isOpen,
  onClose,
  currentProfile,
  onSelectProfile
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-sm bg-[#141414] border border-white/10 rounded-2xl p-6 shadow-2xl text-slate-100 flex flex-col items-center text-center overflow-hidden">
        
        {/* Top Glow Accent */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#E50914] to-transparent"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Title */}
        <h2 className="font-serif text-2xl sm:text-3xl font-black text-white tracking-wide mt-2">
          Quem está assistindo?
        </h2>
        <p className="text-xs text-slate-400 mt-1 mb-6">
          Selecione seu perfil para personalizar os links
        </p>

        {/* Profile Grid */}
        <div className="grid grid-cols-2 gap-4 w-full mb-6">
          {PROFILES.map((prof) => {
            const isSelected = currentProfile === prof.name;

            return (
              <button
                key={prof.id}
                onClick={() => {
                  onSelectProfile(prof.name);
                  onClose();
                }}
                className={`group flex flex-col items-center p-3 rounded-xl border transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#222222] border-[#E50914] shadow-lg shadow-red-900/40 scale-105'
                    : 'bg-[#181818] border-white/5 hover:border-white/20 hover:scale-102'
                }`}
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden mb-2 border-2 border-transparent group-hover:border-white transition-all">
                  <img
                    src={prof.avatar}
                    alt={prof.name}
                    className="w-full h-full object-cover object-top"
                  />
                  {isSelected && (
                    <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#E50914] text-white flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </div>
                <span className="text-xs font-bold text-white group-hover:text-red-400 transition">
                  {prof.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {prof.role}
                </span>
              </button>
            );
          })}
        </div>

        {/* Manage Profiles Button */}
        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 font-bold text-xs uppercase tracking-wider transition"
        >
          Gerenciar Perfis
        </button>
      </div>
    </div>
  );
};
