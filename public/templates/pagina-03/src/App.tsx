import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Video,
  CheckCircle2,
  Trophy,
  Users,
  Lock,
  BookOpen,
  Layers,
  HelpCircle,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";

function LoopingCounter({
  from,
  to,
  duration = 3,
}: {
  from: number;
  to: number;
  duration?: number;
}) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString("pt-BR"),
  );

  useEffect(() => {
    const controls = animate(count, to, {
      duration: duration,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 1.5,
    });
    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export default function App() {
  const turmasDestaque: {
    city: string;
    date: string;
    edition: string;
    whatsappMsg: string;
    image: string;
    actionTag: string;
    locked?: boolean;
  }[] = [
    {
      city: "Cascavel/PR",
      date: "22 e 23 de Agosto",
      edition: "1ª edição",
      whatsappMsg:
        "Olá, vim pelo link da bio e quero mais informações referente a turma de Cascavel/PR",
      image:
        "https://i.postimg.cc/Nf4S8g3H/istockphoto-1872366972-612x612.jpg",
      actionTag: "Garanta sua vaga",
    },
    {
      city: "Balneário Camboriú/SC",
      date: "29 e 30 de Agosto",
      edition: "2ª turma",
      whatsappMsg:
        "Olá, vim pelo link da bio e quero mais informações referente a turma de Balneário Camboriú/SC",
      image:
        "https://i.postimg.cc/rwmPpCF3/360-F-592430747-Yt-Wr-HAf0RFrf-WEvdr-FEi-Smcv-Zo-ZG442N.jpg",
      actionTag: "Garanta sua vaga",
    },
    {
      city: "Campinas/SP",
      date: "25 e 26 de Julho",
      edition: "1ª edição",
      whatsappMsg:
        "Olá, vim pelo link da bio e quero mais informações referente a turma de Campinas/SP",
      image:
        "https://i.postimg.cc/kX9r7bbj/240-F-358616030-cq-Cg-ZVgq-URfmov-KNBa9rvvs-U7jt-Bfrd7.jpg",
      actionTag: "Esgotado",
      locked: true,
    },
    {
      city: "Foz do Iguaçu/PR",
      date: "11 e 12 de Julho",
      edition: "3ª edição",
      whatsappMsg:
        "Olá, vim pelo link da bio e quero mais informações referente a turma de Foz do Iguaçu/PR",
      image:
        "https://i.postimg.cc/8kR3Xz0c/istockphoto-488388458-612x612.jpg",
      actionTag: "Esgotado",
      locked: true,
    },
    {
      city: "Maringá/PR",
      date: "06 e 07 de Junho",
      edition: "11ª edição",
      whatsappMsg:
        "Olá, vim pelo link da bio e quero mais informações referente a turma de Maringá/PR",
      image:
        "https://i.postimg.cc/TY8dg1Wt/360-F-1915916746-q5e3gs-X6u-Vcb-Zl-Njh-Lmxnvv2j3o-JKy-EE.jpg",
      actionTag: "Esgotado",
      locked: true,
    },
  ];

  const servicos = [
    {
      title: "Curso Online Método 2T",
      desc: "Aprenda do zero a fazer anúncios que vendem na internet. Passo a passo validado por +900 alunos.",
      buttonText: "Acessar Curso",
      url: "https://online.metododoist.com.br",
      image:
        "https://i.postimg.cc/J7cDR1FQ/Copia-de-Copia-de-REV-PV-MODELO-02.jpg",
      imageClass: "object-cover object-[center_15%]",
    },
    {
      title: "Delivery Lucrativo",
      desc: "Técnicas simples e diretas para você atrair pessoas e lotar o seu delivery de pedidos.",
      buttonText: "Saiba mais",
      url: "https://delivery.metododoist.com.br/",
      image:
        "https://i.postimg.cc/Xv0nh8nT/IMG-5950.jpg",
      imageClass: "object-cover",
    },
    {
      title: "Contrate Nossa Agência",
      desc: "Deixe os anúncios da sua empresa com a gente e veja o número de clientes multiplicar.",
      buttonText: "Saiba mais",
      url: "https://wa.me/554499688125?text=ol%C3%A1%20vim%20do%20link%20na%20bio%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20presta%C3%A7%C3%A3o%20de%20servi%C3%A7os%20da%20agencia",
      image:
        "https://i.postimg.cc/5N5KrzyZ/142b363d-279c-4ca8-9ff1-d6396398510e.jpg",
      imageClass: "object-cover",
    },
  ];

  const faq = [
    {
      q: "O que é o Método 2T?",
      a: "O Método 2T é um treinamento completo focado em gerar resultados reais e escaláveis através de anúncios online e estratégias digitais.",
    },
    {
      q: "Preciso ter experiência prévia para participar?",
      a: "Não. Nossos cursos e treinamentos são desenhados tanto para iniciantes absolutos quanto para quem já tem alguma experiência e quer aprimorar os resultados.",
    },
    {
      q: "Para quem é indicado o curso?",
      a: "Especialmente para empreendedores, donos de negócios locais, prestadores de serviço e futuros gestores de tráfego que querem dominar as vendas na internet.",
    },
    {
      q: "Como funciona a contratação da Agência?",
      a: "Nossa equipe cuida de toda a operação de anúncios da sua empresa. Entre em contato pelo WhatsApp para agendarmos uma reunião e entendermos o seu momento.",
    },
    {
      q: "O curso online oferece suporte?",
      a: "Sim! Você terá acesso a uma comunidade exclusiva para tirar dúvidas, além de suporte com nossa equipe.",
    },
  ];

  const navLinks = [
    { name: "Turmas Presenciais", id: "turmas", icon: Users },
    { name: "Sobre o Método", id: "sobre", icon: BookOpen },
    { name: "Serviços", id: "servicos", icon: Layers },
    { name: "FAQ", id: "faq", icon: HelpCircle },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollTo = (id: string, offset: number = 80) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-[#d97706]/40 selection:text-white pb-20 overflow-x-hidden pt-[160px]">
      {/* Top Header / Fixed Nav */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="absolute inset-0 bg-[#060606]/85 backdrop-blur-2xl border-b border-zinc-800/50 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" />
        
        {/* Subtle Top Glow */}
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-64 h-[1px] bg-gradient-to-r from-transparent via-[#d97706] to-transparent shadow-[0_0_15px_#d97706]"
        />

        <div className="relative">
          {/* Top Section */}
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="flex flex-col">
                <span className="font-bold text-[20px] sm:text-[24px] text-white tracking-tight leading-none group-hover:text-white/90 transition-colors">
                  Bruno César
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#d97706] tracking-widest font-bold uppercase mt-1">
                  Método 2T
                </span>
              </div>
            </div>

            <motion.a
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              href="https://wa.me/554499688125"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-[12px] sm:text-[13px] font-bold tracking-wide bg-gradient-to-b from-[#25D366] to-[#128C7E] text-white px-5 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2 rounded-lg hover:from-[#20bd5a] hover:to-[#0f7a6e] transition-all overflow-hidden group shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.5)] border border-[#25D366]/50"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5 relative z-10"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              <span className="relative z-10 font-sans tracking-wide">FALE CONOSCO</span>
            </motion.a>
          </div>

          {/* Bottom Section: Navigation */}
          <div className="w-full relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-80" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#d97706]/40 to-transparent" />
            
            <nav className="max-w-[800px] mx-auto overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <ul className="flex items-center justify-between sm:justify-center w-full pb-[2px] px-1 sm:px-2 gap-1 sm:gap-6">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.id} className="relative flex-1 sm:flex-none group">
                      <button
                        onClick={() => scrollTo(link.id)}
                        className="w-full flex justify-center py-3 sm:py-4 px-1 sm:px-6 transition-colors focus:outline-none"
                      >
                        <motion.div
                          whileHover={{ y: -3 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          className="flex flex-col items-center justify-end gap-1.5 sm:gap-2.5 h-[42px] sm:h-[50px]"
                        >
                          <Icon className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-zinc-400 group-hover:text-white transition-colors duration-300 shrink-0" strokeWidth={1.5} />
                          <span className="text-[9px] min-[375px]:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider sm:tracking-[0.15em] text-zinc-400 group-hover:text-white transition-colors duration-300 text-center leading-[1.1]">
                            {link.name}
                          </span>
                        </motion.div>
                      </button>
                      
                      {/* Hover Line */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-[#ffb259] to-[#d97706] rounded-t-full transition-all duration-300 ease-out group-hover:w-[40px] sm:group-hover:w-[60px]" />
                      
                      {/* Divider (except last) */}
                      {link.id !== "faq" && (
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[1px] h-10 bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50" />
          </div>
        </div>
      </motion.header>

      {/* Header Hero */}
      <div className="relative w-full max-w-[1000px] mx-auto">
        {/* Cover Video */}
        <div className="relative w-full h-[250px] sm:h-[350px] bg-zinc-900 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            src="https://res.cloudinary.com/dvhswjuep/video/upload/q_auto/f_auto/v1779321196/copy_F5D17F38-5E6F-43C3-9DDA-CFF7B95EB43F_potnx4.mov"
            className="absolute inset-0 w-full h-full object-cover object-[center_20%] motion-safe:transition-opacity motion-safe:duration-700"
          />
          <div className="absolute inset-0 bg-[#030303]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 sm:via-transparent to-transparent opacity-90" />
        </div>

        {/* Profile Info */}
        <div className="relative flex flex-col items-center -mt-16 sm:-mt-20 px-4 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[#030303] overflow-hidden shadow-2xl relative z-10 bg-zinc-900 shrink-0"
          >
            <img
              src="https://i.postimg.cc/qMnYYdg4/IMG_5745.jpg"
              alt="Bruno César"
              className="w-full h-full object-cover object-[center_20%] scale-110"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-bold text-[28px] sm:text-[36px] tracking-tight text-white mt-4 mb-2 leading-none text-center"
          >
            Bruno César
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-[#d97706] text-[16px] sm:text-[18px] font-serif italic mx-auto text-center whitespace-nowrap flex items-center justify-center gap-2"
          >
            Especialista em Tráfego Pago e Orgânico
          </motion.p>
        </div>
      </div>

      <main className="relative z-10 w-full max-w-[700px] mx-auto px-4 flex flex-col mt-4">
        {/* Animated Stats Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-[650px] mx-auto justify-center items-stretch mt-10 mb-24">
          {/* Card 1 */}
          <div className="relative w-full sm:w-1/2 rounded-[20px] bg-[#080808] border border-white/10 overflow-hidden shadow-2xl">
            {/* Top Glow Line */}
            <div className="absolute top-0 inset-x-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#d97706] to-transparent opacity-70" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40px] h-[1px] bg-white shadow-[0_0_10px_#ffffff]" />

            <div className="relative p-6 lg:p-7 flex items-center justify-center gap-5 h-full">
              <div className="w-12 h-12 lg:w-14 lg:h-14 shrink-0 rounded-2xl border border-white/10 flex items-center justify-center bg-zinc-900/40 relative">
                <Trophy
                  className="w-5 h-5 lg:w-6 lg:h-6 text-[#d97706]"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex flex-col items-center flex-1">
                <span className="text-[40px] lg:text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#ffedb3] via-[#ffb259] to-[#d97706] drop-shadow-[0_2px_15px_rgba(217,119,6,0.4)] leading-none text-center font-sans tracking-tight">
                  <LoopingCounter from={0} to={30} duration={2} />+
                </span>
                <span className="text-[10px] lg:text-[11px] text-zinc-300 uppercase tracking-[0.2em] font-medium mt-3 text-center whitespace-nowrap">
                  Edições Presenciais
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full sm:w-1/2 rounded-[20px] bg-[#080808] border border-white/10 overflow-hidden shadow-2xl">
            {/* Top Glow Line */}
            <div className="absolute top-0 inset-x-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#d97706] to-transparent opacity-70" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40px] h-[1px] bg-white shadow-[0_0_10px_#ffffff]" />

            <div className="relative p-6 lg:p-7 flex items-center justify-center gap-5 h-full">
              <div className="w-12 h-12 lg:w-14 lg:h-14 shrink-0 rounded-2xl border border-white/10 flex items-center justify-center bg-zinc-900/40 relative">
                <Users
                  className="w-5 h-5 lg:w-6 lg:h-6 text-[#d97706]"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex flex-col items-center flex-1">
                <span className="text-[40px] lg:text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#ffedb3] via-[#ffb259] to-[#d97706] drop-shadow-[0_2px_15px_rgba(217,119,6,0.4)] leading-none text-center font-sans tracking-tight">
                  <LoopingCounter from={0} to={1000} duration={3} />+
                </span>
                <span className="text-[10px] lg:text-[11px] text-zinc-300 uppercase tracking-[0.2em] font-medium mt-3 text-center whitespace-nowrap">
                  Alunos Formados
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Agenda Destaque & Alunos */}
        <section id="turmas" className="mb-12 pt-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="flex flex-col items-center mb-16 text-center px-4 relative max-w-[600px] mx-auto"
          >
            {/* Glow / Flare line */}
            <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[250px] h-[1px] bg-gradient-to-r from-transparent via-[#d97706] to-transparent opacity-80" />
            <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[60px] h-[1px] bg-white shadow-[0_0_15px_#ffffff]" />
            <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[4px] h-[4px] rounded-full bg-white shadow-[0_0_10px_#ffffff]" />

            <h2 className="text-white font-bold text-[34px] sm:text-[42px] leading-[1.1] text-center max-w-[600px] tracking-tight mt-4">
              Próximas Turmas
              <br />
              Presenciais
            </h2>

            <div className="flex items-center justify-center gap-6 mt-10">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d97706]" />
              <span className="text-[#d97706] text-[12px] sm:text-[14px] tracking-[0.3em] uppercase font-medium">
                Método 2T
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d97706]" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {turmasDestaque.map((turma, index) => (
              <motion.a
                variants={fadeUp}
                key={index}
                href={turma.locked ? undefined : `https://wa.me/554499688125?text=${encodeURIComponent(turma.whatsappMsg)}`}
                target={turma.locked ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`bg-[#0a0a0a]/90 backdrop-blur-sm border border-zinc-800/80 rounded-2xl overflow-hidden transition-all flex flex-col relative ${turma.locked ? "opacity-90 cursor-default" : "hover:border-[#25D366]/60 shadow-lg hover:shadow-[0_8px_30px_rgba(37,211,102,0.15)] group hover:-translate-y-1"}`}
                whileHover={turma.locked ? {} : { y: -4 }}
                whileTap={turma.locked ? {} : { scale: 0.98 }}
              >
                {!turma.locked && <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />}
                
                <div className={`w-full aspect-[16/8] bg-zinc-900 flex items-center justify-center relative overflow-hidden transition-transform duration-700 ${!turma.locked ? "group-hover:scale-[1.03]" : ""}`}>
                  <img
                    src={turma.image}
                    alt={turma.city}
                    className={`w-full h-full object-cover transition-opacity ${turma.locked ? "opacity-40 grayscale" : "opacity-80 group-hover:opacity-100"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                  {turma.locked && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 mb-2">
                        <Lock className="w-5 h-5 text-zinc-300" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-5 flex flex-col text-center flex-1 justify-center bg-[#0a0a0a] relative -mt-6">
                  <h4 className={`font-bold text-[18px] sm:text-[20px] leading-tight mb-1.5 z-10 transition-colors ${turma.locked ? "text-zinc-400" : "text-white group-hover:text-[#25D366]"}`}>
                    {turma.city}
                  </h4>
                  <span className="text-zinc-400 text-[13px] sm:text-[14px] font-medium leading-[1.4] z-10 block mb-5">
                    {turma.date}
                  </span>

                  <div className={`w-full text-center py-2.5 sm:py-3 rounded-xl font-bold text-[12px] sm:text-[13px] tracking-widest transition-all uppercase flex items-center justify-center gap-2 relative z-10 ${turma.locked ? "bg-zinc-800 text-zinc-500 border border-zinc-700" : "bg-[#25D366] text-white shadow-[0_4px_15px_rgba(37,211,102,0.25)] hover:bg-[#20bd5a]"}`}>
                    {!turma.locked && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-[16px] h-[16px]"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                    )}
                    {turma.locked && <Lock className="w-4 h-4" />}
                    {turma.actionTag}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </section>

        {/* Sobre o Método 2T */}
        <section id="sobre" className="pt-20 -mt-20 mb-16">
          {/* ANIMAÇÃO PREMIUM - MÉTODO 2T PRESENCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center justify-center py-8 mb-8 overflow-hidden z-10"
          >
            {/* GLOW DE FUNDO */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute pointer-events-none w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#d97706]/20 blur-[100px] sm:blur-[140px] rounded-full"
            />

            {/* TEXTO PEQUENO */}
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.6em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ delay: 0.2, duration: 1 }}
              className="uppercase tracking-[0.3em] text-zinc-400 text-[11px] sm:text-[13px] font-bold mb-5"
            >
              Conheça
            </motion.span>

            {/* TITULO */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center leading-[1.1] font-black"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0px 0px 0px rgba(217,119,6,0)",
                    "0px 0px 25px rgba(217,119,6,0.35)",
                    "0px 0px 0px rgba(217,119,6,0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="block text-[#d97706] text-[36px] sm:text-[64px] tracking-tight"
              >
                O Método 2T
              </motion.span>

              <span className="block text-white text-[28px] sm:text-[56px] mt-2 tracking-tight">
                Presencial
              </span>
            </motion.h2>

            {/* LINHA ANIMADA */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 90, opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 1.2,
                ease: "easeOut",
              }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#d97706] to-transparent mt-10"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="bg-[#0a0a0a] border border-zinc-800/60 rounded-3xl p-6 sm:p-8 sm:px-10 shadow-xl"
          >
            {/* Foto da Turma */}
            <div className="w-full aspect-[4/3] bg-zinc-900 rounded-xl mb-8 flex items-center justify-center border border-zinc-800/80 overflow-hidden shadow-lg">
              <img src="https://i.postimg.cc/hjbJ6mmM/IMG-2224.jpg" alt="Turma do Método 2T" className="w-full h-full object-cover" />
            </div>

            <p className="text-zinc-300 text-[16px] sm:text-[17px] leading-[1.7] mb-7">
              O Método 2T é um curso{" "}
              <strong className="text-white border-b border-[#d97706]/40 pb-0.5">
                100% prático
              </strong>
              , destinado para empresários que cansaram de perder dinheiro com
              agências e querem aprender a fazer o próprio tráfego pago.
            </p>
            <p className="text-zinc-300 text-[16px] sm:text-[17px] leading-[1.7] mb-12">
              Também é ideal para pessoas que desejam criar uma{" "}
              <strong className="text-white">renda extra</strong> trabalhando
              com tráfego pago e social media.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex flex-col gap-5">
                <h4 className="text-white font-bold text-[14px] uppercase tracking-widest pb-3 border-b border-zinc-800 flex items-center gap-2">
                  <Video className="w-5 h-5 text-[#d97706]" /> O que você vai
                  aprender
                </h4>
                <ul className="flex flex-col gap-4">
                  {[
                    "Tráfego Pago (Meta Ads + Google Ads)",
                    "Estrutura completa de campanhas",
                    "Criação de criativos que vendem",
                    "Tráfego Orgânico + conteúdo estratégico",
                    "Uso de IA para acelerar resultados",
                    "Criação de site + eBook",
                    "Como trabalhar como gestor de tráfego ou social media",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-zinc-400 text-[14px] sm:text-[15px]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d97706] mt-1.5 shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-5 pt-4 sm:pt-0 sm:border-l sm:border-zinc-800/50 sm:pl-10">
                <h4 className="text-white font-bold text-[14px] uppercase tracking-widest pb-3 border-b border-zinc-800 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#25D366]" /> Bônus
                  exclusivos
                </h4>
                <ul className="flex flex-col gap-4">
                  {[
                    "Aula de GPTs",
                    "03 meses de acompanhamento individual",
                    "Templates + materiais práticos",
                    "Certificado",
                    "Coffee Break",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-zinc-400 text-[14px] sm:text-[15px]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] mt-1.5 shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Nossos Serviços */}
        <section id="servicos" className="pt-16 -mt-16 mb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center mb-8"
          >
            <h3 className="text-center text-[12px] font-bold text-zinc-500 tracking-[0.25em] uppercase">
              Nossos Serviços
            </h3>
            <div className="w-8 h-[2px] bg-[#d97706]/50 mt-4" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            {servicos.map((link, index) => (
              <motion.div
                variants={fadeUp}
                key={index}
                className="bg-[#0a0a0a] border border-zinc-800/60 hover:border-zinc-700 rounded-2xl overflow-hidden shadow-xl flex flex-col group transition-colors"
              >
                <div className="w-full aspect-[21/9] sm:aspect-[16/9] bg-zinc-900 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={link.image}
                    alt={link.title}
                    className={`w-full h-full opacity-80 group-hover:opacity-100 transition-opacity ${link.imageClass}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                </div>
                <div className="p-6 sm:p-8">
                  <h2 className="font-bold text-[22px] leading-tight mb-3 text-white group-hover:text-[#d97706] transition-colors">
                    {link.title}
                  </h2>
                  <p className="text-[15px] sm:text-[16px] text-zinc-400 font-medium leading-[1.6] mb-8">
                    {link.desc}
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-4 rounded-xl bg-[#d97706] text-white font-bold text-[13px] tracking-widest transition-all shadow-[0_4px_15px_rgba(217,119,6,0.2)] hover:bg-yellow-600 hover:shadow-[0_4px_25px_rgba(217,119,6,0.3)] uppercase flex justify-center items-center gap-2"
                  >
                    {link.buttonText} <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* FAQ */}
        <section id="faq" className="pt-24 -mt-10 mb-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center mb-10"
          >
            <h3 className="text-center text-[12px] font-bold text-zinc-500 tracking-[0.25em] uppercase">
              Perguntas Frequentes
            </h3>
            <div className="w-8 h-[2px] bg-zinc-800 mt-4" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col gap-3"
          >
            {faq.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  variants={fadeUp}
                  key={index}
                  className={`bg-[#0a0a0a] border ${isOpen ? "border-[#d97706]/40" : "border-zinc-800/60"} rounded-2xl overflow-hidden transition-colors cursor-pointer hover:border-zinc-600`}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <div className="p-5 sm:p-6 flex justify-between items-center bg-transparent">
                    <span
                      className={`font-bold text-[15px] sm:text-[16px] pr-4 leading-[1.4] transition-colors ${isOpen ? "text-white" : "text-zinc-300"}`}
                    >
                      {item.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown
                        className={`w-5 h-5 ${isOpen ? "text-[#d97706]" : "text-zinc-500"}`}
                      />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-6 text-zinc-400 text-[15px] sm:text-[16px] leading-[1.6] border-t border-zinc-900 pt-4">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full text-center mt-10 border-t border-zinc-900/40 pt-10 pb-6 opacity-80 hover:opacity-100 transition-opacity">
        <p className="text-zinc-500 text-[11px] font-medium tracking-wide">
          CNPJ: 59.341546/0001-59
        </p>
        <p className="text-zinc-500 text-[11px] font-medium tracking-wide mt-1">
          &copy; {new Date().getFullYear()} Método 2T. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
