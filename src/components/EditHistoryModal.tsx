type Props = {
  side?: 'expense' | 'income' | 'buy'
}

export function EditHistoryModal({ side = 'expense' }: Props) {
  void side // preserved for API parity with the old component
  return (
    <>
      <button type="button" className="cat-picker__backdrop" aria-label="Close edit history" />
      <div className="cat-picker edit-history__dialog" role="dialog" aria-modal aria-label="Edit history">
        <div className="cat-picker__handle" />

        <div className="cat-picker__header">
          <div className="edit-history__title-wrap">
            <h3 className="cat-picker__title">Edit history</h3>
            <span className="edit-history__count">0 previous versions</span>
          </div>
          <button type="button" className="quick-modal__close" aria-label="Close edit history">×</button>
        </div>

        <div className="edit-history__body">
          <div className="edit-history__empty">No prior versions found.</div>
        </div>

        <button type="button" className="cat-picker__dismiss">Close</button>
      </div>
    </>
  )
}