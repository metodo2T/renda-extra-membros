import React from 'react';
import { X, Save, RotateCcw, Plus, Trash2 } from 'lucide-react';
import { ProfileData, BioLink } from '../types';

interface EditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  setProfile: React.Dispatch<React.SetStateAction<ProfileData>>;
  links: BioLink[];
  setLinks: React.Dispatch<React.SetStateAction<BioLink[]>>;
  onResetDefault: () => void;
}

export const EditDrawer: React.FC<EditDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  setProfile,
  links,
  setLinks,
  onResetDefault,
}) => {
  if (!isOpen) return null;

  const handleProfileChange = (field: keyof ProfileData, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleLinkChange = (id: string, field: keyof BioLink, value: string) => {
    setLinks((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleAddLink = () => {
    const newId = `link-${Date.now()}`;
    setLinks((prev) => [
      ...prev,
      {
        id: newId,
        title: 'Novo Link',
        subtitle: 'Descrição do link',
        icon: 'globe',
        url: 'https://exemplo.com',
      },
    ]);
  };

  const handleRemoveLink = (id: string) => {
    setLinks((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-purple-950/40 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md bg-white border-l border-purple-200 text-slate-900 h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-purple-100 mb-6">
            <h2 className="text-xl font-bold text-purple-950 flex items-center gap-2">
              <span>Personalizar Link na Bio</span>
            </h2>
            <button
              onClick={onClose}
              className="text-purple-400 hover:text-purple-950 p-1 rounded-full hover:bg-purple-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="space-y-6">
            {/* Profile Section */}
            <div className="bg-purple-50/60 p-4 rounded-2xl border border-purple-200/80 space-y-3">
              <h3 className="text-sm font-semibold text-purple-900 uppercase tracking-wider">
                Informações do Perfil
              </h3>

              <div>
                <label className="text-xs text-purple-800 font-medium mb-1 block">Nome (Primeira parte)</label>
                <input
                  type="text"
                  value={profile.namePrefix}
                  onChange={(e) => handleProfileChange('namePrefix', e.target.value)}
                  className="w-full bg-white border border-purple-200 rounded-lg px-3 py-2 text-sm text-purple-950 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-xs text-purple-800 font-medium mb-1 block">Nome (Segunda parte em destaque)</label>
                <input
                  type="text"
                  value={profile.nameBold}
                  onChange={(e) => handleProfileChange('nameBold', e.target.value)}
                  className="w-full bg-white border border-purple-200 rounded-lg px-3 py-2 text-sm text-purple-950 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-xs text-purple-800 font-medium mb-1 block">Subtítulo / Profissão</label>
                <input
                  type="text"
                  value={profile.role}
                  onChange={(e) => handleProfileChange('role', e.target.value)}
                  className="w-full bg-white border border-purple-200 rounded-lg px-3 py-2 text-sm text-purple-950 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-xs text-purple-800 font-medium mb-1 block">URL da Foto de Perfil</label>
                <input
                  type="text"
                  value={profile.avatarUrl}
                  onChange={(e) => handleProfileChange('avatarUrl', e.target.value)}
                  className="w-full bg-white border border-purple-200 rounded-lg px-3 py-2 text-sm text-purple-950 focus:outline-none focus:border-purple-500 text-xs truncate"
                />
              </div>

              <div>
                <label className="text-xs text-purple-800 font-medium mb-1 block">Número do WhatsApp (com DDD)</label>
                <input
                  type="text"
                  value={profile.whatsappNumber}
                  onChange={(e) => handleProfileChange('whatsappNumber', e.target.value)}
                  className="w-full bg-white border border-purple-200 rounded-lg px-3 py-2 text-sm text-purple-950 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Links Section */}
            <div className="bg-purple-50/60 p-4 rounded-2xl border border-purple-200/80 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-purple-900 uppercase tracking-wider">
                  Botões de Link
                </h3>
                <button
                  onClick={handleAddLink}
                  className="text-xs bg-purple-600 hover:bg-purple-500 text-white px-2.5 py-1 rounded-lg font-medium flex items-center gap-1 cursor-pointer transition-colors shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Adicionar</span>
                </button>
              </div>

              <div className="space-y-3">
                {links.map((link) => (
                  <div key={link.id} className="p-3 bg-white border border-purple-200 rounded-xl space-y-2 relative shadow-sm">
                    <div className="flex justify-between items-center gap-2">
                      <input
                        type="text"
                        value={link.title}
                        onChange={(e) => handleLinkChange(link.id, 'title', e.target.value)}
                        placeholder="Título do botão"
                        className="w-full bg-purple-50/80 border border-purple-200 rounded px-2.5 py-1 text-xs font-bold text-purple-950 focus:outline-none focus:border-purple-500"
                      />
                      <button
                        onClick={() => handleRemoveLink(link.id)}
                        className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 cursor-pointer"
                        title="Remover"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <input
                      type="text"
                      value={link.subtitle}
                      onChange={(e) => handleLinkChange(link.id, 'subtitle', e.target.value)}
                      placeholder="Subtítulo do botão"
                      className="w-full bg-purple-50/80 border border-purple-200 rounded px-2.5 py-1 text-xs text-purple-900 focus:outline-none focus:border-purple-500"
                    />

                    <input
                      type="text"
                      value={link.url}
                      onChange={(e) => handleLinkChange(link.id, 'url', e.target.value)}
                      placeholder="URL de destino"
                      className="w-full bg-purple-50/80 border border-purple-200 rounded px-2.5 py-1 text-xs text-purple-800 focus:outline-none focus:border-purple-500 truncate"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-purple-100 mt-6 flex items-center justify-between gap-3">
          <button
            onClick={onResetDefault}
            className="px-3 py-2 text-xs font-semibold text-purple-700 hover:text-purple-950 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restaurar Original</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold text-sm rounded-xl shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Concluir</span>
          </button>
        </div>
      </div>
    </div>
  );
};
