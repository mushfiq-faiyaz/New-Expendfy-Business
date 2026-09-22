import { useState } from 'react'
import { CalendarCheck, Info, Plus } from 'lucide-react'
import { Calendar } from './components/Calendar'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { QuickEntryModal } from './components/QuickEntryModal'
import { SideDrawer } from './components/SideDrawer'
import { ActivitySheet } from './components/ActivitySheet'
import { EditHistoryModal } from './components/EditHistoryModal'
import { EntriesGlanceModal } from './components/EntriesGlanceModal'
import { ExpenseSheet } from './components/ExpenseSheet'
import { IncomeSheet } from './components/IncomeSheet'

// Static UI toggles for the OTHER overlays (still UI-only, no logic yet)
const SHOW_SIDE_DRAWER   = false
const SHOW_ACTIVITY      = false
const SHOW_EDIT_HISTORY  = false
const SHOW_GLANCE        = false
const SHOW_EXPENSE_SHEET = false
const SHOW_INCOME_SHEET  = false

export default function App() {
  const [quickEntryOpen, setQuickEntryOpen] = useState(true)

  return (
    <div className="app">
      <Sidebar />

      <div className="app-body">
        <Header />

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

      {/* Quick Entry - controlled by state now */}
      {quickEntryOpen && <QuickEntryModal onClose={() => setQuickEntryOpen(false)} />}

      {/* Other overlays - still UI-only shells */}
      {SHOW_SIDE_DRAWER   && <SideDrawer />}
      {SHOW_ACTIVITY      && <ActivitySheet title="Today's Activity" />}
      {SHOW_EDIT_HISTORY  && <EditHistoryModal side="expense" />}
      {SHOW_GLANCE        && <EntriesGlanceModal />}
      {SHOW_EXPENSE_SHEET && <ExpenseSheet />}
      {SHOW_INCOME_SHEET  && <IncomeSheet />}
    </div>
  )
}
