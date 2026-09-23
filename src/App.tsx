import { useEffect, useState } from 'react'
import { CalendarCheck, Info, Plus } from 'lucide-react'
import { Calendar } from './components/Calendar'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { QuickEntryModal } from './components/QuickEntryModal'
import { SideDrawer } from './components/SideDrawer'
import { ActivitySheet } from './components/ActivitySheet'
import { loadTheme, saveTheme } from './storage'
import type { ThemeMode } from './types'

const CURRENCY_KEY = 'expendfy_currency'
const TIME_FORMAT_KEY = 'expendfy_time_format'
const CURRENCY_OPTIONS = ['TRY', 'USD', 'EUR', 'GBP', 'INR', 'JPY', 'AED', 'BDT'] as const

export default function App() {
  const [quickEntryOpen, setQuickEntryOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [monthActivityOpen, setMonthActivityOpen] = useState(false)

  const [currency, setCurrency] = useState<string>(
    () => localStorage.getItem(CURRENCY_KEY) || 'TRY',
  )
  const [timeFormat, setTimeFormat] = useState<'12h' | '24h'>(
    () => (localStorage.getItem(TIME_FORMAT_KEY) as '12h' | '24h') || '24h',
  )
  const [theme, setTheme] = useState<ThemeMode>(() => loadTheme())

  // Apply theme to <html> and meta theme-color
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    const metaTheme = document.querySelector('meta[name="theme-color"]')
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'light' ? '#f8fafc' : '#0f0f0f')
    }
  }, [theme])

  function handleCurrencyChange(nextCurrency: string): void {
    setCurrency(nextCurrency)
    localStorage.setItem(CURRENCY_KEY, nextCurrency)
  }

  function handleTimeFormatChange(fmt: '12h' | '24h'): void {
    setTimeFormat(fmt)
    localStorage.setItem(TIME_FORMAT_KEY, fmt)
  }

  function handleThemeChange(nextTheme: ThemeMode): void {
    setTheme(nextTheme)
    saveTheme(nextTheme)
  }

  return (
    <div className="app">
      <Sidebar />

      <div className="app-body">
        <Header onMenuClick={() => setDrawerOpen(true)} />

        <main className="app-main">
          <div className="calendar-action-bar">
            <button type="button" className="calendar-select-btn" aria-label="Select dates" title="Select dates">
              <CalendarCheck size={17} strokeWidth={1.9} />
            </button>
            <button type="button" className="calendar-quick-info-btn" aria-label="Glance past entries" title="Glance past entries">
              <Info size={17} strokeWidth={1.9} />
            </button>
            <button
              type="button"
              className="calendar-quick-add-btn"
              aria-label="Add entry"
              title="Add entry"
              onClick={() => setQuickEntryOpen(true)}
            >
              <Plus size={18} strokeWidth={1.8} />
            </button>
          </div>

          <Calendar />
        </main>
      </div>

      <SideDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpenActivity={() => setMonthActivityOpen(true)}
        currency={currency}
        currencyOptions={[...CURRENCY_OPTIONS]}
        onCurrencyChange={handleCurrencyChange}
        timeFormat={timeFormat}
        onTimeFormatChange={handleTimeFormatChange}
        theme={theme}
        onThemeChange={handleThemeChange}
      />

      <ActivitySheet
        open={monthActivityOpen}
        title="Monthly Activity"
        subtitle="January 2026"
        onClose={() => setMonthActivityOpen(false)}
      />

      {quickEntryOpen && <QuickEntryModal onClose={() => setQuickEntryOpen(false)} />}
    </div>
  )
}