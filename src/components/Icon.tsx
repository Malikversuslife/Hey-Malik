import type { ReactNode } from 'react'

export type IconName = 'arrowUpRight' | 'arrowRight' | 'arrowLeft' | 'mail' | 'file' | 'chat' | 'close' | 'send' | 'product' | 'brand' | 'lab' | 'user' | 'linkedin' | 'instagram' | 'behance' | 'x' | 'substack' | 'dribbble'
const shapes: Record<IconName, ReactNode> = {
  arrowUpRight: <path d="M6 18 18 6M6 6h12v12" />,
  arrowRight: <path d="M4 12h16m-6-6 6 6-6 6" />,
  arrowLeft: <path d="M20 12H4m6-6-6 6 6 6" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>,
  file: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6M8 13h8M8 17h5" /></>,
  chat: <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-2 2v-9.5A8.5 8.5 0 0 1 10.5 4H13a8 8 0 0 1 8 7.5ZM7 10h9M7 14h6" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  send: <path d="m5 12 7-7 7 7M12 5v15" />,
  product: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18M9 9v11" /></>,
  brand: <><path d="m12 3 9 9-9 9-9-9zM12 3v18M3 12h18" /></>,
  lab: <path d="M9 3h6M10 3v7l-6 9a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2l-6-9V3M8 15h8" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7M11 17v-7m0 3a3 3 0 0 1 6 0v4" /><circle cx="7" cy="7" r=".8" fill="currentColor" stroke="none" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>,
  behance: <><path d="M3 5h5a3.5 3.5 0 0 1 0 7H3m0-7v14h5a3.5 3.5 0 0 0 0-7M15 6h5M14 14h8a4 4 0 0 0-8 0v1a4 4 0 0 0 7 3" /></>,
  x: <path d="M4 3h4l12 18h-4ZM20 3l-7 8M4 21l7-8" />,
  substack: <><path d="M4 3h16M4 7h16M4 11h16v10l-8-5-8 5z" /></>,
  dribbble: <><circle cx="12" cy="12" r="9" /><path d="M8 4c5 6 7 10 8 16M3 10c7 1 12-1 16-5M5 19c3-7 8-9 16-7" /></>
}
export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return <svg className={`portfolio-icon ${className}`.trim()} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{shapes[name]}</svg>
}