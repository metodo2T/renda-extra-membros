import React, { useState, useEffect } from 'react';
import { Sparkles, Eye, Loader2, X, Folder, FolderPlus, Edit, Trash2, ChevronUp, ChevronDown, Image as ImageIcon } from 'lucide-react';
import { ImagePrompt } from '../data/imagePrompts';
import { ImagePromptModal } from './ImagePromptModal';
import { EditImagePromptModal } from './EditImagePromptModal';
import { CreateImagePromptModal } from './CreateImagePromptModal';
import { db, auth } from '../lib/firebase';
import { collection, onSnapshot, query, orderBy, deleteDoc, doc, setDoc, updateDoc } from 'firebase/firestore';

export interface PromptFolder {
  id: string;
  name: string;
  order: number;
  description?: string;
}

export function PromptLibraryTab() {
  const [selectedPrompt, setSelectedPrompt] = useState<ImagePrompt | null>(null);
  const [editingPrompt, setEditingPrompt] = useState<ImagePrompt | null>(null);
  const [imagePrompts, setImagePrompts] = useState<ImagePrompt[]>([]);
  
  const [folders, setFolders] = useState<PromptFolder[]>([]);
  const [activeFolderId, setActiveFolderId] = useState<string | null>(null);
  
  const [filter, setFilter] = useState('Todos');
  const [loading, setLoading] = useState(true);
  const [foldersLoading, setFoldersLoading] = useState(true);
  
  const [showUpsellModal, setShowUpsellModal] = useState(false);
  
  const [showFolderModal, setShowFolderModal] = useState(false);
  const [editingFolder, setEditingFolder] = useState<PromptFolder | null>(null);
  const [folderNameInput, setFolderNameInput] = useState('');
  const [folderDescInput, setFolderDescInput] = useState('');
  
  const [showCreatePhotoModal, setShowCreatePhotoModal] = useState(false);

  const isAdmin = auth.currentUser?.email?.toLowerCase() === 'metododoist@gmail.com';

  useEffect(() => {
    const q = query(collection(db, 'imagePrompts'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedPrompts: ImagePrompt[] = [];
      snapshot.forEach((doc) => {
        fetchedPrompts.push({ id: doc.id, ...doc.data() } as ImagePrompt);
      });
      setImagePrompts(fetchedPrompts);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'promptFolders'), orderBy('order', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedFolders: PromptFolder[] = [];
      snapshot.forEach((doc) => {
        fetchedFolders.push({ id: doc.id, ...doc.data() } as PromptFolder);
      });
      setFolders(fetchedFolders);
      setFoldersLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const createDefaults = async () => {
      if (!foldersLoading && folders.length === 0 && isAdmin) {
        try {
          await setDoc(doc(db, 'promptFolders', 'Mulheres'), { name: 'Mulheres', order: 1 });
          await setDoc(doc(db, 'promptFolders', 'Homens'), { name: 'Homens', order: 2 });
        } catch(e) {
          console.error('Erro ao criar pastas padrao', e);
        }
      }
    };
    createDefaults();
  }, [foldersLoading, folders.length, isAdmin]);

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir esta foto?')) {
      try {
        await deleteDoc(doc(db, 'imagePrompts', id));
        setSelectedPrompt(null);
      } catch (err) {
        console.error('Erro ao excluir:', err);
        alert('Erro ao excluir foto.');
      }
    }
  };

  const handleEdit = (prompt: ImagePrompt) => {
    setSelectedPrompt(null);
    setEditingPrompt(prompt);
  };

  const handleSaveFolder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!folderNameInput.trim()) return;
    
    try {
      if (editingFolder) {
        await updateDoc(doc(db, 'promptFolders', editingFolder.id), {
          name: folderNameInput.trim(),
          description: folderDescInput.trim()
        });
      } else {
        const newId = folderNameInput.trim().toLowerCase().replace(/[^a-z0-9]/g, '-');
        const newOrder = folders.length > 0 ? Math.max(...folders.map(f => f.order)) + 1 : 1;
        const docId = `${newId}-${Date.now()}`;
        await setDoc(doc(db, 'promptFolders', docId), {
          name: folderNameInput.trim(),
          description: folderDescInput.trim(),
          order: newOrder
        });
      }
      setShowFolderModal(false);
      setEditingFolder(null);
      setFolderNameInput('');
      setFolderDescInput('');
    } catch (err) {
      console.error('Erro ao salvar pasta', err);
      alert('Erro ao salvar pasta.');
    }
  };

  const handleDeleteFolder = async (folder: PromptFolder, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm(`Tem certeza que deseja excluir a pasta "${folder.name}"? As fotos não serão apagadas.`)) {
      try {
        await deleteDoc(doc(db, 'promptFolders', folder.id));
      } catch(err) {
        console.error('Erro ao excluir pasta', err);
      }
    }
  };

  const handleMoveFolder = async (folder: PromptFolder, direction: 'up' | 'down', e: React.MouseEvent) => {
    e.stopPropagation();
    const index = folders.findIndex(f => f.id === folder.id);
    if (index === -1) return;
    
    if (direction === 'up' && index > 0) {
      const prev = folders[index - 1];
      await updateDoc(doc(db, 'promptFolders', folder.id), { order: prev.order });
      await updateDoc(doc(db, 'promptFolders', prev.id), { order: folder.order });
    } else if (direction === 'down' && index < folders.length - 1) {
      const next = folders[index + 1];
      await updateDoc(doc(db, 'promptFolders', folder.id), { order: next.order });
      await updateDoc(doc(db, 'promptFolders', next.id), { order: folder.order });
    }
  };

  if (loading || foldersLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
      </div>
    );
  }

  // --- VISÃO DA PASTA ABERTA (FOTOS) ---
  if (activeFolderId) {
    const activeFolder = folders.find(f => f.id === activeFolderId);
    const promptsInFolder = imagePrompts.filter(p => p.gender === activeFolderId);
    const categories = ['Todos', ...Array.from(new Set(promptsInFolder.map(p => p.category)))];
    const filteredPrompts = promptsInFolder.filter(p => 
      filter === 'Todos' ? true : p.category === filter
    );

    return (
      <div className="animate-fade-in">
        <div className="flex flex-col items-center mb-8 relative">
          <div className="absolute left-0 top-0 sm:top-2 flex gap-2">
            <button 
              onClick={() => setActiveFolderId(null)}
              className="flex items-center gap-2 text-gray-400 hover:text-white bg-[#1a1a1a] px-4 py-2 rounded-lg border border-gray-800 hover:border-gray-600 transition"
            >
              <span>← Voltar</span>
            </button>
            {isAdmin && (
              <button 
                onClick={() => setShowCreatePhotoModal(true)}
                className="flex items-center gap-2 text-white bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-lg font-bold transition shadow-lg border border-cyan-500/50"
              >
                <span>+ Adicionar Foto</span>
              </button>
            )}
          </div>
          
          <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-800/50 rounded-full text-[10px] uppercase tracking-widest text-cyan-400 mb-4 mt-14 sm:mt-0 flex items-center gap-2">
            <Folder className="w-3 h-3" /> Pasta Aberta
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white">{activeFolder?.name || 'Pasta'}</h1>
          <p className="text-gray-400 text-sm">
            {promptsInFolder.length} foto(s) cadastradas
          </p>
        </div>

        {categories.length > 1 && (
          <div className="flex justify-center flex-wrap gap-2 mb-8 max-w-4xl mx-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
                  filter === cat 
                    ? 'bg-cyan-600 text-white shadow-[0_0_10px_rgba(8,145,178,0.3)]' 
                    : 'bg-[#1a1a1a] border border-gray-800 text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {filteredPrompts.length === 0 ? (
          <div className="text-center py-20 bg-[#0f0f0f] rounded-2xl border border-gray-800">
            <ImageIcon className="w-12 h-12 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-400">Nenhuma foto encontrada nesta pasta.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {filteredPrompts.map(prompt => (
              <div 
                key={prompt.id} 
                className="group cursor-pointer rounded-xl overflow-hidden bg-[#050505] border border-[#6b21a8] shadow-[0_0_15px_rgba(107,33,168,0.4)] hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
                onClick={() => setSelectedPrompt(prompt)}
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#111] flex items-center justify-center">
                  <img 
                    src={prompt.imageUrl} 
                    alt={prompt.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply pointer-events-none"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-[#9333ea] rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300 mb-2">
                      <Eye className="w-8 h-8 text-white fill-white" />
                    </div>
                    <span className="text-white font-medium text-sm tracking-wide">Ver prompt</span>
                  </div>
                </div>
                <div className="p-4 bg-[#050505] flex flex-col justify-between border-t border-gray-900/50 flex-1">
                  <h3 className="text-gray-200 font-medium text-sm sm:text-base leading-snug mb-4 text-center line-clamp-2">
                    {prompt.title}
                  </h3>
                  <button 
                    className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg text-sm font-medium transition-all shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] group-hover:-translate-y-0.5"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPrompt(prompt);
                    }}
                  >
                    <span>Prompt</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedPrompt && (
          <ImagePromptModal 
            promptData={selectedPrompt} 
            onClose={() => setSelectedPrompt(null)}
            isAdmin={isAdmin}
            onDelete={() => handleDelete(selectedPrompt.id)}
            onEdit={() => handleEdit(selectedPrompt)}
          />
        )}
        {editingPrompt && (
          <EditImagePromptModal
            promptData={editingPrompt}
            onClose={() => setEditingPrompt(null)}
            onSave={() => setEditingPrompt(null)}
          />
        )}
        {showCreatePhotoModal && (
          <CreateImagePromptModal
            defaultFolderId={activeFolderId}
            onClose={() => setShowCreatePhotoModal(false)}
            onSave={() => setShowCreatePhotoModal(false)}
          />
        )}
      </div>
    );
  }

  // --- VISÃO RAIZ (PASTAS) ---
  return (
    <div className="animate-fade-in pb-10">
      <div className="flex flex-col items-center mb-12">
        <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-800/50 rounded-full text-[10px] uppercase tracking-widest text-cyan-400 mb-6 flex items-center gap-2">
          <Sparkles className="w-3 h-3" /> Biblioteca Premium
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-center text-white">Imagens com IA</h1>
        <p className="text-gray-400 text-sm max-w-xl text-center mb-8">
          Navegue pelas pastas de fotos premium geradas por Inteligência Artificial.
        </p>
        
        {isAdmin && (
          <button 
            onClick={() => {
              setEditingFolder(null);
              setFolderNameInput('');
              setFolderDescInput('');
              setShowFolderModal(true);
            }}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition shadow-lg"
          >
            <FolderPlus className="w-5 h-5" />
            Nova Pasta
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        
        {/* CARD FIXO DO GPT */}
        <div 
          className="group cursor-pointer rounded-xl overflow-hidden bg-gradient-to-br from-[#050505] to-[#111] border-2 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-1 transition-all duration-300 flex flex-col relative"
          onClick={() => {
            if (isAdmin) {
              window.open('https://chatgpt.com/g/g-6a7807d392dc819191dd3737ffb380ac-prompt-visual-pro', '_blank');
            } else {
              setShowUpsellModal(true);
            }
          }}
        >
          <div className="absolute top-3 left-3 z-20 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
            PREMIUM
          </div>

          <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
            <img 
              src="https://i.postimg.cc/Twf7sMLC/2ab2dd64-2780-4a08-975d-e90e5ddb8aa4.png" 
              alt="Prompt Visual Pro"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply pointer-events-none"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300 mb-2">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.597 8.3829v-2.3324a.0757.0757 0 0 1 .0332-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6464 4.4708 4.4708 0 0 1 .5346 3.0137l-.1419-.0852-4.783-2.7582a.7712.7712 0 0 0-.7806 0l-5.8428 3.3685zm8.3075-2.6105c-.1419-.0804-4.7783-2.7582-4.7783-2.7582a.7948.7948 0 0 0-.3927-.6813V5.5562l-2.02-1.1686a.071.071 0 0 1-.038-.052V2.41a4.504 4.504 0 0 1 4.4945 4.4944 4.4755 4.4755 0 0 1 2.8764 1.0408zM6.4674 3.9859a4.485 4.485 0 0 1-2.3655 1.9728V11.6a.7664.7664 0 0 0-.3879-.6765l-5.8144-3.3543 2.0201-1.1685a.0757.0757 0 0 1 .071 0l4.8303 2.7865a4.504 4.504 0 0 1-2.3408-7.8956zm10.5982 7.7847l-2.0636-1.196-2.0636 1.196v2.392l2.0636 1.196 2.0636-1.196z"/>
                </svg>
              </div>
              <span className="text-white font-bold text-sm tracking-wide uppercase">{isAdmin ? 'Acessar GPT' : 'Desbloquear'}</span>
            </div>
          </div>
          
          <div className="p-4 flex flex-col justify-between border-t border-emerald-900/50 flex-1 bg-[#0a0a0a]">
            <h3 className="text-emerald-400 font-bold text-sm sm:text-base leading-snug mb-2 text-center">
              Prompt Visual Pro (GPT)
            </h3>
            <p className="text-gray-400 text-[11px] sm:text-xs text-center mb-4 leading-tight">Tenha fotos infinitas geradas por Inteligência Artificial.</p>
            <button className="w-full flex items-center justify-center px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              {isAdmin ? 'Acessar Agora' : 'Ver Oferta'}
            </button>
          </div>
        </div>

        {/* PASTAS */}
        {folders.map((folder, index) => {
          const folderPhotos = imagePrompts.filter(p => p.gender === folder.id);
          const coverPhoto = folderPhotos.length > 0 ? folderPhotos[0].imageUrl : null;
          
          return (
            <div 
              key={folder.id}
              onClick={() => {
                setActiveFolderId(folder.id);
                setFilter('Todos');
              }}
              className="group cursor-pointer rounded-xl overflow-hidden bg-gradient-to-br from-[#050505] to-[#111] border-2 border-cyan-900 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:-translate-y-1 transition-all duration-300 flex flex-col relative"
            >
              <div className="absolute top-3 left-3 z-20 bg-cyan-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg border border-cyan-700/50">
                {folderPhotos.length} FOTOS
              </div>

              {/* Botões do Admin (Ficam invisíveis até passar o mouse no desktop) */}
              {isAdmin && (
                <div className="absolute top-2 right-2 flex gap-1 z-30 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setEditingFolder(folder); setFolderNameInput(folder.name); setFolderDescInput(folder.description || ''); setShowFolderModal(true); }}
                    className="p-2 bg-black/80 hover:bg-cyan-600 text-white rounded-lg backdrop-blur-md transition border border-gray-700"
                    title="Editar Pasta"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <div className="flex flex-col gap-1">
                    <button 
                      onClick={(e) => handleMoveFolder(folder, 'up', e)}
                      disabled={index === 0}
                      className="p-1 bg-black/80 hover:bg-gray-600 text-white rounded backdrop-blur-md disabled:opacity-30 transition border border-gray-700"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={(e) => handleMoveFolder(folder, 'down', e)}
                      disabled={index === folders.length - 1}
                      className="p-1 bg-black/80 hover:bg-gray-600 text-white rounded backdrop-blur-md disabled:opacity-30 transition border border-gray-700"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                  <button 
                    onClick={(e) => handleDeleteFolder(folder, e)}
                    className="p-2 bg-black/80 hover:bg-red-600 text-white rounded-lg backdrop-blur-md transition border border-gray-700"
                    title="Excluir Pasta"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}

              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                {coverPhoto ? (
                  <img src={coverPhoto} alt={folder.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a]">
                    <Folder className="w-16 h-16 text-cyan-900/50 group-hover:text-cyan-800/80 transition" />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-cyan-900/20 mix-blend-multiply pointer-events-none"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300 mb-2">
                    <Folder className="w-8 h-8 text-white fill-white/20" />
                  </div>
                  <span className="text-white font-bold text-sm tracking-wide uppercase">Abrir Pasta</span>
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between border-t border-cyan-900/50 flex-1 bg-[#0a0a0a]">
                <h3 className="text-cyan-400 font-bold text-sm sm:text-base leading-snug mb-2 text-center line-clamp-1">
                  {folder.name}
                </h3>
                <p className="text-gray-400 text-[11px] sm:text-xs text-center mb-4 leading-tight line-clamp-2">
                  {folder.description || 'Pasta premium de imagens geradas por Inteligência Artificial.'}
                </p>
                <button className="w-full flex items-center justify-center px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-sm font-bold transition-all shadow-[0_0_15px_rgba(8,145,178,0.3)] pointer-events-none">
                  Acessar Fotos
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal de Criação / Edição de Pasta */}
      {showFolderModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#121212] border border-gray-800 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl flex flex-col">
            <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-[#0a0a0a]">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Folder className="w-5 h-5 text-cyan-400" />
                {editingFolder ? 'Editar Pasta' : 'Nova Pasta'}
              </h2>
              <button onClick={() => setShowFolderModal(false)} className="text-gray-400 hover:text-white transition">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSaveFolder} className="p-6">
              <label className="block text-sm font-medium text-gray-400 mb-2">Nome da Pasta</label>
              <input 
                type="text" 
                required 
                value={folderNameInput} 
                onChange={e => setFolderNameInput(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none mb-4"
                placeholder="Ex: Editorial Inverno"
              />
              
              <label className="block text-sm font-medium text-gray-400 mb-2">Descrição (Opcional)</label>
              <textarea 
                value={folderDescInput} 
                onChange={e => setFolderDescInput(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none mb-6 h-20 custom-scrollbar resize-none"
                placeholder="Ex: Fotos com estilo de inverno, neve e roupas de frio."
              />
              <button type="submit" className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition shadow-lg">
                Salvar Pasta
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL VSL GPT */}
      {showUpsellModal && !isAdmin && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#0a0a0a] border border-emerald-500/30 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto custom-scrollbar shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col animate-in zoom-in-95 relative">
            <div className="p-4 bg-[#0a0a0a]/90 border-b border-gray-800 flex items-center sticky top-0 z-40 backdrop-blur-md">
              <button 
                onClick={() => setShowUpsellModal(false)}
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 font-medium transition-colors bg-black/40 px-4 py-2 rounded-lg border border-gray-800 hover:border-emerald-900"
              >
                <span>← Voltar para a Galeria</span>
              </button>
            </div>
            <div className="w-full aspect-video bg-black relative border-b border-emerald-900/50">
              <iframe 
                src="https://www.youtube.com/embed/ScMzIvxBSi4?si=1wV0l6C6g5zZ9n0B" 
                title="Apresentação Prompt Visual Pro"
                className="absolute inset-0 w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.597 8.3829v-2.3324a.0757.0757 0 0 1 .0332-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.1408 1.6464 4.4708 4.4708 0 0 1 .5346 3.0137l-.1419-.0852-4.783-2.7582a.7712.7712 0 0 0-.7806 0l-5.8428 3.3685zm8.3075-2.6105c-.1419-.0804-4.7783-2.7582-4.7783-2.7582a.7948.7948 0 0 0-.3927-.6813V5.5562l-2.02-1.1686a.071.071 0 0 1-.038-.052V2.41a4.504 4.504 0 0 1 4.4945 4.4944 4.4755 4.4755 0 0 1 2.8764 1.0408zM6.4674 3.9859a4.485 4.485 0 0 1-2.3655 1.9728V11.6a.7664.7664 0 0 0-.3879-.6765l-5.8144-3.3543 2.0201-1.1685a.0757.0757 0 0 1 .071 0l4.8303 2.7865a4.504 4.504 0 0 1-2.3408-7.8956zm10.5982 7.7847l-2.0636-1.196-2.0636 1.196v2.392l2.0636 1.196 2.0636-1.196z"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white leading-tight">Prompt Visual Pro</h3>
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                <strong>Tenha fotos infinitas!</strong> Mande uma foto de referência que o assistente entrega exatamente o prompt necessário para você gerar a sua própria imagem a partir dela. Não dependa mais de bancos de imagens limitados!
              </p>
              <div className="bg-[#111] border border-gray-800 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Investimento único</div>
                  <div className="text-3xl font-black text-white">R$ 19,90</div>
                </div>
                <div className="text-emerald-500 font-bold text-sm bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Liberação Imediata
                </div>
              </div>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Cole o link de checkout (Kiwify, PerfectPay) aqui quando estiver pronto!");
                }}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl font-black text-lg sm:text-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-[1.02]"
              >
                DESBLOQUEAR ACESSO AGORA
              </a>
              <p className="text-center text-xs text-gray-500 font-medium">
                Desbloqueio automático logo após a confirmação do pagamento.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
