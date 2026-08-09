import React from 'react';

export const AboutMeCard: React.FC = () => {
  return (
    <div className="relative bg-white/90 border border-purple-200 rounded-3xl p-6 sm:p-7 shadow-xl shadow-purple-950/5 overflow-hidden my-6">
      {/* Background radial violet glow accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-2.5">
        {/* Title maintaining font hierarchy */}
        <h3 className="text-purple-950 text-2xl sm:text-3xl tracking-tight leading-tight">
          <span className="font-light text-purple-900/80">Sobre</span>{' '}
          <span className="font-extrabold text-purple-950">Mim</span>
        </h3>

        {/* Brief Text */}
        <p className="text-purple-900/90 text-sm sm:text-base font-medium leading-relaxed">
          Sou <strong className="text-purple-950 font-bold">Maria Eduarda</strong>, atuo como <strong className="text-purple-950 font-bold">Social Media</strong> especialista em transformar a presença digital de marcas. Crio estratégias de conteúdo visual, design marcante e posicionamento de alto impacto para atrair e engajar seu público ideal.
        </p>
      </div>
    </div>
  );
};
