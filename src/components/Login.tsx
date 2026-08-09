import React, { useState } from 'react';
import { Lock, Mail, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('E-mail ou senha incorretos.');
      } else {
        setError('Ocorreu um erro ao tentar acessar. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col justify-center items-center p-4 text-white relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Logo Area */}
      <div className="mb-10 text-center relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-black border-b-8 border-b-transparent ml-1"></div>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Área de Membros</h1>
        <p className="text-gray-400 text-sm">Acesse sua conta para continuar</p>
      </div>

      {/* Login Box */}
      <div className="w-full max-w-md bg-[#121212] border border-gray-800 rounded-3xl p-8 shadow-2xl relative z-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-sm rounded-lg p-3 flex items-start gap-2">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 ml-1">E-mail</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-gray-700 text-white text-sm rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 block pl-12 p-4 transition-all"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-medium text-gray-300">Senha</label>
              <a href="#" className="text-xs text-cyan-500 hover:text-cyan-400 transition">Esqueceu?</a>
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-cyan-400 transition-colors">
                <Lock className="w-5 h-5" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-gray-700 text-white text-sm rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 block pl-12 p-4 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl transition-all flex justify-center items-center gap-2 group mt-8 shadow-[0_0_20px_rgba(8,145,178,0.2)] hover:shadow-[0_0_25px_rgba(8,145,178,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Entrar na Plataforma
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
