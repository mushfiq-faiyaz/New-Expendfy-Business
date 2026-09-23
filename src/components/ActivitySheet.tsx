type Props = {
  open: boolean
  title?: string
  subtitle?: string
  onClose: () => void
}

export function ActivitySheet({ open, title = 'Activity', subtitle, onClose }: Props) {
  if (!open) return null
  return (
    <>
      <button type="button" className="cat-picker__backdrop" onClick={onClose} aria-label="Close activity log" />
      <div className="cat-picker edit-history__dialog activity-sheet" role="dialog" aria-modal aria-label={title}>
        <div className="cat-picker__handle" />
        <div className="cat-picker__header">
          <div className="edit-history__title-wrap">
            <h3 className="cat-picker__title">{title}</h3>
            <div className="edit-history__meta">
              {subtitle && (
                <>
                  <span className="edit-history__subtitle">{subtitle}</span>
                  <span className="edit-history__dot">•</span>
                </>
              )}
              <span className="edit-history__count">0 events</span>
            </div>
          </div>
          <button type="button" className="quick-modal__close" onClick={onClose} aria-label="Close activity log">×</button>
        </div>
        <div className="edit-history__body">
          <div className="edit-history__empty">No activity recorded yet.</div>
        </div>
        <button type="button" className="cat-picker__dismiss" onClick={onClose}>Close</button>
      </div>
    </>
  )
}