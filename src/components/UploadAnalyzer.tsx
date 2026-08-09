import { useState, useRef, useEffect } from "react";
import { 
  Upload, Image as ImageIcon, Sparkles, Loader2, CheckCircle2, 
  AlertCircle, RefreshCw, Copy, Check, Download, FileText, ArrowRight, Clipboard, Code
} from "lucide-react";
import { MDXViewer } from "./MDXViewer";

// Preset sample screenshots for instant testing
const PRESET_SAMPLES = [
  {
    id: "fritadeira",
    title: "Fritadeira Gourmet (Air Fryer)",
    tag: "E-Commerce Dark",
    url: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=1000&q=80",
    description: "Landing page dark premium de produto digital culinário com botões de fogo e cards de receitas.",
  },
  {
    id: "fitness",
    title: "App de Treino & Nutrição",
    tag: "Health & Fitness",
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
    description: "Interface vibrante de alta conversão para programas de treino e nutrição esportiva.",
  },
  {
    id: "saas",
    title: "SaaS Dashboard & AI Tool",
    tag: "SaaS & Tech",
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    description: "Landing page corporativa moderna com tabela de preços, métricas e estatísticas.",
  },
];

const ANALYSIS_STEPS = [
  "🖼️ Lendo a estrutura visual e composição do screenshot...",
  "🎨 Mapeando paleta de cores completa (Hex, RGB, HSL) e gradientes...",
  "✍️ Identificando hierarquia tipográfica, fontes e espaçamentos...",
  "📐 Mapeando grid de layout, seções do funil e responsividade...",
  "⚡ Sintetizando especificação em MDX, componentes Tailwind e tokens CSS...",
];

