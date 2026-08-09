import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { Loader2, Plus, Database, Sparkles } from 'lucide-react';
import { imagePrompts } from '../data/imagePrompts';
import { generateUniqueTitle } from '../lib/gemini';

export function AdminTab() {
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState<string[]>([]);

  // Formulário de Nova Foto IA
  const [fotoTitle, setFotoTitle] = useState('');
  const [fotoCategory, setFotoCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [fotoUrl, setFotoUrl] = useState('');
  const [fotoPrompt, setFotoPrompt] = useState('');
  const [fotoGender, setFotoGender] = useState('');
  const [folders, setFolders] = useState<{id: string, name: string}[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'imagePrompts'));
        const cats = new Set<string>();
        querySnapshot.forEach((doc) => {
          if (doc.data().category) {
            cats.add(doc.data().category);
          }
        });
        setCategories(Array.from(cats));
        if (cats.size > 0 && !fotoCategory) {
          setFotoCategory(Array.from(cats)[0]);
        }
      } catch (err) {
        console.error('Erro ao buscar categorias:', err);
      }
    };
    const fetchFolders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'promptFolders'));
        const fList = querySnapshot.docs.map(doc => ({ id: doc.id, name: doc.data().name }));
        setFolders(fList);
        if (fList.length > 0 && !fotoGender) {
          setFotoGender(fList[0].id);
        }
      } catch (err) {
        console.error('Erro ao buscar pastas:', err);
      }
    };
    fetchCategories();
    fetchFolders();
  }, []);

  const handleMigrateData = async () => {
    if (!window.confirm('Tem certeza? Isso fará o upload das fotos locais para o Firestore.')) return;
    setLoading(true);
    try {
      const fotosRef = collection(db, 'imagePrompts');
      for (const foto of imagePrompts) {
        await addDoc(fotosRef, {
          title: foto.title,
          category: foto.category,
          imageUrl: foto.imageUrl,
          prompt: foto.prompt,
          gender: foto.gender,
          createdAt: new Date().toISOString()
        });
      }
      setMessage('Migração concluída com sucesso!');
    } catch (error) {
      console.error(error);
      setMessage('Erro na migração.');
    }
    setLoading(false);
  };

  const handleGenerateAITitle = async () => {
    if (!fotoPrompt) {
      alert('Cole o Prompt da IA primeiro para eu poder analisá-lo!');
      return;
    }
    const finalCategory = fotoCategory === 'new' ? newCategory : fotoCategory;
    if (!finalCategory) {
      alert('Selecione uma categoria primeiro!');
      return;
    }

    setAiLoading(true);
    try {
      const generatedTitle = await generateUniqueTitle(fotoPrompt, finalCategory, fotoGender);
      setFotoTitle(generatedTitle);
      setMessage('Título gerado com sucesso pela IA!');
    } catch (err: any) {
      console.error(err);
      if (err.message.includes('VITE_GEMINI_API_KEY')) {
        alert('A chave do Gemini (VITE_GEMINI_API_KEY) não está configurada no seu .env.local!');
      } else {
        alert('Erro ao gerar título. Tente novamente.');
      }
    }
    setAiLoading(false);
  };

  const handleAddFoto = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    let finalCategory = fotoCategory === 'new' ? newCategory : fotoCategory;
    let finalTitle = fotoTitle.trim();

    if (!finalTitle) {
      const folderName = folders.find(f => f.id === fotoGender)?.name || 'Nova Pasta';
      finalTitle = `Retrato ${finalCategory} ${folderName}`;
    }

    try {
      await addDoc(collection(db, 'imagePrompts'), {
        title: finalTitle,
        category: finalCategory,
        imageUrl: fotoUrl,
        prompt: fotoPrompt,
        gender: fotoGender,
        createdAt: new Date().toISOString()
      });
      setMessage('Foto cadastrada com sucesso!');
      setFotoTitle('');
      setFotoUrl('');
      setFotoPrompt('');
      if (fotoCategory === 'new') {
        if (!categories.includes(finalCategory)) {
          setCategories(prev => [...prev, finalCategory]);
        }
        setFotoCategory(finalCategory);
        setNewCategory('');
      }
    } catch (error) {
      console.error(error);
      setMessage('Erro ao cadastrar foto.');
    }
    setLoading(false);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Painel de Administração</h2>
        <p className="text-gray-400">Gerencie o conteúdo da plataforma diretamente do banco de dados.</p>
      </div>

      {message && (
        <div className="bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 p-4 rounded-lg">
          {message}
        </div>
      )}

      {/* Sessão de Migração */}
      <div className="bg-[#121212] border border-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Database className="w-5 h-5 text-purple-400" />
          Ações de Banco de Dados
        </h3>
        <button
          onClick={handleMigrateData}
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg font-medium transition disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Migrar Fotos do Código para Firebase'}
        </button>
        <p className="text-sm text-gray-500 mt-2">Use isso apenas uma vez para não duplicar os dados.</p>
      </div>

      {/* Formulário de Fotos */}
      <div className="bg-[#121212] border border-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Plus className="w-5 h-5 text-cyan-400" />
          Cadastrar Nova Foto IA
        </h3>
        
        <form onSubmit={handleAddFoto} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1 flex justify-between items-center">
                <span>Título (Opcional)</span>
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
              <input type="text" value={fotoTitle} onChange={e => setFotoTitle(e.target.value)} className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none" placeholder="Ex: Deixe vazio para título automático" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Categoria (Tema)</label>
              <select required value={fotoCategory} onChange={e => setFotoCategory(e.target.value)} className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none">
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
                <option value="new">+ Criar Novo Tema...</option>
              </select>
              {fotoCategory === 'new' && (
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Pasta</label>
              <select value={fotoGender} onChange={e => setFotoGender(e.target.value)} className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none">
                {folders.length === 0 && <option value="">Carregando...</option>}
                {folders.map(f => (
                  <option key={f.id} value={f.id}>{f.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">URL da Imagem</label>
              <input type="text" required value={fotoUrl} onChange={e => setFotoUrl(e.target.value)} className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-500 outline-none" placeholder="Ex: https://i.imgur.com/foto.jpg" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Prompt da IA</label>
            <textarea required value={fotoPrompt} onChange={e => setFotoPrompt(e.target.value)} className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-white h-32 focus:border-cyan-500 outline-none" placeholder="Cole o prompt em inglês aqui..." />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-lg transition-all flex justify-center items-center gap-2 disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Salvar Nova Foto no Banco'}
          </button>
        </form>
      </div>
    </div>
  );
}
