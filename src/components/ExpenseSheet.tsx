export function ExpenseSheet() {
  return (
    <>
      <button type="button" className="sheet__backdrop" aria-label="Close" />
      <div className="sheet sheet--expense" role="dialog" aria-modal aria-labelledby="expense-sheet-title">
        <div className="sheet__handle" />
        <h2 id="expense-sheet-title" className="sheet__title">15 January 2026</h2>

        <ul className="sheet__list">
          <li className="sheet__empty">No expenses for this day.</li>
        </ul>

        <div className="sheet__form">
          <input placeholder="Description (optional)" className="sheet__input" readOnly />
          <div className="sheet__form-row">
            <input inputMode="decimal" placeholder="Amount" className="sheet__input" readOnly />
            <button type="button" className="btn btn--primary">Add</button>
          </div>
        </div>

        <button type="button" className="sheet__dismiss btn btn--ghost">Close</button>
      </div>
    </>
  )
}