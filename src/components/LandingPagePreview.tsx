import { useState, useEffect } from 'react';
import { 
  Check, Flame, ShieldCheck, Clock, BookOpen, Smartphone, ShoppingBag, 
  Sparkles, Heart, Star, ChevronDown, Award, Zap, Lock, Utensils
} from 'lucide-react';

export function LandingPagePreview() {
  // Timer for flash sale bar
  const [timeLeft, setTimeLeft] = useState(872); // 14min 32s
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 1800));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `00:${m}:${s}`;
  };

  const faqs = [
    {
      q: 'Como funciona o acesso ao guia?',
      a: 'O acesso é imediato! Assim que o seu pagamento for confirmado, você receberá um e-mail com os dados de acesso para baixar o e-book em PDF no seu celular, tablet ou computador.',
    },
    {
      q: 'Funciona em qualquer modelo de Air Fryer?',
      a: 'Sim! Todas as receitas, tempos e temperaturas foram testados nos principais modelos do mercado (Mondial, Philips Walita, Oster, Britânia, Philco, Midea, etc).',
    },
    {
      q: 'Os ingredientes são fáceis de encontrar?',
      a: 'Com certeza. Todas as 50 receitas utilizam ingredientes simples e comuns que você encontra em qualquer supermercado ou feira do seu bairro.',
    },
    {
      q: 'O guia é adequado para iniciantes?',
      a: 'Perfeito para iniciantes! O modo de preparo é detalhado passo a passo, incluindo o tempo e a temperatura exatos para você nunca mais queimar ou errar a receita.',
    },
    {
      q: 'Como funciona a garantia de 7 dias?',
      a: 'Você compra, acessa todo o conteúdo e se não gostar ou achar que não serviu para você, basta nos enviar uma mensagem dentro de 7 dias que devolvemos 100% do valor pago.',
    },
    {
      q: 'O que está incluído nos bônus?',
      a: 'Você recebe gratuitamente o Planner Semanal de Refeições (organizador de cardápio) e o Guia Completo de Temperos e Marinadas Exclusivas.',
    },
  ];

  const categories = [
    { name: 'Café da Manhã', count: '4 receitas', icon: '☕' },
    { name: 'Carnes e Aves', count: '9 receitas', icon: '🍗' },
    { name: 'Peixes e Frutos do Mar', count: '5 receitas', icon: '🐟' },
    { name: 'Legumes e Vegetais', count: '6 receitas', icon: '🥦' },
    { name: 'Petiscos e Snacks', count: '7 receitas', icon: '🍟' },
    { name: 'Massas e Pizzas', count: '3 receitas', icon: '🍕' },
    { name: 'Ovos e Laticínios', count: '3 receitas', icon: '🍳' },
    { name: 'Sobremesas', count: '5 receitas', icon: '🍰' },
    { name: 'Lanches e Wraps', count: '4 receitas', icon: '🥪' },
    { name: 'Fit e Low-Carb', count: '4 receitas', icon: '🥑' },
    { name: 'Pratos Completos', count: '3 receitas', icon: '🍲' },
    { name: 'Festas e Ocasiões', count: '2 receitas', icon: '🎉' },
  ];

  const recipeHighlights = [
    { title: 'Frango Crocante Temperado', cat: 'CARNE', time: '18 min', temp: '200°C', icon: '🍗' },
    { title: 'Croissant de Queijo e Presunto', cat: 'CAFÉ DA MANHÃ', time: '8 min', temp: '180°C', icon: '🥐' },
    { title: 'Batata Frita Crocante Sem Óleo', cat: 'PETISCO', time: '20 min', temp: '200°C', icon: '🍟' },
    { title: 'Brownie de Chocolate Intenso', cat: 'SOBREMESA', time: '15 min', temp: '175°C', icon: '🍰' },
    { title: 'Tilápia ao Limão e Ervas', cat: 'PEIXE', time: '12 min', temp: '180°C', icon: '🐟' },
    { title: 'Wrap Crocante de Frango', cat: 'LANCHE', time: '10 min', temp: '185°C', icon: '🌯' },
    { title: 'Brócolis Assado com Alho', cat: 'FIT', time: '10 min', temp: '195°C', icon: '🥦' },
    { title: 'Pizzetta Individual Rápida', cat: 'MASSA', time: '12 min', temp: '200°C', icon: '🍕' },
  ];

  const testimonials = [
    {
      text: 'Não acreditei que por R$19,90 viria tanto conteúdo. O planner de refeições sozinho já valeu o investimento. Minhas filhas adoram as receitas de petisco!',
      name: 'Ana Maria S.',
      location: 'São Paulo, SP',
      initials: 'AM',
    },
    {
      text: 'Comprei com um pé atrás por ser barato, mas fiquei impressionado. As receitas de peixe são incríveis. Uso o guia de temperos todo dia. Recomendo muito!',
      name: 'Ricardo C.',
      location: 'Belo Horizonte, MG',
      initials: 'RC',
    },
    {
      text: 'Minha air fryer estava pegando poeira. Depois do guia, uso ela todo dia! As receitas são simples e rápidas — perfeitas pra quem tem pouco tempo como eu.',
      name: 'Juliana L.',
      location: 'Curitiba, PR',
      initials: 'JL',
    },
    {
      text: 'Eu e meu marido ficamos disputando quem faz a próxima receita. Nunca fui de cozinhar, mas com as instruções detalhadas ficou tudo gostoso!',
      name: 'Patrícia F.',
      location: 'Porto Alegre, RS',
      initials: 'PF',
    },
    {
      text: 'O brownie de chocolate ficou melhor do que o de pastelaria! Já fiz 3 vezes essa semana. O guia de temperos também mudou meu frango pra sempre.',
      name: 'Carlos F.',
      location: 'Recife, PE',
      initials: 'CF',
    },
    {
      text: 'Sou nutricionista e indico para os meus pacientes! As receitas fit e low-carb são muito bem montadas e as informações nutricionais ajudam bastante.',
      name: 'Mariana R.',
      location: 'Florianópolis, SC',
      initials: 'MR',
    },
  ];

  return (
    <div className="w-full bg-[#0b0c10] text-[#e4e4e7] font-sans antialiased selection:bg-orange-500 selection:text-white">
      {/* 1. Top Announcement Bar */}
      <div className="bg-gradient-to-r from-red-700 via-orange-600 to-red-700 py-2 px-4 text-center text-xs font-bold text-white flex items-center justify-between sm:justify-center gap-3 shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-300 animate-pulse fill-yellow-300" />
          <span>Oferta relâmpago! Expira em: <span className="font-mono text-yellow-300 font-extrabold text-sm">{formatTime(timeLeft)}</span> — Aproveite antes que acabe!</span>
        </div>
        <a href="#checkout" className="hidden sm:inline-block bg-white text-orange-600 px-3 py-1 rounded-full text-[11px] font-extrabold hover:bg-yellow-100 transition-colors uppercase">
          Quero Agora — R$19,90
        </a>
      </div>

      {/* 2. Header / Navbar */}
      <header className="border-b border-[#27293a] bg-[#0b0c10]/90 backdrop-blur-md sticky top-8 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
              <Flame className="w-5 h-5 fill-white" />
            </div>
            <span className="font-extrabold text-lg tracking-tight text-white">
              Fritadeira<span className="text-orange-500">Gourmet</span>
            </span>
          </div>

          <a
            href="#checkout"
            className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md shadow-orange-500/20 flex items-center gap-1.5"
          >
            Quero Agora — R$19,90
          </a>
        </div>
      </header>

      {/* 3. Hero Section */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Glow Background */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>50 RECEITAS TESTADAS E APROVADAS</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          Transforme sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">Air Fryer</span> em uma cozinha gourmet
        </h1>

        <p className="text-zinc-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
          50 receitas organizadas por categoria, prontas em até 20 minutos, sem segredo. Café da manhã, almoço, jantar, lanche e sobremesa — tudo numa só coleção.
        </p>

        {/* Bullet List */}
        <div className="flex flex-col items-start gap-3 max-w-lg mb-10 text-sm text-zinc-200">
          {[
            '50 receitas com ingredientes simples e acessíveis',
            'Economize até R$400/mês em delivery e restaurantes',
            'Acesso imediato — baixe agora no celular ou tablet',
            'Inclui 2 bônus exclusivos (valor total: R$79,80)',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="font-medium text-left">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#checkout"
          className="group relative w-full sm:w-auto px-8 py-4.5 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white font-extrabold text-base sm:text-lg uppercase tracking-wider rounded-xl shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
        >
          <Flame className="w-5 h-5 fill-white animate-bounce" />
          <span>Quero Meu Guia por Apenas R$19,90</span>
        </a>

        <div className="flex items-center justify-center gap-6 mt-4 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-emerald-400" /> Pagamento 100% seguro</span>
          <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-amber-400" /> Acesso imediato</span>
        </div>
      </section>

      {/* 4. Stats / Metrics Bar */}
      <section className="border-y border-[#27293a] bg-[#13141c]">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { val: '50+', label: 'receitas testadas' },
            { val: '12', label: 'categorias diferentes' },
            { val: '20min', label: 'tempo médio por refeição' },
            { val: 'R$400', label: 'economizados por mês' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 tracking-tight">
                {s.val}
              </span>
              <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Section: O Que Está Incluído */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
          O QUE ESTÁ INCLUÍDO
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Tudo o que você precisa para <span className="text-orange-500">dominar sua Air Fryer</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-12">
          Um guia completo, direto ao ponto, feito para quem quer praticidade sem abrir mão do sabor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            {
              title: '50 Receitas Organizadas',
              desc: 'Divididas em 12 categorias — do café da manhã à sobremesa. Cada receita com tempo, temperatura e modo de preparo exatos.',
              icon: BookOpen,
            },
            {
              title: 'Acesso em Qualquer Dispositivo',
              desc: 'Formato digital compatível com celular, tablet e computador. Abra na cozinha enquanto cozinha, sem precisar imprimir nada.',
              icon: Smartphone,
            },
            {
              title: 'Lista de Compras Semanal',
              desc: 'Planejamento de cardápio para 7 dias com lista de mercado pronta, organizada por seção do supermercado.',
              icon: ShoppingBag,
            },
            {
              title: 'Tempo e Temperatura Certos',
              desc: 'Chega de queimar ou deixar cru! Cada receita informa o tempo e a temperatura ideais para resultados perfeitos sempre.',
              icon: Clock,
            },
            {
              title: 'Opções Saudáveis e Fit',
              desc: 'Mais de 15 receitas low-carb, sem glúten e veganas. Coma bem sem culpa e sem abrir mão do gosto.',
              icon: Heart,
            },
            {
              title: 'Receitas para a Família Toda',
              desc: 'Petiscos para crianças, pratos para o casal, opções para festas. Tem receita certa para cada momento do dia.',
              icon: Utensils,
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#13141c] border border-[#27293a] hover:border-orange-500/40 transition-all flex flex-col gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Section: Categorias */}
      <section className="py-20 px-6 bg-[#13141c] border-y border-[#27293a]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            CATEGORIAS
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            50 receitas divididas em <span className="text-orange-500">12 categorias</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-12">
            Do café da manhã à sobremesa, tem receita certa para qualquer hora do dia ou da fome.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((c, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#0b0c10] border border-[#27293a] hover:border-orange-500/30 transition-all flex flex-col items-center text-center gap-1.5">
                <span className="text-3xl mb-1">{c.icon}</span>
                <span className="font-bold text-white text-sm">{c.name}</span>
                <span className="text-xs text-amber-400 font-medium">{c.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Section: Destaques de Receitas */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
          DESTAQUES
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Algumas receitas que você vai <span className="text-orange-500">amar fazer</span>
        </h2>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-12">
          Seleção das receitas mais curtidas e compartilhadas pelos nossos clientes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {recipeHighlights.map((r, i) => (
            <div key={i} className="p-5 rounded-2xl bg-[#13141c] border border-[#27293a] hover:border-orange-500/40 transition-all flex flex-col gap-3">
              <div className="w-full h-28 rounded-xl bg-[#0b0c10] border border-[#27293a] flex items-center justify-center text-4xl">
                {r.icon}
              </div>
              <span className="text-[10px] font-bold text-amber-400 tracking-wider uppercase">{r.cat}</span>
              <h3 className="font-bold text-white text-base leading-snug">{r.title}</h3>
              <div className="flex items-center gap-3 text-xs text-zinc-400 mt-auto pt-2 border-t border-[#27293a]">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-orange-400" /> {r.time}</span>
                <span className="flex items-center gap-1"><Flame className="w-3.5 h-3.5 text-red-400" /> {r.temp}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Section: Bônus Exclusivos */}
      <section className="py-20 px-6 bg-[#13141c] border-y border-[#27293a]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            🎁 BÔNUS EXCLUSIVOS
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Compre hoje e leve <span className="text-orange-500">2 bônus grátis</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-12">
            Além das 50 receitas, você recebe dois materiais extras que valem muito mais do que o preço do guia inteiro.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Bonus 1 */}
            <div className="p-6 rounded-2xl bg-[#0b0c10] border border-emerald-500/40 relative overflow-hidden flex flex-col gap-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase w-fit">
                🎁 BÔNUS 1 — GRÁTIS
              </div>
              <h3 className="text-xl font-bold text-white">Planner Semanal de Refeições</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Um planejador completo de cardápio para 4 semanas. Organize todas as refeições com antecedência, monte sua lista de compras e economize tempo.
              </p>
              <div className="text-xs text-emerald-400 font-bold mt-auto pt-2">
                Valor real: <span className="line-through text-zinc-500">R$29,90</span> — <span className="text-emerald-400 font-extrabold">Grátis pra você</span>
              </div>
            </div>

            {/* Bonus 2 */}
            <div className="p-6 rounded-2xl bg-[#0b0c10] border border-emerald-500/40 relative overflow-hidden flex flex-col gap-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase w-fit">
                🎁 BÔNUS 2 — GRÁTIS
              </div>
              <h3 className="text-xl font-bold text-white">Guia de Temperos e Marinadas</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                O segredo do frango suculento e da carne macia está no tempero certo. Este guia ensina 30 combinações exclusivas de marinadas.
              </p>
              <div className="text-xs text-emerald-400 font-bold mt-auto pt-2">
                Valor real: <span className="line-through text-zinc-500">R$49,90</span> — <span className="text-emerald-400 font-extrabold">Grátis pra você</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Section: Depoimentos */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
          DEPOIMENTOS
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Mais de <span className="text-orange-500">8.400 pessoas</span> já transformaram sua cozinha
        </h2>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-12">
          Veja o que dizem nossos clientes que já estão aplicando as receitas no dia a dia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#13141c] border border-[#27293a] flex flex-col gap-4">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-auto pt-3 border-t border-[#27293a]">
                <div className="w-9 h-9 rounded-full bg-orange-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-white text-xs">{t.name}</div>
                  <div className="text-[10px] text-zinc-500">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Section: Checkout / Oferta Especial */}
      <section id="checkout" className="py-20 px-6 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
          OFERTA ESPECIAL
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
          Garanta o seu guia <span className="text-orange-500">agora mesmo</span>
        </h2>
        <p className="text-zinc-400 text-sm mb-10">
          Aproveite enquanto o desconto está ativo. O preço pode voltar a R$79,90 a qualquer momento.
        </p>

        {/* Pricing Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#13141c] border-2 border-orange-500/60 shadow-2xl shadow-orange-500/15 relative overflow-hidden flex flex-col items-center">
          <div className="px-4 py-1.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider mb-6">
            ⚡ OFERTA RELÂMPAGO — ECONOMIZE 75%
          </div>

          <div className="text-zinc-500 line-through text-lg font-bold">De R$79,90</div>

          <div className="flex items-baseline gap-1 my-2">
            <span className="text-2xl font-extrabold text-white">R$</span>
            <span className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 tracking-tight">
              19,90
            </span>
          </div>

          <p className="text-xs text-emerald-400 font-semibold mb-8">Pagamento único — acesso para sempre</p>

          <div className="flex flex-col items-start gap-3 w-full max-w-md text-left text-xs sm:text-sm text-zinc-300 mb-8 border-y border-[#27293a] py-6">
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Fritadeira Gourmet — 50 Receitas Testadas</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Bônus 1: Planner Semanal de Refeições (R$29,90)</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Bônus 2: Guia de Temperos e Marinadas (R$49,90)</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Acesso Imediato — baixe em segundos</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Compatível com celular, tablet e computador</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Atualizações gratuitas para sempre</div>
          </div>

          <button className="w-full py-4.5 px-8 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white font-extrabold text-base sm:text-lg uppercase tracking-wider rounded-xl shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2">
            <Flame className="w-5 h-5 fill-white" />
            <span>Quero Meu Guia Completo por R$19,90</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-emerald-400 mt-4 font-semibold">
            <ShieldCheck className="w-4 h-4" /> Garantia de 7 dias — satisfação total ou dinheiro de volta
          </div>
        </div>
      </section>

      {/* 11. Section: Garantia Incondicional */}
      <section className="py-12 px-6 max-w-3xl mx-auto">
        <div className="p-8 rounded-2xl bg-[#13141c] border border-[#27293a] flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Garantia Incondicional de 7 Dias</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Se por qualquer motivo você não ficar satisfeito com o guia, basta enviar um e-mail em até 7 dias após a compra e devolveremos 100% do seu dinheiro, sem perguntas, sem burocracia. O risco é zero.
            </p>
          </div>
        </div>
      </section>

      {/* 12. FAQ Accordion */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
          DÚVIDAS FREQUENTES
        </div>

        <h2 className="text-3xl font-extrabold text-white tracking-tight mb-10">
          Perguntas que todo mundo faz
        </h2>

        <div className="space-y-3 text-left">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl bg-[#13141c] border border-[#27293a] overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left font-bold text-white text-sm flex items-center justify-between gap-4 cursor-pointer hover:text-orange-400 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-orange-400' : 'text-zinc-500'}`} />
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 text-xs text-zinc-400 leading-relaxed border-t border-[#27293a]/50 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 13. Bottom Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#13141c] to-[#0b0c10] border-t border-[#27293a] text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Sua air fryer estava esperando por isso
          </h2>
          <p className="text-zinc-400 text-sm">
            50 receitas, 2 bônus exclusivos e acesso imediato por apenas R$19,90.
          </p>

          <a
            href="#checkout"
            className="inline-flex py-4 px-8 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white font-extrabold text-base uppercase tracking-wider rounded-xl shadow-xl shadow-orange-500/30 hover:scale-[1.02] transition-all cursor-pointer items-center justify-center gap-2"
          >
            <Flame className="w-5 h-5 fill-white" />
            <span>Sim, Quero Meu Guia por R$19,90</span>
          </a>
        </div>
      </section>

      {/* 14. Footer */}
      <footer className="border-t border-[#27293a] py-8 px-6 text-center text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto space-y-3">
          <div className="font-bold text-white text-sm">Fritadeira Gourmet</div>
          <p>
            Este produto é um guia digital de receitas em formato PDF. Este site não é afiliado a nenhuma marca de eletrodomésticos.
          </p>
          <div className="flex justify-center gap-4 text-zinc-400">
            <a href="#" className="hover:underline">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:underline">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:underline">Contato</a>
          </div>
          <div>© 2025 Fritadeira Gourmet. Todos os direitos reservados.</div>
        </div>
      </footer>
    </div>
  );
}
