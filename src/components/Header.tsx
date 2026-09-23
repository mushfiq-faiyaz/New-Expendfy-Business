import { Clock } from 'lucide-react'
import { ExpendfyLogo } from './ExpendfyLogo'
import { BrandWordmark } from './BrandWordmark'

type Props = {
  onMenuClick: () => void
}

const LIVE_TIME = '00:00:00'
const TODAY_SHORT_DATE = '15 Jan'
const MONTH_LABEL = 'Jan 2026'
const DISPLAY_YEAR = 2026
const MONEY = '৳0.00'

export function Header({ onMenuClick }: Props) {
  return (
    <header className="app-header">
      <div className="app-header__row">
        <div className="app-header__brand">
          <ExpendfyLogo size={40} />
          <BrandWordmark size="md" layout="stacked" />
        </div>

        <div className="app-header__time-pill" aria-label="Live time">
          <Clock size={11} strokeWidth={2.4} className="app-header__time-pill-icon" />
          <span className="app-header__time-pill-text">{LIVE_TIME}</span>
        </div>

        <button
          type="button"
          className="app-header__menu"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      <div className="app-header__meta">
        <div className="app-header__panel app-header__panel--today app-header__panel--left">
          <div className="app-header__panel-header">
            <span className="app-header__panel-title">Today</span>
            <span className="app-header__panel-subtitle">{TODAY_SHORT_DATE}</span>
          </div>
          <div className="app-header__stat-row"><span className="app-header__label app-header__label--sales">Sales</span><span className="app-header__value app-header__value--sales">{MONEY}</span></div>
          <div className="app-header__stat-row"><span className="app-header__label app-header__label--buy">Buy</span><span className="app-header__value app-header__value--buy">{MONEY}</span></div>
          <div className="app-header__stat-row"><span className="app-header__label app-header__label--expense">Expense</span><span className="app-header__value app-header__value--expense">{MONEY}</span></div>
          <div className="app-header__stat-row app-header__stat-row--profit"><span className="app-header__label app-header__label--profit app-header__label--profit-zero">Profit</span><span className="app-header__value app-header__value--profit app-header__value--profit-zero">{MONEY}</span></div>
        </div>
        <div className="app-header__divider" />
        <div className="app-header__panel app-header__panel--monthly">
          <div className="app-header__panel-header">
            <span className="app-header__panel-title app-header__panel-title--monthly">Monthly</span>
            <span className="app-header__panel-subtitle">{MONTH_LABEL}</span>
          </div>
          <div className="app-header__stat-row"><span className="app-header__label app-header__label--sales">Sales</span><span className="app-header__value app-header__value--sales">{MONEY}</span></div>
          <div className="app-header__stat-row"><span className="app-header__label app-header__label--buy">Buy</span><span className="app-header__value app-header__value--buy">{MONEY}</span></div>
          <div className="app-header__stat-row"><span className="app-header__label app-header__label--expense">Expense</span><span className="app-header__value app-header__value--expense">{MONEY}</span></div>
          <div className="app-header__stat-row app-header__stat-row--profit"><span className="app-header__label app-header__label--profit app-header__label--profit-zero">Profit</span><span className="app-header__value app-header__value--profit app-header__value--profit-zero">{MONEY}</span></div>
        </div>
        <div className="app-header__divider" />
        <div className="app-header__panel app-header__panel--yearly app-header__panel--right">
          <div className="app-header__panel-header">
            <span className="app-header__panel-title app-header__panel-title--yearly">Yearly</span>
            <span className="app-header__panel-subtitle">{DISPLAY_YEAR}</span>
          </div>
          <div className="app-header__stat-row"><span className="app-header__label app-header__label--sales">Sales</span><span className="app-header__value app-header__value--sales">{MONEY}</span></div>
          <div className="app-header__stat-row"><span className="app-header__label app-header__label--buy">Buy</span><span className="app-header__value app-header__value--buy">{MONEY}</span></div>
          <div className="app-header__stat-row"><span className="app-header__label app-header__label--expense">Expense</span><span className="app-header__value app-header__value--expense">{MONEY}</span></div>
          <div className="app-header__stat-row app-header__stat-row--profit"><span className="app-header__label app-header__label--profit app-header__label--profit-zero">Profit</span><span className="app-header__value app-header__value--profit app-header__value--profit-zero">{MONEY}</span></div>
        </div>
      </div>
    </header>
  )
}