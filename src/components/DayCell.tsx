import React from 'react';

interface DayCellProps {
  day: number | null;
  isToday?: boolean;
}

export function DayCell({ day, isToday }: DayCellProps) {
  if (day === null) {
    return <div className="min-h-[100px] rounded-xl border border-transparent" />;
  }

  return (
    <div
      className={`min-h-[100px] rounded-xl p-2.5 flex flex-col gap-1.5 transition-colors ${
        isToday
          ? 'bg-[#1a233a] border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.1)]'
          : 'bg-[#131826] border border-[#1f2937] hover:border-[#2d3748]'
      }`}
    >
      <span className={`text-sm font-bold ${isToday ? 'text-blue-400' : 'text-white'}`}>
        {day}
      </span>

      <div className="flex flex-col gap-0.5 text-[10px] leading-tight">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Sales:</span>
          <span className="text-emerald-400 font-medium">৳0.00</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Buy:</span>
          <span className="text-amber-400 font-medium">৳0.00</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Expense:</span>
          <span className="text-rose-400 font-medium">৳0.00</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Profit:</span>
          <span className="text-gray-300 font-medium">৳0.00</span>
        </div>
      </div>
    </div>
  );
}