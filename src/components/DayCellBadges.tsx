export type BadgeDescriptor = {
  type: 'edited' | 'backdated'
  lines: string[]
}

export function DayCellBadges({ badges }: { badges: BadgeDescriptor[] }) {
  if (!badges || badges.length === 0) return null
  return (
    <div className="calendar__badges">
      {badges.map((b, i) => (
        <span
          key={i}
          className={`calendar__badge calendar__badge--${b.type}`}
          title={b.lines.join('\n')}
        />
      ))}
    </div>
  )
}