import React, { useState, useEffect } from 'react';
import { Play, X, Pencil, Loader2 } from 'lucide-react';
import { db } from '../lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface Aula {
  id: number;
  titulo: string;
  imagem: string;
  videoUrl: string;
}

interface Modulo {
  id: number;
  titulo: string;
  aulas: Aula[];
}

export function HomeTab({ isAdmin = false }: { isAdmin?: boolean }) {
  const [videoAberto, setVideoAberto] = useState<Aula | null>(null);
  
  // Controle de edição da capa (Apenas Admin)
  const [coverUrl, setCoverUrl] = useState('https://i.postimg.cc/MKVWxzMy/Chat-GPT-Image-8-de-ago-de-2026-22-27-54.png');
  const [isEditingCover, setIsEditingCover] = useState(false);
  const [tempCoverUrl, setTempCoverUrl] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  // Controle de edição das capas e títulos das aulas individuais (Admin)
  const [customLessonCovers, setCustomLessonCovers] = useState<Record<number, string>>({});
  const [customLessonTitles, setCustomLessonTitles] = useState<Record<number, string>>({});
  const [editingLessonId, setEditingLessonId] = useState<number | null>(null);
  const [tempLessonCoverUrl, setTempLessonCoverUrl] = useState('');
  const [tempLessonTitle, setTempLessonTitle] = useState('');

  // Controle de edição dos módulos (Admin)
  const [activeModuleId, setActiveModuleId] = useState<number | null>(null);
  const [customModuleCovers, setCustomModuleCovers] = useState<Record<number, string>>({});
  const [customModuleDescriptions, setCustomModuleDescriptions] = useState<Record<number, string>>({});
  const [customModuleTitles, setCustomModuleTitles] = useState<Record<number, string>>({});
  
  const [isEditingModule, setIsEditingModule] = useState<number | null>(null);
  const [tempModuleCoverUrl, setTempModuleCoverUrl] = useState('');
  const [tempModuleTitle, setTempModuleTitle] = useState('');
  const [tempModuleDesc, setTempModuleDesc] = useState('');

  // Buscar as configurações salvas no banco
  useEffect(() => {
    const fetchCover = async () => {
      try {
        const docRef = doc(db, 'settings', 'homeTab');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.coverUrl) setCoverUrl(data.coverUrl);
          if (data.lessonCovers) setCustomLessonCovers(data.lessonCovers);
          if (data.lessonTitles) setCustomLessonTitles(data.lessonTitles);
          if (data.moduleCovers) setCustomModuleCovers(data.moduleCovers);
          if (data.moduleDescriptions) setCustomModuleDescriptions(data.moduleDescriptions);
          if (data.moduleTitles) setCustomModuleTitles(data.moduleTitles);
        }
      } catch (err) {
        console.error("Erro ao buscar capa", err);
      }
    };
    fetchCover();
  }, []);

  // Salvar a nova capa principal no banco
  const handleSaveCover = async () => {
    if (!tempCoverUrl) return;
    setIsSaving(true);
    try {
      const docRef = doc(db, 'settings', 'homeTab');
      await setDoc(docRef, { coverUrl: tempCoverUrl }, { merge: true });
      setCoverUrl(tempCoverUrl);
      setIsEditingCover(false);
    } catch (err) {
      console.error("Erro ao salvar", err);
      alert("Erro ao salvar a nova capa.");
    }
    setIsSaving(false);
  };

  // Salvar a nova capa e título da aula no banco
  const handleSaveLessonCover = async () => {
    if (editingLessonId === null) return;
    setIsSaving(true);
    try {
      const docRef = doc(db, 'settings', 'homeTab');
      
      const updatedCovers = { ...customLessonCovers, [editingLessonId]: tempLessonCoverUrl };
      const updatedTitles = { ...customLessonTitles, [editingLessonId]: tempLessonTitle };
      
      await setDoc(docRef, { 
        lessonCovers: updatedCovers,
        lessonTitles: updatedTitles
      }, { merge: true });
      
      setCustomLessonCovers(updatedCovers);
      setCustomLessonTitles(updatedTitles);
      setEditingLessonId(null);
    } catch (err) {
      console.error("Erro ao salvar", err);
      alert("Erro ao salvar as informações da aula.");
    }
    setIsSaving(false);
  };

  // Salvar novo título, descrição e capa do Módulo
  const handleSaveModule = async () => {
    if (isEditingModule === null) return;
    setIsSaving(true);
    try {
      const docRef = doc(db, 'settings', 'homeTab');
      
      const updatedCovers = { ...customModuleCovers, [isEditingModule]: tempModuleCoverUrl };
      const updatedDescriptions = { ...customModuleDescriptions, [isEditingModule]: tempModuleDesc };
      const updatedTitles = { ...customModuleTitles, [isEditingModule]: tempModuleTitle };
      
      await setDoc(docRef, { 
        moduleCovers: updatedCovers,
        moduleDescriptions: updatedDescriptions,
        moduleTitles: updatedTitles
      }, { merge: true });
      
      setCustomModuleCovers(updatedCovers);
      setCustomModuleDescriptions(updatedDescriptions);
      setCustomModuleTitles(updatedTitles);
      setIsEditingModule(null);
    } catch (err) {
      console.error("Erro ao salvar módulo", err);
      alert("Erro ao salvar as informações do módulo.");
    }
    setIsSaving(false);
  };

  // Estrutura completa de Módulos
  const modulos: Modulo[] = [
    {
      id: 1,
      titulo: 'Módulo 1: Páginas com IA',
      aulas: [
        {
          id: 101,
          titulo: 'Aula 1 - Escolhendo o melhor modelo',
          imagem: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400&h=600',
          videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?si=1wV0l6C6g5zZ9n0B',
        },
        {
          id: 102,
          titulo: 'Aula 2 - Gerando copys incríveis',
          imagem: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=400&h=600',
          videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?si=1wV0l6C6g5zZ9n0B',
        },
        {
          id: 103,
          titulo: 'Aula 3 - Editando a página',
          imagem: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400&h=600',
          videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?si=1wV0l6C6g5zZ9n0B',
        },
        {
          id: 104,
          titulo: 'Aula 4 - Baixando e publicando',
          imagem: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=600',
          videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?si=1wV0l6C6g5zZ9n0B',
        }
      ]
    },
    {
      id: 2,
      titulo: 'Módulo 2: Link na Bio',
      aulas: [
        {
          id: 201,
          titulo: 'Aula 1 - Criando seu Link na Bio',
          imagem: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400&h=600',
          videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?si=1wV0l6C6g5zZ9n0B',
        },
        {
          id: 202,
          titulo: 'Aula 2 - Customizando cores e botões',
          imagem: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=400&h=600',
          videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?si=1wV0l6C6g5zZ9n0B',
        }
      ]
    },
    {
      id: 3,
      titulo: 'Módulo 3: Gerando Imagens com IA',
      aulas: [
        {
          id: 301,
          titulo: 'Aula 1 - Criando Prompts Perfeitos',
          imagem: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=400&h=600',
          videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?si=1wV0l6C6g5zZ9n0B',
        }
      ]
    },
    {
      id: 4,
      titulo: 'Módulo 4: Elementos Visuais',
      aulas: [
        {
          id: 401,
          titulo: 'Aula 1 - Usando os elementos nas suas páginas',
          imagem: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=400&h=600',
          videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?si=1wV0l6C6g5zZ9n0B',
        }
      ]
    }
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto space-y-12">
      
      {/* Capa Principal da Área de Aulas (Substituindo o antigo banner Bônus) */}
      <div className="relative w-full aspect-[21/9] md:aspect-[4/1] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl flex items-center justify-center bg-gray-900">
        <img 
          src={coverUrl} 
          alt="Capa Início/Aulas" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay escuro sutil para garantir que a capa não fique muito clara com o tema dark */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent pointer-events-none"></div>

        {/* Botão de Edição (Apenas Admin) - Fixo no topo */}
        {isAdmin && (
          <button 
            onClick={() => {
              setTempCoverUrl(coverUrl);
              setIsEditingCover(true);
            }}
            className="absolute top-4 right-4 z-20 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2 shadow-lg border border-cyan-400/30"
            title="Alterar Capa (Apenas Admin)"
          >
            <Pencil className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Trocar Capa</span>
          </button>
        )}
      </div>

      {/* Lista de Módulos (Estilo Área de Membros) */}
      {activeModuleId === null ? (
        <div className="pt-4 pb-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-8 bg-cyan-500 rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Módulos do Curso
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modulos.map((modulo) => {
              const finalTitle = customModuleTitles[modulo.id] || modulo.titulo;
              const finalCover = customModuleCovers[modulo.id] || modulo.aulas[0]?.imagem;
              const finalDesc = customModuleDescriptions[modulo.id] || 'Módulo exclusivo para alunos da plataforma.';
              
              return (
                <div 
                  key={modulo.id}
                  onClick={() => setActiveModuleId(modulo.id)}
                  className="group cursor-pointer rounded-xl overflow-hidden bg-gradient-to-br from-[#050505] to-[#111] border-2 border-cyan-900 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:-translate-y-1 transition-all duration-300 flex flex-col relative"
                >
                  <div className="absolute top-3 left-3 z-20 bg-cyan-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg border border-cyan-700/50">
                    {modulo.aulas.length} AULAS
                  </div>

                  {isAdmin && (
                    <div className="absolute top-2 right-2 flex gap-1 z-30 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          setIsEditingModule(modulo.id); 
                          setTempModuleTitle(finalTitle); 
                          setTempModuleCoverUrl(finalCover); 
                          setTempModuleDesc(finalDesc); 
                        }}
                        className="p-2 bg-black/80 hover:bg-cyan-600 text-white rounded-lg backdrop-blur-md transition border border-gray-700"
                        title="Editar Módulo"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden bg-black">
                    {finalCover ? (
                      <img src={finalCover} alt={finalTitle} className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a]">
                        <Play className="w-16 h-16 text-cyan-900/50 group-hover:text-cyan-800/80 transition" />
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-cyan-900/20 mix-blend-multiply pointer-events-none"></div>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300 mb-2">
                        <Play className="w-8 h-8 text-white fill-white/20 ml-1" />
                      </div>
                      <span className="text-white font-bold text-sm tracking-wide uppercase">Acessar Módulo</span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col justify-between border-t border-cyan-900/50 flex-1 bg-[#0a0a0a]">
                    <h3 className="text-cyan-400 font-bold text-sm sm:text-base leading-snug mb-2 text-center line-clamp-1">
                      {finalTitle}
                    </h3>
                    <p className="text-gray-400 text-[11px] sm:text-xs text-center mb-4 leading-tight line-clamp-2">
                      {finalDesc}
                    </p>
                    <button className="w-full flex items-center justify-center px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-sm font-bold transition-all shadow-[0_0_15px_rgba(8,145,178,0.3)] pointer-events-none">
                      Ver Aulas
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="pt-4 pb-8 animate-in fade-in">
          {modulos.filter(m => m.id === activeModuleId).map(modulo => {
            const finalTitle = customModuleTitles[modulo.id] || modulo.titulo;
            const finalDesc = customModuleDescriptions[modulo.id] || 'Módulo exclusivo para alunos da plataforma.';
            return (
              <div key={modulo.id} className="mb-8">
                <button 
                  onClick={() => setActiveModuleId(null)}
                  className="flex items-center gap-2 text-gray-400 hover:text-white bg-[#1a1a1a] px-4 py-2 rounded-lg border border-gray-800 hover:border-gray-600 transition mb-6"
                >
                  <span>← Voltar para Módulos</span>
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-8 bg-cyan-500 rounded-full"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {finalTitle}
                  </h3>
                </div>
                <p className="text-gray-400 mt-2 ml-6">{finalDesc}</p>
                
                {/* Grade de Vídeos do Módulo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
                  {modulo.aulas.map((aula) => {
                    const finalImagem = customLessonCovers[aula.id] || aula.imagem;
                    const finalTitulo = customLessonTitles[aula.id] || aula.titulo;
                    return (
                      <div 
                        key={aula.id} 
                        className="flex flex-col gap-3 group cursor-pointer relative"
                        onClick={() => setVideoAberto({ ...aula, titulo: finalTitulo, imagem: finalImagem })}
                      >
                        {/* Thumbnail com Overlay */}
                        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border-2 border-transparent transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] bg-gray-900">
                          <img 
                            src={finalImagem} 
                            alt={finalTitulo} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform duration-300">
                              <Play className="w-7 h-7 text-white ml-1 fill-white" />
                            </div>
                            <span className="text-white font-bold mt-4 text-sm drop-shadow-md tracking-wide uppercase">
                              Assistir a aula agora
                            </span>
                          </div>
                        </div>
                        
                        {/* Botão de Edição (Apenas Admin) */}
                        {isAdmin && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setTempLessonCoverUrl(finalImagem);
                              setTempLessonTitle(finalTitulo);
                              setEditingLessonId(aula.id);
                            }}
                            className="absolute top-2 right-2 z-20 bg-cyan-600 hover:bg-cyan-500 text-white p-2 rounded-lg transition-all flex items-center shadow-lg border border-cyan-400/30"
                            title="Alterar Capa e Título da Aula"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                        )}

                        <h4 className="text-gray-300 text-sm md:text-[15px] font-medium leading-snug group-hover:text-cyan-400 transition-colors px-1 mt-1">
                          {finalTitulo}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* MODAL DE VÍDEO (Player) */}
      {videoAberto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          {/* Backdrop escuro */}
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer"
            onClick={() => setVideoAberto(null)}
          ></div>
          
          {/* Container do Player */}
          <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#0a0a0a] rounded-2xl overflow-y-auto custom-scrollbar border border-cyan-900/30 shadow-[0_0_50px_rgba(34,211,238,0.15)] flex flex-col z-10 animate-in zoom-in-95 duration-300">
            
            {/* Cabeçalho do Modal (Botão Voltar) */}
            <div className="p-4 bg-gray-900/50 border-b border-gray-800 flex items-center sticky top-0 z-20 backdrop-blur-sm">
              <button 
                onClick={() => setVideoAberto(null)}
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 font-medium transition-colors bg-black/40 px-4 py-2 rounded-lg border border-gray-800 hover:border-cyan-900"
              >
                <X className="w-4 h-4 hidden" /> {/* Usando apenas texto ou ícone diferente, mas vou usar texto puro com seta */}
                <span>← Voltar para as Aulas</span>
              </button>
            </div>

            {/* Área de Vídeo (16:9) */}
            <div className="w-full aspect-video bg-black relative shadow-inner">
              <iframe 
                src={videoAberto.videoUrl} 
                title={videoAberto.titulo}
                className="absolute inset-0 w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            {/* Informações da Aula */}
            <div className="p-6 md:p-8 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-cyan-900/20 text-cyan-400 text-[10px] font-black uppercase tracking-widest rounded border border-cyan-500/20">
                  Reproduzindo Agora
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                {videoAberto.titulo}
              </h2>
              <div className="prose prose-invert prose-sm max-w-none text-gray-400">
                <p>
                  Assista a esta aula para dominar as ferramentas e funcionalidades do sistema. 
                  Você pode arrastar para baixo para ler mais detalhes ou clicar no botão "Voltar" no topo da tela para retornar ao menu principal.
                </p>
                <p className="mt-4 text-xs text-gray-500">
                  Dica: Utilize tela cheia no player para melhor visualização dos comandos ensinados.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Edição de Capa (Admin) */}
      {isEditingCover && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-gray-900 border border-gray-700 rounded-xl w-full max-w-md p-6 shadow-2xl animate-in zoom-in-95">
            <h3 className="text-xl font-bold text-white mb-4">Atualizar Capa Principal</h3>
            <p className="text-sm text-gray-400 mb-4">Cole abaixo o link (URL) da nova imagem hospedada no PostImage ou Imgur.</p>
            <input 
              type="text" 
              value={tempCoverUrl}
              onChange={(e) => setTempCoverUrl(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none mb-6"
              placeholder="https://i.postimg.cc/..."
            />
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setIsEditingCover(false)}
                className="px-4 py-2 text-gray-400 hover:text-white transition"
              >
                Cancelar
              </button>
              <button 
                onClick={handleSaveCover}
                disabled={isSaving}
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 disabled:opacity-50 transition-colors"
              >
                {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Salvar Capa no Banco'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Edição de Capa e Título da Aula Individual (Admin) */}
      {editingLessonId !== null && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-gray-900 border border-gray-700 rounded-xl w-full max-w-md p-6 shadow-2xl animate-in zoom-in-95">
            <h3 className="text-xl font-bold text-white mb-4">Editar Aula</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Título da Aula:</label>
                <input 
                  type="text" 
                  value={tempLessonTitle}
                  onChange={(e) => setTempLessonTitle(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none"
                  placeholder="Ex: Aula 1 - Como criar páginas..."
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">URL da Imagem (Capa):</label>
                <p className="text-xs text-gray-500 mb-2">Proporção sugerida: 3:4 Vertical (PostImage / Imgur).</p>
                <input 
                  type="text" 
                  value={tempLessonCoverUrl}
                  onChange={(e) => setTempLessonCoverUrl(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none"
                  placeholder="https://i.postimg.cc/..."
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setEditingLessonId(null)}
                className="px-4 py-2 text-gray-400 hover:text-white transition"
              >
                Cancelar
              </button>
              <button 
                onClick={handleSaveLessonCover}
                disabled={isSaving}
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 disabled:opacity-50 transition-colors"
              >
                {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Salvar Alterações'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Edição de Módulo (Admin) */}
      {isEditingModule !== null && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-gray-900 border border-gray-700 rounded-xl w-full max-w-md p-6 shadow-2xl animate-in zoom-in-95">
            <h3 className="text-xl font-bold text-white mb-4">Editar Módulo</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Título do Módulo:</label>
                <input 
                  type="text" 
                  value={tempModuleTitle}
                  onChange={(e) => setTempModuleTitle(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Descrição do Módulo:</label>
                <textarea 
                  value={tempModuleDesc}
                  onChange={(e) => setTempModuleDesc(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none resize-none h-24"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">URL da Capa do Módulo:</label>
                <p className="text-xs text-cyan-500/80 mb-2 font-medium">Atenção: Use o "Link Direto" do Postimages (tem que terminar em .jpg ou .png)</p>
                <input 
                  type="text" 
                  value={tempModuleCoverUrl}
                  onChange={(e) => setTempModuleCoverUrl(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none"
                  placeholder="https://i.postimg.cc/xyz.jpg"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setIsEditingModule(null)}
                className="px-4 py-2 text-gray-400 hover:text-white transition"
              >
                Cancelar
              </button>
              <button 
                onClick={handleSaveModule}
                disabled={isSaving}
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 disabled:opacity-50 transition-colors"
              >
                {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Salvar Módulo'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
