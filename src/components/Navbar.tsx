import React from 'react';
import { Menu, Diamond } from 'lucide-react';

export function Navbar() {
  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-6 border-b border-[#1f2937] bg-[#0a0e1a] shrink-0">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center">
          <Diamond className="w-5 h-5 text-blue-500 fill-blue-500/20" />
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-white font-bold text-lg tracking-tight">Expendfy</span>
          <span className="text-blue-400 italic text-xs tracking-wider">Persona</span>
        </div>
      </div>
      <button className="w-10 h-10 rounded-xl bg-[#131826] border border-[#1f2937] flex items-center justify-center hover:bg-[#1f2937] transition-colors">
        <Menu className="w-5 h-5 text-gray-400" />
      </button>
    </header>
  );
}