import { memo } from 'react'
import { DayCellBadges, type BadgeDescriptor } from './DayCellBadges'

export interface CalendarCellProps {
  day: number
  inCurrentMonth: boolean
  isToday: boolean
  isSelected: boolean
  badges: BadgeDescriptor[]
}

export const CalendarCell = memo(function CalendarCell({
  day,
  inCurrentMonth,
  isToday,
  isSelected,
  badges,
}: CalendarCellProps) {
  return (
    <button
      type="button"
      className={[
        'calendar__cell',
        !inCurrentMonth && 'calendar__cell--otherMonth',
        isToday && 'calendar__cell--today',
        isSelected && 'calendar__cell--selected',
        badges.length > 0 && 'calendar__cell--has-badges',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <DayCellBadges badges={badges} />
      <span className="calendar__day-num">{day}</span>
      {inCurrentMonth && (
        <div className="calendar__cell-lines calendar__desktop-lines">
          <div className="calendar__cell-line calendar__cell-line--sales calendar__desktop-line">
            Sales: ৳0.00
          </div>
          <div className="calendar__cell-line calendar__cell-line--buy calendar__desktop-line">
            Buy: ৳0.00
          </div>
          <div className="calendar__cell-line calendar__cell-line--expense calendar__desktop-line">
            Expense: ৳0.00
          </div>
          <div className="calendar__cell-line calendar__cell-line--profit-zero calendar__desktop-line">
            Profit: ৳0.00
          </div>
        </div>
      )}
    </button>
  )
})