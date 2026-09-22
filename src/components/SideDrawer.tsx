import { ChevronDown, History } from 'lucide-react'
import { ExpendfyLogo } from './ExpendfyLogo'
import { BrandWordmark } from './BrandWordmark'

export function SideDrawer() {
  return (
    <>
      <button type="button" className="drawer__backdrop" aria-label="Close menu" />
      <aside className="drawer" role="dialog" aria-modal>
        <div className="drawer__header">
          <div className="drawer__brand">
            <ExpendfyLogo size={32} />
            <BrandWordmark size="sm" layout="stacked" />
          </div>
          <button type="button" className="drawer__close" aria-label="Close">×</button>
        </div>

        <div className="drawer__activity">
          <span className="drawer__currency-label">Activity</span>
          <button type="button" className="drawer__activity-btn">
            <div className="drawer__activity-btn-left">
              <span className="drawer__activity-icon">
                <History size={17} strokeWidth={2.2} />
              </span>
              <span className="drawer__activity-label">Monthly Activity</span>
            </div>
            <span className="drawer__activity-badge">View log</span>
          </button>
        </div>

        <div className="drawer__currency">
          <span className="drawer__currency-label">Currency</span>
          <button
            type="button"
            className="drawer__currency-trigger"
            aria-label="Currency: ৳ BDT (Bangladeshi Taka)"
            aria-haspopup="dialog"
          >
            <div className="drawer__currency-trigger-left">
              <span className="drawer__currency-trigger-symbol">৳</span>
              <div className="drawer__currency-trigger-info">
                <span className="drawer__currency-trigger-code">
                  <span className="drawer__currency-trigger-symbol-text">৳</span> BDT
                </span>
                <span className="drawer__currency-trigger-name">Bangladeshi Taka</span>
              </div>
            </div>
            <ChevronDown size={16} className="drawer__currency-trigger-chevron" />
          </button>
        </div>

        <div className="drawer__time-format">
          <span className="drawer__currency-label">Time Format</span>
          <div className="drawer__time-toggle">
            <button type="button" className="drawer__time-btn">12h</button>
            <button type="button" className="drawer__time-btn drawer__time-btn--active">24h</button>
          </div>
        </div>

        <div className="drawer__appearance">
          <span className="drawer__currency-label">Appearance</span>
          <div className="drawer__time-toggle">
            <button type="button" className="drawer__time-btn drawer__time-btn--active">Dark</button>
            <button type="button" className="drawer__time-btn">Light</button>
          </div>
        </div>

        <div className="drawer__about">
          <div className="drawer__about-header">
            <p className="drawer__about-title">About</p>
            <BrandWordmark size="sm" layout="inline" />
          </div>
          <p className="drawer__about-text">
            Expendfy Persona is a personal expense tracking app designed to help you stay on top of your spending simply and
            visually.
            <br />
            Built with focus, shipped with purpose.
            <br />
            <br />
            Made by
            <br />
            Mushfiqur Rahman Faiyaz
            <br />
            © 2026 RanFy Inc. All rights reserved.
          </p>
        </div>
      </aside>
    </>
  )
}