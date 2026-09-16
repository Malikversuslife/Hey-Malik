import type { ReactNode } from 'react'
import { CaseChrome, type Crumb } from './CaseChrome'

export function NewCaseShell({
  kind,
  crumbs,
  onBack,
  onAsk,
  children
}: {
  kind: 'brand' | 'product' | 'lab'
  crumbs: Crumb[]
  onBack: () => void
  onAsk: () => void
  children: ReactNode
}) {
  return (
    <div className={`new-case new-case-${kind}`}>
      <CaseChrome onBack={onBack} onAsk={onAsk} crumbs={crumbs} />
      <div className="new-case-body">{children}</div>
    </div>
  )
}
