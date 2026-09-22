import React from 'react';
import { Calendar } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-48 border-r border-[#1f2937] bg-[#0a0e1a] hidden md:flex flex-col shrink-0">
      <nav className="p-4 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-blue-500/10 border-l-2 border-blue-500 text-blue-400 font-medium text-sm transition-colors">
          <Calendar className="w-4 h-4" />
          Calendar
        </button>
      </nav>
    </aside>
  );
}