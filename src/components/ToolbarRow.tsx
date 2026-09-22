import React from 'react';
import { Calendar, Info, Plus } from 'lucide-react';

export function ToolbarRow() {
  return (
    <div className="flex justify-end gap-2">
      <button className="w-10 h-10 rounded-xl bg-[#131826] border border-[#1f2937] flex items-center justify-center hover:bg-[#1f2937] transition-colors">
        <Calendar className="w-4 h-4 text-gray-400" />
      </button>
      <button className="w-10 h-10 rounded-xl bg-[#131826] border border-[#1f2937] flex items-center justify-center hover:bg-[#1f2937] transition-colors">
        <Info className="w-4 h-4 text-gray-400" />
      </button>
      <button className="w-10 h-10 rounded-xl bg-[#131826] border border-[#1f2937] flex items-center justify-center hover:bg-[#1f2937] transition-colors">
        <Plus className="w-4 h-4 text-gray-400" />
      </button>
    </div>
  );
}