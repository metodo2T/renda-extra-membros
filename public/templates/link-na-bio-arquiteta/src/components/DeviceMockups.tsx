import React from 'react';

interface LaptopMockupProps {
  screenImage: string;
  className?: string;
}

export const LaptopMockup: React.FC<LaptopMockupProps> = ({ screenImage, className = '' }) => {
  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Laptop Screen Frame */}
      <div className="relative bg-[#202020] rounded-t-[6px] p-[2px] pb-[3px] shadow-lg border border-[#3A3A3A] w-[130px] sm:w-[145px] aspect-[16/10]">
        {/* Camera Dot */}
        <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] bg-[#0A0A0A] rounded-full z-10 flex items-center justify-center">
          <div className="w-[1px] h-[1px] bg-[#1a4a6b] rounded-full"></div>
        </div>
        {/* Screen Display */}
        <div className="w-full h-full bg-[#111111] overflow-hidden rounded-[2px] relative">
          <img
            src={screenImage || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"}
            alt="Notebook Tela"
            className="w-full h-full object-cover object-center"
          />
          {/* Gentle glare effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
        </div>
      </div>
      {/* Laptop Base Keyboard Deck */}
      <div className="relative w-[152px] sm:w-[170px] h-[6px] bg-gradient-to-b from-[#D1D1D3] via-[#B5B5B8] to-[#98989C] rounded-b-[4px] shadow-md flex justify-center items-center">
        {/* Notch opening lip */}
        <div className="w-[18px] h-[2px] bg-[#6E6E72] rounded-b-sm -mt-[3px]"></div>
      </div>
      {/* Subtle bottom shadow line */}
      <div className="w-[160px] sm:w-[180px] h-[3px] bg-black/20 blur-[2px] rounded-full mt-[1px]"></div>
    </div>
  );
};

interface MultiDeviceMockupProps {
  ebookImage?: string;
  tabletImage?: string;
  phoneImage?: string;
  className?: string;
}

export const MultiDeviceMockup: React.FC<MultiDeviceMockupProps> = ({
  ebookImage,
  tabletImage,
  phoneImage,
  className = ''
}) => {
  const defaultEbook = ebookImage || "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=500";
  const defaultTablet = tabletImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500";
  const defaultPhone = phoneImage || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=500";

  return (
    <div className={`relative w-[130px] sm:w-[145px] h-[78px] flex items-center justify-start select-none ${className}`}>
      {/* 1. E-Book / Book Cover (Back, left) */}
      <div className="absolute left-0 top-[2px] z-10 w-[52px] h-[70px] bg-[#EFECE8] rounded-[3px] shadow-md border border-[#D5CFCA] overflow-hidden transform -rotate-[4deg] device-shadow-sm flex flex-col justify-between p-1">
        <div className="relative w-full h-full overflow-hidden rounded-[2px]">
          <img src={defaultEbook} alt="Ebook" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-1">
            <span className="text-[6px] font-serif-editorial text-white leading-tight font-medium">E-Book</span>
          </div>
        </div>
      </div>

      {/* 2. Tablet (Middle, centered overlay) */}
      <div className="absolute left-[24px] top-[0px] z-20 w-[62px] h-[76px] bg-[#1C1C1E] p-[2px] rounded-[5px] border border-[#38383A] shadow-lg device-shadow">
        <div className="relative w-full h-full bg-[#121214] rounded-[3px] overflow-hidden">
          <img src={defaultTablet} alt="Tablet" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-1 text-center">
            <span className="text-[7px] font-serif-editorial italic text-white leading-none">Fernanda</span>
            <span className="text-[5px] font-sans-clean text-white/80 tracking-widest uppercase">Marcolin</span>
          </div>
        </div>
      </div>

      {/* 3. Phone (Front right overlay) */}
      <div className="absolute left-[62px] top-[8px] z-30 w-[38px] h-[66px] bg-[#18181A] p-[1.5px] rounded-[6px] border border-[#444446] shadow-xl device-shadow">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[10px] h-[2px] bg-black rounded-full z-40"></div>
        <div className="relative w-full h-full bg-[#0F0F10] rounded-[4.5px] overflow-hidden">
          <img src={defaultPhone} alt="Phone" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
    </div>
  );
};
