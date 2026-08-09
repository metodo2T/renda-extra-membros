import React from 'react';
import { Gauge, Palette, MessageSquare, Plus, Pencil, User, Eye, Edit3 } from 'lucide-react';

interface AdminHeaderBarProps {
  showAdminBar: boolean;
  setShowAdminBar: (val: boolean) => void;
  onOpenEditDrawer: () => void;
}

export const AdminHeaderBar: React.FC<AdminHeaderBarProps> = ({
  showAdminBar,
  setShowAdminBar,
  onOpenEditDrawer,
}) => {
  if (!showAdminBar) {
    return (
      <div className="fixed top-2 right-2 z-50 flex items-center gap-2">
        <button
          onClick={() => setShowAdminBar(true)}
          className="bg-black/60 hover:bg-black/80 text-white/70 hover:text-white px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md border border-white/10 shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
          title="Exibir Barra Superior"
        >
          <Gauge className="w-3.5 h-3.5 text-purple-400" />
          <span>Barra Admin</span>
        </button>
        <button
          onClick={onOpenEditDrawer}
          className="bg-purple-600/80 hover:bg-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
          title="Editar conteúdo"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>Personalizar</span>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#181a20] text-[#a0a5b5] text-xs py-2 px-4 flex items-center justify-between border-b border-white/5 select-none z-50 relative">
      <div className="flex items-center space-x-5 sm:space-x-6">
        <button className="hover:text-white transition-colors cursor-pointer" title="Dashboard">
          <Gauge className="w-4 h-4" />
        </button>
        <button className="hover:text-white transition-colors cursor-pointer" title="Aparência e Design">
          <Palette className="w-4 h-4" />
        </button>
        <button className="hover:text-white transition-colors cursor-pointer" title="Comentários">
          <MessageSquare className="w-4 h-4" />
        </button>
        <button className="hover:text-white transition-colors cursor-pointer" title="Adicionar Novo">
          <Plus className="w-4 h-4" />
        </button>
        <button className="hover:text-white transition-colors cursor-pointer" title="Editar Página">
          <Pencil className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={onOpenEditDrawer}
          className="text-purple-300 hover:text-white font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Editar Página</span>
        </button>

        <button
          onClick={() => setShowAdminBar(false)}
          className="text-xs text-gray-400 hover:text-white px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-1 cursor-pointer"
          title="Ocultar esta barra"
        >
          <Eye className="w-3 h-3" />
          <span className="hidden sm:inline">Ocultar</span>
        </button>

        <button className="hover:text-white transition-colors cursor-pointer" title="Perfil do Usuário">
          <div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 overflow-hidden border border-slate-600">
            <User className="w-3.5 h-3.5" />
          </div>
        </button>
      </div>
    </div>
  );
};
