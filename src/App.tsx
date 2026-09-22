import React from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { SummaryBar } from './components/SummaryBar';
import { ToolbarRow } from './components/ToolbarRow';
import { CalendarCard } from './components/CalendarCard';

// ==========================================
// PLACEHOLDER DATA
// ==========================================
export const summaryData = [
  {
    title: '16 September 2026',
    subtitle: null,
    isAmberTitle: false,
    rows: [
      { label: 'Sales', amount: '৳0.00', color: 'text-emerald-400' },
      { label: 'Buy', amount: '৳0.00', color: 'text-amber-400' },
      { label: 'Expense', amount: '৳0.00', color: 'text-rose-400' },
    ],
    profit: { label: 'Profit', amount: '৳0.00', color: 'text-gray-300' },
  },
  {
    title: 'Monthly',
    subtitle: 'Sep 2026',
    isAmberTitle: true,
    rows: [
      { label: 'Sales', amount: '৳0.00', color: 'text-emerald-400' },
      { label: 'Buy', amount: '৳0.00', color: 'text-amber-400' },
      { label: 'Expense', amount: '৳0.00', color: 'text-rose-400' },
    ],
    profit: { label: 'Profit', amount: '৳0.00', color: 'text-gray-300' },
  },
  {
    title: 'Yearly',
    subtitle: '2026',
    isAmberTitle: true,
    rows: [
      { label: 'Sales', amount: '৳0.00', color: 'text-emerald-400' },
      { label: 'Buy', amount: '৳0.00', color: 'text-amber-400' },
      { label: 'Expense', amount: '৳0.00', color: 'text-rose-400' },
    ],
    profit: { label: 'Profit', amount: '৳0.00', color: 'text-gray-300' },
  },
];

export const calendarDays = [
  { day: null }, { day: null }, // Sun, Mon
  { day: 1 }, { day: 2 }, { day: 3 }, { day: 4 }, { day: 5 }, { day: 6 }, { day: 7 },
  { day: 8 }, { day: 9 }, { day: 10 }, { day: 11 }, { day: 12 }, { day: 13 }, { day: 14 },
  { day: 15 }, { day: 16, isToday: true }, { day: 17 }, { day: 18 }, { day: 19 }, { day: 20 }, { day: 21 },
  { day: 22 }, { day: 23 }, { day: 24 }, { day: 25 }, { day: 26 }, { day: 27 }, { day: 28 },
  { day: 29 }, { day: 30 },
];

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-[#0a0e1a] text-white font-sans overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          <SummaryBar data={summaryData} />
          <ToolbarRow />
          <CalendarCard days={calendarDays} />
          <div className="text-center text-sm text-gray-500 mt-6 pb-8">
            No entries for this day.
          </div>
        </main>
      </div>
    </div>
  );
}