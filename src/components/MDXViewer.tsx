import { useState } from 'react';
import Markdown from 'react-markdown';
import { Copy, Check, BookOpen, Code2, Sparkles, Hash } from 'lucide-react';

interface MDXViewerProps {
  content: string;
}

export function MDXViewer({ content }: MDXViewerProps) {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'rendered' | 'raw'>('rendered');

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sections = [
    { id: '1-design-system', title: '1. Design System' },
    { id: '2-tipografia', title: '2. Tipografia' },
    { id: '3-layout', title: '3. Layout' },
    { id: '4-componentes', title: '4. Componentes' },
    { id: '5-css--tailwind-equivalente', title: '5. CSS / Tailwind' },
    { id: '6-tokens-de-design', title: '6. Tokens de Design' },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8">
      {/* Sidebar Navigation */}
      <aside className="lg:w-64 shrink-0 flex flex-col gap-4">
        <div className="p-4 rounded-xl bg-[#13141c] border border-[#27293a]">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-3">
            <BookOpen className="w-4 h-4" />
            <span>Índice do MDX</span>
          </div>
          <nav className="flex flex-col gap-1 text-xs">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="px-2.5 py-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors flex items-center gap-2"
              >
                <Hash className="w-3 h-3 text-zinc-500" />
                <span>{sec.title}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="p-4 rounded-xl bg-[#13141c] border border-[#27293a] flex flex-col gap-3">
          <span className="text-xs text-zinc-400">Ações Rápidas:</span>
          <button
            onClick={handleCopy}
            className="w-full px-4 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-orange-500/20"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>MDX Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar MDX Completo</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 bg-[#13141c] border border-[#27293a] rounded-2xl p-6 sm:p-8">
        {/* Header Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#27293a]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <h2 className="text-lg font-extrabold text-white">Especificação em MDX</h2>
          </div>

          <div className="flex items-center gap-2 bg-[#0b0c10] p-1 rounded-xl border border-[#27293a]">
            <button
              onClick={() => setViewMode('rendered')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'rendered'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Formatado</span>
            </button>
            <button
              onClick={() => setViewMode('raw')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'raw'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Código Raw</span>
            </button>
          </div>
        </div>

        {/* View Mode Content */}
        {viewMode === 'rendered' ? (
          <div className="markdown-body prose prose-invert max-w-none text-zinc-300 text-sm leading-relaxed space-y-6">
            <Markdown>{content}</Markdown>
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado' : 'Copiar Raw'}</span>
            </button>
            <pre className="p-4 rounded-xl bg-[#0b0c10] border border-[#27293a] text-zinc-300 font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {content}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
