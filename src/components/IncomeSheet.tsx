export function IncomeSheet() {
  return (
    <>
      <button type="button" className="sheet__backdrop" aria-label="Close" />
      <div className="sheet sheet--income" role="dialog" aria-modal aria-labelledby="income-sheet-title">
        <div className="sheet__handle" />
        <h2 id="income-sheet-title" className="sheet__title">Income — January 2026</h2>
        <p className="sheet__income-total">
          Monthly income: <strong>৳0.00</strong>
        </p>

        <div className="sheet__form">
          <input placeholder="Description (optional)" className="sheet__input" readOnly />
          <div className="sheet__form-row">
            <input inputMode="decimal" placeholder="Amount" className="sheet__input" readOnly />
            <button type="button" className="btn btn--primary">Add</button>
          </div>
        </div>

        <ul className="sheet__list sheet__list--income">
          <li className="sheet__empty">No income entries this month.</li>
        </ul>

        <button type="button" className="sheet__dismiss btn btn--ghost">Close</button>
      </div>
    </>
  )
}