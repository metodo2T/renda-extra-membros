import React, { useState, useEffect } from 'react';
import { ImagePrompt } from '../data/imagePrompts';
import { X, Loader2, Save, Sparkles } from 'lucide-react';
import { db } from '../lib/firebase';
import { doc, updateDoc, getDocs, collection } from 'firebase/firestore';
import { generateUniqueTitle } from '../lib/gemini';

interface Props {
  promptData: ImagePrompt;
  onClose: () => void;
  onSave: () => void;
}

export function EditImagePromptModal({ promptData, onClose, onSave }: Props) {
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  
  const [title, setTitle] = useState(promptData.title);
  const [category, setCategory] = useState(promptData.category);
  const [newCategory, setNewCategory] = useState('');
  const [imageUrl, setImageUrl] = useState(promptData.imageUrl);
  const [prompt, setPrompt] = useState(promptData.prompt);
  const [gender, setGender] = useState(promptData.gender);
  const [folders, setFolders] = useState<{id: string, name: string}[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'imagePrompts'));
        const cats = new Set<string>();
        querySnapshot.forEach((d) => {
          if (d.data().category) cats.add(d.data().category);
        });
        setCategories(Array.from(cats));
      } catch (err) {
        console.error('Erro ao buscar categorias:', err);
      }
    };
    const fetchFolders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'promptFolders'));
        const fList = querySnapshot.docs.map(doc => ({ id: doc.id, name: doc.data().name }));
        setFolders(fList);
      } catch (err) {
        console.error('Erro ao buscar pastas:', err);
      }
    };
    fetchCategories();
    fetchFolders();
  }, []);

  const handleGenerateAITitle = async () => {
    if (!prompt) {
      alert('Cole o Prompt da IA primeiro para eu poder analisá-lo!');
      return;
    }
    const finalCategory = category === 'new' ? newCategory : category;
    if (!finalCategory) {
      alert('Selecione uma categoria primeiro!');
      return;
    }

    setAiLoading(true);
    try {
      const generatedTitle = await generateUniqueTitle(prompt, finalCategory, gender);
      setTitle(generatedTitle);
    } catch (err: any) {
      console.error(err);
      if (err.message.includes('VITE_GEMINI_API_KEY')) {
        alert('A chave do Gemini (VITE_GEMINI_API_KEY) não está configurada no seu .env.local!');
      } else {
        alert('Erro ao gerar título com IA. Tente novamente.');
      }
    }
    setAiLoading(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    let finalCategory = category === 'new' ? newCategory : category;
    let finalTitle = title.trim();

    if (!finalTitle) {
      const folderName = folders.find(f => f.id === gender)?.name || 'Nova Pasta';
      finalTitle = `Retrato ${finalCategory} ${folderName}`;
    }

    try {
      const docRef = doc(db, 'imagePrompts', promptData.id);
      await updateDoc(docRef, {
        title: finalTitle,
        category: finalCategory,
        imageUrl: imageUrl,
        prompt: prompt,
        gender: gender
      });
      onSave(); // Fecha o modal e atualiza a view
    } catch (error) {
      console.error(error);
      alert('Erro ao atualizar foto.');
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="relative bg-[#0f0f0f] border border-gray-800 rounded-3xl w-full max-w-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto custom-scrollbar">
        
        <div className="sticky top-0 z-10 bg-[#0f0f0f] border-b border-gray-800 p-6 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            Editar Foto
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={handleSave} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1 flex justify-between items-center">
                  <span>Título</span>
                  <button 
                    type="button" 
                    onClick={handleGenerateAITitle}
                    disabled={aiLoading}
                    className="text-xs bg-purple-900/50 hover:bg-purple-800 text-purple-300 px-2 py-1 rounded flex items-center gap-1 transition"
                  >
                    {aiLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                    Gerar Título IA
                  </button>
                </label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Categoria (Tema)</label>
                <select required value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none">
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                  {!categories.includes(promptData.category) && (
                    <option value={promptData.category}>{promptData.category}</option>
                  )}
                  <option value="new">+ Criar Novo Tema...</option>
                </select>
                {category === 'new' && (
                  <input 
                    type="text" 
                    required 
                    value={newCategory} 
                    onChange={e => setNewCategory(e.target.value)} 
                    className="w-full bg-[#1a1a1a] border border-purple-500/50 rounded-lg p-3 text-white focus:border-purple-500 outline-none mt-2" 
                    placeholder="Nome do novo tema..." 
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Pasta</label>
                <select value={gender} onChange={e => setGender(e.target.value)} className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none">
                  {folders.length === 0 && <option value="">Carregando...</option>}
                  {folders.map(f => (
                    <option key={f.id} value={f.id}>{f.name}</option>
                  ))}
                  {/* Se a pasta antiga não existir mais, mostramos o ID dela */}
                  {!folders.find(f => f.id === gender) && (
                    <option value={gender}>{gender}</option>
                  )}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">URL da Imagem</label>
                <input type="text" required value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Prompt da IA</label>
              <textarea required value={prompt} onChange={e => setPrompt(e.target.value)} className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 text-white h-48 focus:border-cyan-500 outline-none custom-scrollbar" />
            </div>

            <div className="pt-4 border-t border-gray-800 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-lg font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-8 py-3 rounded-lg transition-all flex justify-center items-center gap-2 disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Save className="w-5 h-5" /> Salvar Alterações</>}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
