import { CalendarCell } from './CalendarCell'
import type { BadgeDescriptor } from './DayCellBadges'

const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'] as const

// Fixed layout constants (were dynamic in the old project).
const CELL_PX = 48
const GRID_GAP_PX = 2
const BLOCK_WIDTH = 7 * CELL_PX + 6 * GRID_GAP_PX
const COL_TEMPLATE = `repeat(7, ${CELL_PX}px)`
const ROW_TEMPLATE = `repeat(6, ${CELL_PX}px)`

type StaticCell = {
  iso: string
  day: number
  inCurrentMonth: boolean
  isToday: boolean
  isSelected: boolean
}

// ─────────────────────────────────────────────────────────────────────────────
// Static cell grid for January 2026 (today = 15 Jan 2026).
// This is a literal, immutable data structure — no runtime logic.
// ─────────────────────────────────────────────────────────────────────────────
const CELLS: StaticCell[] = [
  // Row 1
  { iso: '2025-12-28', day: 28, inCurrentMonth: false, isToday: false, isSelected: false },
  { iso: '2025-12-29', day: 29, inCurrentMonth: false, isToday: false, isSelected: false },
  { iso: '2025-12-30', day: 30, inCurrentMonth: false, isToday: false, isSelected: false },
  { iso: '2025-12-31', day: 31, inCurrentMonth: false, isToday: false, isSelected: false },
  { iso: '2026-01-01', day: 1,  inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-02', day: 2,  inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-03', day: 3,  inCurrentMonth: true,  isToday: false, isSelected: false },
  // Row 2
  { iso: '2026-01-04', day: 4,  inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-05', day: 5,  inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-06', day: 6,  inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-07', day: 7,  inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-08', day: 8,  inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-09', day: 9,  inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-10', day: 10, inCurrentMonth: true,  isToday: false, isSelected: false },
  // Row 3
  { iso: '2026-01-11', day: 11, inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-12', day: 12, inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-13', day: 13, inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-14', day: 14, inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-15', day: 15, inCurrentMonth: true,  isToday: true,  isSelected: true  },
  { iso: '2026-01-16', day: 16, inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-17', day: 17, inCurrentMonth: true,  isToday: false, isSelected: false },
  // Row 4
  { iso: '2026-01-18', day: 18, inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-19', day: 19, inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-20', day: 20, inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-21', day: 21, inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-22', day: 22, inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-23', day: 23, inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-24', day: 24, inCurrentMonth: true,  isToday: false, isSelected: false },
  // Row 5
  { iso: '2026-01-25', day: 25, inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-26', day: 26, inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-27', day: 27, inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-28', day: 28, inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-29', day: 29, inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-30', day: 30, inCurrentMonth: true,  isToday: false, isSelected: false },
  { iso: '2026-01-31', day: 31, inCurrentMonth: true,  isToday: false, isSelected: false },
  // Row 6
  { iso: '2026-02-01', day: 1,  inCurrentMonth: false, isToday: false, isSelected: false },
  { iso: '2026-02-02', day: 2,  inCurrentMonth: false, isToday: false, isSelected: false },
  { iso: '2026-02-03', day: 3,  inCurrentMonth: false, isToday: false, isSelected: false },
  { iso: '2026-02-04', day: 4,  inCurrentMonth: false, isToday: false, isSelected: false },
  { iso: '2026-02-05', day: 5,  inCurrentMonth: false, isToday: false, isSelected: false },
  { iso: '2026-02-06', day: 6,  inCurrentMonth: false, isToday: false, isSelected: false },
  { iso: '2026-02-07', day: 7,  inCurrentMonth: false, isToday: false, isSelected: false },
]

const EMPTY_BADGES: BadgeDescriptor[] = []

export function Calendar() {
  return (
    <div className="calendar">
      <div className="calendar__nav">
        <button type="button" className="calendar__nav-btn" aria-label="Previous month">
          ‹
        </button>
        <div className="calendar__header-center">
          <span className="calendar__month">January 2026</span>
        </div>
        <button type="button" className="calendar__nav-btn" aria-label="Next month">
          ›
        </button>
      </div>

      <div className="calendar__gridHost">
        <div
          className="calendar__weekdays calendar__weekdays--square"
          style={{
            width: BLOCK_WIDTH,
            gridTemplateColumns: COL_TEMPLATE,
            gap: GRID_GAP_PX,
          }}
        >
          {WEEKDAYS.map((w) => (
            <span key={w} className="calendar__weekday">
              {w}
            </span>
          ))}
        </div>

        <div
          className="calendar__grid calendar__grid--square"
          style={{
            width: BLOCK_WIDTH,
            gridTemplateColumns: COL_TEMPLATE,
            gridTemplateRows: ROW_TEMPLATE,
            gap: GRID_GAP_PX,
          }}
        >
          {CELLS.map((cell) => (
            <CalendarCell
              key={cell.iso}
              day={cell.day}
              inCurrentMonth={cell.inCurrentMonth}
              isToday={cell.isToday}
              isSelected={cell.isSelected}
              badges={EMPTY_BADGES}
            />
          ))}
        </div>

        <div className="calendar__footer" style={{ width: BLOCK_WIDTH }}>
          <p className="calendar__empty-text">No entries for this day.</p>
        </div>
      </div>
    </div>
  )
}