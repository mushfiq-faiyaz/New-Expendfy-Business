import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayCell } from './DayCell';

interface CalendarCardProps {
  days: any[];
}

export function CalendarCard({ days }: CalendarCardProps) {
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className="bg-[#131826] rounded-2xl border border-[#1f2937] overflow-hidden">
      <div className="flex items-center justify-between p-4 md:p-6 border-b border-[#1f2937]">
        <button className="w-8 h-8 rounded-lg bg-[#0a0e1a] border border-[#1f2937] flex items-center justify-center hover:bg-[#1f2937] transition-colors">
          <ChevronLeft className="w-4 h-4 text-gray-400" />
        </button>
        <h2 className="text-lg md:text-xl font-bold text-white">September 2026</h2>
        <button className="w-8 h-8 rounded-lg bg-[#0a0e1a] border border-[#1f2937] flex items-center justify-center hover:bg-[#1f2937] transition-colors">
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      <div className="p-4 md:p-6 overflow-x-auto">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-7 gap-2 mb-2">
            {weekDays.map((day) => (
              <div key={day} className="text-center text-xs font-semibold text-gray-500 tracking-wider py-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, index) => (
              <DayCell key={index} day={day.day} isToday={day.isToday} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}