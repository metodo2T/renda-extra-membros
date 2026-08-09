import React, { useState } from 'react';
import { ModelsTab } from './ModelsTab';
import { PromptLibraryTab } from './PromptLibraryTab';
import { ElementosTab } from './ElementosTab';
import { HomeTab } from './HomeTab';
import { LayoutDashboard, Image as ImageIcon, PlaySquare, HelpCircle, LogOut, Search, Bell, Layers, Settings, Link2 } from 'lucide-react';
import { auth } from '../lib/firebase';
import { signOut, User } from 'firebase/auth';
import { AdminTab } from './AdminTab';

interface Props {
  user: User;
}

export function MemberArea({ user }: Props) {
  const [activeTab, setActiveTab] = useState<'inicio' | 'modelos' | 'link-na-bio' | 'fotos' | 'elementos' | 'admin'>('inicio');
  const isAdmin = user.email?.toLowerCase() === 'metododoist@gmail.com';

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
  };

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
      
      {/* Sidebar (Menu Lateral) */}
      <aside className="w-64 bg-[#0f0f0f] border-r border-gray-800 flex flex-col hidden md:flex">
        <div className="h-20 flex items-center px-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center">
              <div className="w-0 h-0 border-t-4 border-t-transparent border-l-[6px] border-l-black border-b-4 border-b-transparent ml-1"></div>
            </div>
            <span className="font-bold text-sm tracking-wider uppercase text-gray-300">Renda extra 2T</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto custom-scrollbar">
          <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-4 px-2">Menu Principal</div>
          
          <button 
            onClick={() => setActiveTab('inicio')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${activeTab === 'inicio' ? 'bg-cyan-900/20 text-cyan-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <PlaySquare className="w-5 h-5" />
            <span className="text-sm font-medium">Início / Aulas</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('modelos')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${activeTab === 'modelos' ? 'bg-cyan-900/20 text-cyan-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-sm font-medium">Páginas com IA</span>
          </button>

          <button 
            onClick={() => setActiveTab('link-na-bio')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${activeTab === 'link-na-bio' ? 'bg-cyan-900/20 text-cyan-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <Link2 className="w-5 h-5" />
            <span className="text-sm font-medium">Link na Bio</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('fotos')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${activeTab === 'fotos' ? 'bg-cyan-900/20 text-cyan-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <ImageIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Imagens com IA</span>
          </button>

          <button 
            onClick={() => setActiveTab('elementos')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${activeTab === 'elementos' ? 'bg-cyan-900/20 text-cyan-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <Layers className="w-5 h-5" />
            <span className="text-sm font-medium">Elementos</span>
          </button>

          {isAdmin && (
            <button 
              onClick={() => setActiveTab('admin')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition mt-4 ${activeTab === 'admin' ? 'bg-purple-900/20 text-purple-400 border border-purple-500/30' : 'text-purple-400/70 hover:bg-gray-800 hover:text-purple-400'}`}
            >
              <Settings className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">Painel Admin</span>
            </button>
          )}

          <button 
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition mt-4"
          >
            <HelpCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Suporte</span>
          </button>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Sair da Conta</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Header Superior Simples */}
        <header className="h-20 bg-[#0a0a0a] border-b border-gray-800 flex items-center justify-between px-8 sticky top-0 z-10 shrink-0">
          <div className="flex items-center bg-[#121212] border border-gray-800 rounded-full px-4 py-2 w-96 hidden lg:flex">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input 
              type="text" 
              placeholder="Pesquisar no Renda extra 2T..." 
              className="bg-transparent border-none text-sm text-gray-300 focus:outline-none w-full"
            />
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <button className="text-gray-400 hover:text-white transition relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-cyan-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 border-l border-gray-800 pl-6">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-white">Renda extra 2T</div>
                <div className="text-[10px] text-cyan-400 uppercase tracking-widest font-semibold">Conta Ativa</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-600 flex items-center justify-center font-bold text-sm shadow-md">
                R
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Navigation Bar (Bottom) - visível apenas em telas menores */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0f0f0f]/95 backdrop-blur-md border-t border-gray-800 z-50 flex overflow-x-auto no-scrollbar items-center h-16 px-6 gap-8 snap-x">
          <button 
            onClick={() => setActiveTab('inicio')}
            className={`shrink-0 snap-center flex flex-col items-center gap-1 transition ${activeTab === 'inicio' ? 'text-cyan-400' : 'text-gray-500'}`}
          >
            <PlaySquare className="w-5 h-5" />
            <span className="text-[10px] font-medium text-center leading-tight">Início</span>
          </button>
          <button 
            onClick={() => setActiveTab('modelos')}
            className={`shrink-0 snap-center flex flex-col items-center gap-1 transition ${activeTab === 'modelos' ? 'text-cyan-400' : 'text-gray-500'}`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-[10px] font-medium text-center leading-tight">Páginas<br/>com IA</span>
          </button>
          <button 
            onClick={() => setActiveTab('link-na-bio')}
            className={`shrink-0 snap-center flex flex-col items-center gap-1 transition ${activeTab === 'link-na-bio' ? 'text-cyan-400' : 'text-gray-500'}`}
          >
            <Link2 className="w-5 h-5" />
            <span className="text-[10px] font-medium text-center leading-tight">Link na Bio</span>
          </button>
          <button 
            onClick={() => setActiveTab('fotos')}
            className={`shrink-0 snap-center flex flex-col items-center gap-1 transition ${activeTab === 'fotos' ? 'text-cyan-400' : 'text-gray-500'}`}
          >
            <ImageIcon className="w-5 h-5" />
            <span className="text-[10px] font-medium text-center leading-tight">Imagens<br/>com IA</span>
          </button>
          <button 
            onClick={() => setActiveTab('elementos')}
            className={`shrink-0 snap-center flex flex-col items-center gap-1 transition ${activeTab === 'elementos' ? 'text-cyan-400' : 'text-gray-500'}`}
          >
            <Layers className="w-5 h-5" />
            <span className="text-[10px] font-medium">Elementos</span>
          </button>
          {isAdmin && (
            <button 
              onClick={() => setActiveTab('admin')}
              className={`shrink-0 snap-center flex flex-col items-center gap-1 transition ${activeTab === 'admin' ? 'text-purple-400' : 'text-gray-500 hover:text-purple-400'}`}
            >
              <Settings className="w-5 h-5" />
              <span className="text-[10px] font-medium">Admin</span>
            </button>
          )}
          <button 
            onClick={handleLogout}
            className="shrink-0 snap-center flex flex-col items-center gap-1 text-gray-500 hover:text-red-400 transition"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-[10px] font-medium">Sair</span>
          </button>
        </div>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12 pb-24 md:pb-12 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
          <div className="max-w-[1200px] mx-auto">
            {activeTab === 'inicio' && <HomeTab isAdmin={isAdmin} />}
            {activeTab === 'modelos' && <ModelsTab category="Páginas Completas" />}
            {activeTab === 'link-na-bio' && <ModelsTab category="Link na Bio" />}
            {activeTab === 'fotos' && <PromptLibraryTab />}
            {activeTab === 'elementos' && <ElementosTab />}
            {activeTab === 'admin' && isAdmin && <AdminTab />}
          </div>
        </main>
      </div>
    </div>
  );
}
