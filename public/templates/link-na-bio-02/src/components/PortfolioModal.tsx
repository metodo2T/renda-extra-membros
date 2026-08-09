import React from 'react';
import { X, ExternalLink, Sparkles } from 'lucide-react';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({ isOpen, onClose, onContactClick }) => {
  if (!isOpen) return null;

  const projects = [
    {
      id: 'p1',
      title: 'Identidade Visual & Branding',
      category: 'Design Gráfico',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
      description: 'Criação de logotipo, paleta de cores e guia de marca para empresas que buscam destaque.',
    },
    {
      id: 'p2',
      title: 'Website de Alta Conversão',
      category: 'Design Digital & UI/UX',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
      description: 'Landing pages responsivas, modernas e otimizadas para gerar vendas e agendamentos.',
    },
    {
      id: 'p3',
      title: 'Artes para Redes Sociais',
      category: 'Social Media Design',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
      description: 'Posts estratégicos para Instagram e TikTok que atraem clientes e elevam sua autoridade.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/40 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white border border-purple-200 rounded-3xl text-slate-900 shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-purple-100 flex items-center justify-between bg-purple-50/60">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-bold text-purple-950">
              <span className="font-light">Port</span>
              <span className="font-extrabold">folio</span> - Maria Santos
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-purple-400 hover:text-purple-950 p-1 rounded-full hover:bg-purple-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content / Gallery */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-sm text-purple-900/80 leading-relaxed font-medium">
            Confira alguns dos projetos recentes de design gráfico, sites e artes sob medida desenvolvidos para negócios e marcas de sucesso:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {projects.map((item) => (
              <div
                key={item.id}
                className="bg-purple-50/50 border border-purple-200/80 rounded-2xl overflow-hidden group hover:border-purple-400 transition-all duration-300 shadow-sm"
              >
                <div className="h-32 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-purple-950/80 backdrop-blur-md border border-purple-400/30 text-[10px] text-purple-100 font-semibold px-2 py-0.5 rounded-full">
                    {item.category}
                  </div>
                </div>

                <div className="p-3">
                  <h4 className="font-bold text-sm text-purple-950 mb-1 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-purple-800/70 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-100/80 via-purple-50 to-purple-100/80 p-4 rounded-2xl border border-purple-200 text-center">
            <h4 className="text-sm font-bold text-purple-950 mb-1">Quer um projeto sob medida para seu negócio?</h4>
            <p className="text-xs text-purple-800/80 mb-3">Solicite um orçamento sem compromisso diretamente no WhatsApp.</p>
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              <span>Solicitar Orçamento</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
