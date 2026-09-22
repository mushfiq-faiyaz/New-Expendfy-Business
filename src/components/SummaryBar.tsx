import React from 'react';

interface SummaryBarProps {
  data: any[];
}

export function SummaryBar({ data }: SummaryBarProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((card, index) => (
        <div key={index} className="bg-[#131826] rounded-2xl border border-[#1f2937] p-5">
          <div className="flex items-baseline gap-2 mb-4">
            <h3 className={`font-bold ${card.isAmberTitle ? 'text-amber-400' : 'text-white'}`}>
              {card.title}
            </h3>
            {card.subtitle && <span className="text-gray-500 text-xs">{card.subtitle}</span>}
          </div>
          <div className="space-y-2.5">
            {card.rows.map((row: any, i: number) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <span className="text-gray-400">{row.label}</span>
                <span className={`font-medium ${row.color}`}>{row.amount}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-[#1f2937]">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">{card.profit.label}</span>
              <span className={`font-medium ${card.profit.color}`}>{card.profit.amount}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}