export function UploadAnalyzer() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageMimeType, setImageMimeType] = useState<string>("image/png");
  const [imageFileName, setImageFileName] = useState<string | null>(null);
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [generatedMDX, setGeneratedMDX] = useState<string | null>(null);
  const [generatedHTML, setGeneratedHTML] = useState<string | null>(null);
  const [mode, setMode] = useState<"mdx" | "html">("mdx");
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle image conversion to Base64
  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Por favor, selecione um arquivo de imagem válido (PNG, JPG, WEBP).");
      return;
    }

    if (file.size > 12 * 1024 * 1024) {
      setError("A imagem deve ter no máximo 12MB.");
      return;
    }

    setError(null);
    setImageFileName(file.name);
    setImageMimeType(file.type || "image/png");

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setSelectedImage(result);
      setGeneratedMDX(null); // Reset previous analysis
      setGeneratedHTML(null);
    };
    reader.readAsDataURL(file);
  };

  // Clipboard paste handler
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (e.clipboardData && e.clipboardData.files && e.clipboardData.files.length > 0) {
        const item = e.clipboardData.files[0];
        if (item.type.startsWith("image/")) {
          e.preventDefault();
          handleFileSelect(item);
        }
      }
    };

    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, []);

  // Handle Preset Image Selection
  const loadPresetSample = async (preset: typeof PRESET_SAMPLES[0]) => {
    setError(null);
    setImageFileName(`${preset.id}_sample.jpg`);
    setImageMimeType("image/jpeg");
    setGeneratedMDX(null);
    setGeneratedHTML(null);

    try {
      // Fetch image and convert to base64
      const response = await fetch(preset.url);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(blob);
    } catch (err) {
      setError("Não foi possível carregar a imagem de exemplo. Tente fazer upload de um arquivo local.");
    }
  };

  // Run Gemini Reverse Engineering API
  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    setError(null);
    setCurrentStepIndex(0);

    // Step animation ticker
    const stepInterval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < ANALYSIS_STEPS.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 2200);

    try {
      const response = await fetch("/api/analyze-landing-page", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageBase64: selectedImage,
          mimeType: imageMimeType,
          mode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Falha ao analisar a imagem.");
      }

      if (mode === "html") {
        let htmlContent = data.mdxContent;
        htmlContent = htmlContent.replace(/^```html\s*/i, "").replace(/```\s*$/i, "");
        setGeneratedHTML(htmlContent);
      } else {
        setGeneratedMDX(data.mdxContent);
      }
    } catch (err: any) {
      console.error(err);
      setError(
        err.message || "Erro de conexão ao enviar a imagem para análise da IA."
      );
    } finally {
      clearInterval(stepInterval);
      setIsAnalyzing(false);
    }
  };

  const resetAll = () => {
    setSelectedImage(null);
    setGeneratedMDX(null);
    setGeneratedHTML(null);
    setError(null);
    setImageFileName(null);
  };

  return (
    <div className="w-full space-y-8">
      {/* Introduction Header */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#13141c] border border-[#27293a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex items-center gap-2 text-orange-400 font-bold text-sm mb-2">
          <Sparkles className="w-5 h-5" />
          <span>Engenharia Reversa com IA Multimodal</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          Analisador de Print / Screenshot de Landing Page
        </h2>
        <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
          Arraste ou cole (Ctrl+V) o print de qualquer landing page. O Gemini 3.6 analisará as cores, tipografia, estrutura de layout e componentes visuais, gerando a especificação técnica completa em MDX.
        </p>
      </div>

      {/* Main Upload & Preview Area */}
      {!generatedMDX && !generatedHTML ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left / Main Dropzone */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {!selectedImage ? (
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDragging(false);
                  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                    handleFileSelect(e.dataTransfer.files[0]);
                  }
                }}
                onClick={() => fileInputRef.current?.click()}
                className={`w-full min-h-[320px] rounded-2xl border-2 border-dashed p-8 flex flex-col items-center justify-center text-center transition-all cursor-pointer relative overflow-hidden ${
                  isDragging
                    ? "border-orange-500 bg-orange-500/10 scale-[1.01]"
                    : "border-[#27293a] bg-[#13141c] hover:border-orange-500/50 hover:bg-[#1a1b26]"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/webp,image/gif"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileSelect(e.target.files[0]);
                    }
                  }}
                />

                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4 shadow-lg shadow-orange-500/10">
                  <Upload className="w-8 h-8" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  Arraste e solte o print da página aqui
                </h3>
                <p className="text-xs text-zinc-400 max-w-sm mb-4">
                  Suporta PNG, JPG, WEBP. Você também pode dar <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-amber-300 font-mono text-[11px]">Ctrl + V</kbd> para colar direto da área de transferência.
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition-all shadow-md shadow-orange-500/20">
                  <ImageIcon className="w-4 h-4" />
                  <span>Selecionar do Computador</span>
                </div>
              </div>
            ) : (
              /* Image Selected Preview Card */
              <div className="p-6 rounded-2xl bg-[#13141c] border border-[#27293a] space-y-4">
                <div className="flex items-center justify-between border-b border-[#27293a] pb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <div>
                      <h3 className="font-bold text-white text-sm">
                        {imageFileName || "Print Selecionado"}
                      </h3>
                      <span className="text-[11px] text-zinc-400">
                        Pronto para análise técnica em MDX
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={resetAll}
                    disabled={isAnalyzing}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Trocar Imagem</span>
                  </button>
                </div>

                <div className="flex bg-[#0b0c10] border border-[#27293a] rounded-xl p-1 mb-2">
                  <button
                    onClick={() => setMode("mdx")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      mode === "mdx"
                        ? "bg-orange-500 text-white shadow-md"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    <span>Gerar Documentação MDX</span>
                  </button>
                  <button
                    onClick={() => setMode("html")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      mode === "html"
                        ? "bg-emerald-500 text-white shadow-md"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }`}
                  >
                    <Code className="w-4 h-4" />
                    <span>Clonar Página (HTML)</span>
                  </button>
                </div>

                {/* Screenshot Display Frame */}
                <div className="relative rounded-xl border border-[#27293a] bg-[#0b0c10] overflow-hidden max-h-[420px] flex items-center justify-center p-2 group">
                  <img
                    src={selectedImage}
                    alt="Landing page screenshot"
                    className="max-h-[380px] w-auto object-contain rounded-lg shadow-2xl"
                  />
                  {isAnalyzing && (
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-10 space-y-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full border-4 border-orange-500/30 border-t-orange-500 animate-spin" />
                        <Sparkles className="w-6 h-6 text-amber-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                      </div>
                      <div className="space-y-1 max-w-sm">
                        <span className="text-xs font-bold text-orange-400 uppercase tracking-widest animate-pulse">
                          Processando Visão Computacional
                        </span>
                        <p className="text-sm font-semibold text-white">
                          {ANALYSIS_STEPS[currentStepIndex]}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Action CTA */}
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.005] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Gerando Especificação MDX...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 fill-white" />
                      <span>Analisar Landing Page com IA Gemini</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Error Banner */}
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{error}</span>
              </div>
            )}
          </div>

          {/* Right Column: Presets & How it works */}
          <div className="lg:col-span-5 space-y-6">
            {/* Presets Card */}
            <div className="p-6 rounded-2xl bg-[#13141c] border border-[#27293a] space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Clipboard className="w-4 h-4 text-amber-400" />
                <span>Testar com Exemplo Pré-Carregado</span>
              </div>
              <p className="text-xs text-zinc-400">
                Caso não tenha um print no computador agora, clique em uma das demonstrações abaixo para testar instantaneamente a análise da IA:
              </p>

              <div className="space-y-3">
                {PRESET_SAMPLES.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => loadPresetSample(preset)}
                    disabled={isAnalyzing}
                    className="w-full p-3 rounded-xl bg-[#0b0c10] border border-[#27293a] hover:border-orange-500/40 transition-all text-left flex items-center gap-3 group cursor-pointer"
                  >
                    <img
                      src={preset.url}
                      alt={preset.title}
                      className="w-14 h-14 object-cover rounded-lg shrink-0 border border-white/10"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-bold text-white text-xs truncate group-hover:text-orange-400 transition-colors">
                          {preset.title}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 text-[10px] font-bold shrink-0">
                          {preset.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-500 line-clamp-1">
                        {preset.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* How it works breakdown */}
            <div className="p-6 rounded-2xl bg-[#13141c] border border-[#27293a] space-y-3 text-xs text-zinc-400">
              <h4 className="font-bold text-white text-sm mb-2">
                O que a IA vai extrair do seu print?
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold">1.</span>
                  <span><strong>Design System:</strong> Paleta de cores exata (Primary, Surfaces, Backgrounds, Borders, Badges) em Hex, RGB e HSL.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold">2.</span>
                  <span><strong>Tipografia:</strong> Tabela detalhada de H1 até body text com tamanhos desktop/mobile, pesos e line-height.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold">3.</span>
                  <span><strong>Layout & Seções:</strong> Leitura do funil de conversão, grids, paddings e breakpoints.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold">4.</span>
                  <span><strong>Trechos em Tailwind CSS:</strong> Classes prontas para botões CTA, badges, títulos e cards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold">5.</span>
                  <span><strong>Variáveis CSS:</strong> Bloco <code className="text-amber-300">:root</code> pronto para ser copiado.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        /* Rendered Result Analysis Section */
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-emerald-300 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span><strong>Engenharia Reversa Concluída com Sucesso!</strong> A especificação MDX da landing page enviada foi gerada abaixo.</span>
            </div>

            <button
              onClick={resetAll}
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs flex items-center gap-2 transition-colors shrink-0 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Analisar Outro Print</span>
            </button>
          </div>

          {/* Render MDX Documentation using Viewer */}
          {generatedMDX && <MDXViewer content={generatedMDX} />}
          
          {/* Render HTML iframe */}
          {generatedHTML && (
            <div className="rounded-xl border border-[#27293a] overflow-hidden flex flex-col bg-[#13141c]">
               <div className="p-4 flex justify-between items-center border-b border-[#27293a]">
                 <span className="text-white font-bold text-sm flex items-center gap-2"><Code className="w-4 h-4 text-emerald-400"/> Resultado: Clone Exato em HTML</span>
                 <button onClick={() => {
                   navigator.clipboard.writeText(generatedHTML);
                   alert("Código copiado!");
                 }} className="text-xs bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors cursor-pointer border border-[#27293a]">
                    <Copy className="w-3.5 h-3.5" /> Copiar Código
                 </button>
               </div>
               <iframe
                 title="Cloned Page"
                 srcDoc={generatedHTML}
                 className="w-full h-[800px] border-none bg-white"
               />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
