import React, { useEffect, useState, useRef } from 'react';
import { Loader2, Github, ExternalLink, Brush, Monitor, Smartphone } from 'lucide-react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

interface Props {
  prompt: string;
}

export function PageGenerator({ prompt }: Props) {
  const [html, setHtml] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [githubUrl, setGithubUrl] = useState('');
  
  // GitHub Modal State
  const [showGithubModal, setShowGithubModal] = useState(false);
  const [githubToken, setGithubToken] = useState('');
  const [repoName, setRepoName] = useState('minha-landing-page-ia');
  const [deploying, setDeploying] = useState(false);
  
  const editorRef = useRef<any>(null);

  useEffect(() => {
    async function generatePage() {
      try {
        const response = await fetch('/api/generate-page', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt }),
        });
        
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || 'Erro ao gerar página');
        }
        
        setHtml(data.html);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    generatePage();
  }, [prompt]);

  // Inicializa o GrapesJS após a geração do HTML
  useEffect(() => {
    if (!loading && !error && html && !editorRef.current) {
      try {
        const editor = grapesjs.init({
          container: '#gjs',
          height: '100%',
          width: 'auto',
          fromElement: true,
          storageManager: false, // Sem persistência local por enquanto
          panels: { defaults: [] }, // Limpa painéis default
          deviceManager: {
            devices: [
              { name: 'Desktop', width: '' },
              { name: 'Mobile', width: '375px', widthMedia: '480px' }
            ]
          },
          plugins: [],
          canvas: {
            styles: ['https://cdn.tailwindcss.com'], // Injeta o Tailwind no canvas do editor
          }
        });
        
        editor.setComponents(html);
        editorRef.current = editor;

        // Adiciona painéis básicos
        editor.Panels.addPanel({
          id: 'panel-top',
          el: '.panel__top',
        });
        editor.Panels.addPanel({
          id: 'basic-actions',
          el: '.panel__basic-actions',
          buttons: [
            {
              id: 'visibility',
              active: true,
              className: 'btn-toggle-borders',
              label: '<u>B</u>',
              command: 'sw-visibility',
            },
          ],
        });
      } catch (err: any) {
        console.error("GrapesJS Init Error:", err);
        setError("Erro ao carregar o editor visual: " + err.message);
      }
    }

    return () => {
      if (editorRef.current) {
        try {
          editorRef.current.destroy();
        } catch (e) {}
        editorRef.current = null;
      }
    };
  }, [loading, error, html]);

  const handleDeploy = async (e: React.FormEvent) => {
    e.preventDefault();
    setDeploying(true);
    setError(null);
    try {
      let finalHtml = html;
      
      // Resgata o HTML e CSS do Construtor Visual
      if (editorRef.current) {
        const generatedHtml = editorRef.current.getHtml();
        const generatedCss = editorRef.current.getCss();
        
        // Embutir o CSS customizado dentro do HTML final
        finalHtml = generatedHtml.replace(
          '</head>',
          `<style>${generatedCss}</style></head>`
        );
      }

      const response = await fetch('https://api.github.com/user/repos', {
        method: 'POST',
        headers: {
          'Authorization': `token ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
        },
        body: JSON.stringify({
          name: repoName,
          description: 'Landing Page gerada via Inteligência Artificial',
          auto_init: true
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(`Erro ao criar repositório: ${errData.message}`);
      }

      const repoData = await response.json();
      const owner = repoData.owner.login;

      // Commit the index.html file
      const fileResponse = await fetch(`https://api.github.com/repos/${owner}/${repoName}/contents/index.html`, {
        method: 'PUT',
        headers: {
          'Authorization': `token ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
        },
        body: JSON.stringify({
          message: 'Initial commit: Add generated index.html',
          content: btoa(unescape(encodeURIComponent(finalHtml))), 
        })
      });

      if (!fileResponse.ok) {
        throw new Error('Erro ao enviar o código para o repositório');
      }

      setGithubUrl(`https://github.com/${owner}/${repoName}`);
      setShowGithubModal(false);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setDeploying(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="w-16 h-16 animate-spin text-cyan-500 mb-6" />
        <h2 className="text-2xl font-bold text-white mb-2">Construindo sua página...</h2>
        <p className="text-gray-400">A Inteligência Artificial está escrevendo o código HTML para você.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[100vw] mx-auto h-[calc(100vh-64px)] flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b border-gray-800 bg-gray-900 gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-3">
            <Brush className="text-cyan-500 w-5 h-5" />
            Construtor Visual
          </h2>
          <p className="text-gray-400 text-xs mt-1">
            Clique em qualquer texto para editar, use as barras laterais para mudar estilos ou arrastar elementos.
          </p>
        </div>
        
        <div className="flex gap-4 items-center">
          <div className="flex bg-gray-800 rounded-lg p-1 border border-gray-700">
            <button
              onClick={() => editorRef.current?.setDevice('Desktop')}
              className="p-2 rounded hover:bg-gray-700 text-gray-300 transition"
              title="Visualização Desktop"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => editorRef.current?.setDevice('Mobile')}
              className="p-2 rounded hover:bg-gray-700 text-gray-300 transition"
              title="Visualização Mobile"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          {githubUrl ? (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition border border-gray-600"
            >
              <ExternalLink className="w-4 h-4" />
              Ver no GitHub
            </a>
          ) : (
            <button
              onClick={() => setShowGithubModal(true)}
              className="flex items-center gap-2 bg-white hover:bg-gray-200 text-black font-bold py-2 px-6 rounded-lg transition text-sm"
            >
              <Github className="w-4 h-4" />
              Publicar no GitHub
            </button>
          )}
        </div>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 m-4 rounded-lg">
          {error}
        </div>
      )}

      {/* Editor GrapesJS */}
      <div className="flex-1 overflow-hidden relative">
        <div id="gjs"></div>
      </div>

      {/* GitHub Modal */}
      {showGithubModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-900 rounded-xl max-w-md w-full p-6 border border-gray-700 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Github className="w-5 h-5" />
              Vincular ao GitHub
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Para publicar sua página automaticamente, você precisa de um 
              <a href="https://github.com/settings/tokens/new?scopes=repo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline mx-1">
                Personal Access Token
              </a>
              (com permissão "repo").
            </p>

            <form onSubmit={handleDeploy} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Nome do Repositório
                </label>
                <input
                  type="text"
                  required
                  value={repoName}
                  onChange={(e) => setRepoName(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  GitHub Token
                </label>
                <input
                  type="password"
                  required
                  value={githubToken}
                  onChange={(e) => setGithubToken(e.target.value)}
                  placeholder="ghp_..."
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowGithubModal(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={deploying}
                  className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition disabled:opacity-50"
                >
                  {deploying ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : 'Criar Repositório'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
