import { Icon } from './Icon'
export const IN_APP_NAV_KEY = 'm:portfolio:inapp-nav'

export function markInAppNavigation() {
  try { window.sessionStorage.setItem(IN_APP_NAV_KEY, '1') } catch { /* storage unavailable */ }
}

function arrivedViaInAppNavigation() {
  try { return window.sessionStorage.getItem(IN_APP_NAV_KEY) === '1' } catch { return false }
}

export function CaseBackButton({ onFallback, label = 'Back', floating = false }: { onFallback: () => void; label?: string; floating?: boolean }) {
  const goBack = () => {
    if (arrivedViaInAppNavigation() && window.history.length > 1) { window.history.back(); return }
    onFallback()
  }
  return <button className={`case-back-button${floating ? ' is-floating' : ''}`} type="button" onClick={goBack} aria-label={label ? `Go back: ${label}` : 'Go back'}>
    <Icon name="arrowLeft" className="case-back-glyph" />
    {label && <span className="case-back-label">{label}</span>}
  </button>
}
