import { History, TrendingUp } from 'lucide-react'

const MONEY = '৳0.00'

export function QuickEntryModal() {
  return (
    <>
      <button type="button" className="quick-modal__backdrop" aria-label="Close quick entry" />
      <div className="quick-modal" role="dialog" aria-modal aria-labelledby="quick-entry-title">
        <div className="quick-modal__head">
          <h2 id="quick-entry-title" className="quick-modal__title">Quick entry</h2>
          <div className="quick-modal__head-actions">
            <button
              type="button"
              className="quick-modal__icon-btn"
              aria-label="View activity log"
              title="Activity"
            >
              <History size={16} strokeWidth={2.2} />
            </button>
            <button type="button" className="quick-modal__close" aria-label="Close">×</button>
          </div>
        </div>
        <p className="quick-modal__date">15 January 2026</p>

        {/* ── 1. Sales ── */}
        <section className="quick-modal__section">
          <button type="button" className="quick-modal__trigger quick-modal__trigger--row">
            <span className="qm-row__badge qm-row__badge--sales" aria-hidden>
              <TrendingUp size={18} strokeWidth={2} />
            </span>
            <span className="qm-row__body">
              <span className="qm-row__label">Sales</span>
              <span className="qm-row__sub">Selected date</span>
            </span>
            <span className="qm-row__right">
              <span className="qm-row__value qm-row__value--sales">{MONEY}</span>
              <span className="quick-modal__chev">›</span>
            </span>
          </button>
          <div className="quick-modal__collapse" data-open="false">
            <div className="quick-modal__collapse-inner">
              <div className="quick-modal__panel">
                <div className="desc-field">
                  <input className="desc-field__input" placeholder="Description (optional)" readOnly />
                </div>
                <div className="quick-modal__amount-field">
                  <div className="quick-modal__row">
                    <input className="sheet__input" inputMode="decimal" placeholder="Amount" readOnly />
                    <button type="button" className="btn btn--primary">Add</button>
                  </div>
                </div>
                <ul className="quick-modal__list">
                  <li className="quick-modal__empty">No sales entries on this date</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Expense ── */}
        <section className="quick-modal__section">
          <button type="button" className="quick-modal__trigger quick-modal__trigger--row">
            <span className="qm-row__badge qm-row__badge--expense" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </span>
            <span className="qm-row__body">
              <span className="qm-row__label">Expense</span>
              <span className="qm-row__sub">Selected date</span>
            </span>
            <span className="qm-row__right">
              <span className="qm-row__value qm-row__value--expense">{MONEY}</span>
              <span className="quick-modal__chev">›</span>
            </span>
          </button>
          <div className="quick-modal__collapse" data-open="false">
            <div className="quick-modal__collapse-inner">
              <div className="quick-modal__panel">
                <div className="desc-field">
                  <input className="desc-field__input" placeholder="Description (optional)" readOnly />
                </div>
                <div className="quick-modal__amount-field">
                  <div className="quick-modal__row">
                    <input className="sheet__input" inputMode="decimal" placeholder="Amount" readOnly />
                    <button type="button" className="btn btn--primary">Add</button>
                  </div>
                </div>
                <ul className="quick-modal__list">
                  <li className="quick-modal__empty">No expense entries on this date</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Buy ── */}
        <section className="quick-modal__section">
          <button type="button" className="quick-modal__trigger quick-modal__trigger--row">
            <span className="qm-row__badge qm-row__badge--buy" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </span>
            <span className="qm-row__body">
              <span className="qm-row__label">Buy</span>
              <span className="qm-row__sub">Selected date</span>
            </span>
            <span className="qm-row__right">
              <span className="qm-row__value qm-row__value--buy">{MONEY}</span>
              <span className="quick-modal__chev">›</span>
            </span>
          </button>
          <div className="quick-modal__collapse" data-open="false">
            <div className="quick-modal__collapse-inner">
              <div className="quick-modal__panel">
                <div className="desc-field">
                  <input className="desc-field__input" placeholder="Description (optional)" readOnly />
                </div>
                <div className="quick-modal__amount-field">
                  <div className="quick-modal__row">
                    <input className="sheet__input" inputMode="decimal" placeholder="Amount" readOnly />
                    <button type="button" className="btn btn--primary">Add</button>
                  </div>
                </div>
                <ul className="quick-modal__list">
                  <li className="quick-modal__empty">No buy entries on this date</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}