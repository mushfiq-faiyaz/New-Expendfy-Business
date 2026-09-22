import { ArrowUpDown, Check, ChevronUp, X } from 'lucide-react'

export function EntriesGlanceModal() {
  return (
    <div className="entries-glance-overlay" role="dialog" aria-modal="true" aria-labelledby="glance-modal-title">
      <button type="button" className="entries-glance-backdrop" aria-label="Close entries glance" />

      <div className="entries-glance-dialog">
        {/* Header */}
        <div className="entries-glance-head">
          <h2 id="glance-modal-title" className="entries-glance-title">Entries Glance</h2>
          <div className="entries-glance-head-right">
            <span className="entries-glance-subtitle">15 January 2026</span>
            <button type="button" className="entries-glance-close-btn" aria-label="Close modal">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="entries-glance-filters">
          <div className="entries-glance-segmented" role="tablist" aria-label="Scope filter">
            <button
              type="button"
              role="tab"
              aria-selected="true"
              className="entries-glance-tab entries-glance-tab--active"
            >
              Selected Date
            </button>
            <button type="button" role="tab" aria-selected="false" className="entries-glance-tab">
              This Month
            </button>
            <button type="button" role="tab" aria-selected="false" className="entries-glance-tab">
              This Year
            </button>
          </div>

          <div className="entries-glance-chips-row">
            <div className="entries-glance-type-chips">
              <button type="button" className="entries-glance-chip entries-glance-chip--active">All</button>
              <button type="button" className="entries-glance-chip">Expenses</button>
              <button type="button" className="entries-glance-chip">Income</button>
            </div>

            <div className="eg-sort-wrap">
              <button
                type="button"
                className="eg-sort-btn"
                aria-label="Sort entries"
                aria-haspopup="listbox"
                aria-expanded="false"
              >
                <ArrowUpDown size={13} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="entries-glance-body">
          <div className="entries-glance-empty">
            <p>No entries found for this view</p>
          </div>
        </div>

        {/* Footer */}
        <div className="entries-glance-footer">
          <div className="eg-footer-bar">
            <div className="eg-footer-pills">
              <div className="eg-footer-pill eg-footer-pill--expense">
                <span className="eg-footer-pill__label">Total Spent:</span>
                <span className="eg-footer-pill__val">৳0.00</span>
              </div>
              <div className="eg-footer-pill eg-footer-pill--income">
                <span className="eg-footer-pill__label">Total Income:</span>
                <span className="eg-footer-pill__val">৳0.00</span>
              </div>
            </div>
            <button
              type="button"
              className="eg-stats-toggle-btn"
              aria-label="Expand stats options"
              aria-expanded="false"
            >
              <ChevronUp size={14} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}