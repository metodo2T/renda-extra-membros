import React, { useState } from 'react';
import { ProfileData } from '../types';
import { X, Save, RotateCcw, User, Phone, MapPin, Sparkles, Image } from 'lucide-react';

interface ProfileCustomizerModalProps {
  profile: ProfileData;
  onSave: (updatedProfile: ProfileData) => void;
  onReset: () => void;
  onClose: () => void;
}

export const ProfileCustomizerModal: React.FC<ProfileCustomizerModalProps> = ({
  profile,
  onSave,
  onReset,
  onClose,
}) => {
  const [formData, setFormData] = useState<ProfileData>({ ...profile });

  const avatarPresets = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto text-left">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white font-heading">Personalizar Seu Perfil</h3>
            <p className="text-xs text-slate-400">Altere suas informações para usar em seu Link na Bio:</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-4 text-xs">
          {/* Avatar URL & Presets */}
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              URL da Foto de Perfil:
            </label>
            <input
              type="text"
              value={formData.avatarUrl}
              onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-blue-500 mb-2"
              placeholder="https://suafoto.com/avatar.jpg"
            />
            <p className="text-[10px] text-slate-500 mb-1.5">Ou escolha um avatar predefinido:</p>
            <div className="flex gap-2">
              {avatarPresets.map((preset, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setFormData({ ...formData, avatarUrl: preset })}
                  className={`w-9 h-9 rounded-full overflow-hidden border-2 transition ${
                    formData.avatarUrl === preset ? 'border-blue-500 scale-105' : 'border-slate-800 opacity-60'
                  }`}
                >
                  <img src={preset} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Name & Role */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Seu Nome:</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Título/Cargo:</label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Tagline / Pitch */}
          <div>
            <label className="block text-slate-300 font-semibold mb-1">Descrição / Bio Curta:</label>
            <textarea
              rows={2}
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* WhatsApp & Location */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">WhatsApp (com DDD e DDI):</label>
              <input
                type="text"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                placeholder="5511998765432"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Localização:</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Stats Bar Customization */}
          <div>
            <label className="block text-slate-300 font-semibold mb-1">Métricas de Autoridade:</label>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-[10px] text-slate-400">Verba Gerenciada:</span>
                <input
                  type="text"
                  value={formData.stats.investedAmount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      stats: { ...formData.stats, investedAmount: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2 text-xs text-white"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-400">ROAS Médio:</span>
                <input
                  type="text"
                  value={formData.stats.averageROAS}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      stats: { ...formData.stats, averageROAS: e.target.value },
                    })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2 text-xs text-white"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
            <button
              type="submit"
              className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition"
            >
              <Save className="w-4 h-4" />
              <span>Salvar Alterações</span>
            </button>

            <button
              type="button"
              onClick={onReset}
              className="py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition"
              title="Restaurar padrão"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Padrão</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
