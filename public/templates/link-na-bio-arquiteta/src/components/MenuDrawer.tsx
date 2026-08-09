import React from 'react';
import { ProfileData } from '../types';
import { X, Instagram, Mail, Phone, Globe, Edit3, Share2, Check, Download } from 'lucide-react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onOpenEditModal: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  onOpenEditModal
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${profile.name} ${profile.surname} - Link da Bio`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(profile, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `link_da_bio_${profile.name.toLowerCase()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Slide-out Panel */}
      <div className="relative w-full max-w-[340px] bg-[#F7F6F4] text-[#574E49] h-full shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto font-sans-clean animate-slide-left">
        {/* Top bar with close icon */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#D8D4D1]">
            <span className="font-serif-editorial italic text-xl text-[#96877E] font-medium">
              {profile.name} {profile.surname}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#EBE7E3] text-[#574E49] transition-colors focus:outline-none"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Quick Summary */}
          <div className="my-6 flex items-center gap-3 bg-white p-3 rounded-[12px] border border-[#D8D4D1] shadow-xs">
            <img
              src={profile.avatarImage || profile.heroImage}
              alt={profile.name}
              className="w-12 h-12 rounded-full object-cover border border-[#B1A49A]"
            />
            <div>
              <h4 className="font-serif-editorial italic text-lg font-semibold leading-tight text-[#574E49]">
                {profile.name} {profile.surname}
              </h4>
              <p className="text-[10px] text-[#78716D] uppercase tracking-wider font-medium">
                {profile.profession}
              </p>
            </div>
          </div>

          {/* Social & Contact Direct Links */}
          <div className="space-y-2 mt-4">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#96877E] mb-2 px-1">
              Contatos Rápidos
            </p>

            {profile.socialLinks.map((link, idx) => {
              let Icon = Globe;
              if (link.platform === 'instagram') Icon = Instagram;
              if (link.platform === 'whatsapp') Icon = Phone;
              if (link.platform === 'email') Icon = Mail;

              return (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-[10px] bg-white border border-[#E3DFDC] hover:border-[#B1A49A] text-xs font-medium text-[#574E49] transition-all hover:shadow-xs group"
                >
                  <Icon className="w-4 h-4 text-[#96877E] group-hover:scale-110 transition-transform" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-[#D8D4D1] space-y-2.5">
          {/* Customize Bio Link Button */}
          <button
            onClick={() => {
              onClose();
              onOpenEditModal();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-[10px] bg-[#96877E] hover:bg-[#85766D] text-white text-xs font-medium transition-colors shadow-xs active:scale-[0.98]"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Editar Link da Bio</span>
          </button>

          {/* Share & Backup */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-[10px] bg-white border border-[#D8D4D1] text-[11px] font-medium text-[#574E49] hover:bg-[#EBE7E3] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5 text-[#96877E]" />}
              <span>{copied ? "Copiado!" : "Compartilhar"}</span>
            </button>

            <button
              onClick={handleExportJson}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-[10px] bg-white border border-[#D8D4D1] text-[11px] font-medium text-[#574E49] hover:bg-[#EBE7E3] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#96877E]" />
              <span>Baixar JSON</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
