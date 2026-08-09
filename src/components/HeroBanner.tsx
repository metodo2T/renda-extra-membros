import React from 'react';
import { Play } from 'lucide-react';

interface Props {
  onStart: () => void;
}

export function HeroBanner({ onStart }: Props) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center relative overflow-hidden">
      
      {/* Background with Space Shuttle */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl px-8 md:px-16 lg:px-24">
        <h2 className="text-xl md:text-2xl font-medium text-gray-300 tracking-widest mb-2 uppercase">
          A jornada no
        </h2>
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight drop-shadow-2xl">
          <span className="text-white">digital</span>
        </h1>
        
        <p className="text-2xl md:text-3xl font-bold mb-10 text-gray-200 drop-shadow-md">
          SUA JORNADA COMEÇA AQUI
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
          Crie landing pages de alta conversão automaticamente utilizando Inteligência Artificial. 
          Responda a um breve questionário e veja a mágica acontecer em segundos.
        </p>
        
        <div className="flex gap-6">
          <button 
            onClick={onStart}
            className="group flex items-center gap-3 bg-white text-black px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            <Play className="w-6 h-6 fill-black transition-transform group-hover:scale-110" />
            Começar a Criar Minha Página
          </button>
        </div>
      </div>
    </div>
  );
}
