import React, { useRef } from 'react';
import { X } from 'lucide-react';
import { Skiper19 } from './ui/svg-follow-scroll';

interface Props {
  onClose: () => void;
}

export function ElementPreviewModal({ onClose }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col backdrop-blur-sm">
      <div className="flex justify-between items-center p-4 bg-[#121212] border-b border-gray-800">
        <h2 className="text-white font-bold text-lg">Preview do Elemento</h2>
        <button 
          onClick={onClose} 
          className="p-2 bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition rounded-full"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div ref={containerRef} className="flex-1 overflow-y-auto bg-white">
        <Skiper19 containerRef={containerRef} />
      </div>
    </div>
  );
}
