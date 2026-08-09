import React, { useState } from 'react';
import { ProfileData, CardStyle } from '../types';
import { X, Save, RotateCcw, Image, Plus, Trash2, Link as LinkIcon, Upload } from 'lucide-react';
import { DEFAULT_PROFILE } from '../data/defaultProfile';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSave: (updatedProfile: ProfileData) => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
}) => {
  const [formData, setFormData] = useState<ProfileData>(profile);
  const [activeTab, setActiveTab] = useState<'hero' | 'cards' | 'contacts'>('hero');

  if (!isOpen) return null;

  const handleChange = (field: keyof ProfileData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCardChange = (index: number, field: string, value: any) => {
    setFormData((prev) => {
      const updatedCards = [...prev.cards];
      updatedCards[index] = { ...updatedCards[index], [field]: value };
      return { ...prev, cards: updatedCards };
    });
  };

  const handleAddCard = () => {
    setFormData((prev) => ({
      ...prev,
      cards: [
        ...prev.cards,
        {
          id: `card-${Date.now()}`,
          title: "Novo Serviço",
          description: "Explique de forma simples o que você entrega, quais problemas esse serviço resolve.",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500",
          link: "#",
          style: "light"
        }
      ]
    }));
  };

  const handleDeleteCard = (index: number) => {
    setFormData((prev) => {
      const updated = prev.cards.filter((_, i) => i !== index);
      return { ...prev, cards: updated };
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          callback(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetToDefault = () => {
    if (window.confirm("Deseja restaurar as informações originais do modelo da Fernanda Marcolin?")) {
      setFormData(DEFAULT_PROFILE);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-[560px] max-h-[90vh] bg-white rounded-[16px] shadow-2xl flex flex-col z-10 overflow-hidden font-sans-clean border border-[#D8D4D1]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 px-5 border-b border-[#E8E5E2] bg-[#F7F6F4]">
          <div>
            <h3 className="font-serif-editorial italic text-xl font-bold text-[#574E49]">
              Configurar Link da Bio
            </h3>
            <p className="text-[11px] text-[#78716D]">
              Personalize textos, imagens e links da página
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#EAE7E3] text-[#574E49] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#E8E5E2] bg-[#FAF9F8]">
          <button
            onClick={() => setActiveTab('hero')}
            className={`flex-1 py-2.5 text-xs font-medium transition-colors border-b-2 ${
              activeTab === 'hero'
                ? 'border-[#96877E] text-[#96877E] bg-white'
                : 'border-transparent text-[#78716D] hover:text-[#574E49]'
            }`}
          >
            Cabeçalho (Hero)
          </button>
          <button
            onClick={() => setActiveTab('cards')}
            className={`flex-1 py-2.5 text-xs font-medium transition-colors border-b-2 ${
              activeTab === 'cards'
                ? 'border-[#96877E] text-[#96877E] bg-white'
                : 'border-transparent text-[#78716D] hover:text-[#574E49]'
            }`}
          >
            Cards da Bio ({formData.cards.length})
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 space-y-4">
          {activeTab === 'hero' && (
            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-[#574E49] uppercase tracking-wider mb-1">
                  Texto de Boas-vindas
                </label>
                <input
                  type="text"
                  value={formData.welcome}
                  onChange={(e) => handleChange('welcome', e.target.value)}
                  className="w-full px-3 py-2 border border-[#D8D4D1] rounded-[8px] focus:outline-none focus:border-[#96877E] text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#574E49] uppercase tracking-wider mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full px-3 py-2 border border-[#D8D4D1] rounded-[8px] focus:outline-none focus:border-[#96877E] text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#574E49] uppercase tracking-wider mb-1">
                    Sobrenome
                  </label>
                  <input
                    type="text"
                    value={formData.surname}
                    onChange={(e) => handleChange('surname', e.target.value)}
                    className="w-full px-3 py-2 border border-[#D8D4D1] rounded-[8px] focus:outline-none focus:border-[#96877E] text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#574E49] uppercase tracking-wider mb-1">
                  Profissão / Subtítulo
                </label>
                <input
                  type="text"
                  value={formData.profession}
                  onChange={(e) => handleChange('profession', e.target.value)}
                  className="w-full px-3 py-2 border border-[#D8D4D1] rounded-[8px] focus:outline-none focus:border-[#96877E] text-xs"
                />
              </div>

              {/* Foto Principal */}
              <div className="p-3 bg-[#F7F6F4] rounded-[10px] border border-[#E3DFDC] space-y-2">
                <label className="block text-[11px] font-semibold text-[#574E49] uppercase tracking-wider">
                  Fotografia do Topo (Hero Image)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.heroImage}
                    onChange={(e) => handleChange('heroImage', e.target.value)}
                    placeholder="Cole a URL da imagem ou envie um arquivo"
                    className="flex-1 px-3 py-2 border border-[#D8D4D1] rounded-[8px] focus:outline-none focus:border-[#96877E] text-xs bg-white"
                  />
                  <label className="px-3 py-2 bg-[#96877E] text-white rounded-[8px] cursor-pointer hover:bg-[#85766D] transition-colors flex items-center justify-center gap-1 text-[11px] font-medium">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, (url) => handleChange('heroImage', url))}
                    />
                  </label>
                </div>
                {formData.heroImage && (
                  <div className="mt-2 relative w-20 h-24 rounded-[6px] overflow-hidden border border-[#D8D4D1]">
                    <img src={formData.heroImage} alt="Preview Hero" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'cards' && (
            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#574E49] uppercase tracking-wider">
                  Lista de Cards da Bio
                </span>
                <button
                  type="button"
                  onClick={handleAddCard}
                  className="px-2.5 py-1 bg-[#96877E] hover:bg-[#85766D] text-white rounded-[6px] text-[11px] font-medium flex items-center gap-1 transition-colors"
                >
                  <Plus className="w-3 h-3" />
                  <span>Adicionar Card</span>
                </button>
              </div>

              {formData.cards.map((card, idx) => (
                <div key={card.id || idx} className="p-3.5 bg-[#FAF9F8] rounded-[12px] border border-[#E3DFDC] space-y-3">
                  <div className="flex items-center justify-between border-b border-[#E3DFDC] pb-2">
                    <span className="font-serif-editorial italic font-semibold text-sm text-[#96877E]">
                      Card 0{idx + 1} — {card.title}
                    </span>
                    <div className="flex items-center gap-2">
                      <select
                        value={card.style}
                        onChange={(e) => handleCardChange(idx, 'style', e.target.value as CardStyle)}
                        className="text-[11px] px-2 py-1 bg-white border border-[#D8D4D1] rounded-[6px] focus:outline-none"
                      >
                        <option value="light">Estilo Claro (Branco)</option>
                        <option value="taupe">Estilo Taupe (Marrom)</option>
                        <option value="beige">Estilo Bege (Beige)</option>
                      </select>

                      <button
                        type="button"
                        onClick={() => handleDeleteCard(idx)}
                        className="p-1 hover:bg-red-50 text-red-500 rounded transition-colors"
                        title="Excluir este card"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] text-[#78716D] font-medium uppercase mb-0.5">
                        Título do Card
                      </label>
                      <input
                        type="text"
                        value={card.title}
                        onChange={(e) => handleCardChange(idx, 'title', e.target.value)}
                        className="w-full px-2.5 py-1.5 border border-[#D8D4D1] rounded-[6px] bg-white focus:outline-none focus:border-[#96877E]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-[#78716D] font-medium uppercase mb-0.5">
                        Link de Destino
                      </label>
                      <input
                        type="text"
                        value={card.link}
                        onChange={(e) => handleCardChange(idx, 'link', e.target.value)}
                        className="w-full px-2.5 py-1.5 border border-[#D8D4D1] rounded-[6px] bg-white focus:outline-none focus:border-[#96877E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-[#78716D] font-medium uppercase mb-0.5">
                      Descrição do Serviço
                    </label>
                    <textarea
                      rows={2}
                      value={card.description}
                      onChange={(e) => handleCardChange(idx, 'description', e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-[#D8D4D1] rounded-[6px] bg-white focus:outline-none focus:border-[#96877E] text-xs resize-none"
                    />
                  </div>

                  {/* Image Inputs depending on Card Type */}
                  {card.title.toLowerCase().includes('essence') || card.id === 'card-2' ? (
                    <div>
                      <label className="block text-[10px] text-[#78716D] font-medium uppercase mb-0.5">
                        Imagem da Tela do Notebook
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={card.notebookScreenImage || ''}
                          onChange={(e) => handleCardChange(idx, 'notebookScreenImage', e.target.value)}
                          placeholder="URL da imagem no notebook"
                          className="flex-1 px-2.5 py-1.5 border border-[#D8D4D1] rounded-[6px] bg-white focus:outline-none text-xs"
                        />
                        <label className="px-2.5 py-1.5 bg-[#96877E] text-white rounded-[6px] cursor-pointer hover:bg-[#85766D] text-[10px] font-medium flex items-center">
                          Upload
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleFileUpload(e, (url) => handleCardChange(idx, 'notebookScreenImage', url))}
                          />
                        </label>
                      </div>
                    </div>
                  ) : card.title.toLowerCase().includes('combo') || card.id === 'card-4' ? (
                    <div className="space-y-2">
                      <label className="block text-[10px] text-[#78716D] font-medium uppercase">
                        Imagens dos Dispositivos (E-book, Tablet, Celular)
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <span className="text-[9px] text-[#78716D]">Capa E-book</span>
                          <input
                            type="text"
                            value={card.ebookImage || ''}
                            onChange={(e) => handleCardChange(idx, 'ebookImage', e.target.value)}
                            className="w-full px-2 py-1 text-[10px] border border-[#D8D4D1] rounded bg-white"
                          />
                        </div>
                        <div>
                          <span className="text-[9px] text-[#78716D]">Tela Tablet</span>
                          <input
                            type="text"
                            value={card.tabletImage || ''}
                            onChange={(e) => handleCardChange(idx, 'tabletImage', e.target.value)}
                            className="w-full px-2 py-1 text-[10px] border border-[#D8D4D1] rounded bg-white"
                          />
                        </div>
                        <div>
                          <span className="text-[9px] text-[#78716D]">Tela Celular</span>
                          <input
                            type="text"
                            value={card.phoneImage || ''}
                            onChange={(e) => handleCardChange(idx, 'phoneImage', e.target.value)}
                            className="w-full px-2 py-1 text-[10px] border border-[#D8D4D1] rounded bg-white"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-[10px] text-[#78716D] font-medium uppercase mb-0.5">
                        Fotografia do Card
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={card.image}
                          onChange={(e) => handleCardChange(idx, 'image', e.target.value)}
                          placeholder="URL da foto da profissional"
                          className="flex-1 px-2.5 py-1.5 border border-[#D8D4D1] rounded-[6px] bg-white focus:outline-none text-xs"
                        />
                        <label className="px-2.5 py-1.5 bg-[#96877E] text-white rounded-[6px] cursor-pointer hover:bg-[#85766D] text-[10px] font-medium flex items-center">
                          Upload
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleFileUpload(e, (url) => handleCardChange(idx, 'image', url))}
                          />
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Footer controls inside form */}
          <div className="pt-3 border-t border-[#E8E5E2] flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleResetToDefault}
              className="px-3 py-2 border border-[#D8D4D1] hover:bg-[#F0EDEA] text-[#78716D] rounded-[8px] text-xs font-medium transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Modelo</span>
            </button>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-[#D8D4D1] text-[#574E49] hover:bg-[#F0EDEA] rounded-[8px] text-xs font-medium transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#96877E] hover:bg-[#85766D] text-white rounded-[8px] text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Salvar Alterações</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
