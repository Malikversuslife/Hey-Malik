import { Icon } from './Icon'
import type { ReactNode } from 'react'
import { CaseBackButton } from './CaseBackButton'

export type Crumb = {
  label: ReactNode
  onClick?: () => void
  current?: boolean
  mark?: boolean
}

export function CaseChrome({ onBack, onAsk, crumbs }: { onBack: () => void; onAsk: () => void; crumbs: Crumb[] }) {
  return <header className="case-chrome">
    <CaseBackButton onFallback={onBack} label="Back" />
    <nav className="case-breadcrumb" aria-label="Breadcrumb">
      <ol>
        {crumbs.map((crumb, index) => (
          <li key={index} className={crumb.mark ? 'case-breadcrumb-mark' : undefined}>
            {crumb.onClick && !crumb.current
              ? <button type="button" className="case-breadcrumb-link" onClick={crumb.onClick}>{crumb.label}</button>
              : <span className="case-breadcrumb-current" aria-current={crumb.current ? 'page' : undefined}>{crumb.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
    <button className="case-chrome-ask" type="button" onClick={onAsk}><Icon name="chat" /> ASK MALIK</button>
  </header>
}
