import { Fragment, useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import type { ProductCaseMediaData, ProductCaseMeta } from '../../data/productCases'

/* =========================================================================
   PRODUCT CASE — shared primitives for the product case-study system.
   Composition stays per-case (editorial freedom); these are the building
   blocks Nomi / Hanya / Yousewire can reuse.
   ========================================================================= */

export function pad(value: string | number): string {
  const s = String(value)
  return s.length === 1 ? `0${s}` : s
}

export function ProductCase({ id, className = '', children, style }: { id?: string; className?: string; children: ReactNode; style?: CSSProperties }) {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const root = rootRef.current
    if (!root) return
    const targets = Array.from(root.querySelectorAll<HTMLElement>('.pc-reveal'))
    if (!targets.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  return (
    <article ref={rootRef} id={id} className={`product-case ${className}`.trim()} style={style}>
      {children}
    </article>
  )
}

/* ------------------------------------------------------------------ HERO */

function MetaRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="pc-meta-row">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  )
}

export function ProductCaseHero({ meta, media }: { meta: ProductCaseMeta; media: ProductCaseMediaData }) {
  return (
    <header className="pc-hero pc-reveal">
      <div className="pc-hero-top">
        <span className="pc-eyebrow">{meta.discipline}</span>
        <span className="pc-index">CASE {pad(meta.index)}</span>
      </div>
      <h1 className="pc-hero-title">{meta.title}</h1>
      <p className="pc-hero-descriptor">{meta.descriptor}</p>
      <dl className="pc-meta">
        <MetaRow label="ROLE" value={meta.role} />
        <MetaRow label="SCOPE" value={meta.scope} />
        <MetaRow label="PLATFORM" value={meta.platform} />
        <MetaRow label="PROJECT TYPE" value={meta.projectType} />
      </dl>
      <div className="pc-hero-media">
        <ProductCaseMedia media={media} priority />
      </div>
    </header>
  )
}

/* ---------------------------------------------------------------- SECTIONS */

export function ProductCaseSection({ id, label, children, className = '' }: { id?: string; label?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`pc-section ${className}`.trim()}>
      {label != null && (
        <div className="pc-section-label">
          <span className="pc-label">{label}</span>
        </div>
      )}
      <div className="pc-section-body">{children}</div>
    </section>
  )
}

export function ProductCaseIntro({ children }: { children: ReactNode }) {
  return <p className="pc-intro pc-reveal">{children}</p>
}

export function ProductCaseStatement({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={`pc-statement ${className}`.trim()}>{children}</h2>
}

export function ProductCaseCopy({ children }: { children: ReactNode }) {
  return <p className="pc-copy pc-reveal">{children}</p>
}

export function ProductCasePull({ children }: { children: ReactNode }) {
  return <p className="pc-pull pc-reveal">{children}</p>
}

export function ProductCaseQuote({ children, cite }: { children: ReactNode; cite?: string }) {
  return (
    <blockquote className="pc-quote pc-reveal">
      <span className="pc-quote-mark">“</span>
      <p>{children}</p>
      {cite && <footer>{cite}</footer>}
    </blockquote>
  )
}

export function ProductCaseThesis({ children }: { children: ReactNode }) {
  return <p className="pc-thesis pc-reveal">{children}</p>
}

export function ProductCaseNote({ label, children }: { label?: ReactNode; children: ReactNode }) {
  return (
    <aside className="pc-note pc-reveal">
      {label != null && <span className="pc-note-label">{label}</span>}
      <p className="pc-note-copy">{children}</p>
    </aside>
  )
}

/* --------------------------------------------------------------- DECISION */

export function ProductCaseDecision({
  label = 'DESIGN DECISION',
  statement,
  rationale,
  media
}: {
  label?: string
  statement: ReactNode
  rationale?: ReactNode
  media?: ProductCaseMediaData
}) {
  return (
    <div className="pc-decision pc-reveal">
      <div className="pc-decision-body">
        <span className="pc-label">{label}</span>
        <p className="pc-decision-statement">{statement}</p>
        {rationale && <p className="pc-copy pc-decision-copy">{rationale}</p>}
      </div>
      {media && <ProductCaseMedia media={media} />}
    </div>
  )
}

/* ----------------------------------------------------------------- MEDIA */

export function ProductCaseMedia({ media, className = '', priority = false }: { media: ProductCaseMediaData; className?: string; priority?: boolean }) {
  const ratio = media.ratio ?? 'wide'
  return (
    <figure className={`pc-media pc-media-${ratio} pc-reveal ${className}`.trim()} role="group" aria-label={media.title}>
      <div className="pc-media-frame">
        <div className="pc-media-grid" />
        <div className="pc-media-corner" />
        <div className="pc-media-watermark">M/</div>
        <div className="pc-media-caption">
          <span className="pc-media-title">{media.title}</span>
          {media.caption && <span className="pc-media-caption-line">{media.caption}</span>}
        </div>
        <div className="pc-media-foot">
          <span className="pc-label">MEDIA {pad(media.index)}</span>
          <span className="pc-media-pending">REAL PRODUCT CAPTURE PENDING</span>
        </div>
      </div>
      {media.note && <figcaption className="pc-media-note">{media.note}</figcaption>}
    </figure>
  )
}

export function ProductCasePair({ a, b }: { a: ProductCaseMediaData; b: ProductCaseMediaData }) {
  return (
    <div className="pc-pair">
      <ProductCaseMedia media={a} />
      <ProductCaseMedia media={b} />
    </div>
  )
}

/* ----------------------------------------------------------------- FUELS */

export function ProductCaseSystem({
  layers,
  note
}: {
  layers: { label: string; state?: string; tone?: 'ok' | 'warn' | 'danger' | 'muted' }[]
  note?: string
}) {
  return (
    <div className="pc-system pc-reveal">
      <div className="pc-system-list">
        {layers.map((l) => (
          <div key={l.label} className="pc-system-item">
            <span className="pc-system-label">{l.label}</span>
            {l.state && <span className={`pc-system-state pc-tone-${l.tone ?? 'muted'}`}>{l.state}</span>}
          </div>
        ))}
      </div>
      {note && <p className="pc-media-note">{note}</p>}
    </div>
  )
}

export function ProductCaseChips({ items }: { items: { label: string; state: string; tone?: 'ok' | 'warn' | 'danger' | 'muted' }[] }) {
  return (
    <div className="pc-chips pc-reveal" role="list" aria-label="Verification outcome">
      {items.map((c) => (
        <span key={c.label} className={`pc-chip pc-chip-${c.tone ?? 'muted'}`} role="listitem">
          <span className="pc-chip-label">{c.label}</span>
          <span className="pc-chip-state">{c.state}</span>
        </span>
      ))}
    </div>
  )
}

export type PcTone = 'ok' | 'warn' | 'danger' | 'muted'

export function ProductCaseCompare({
  left,
  right,
  label = 'COMPARISON',
  className = ''
}: {
  left: { label: string; heading: string; items: string[]; outcome: string; tone?: PcTone }
  right: { label: string; heading: string; items: string[]; outcome: string; tone?: PcTone }
  label?: string
  className?: string
}) {
  return (
    <div className={`pc-compare pc-reveal ${className}`.trim()}>
      <span className="pc-label">{label}</span>
      <div className="pc-compare-cols">
        <div className={`pc-compare-col pc-tone-${left.tone ?? 'muted'}`}>
          <h3>{left.heading}</h3>
          <p className="pc-compare-label">{left.label}</p>
          <ul>
            {left.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="pc-compare-outcome">{left.outcome}</p>
        </div>
        <div className={`pc-compare-col pc-tone-${right.tone ?? 'muted'}`}>
          <h3>{right.heading}</h3>
          <p className="pc-compare-label">{right.label}</p>
          <ul>
            {right.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="pc-compare-outcome">{right.outcome}</p>
        </div>
      </div>
    </div>
  )
}

export function ProductCaseScenarios({ rows, label }: { rows: { mark: string; name: string; kind: string }[]; label?: string }) {
  return (
    <div className="pc-scenarios pc-reveal">
      {label && <div className="pc-label-inline"><span className="pc-label">{label}</span></div>}
      <ul>
        {rows.map((r) => (
          <li key={r.name}>
            <span className="pc-scenario-mark">{r.mark}</span>
            <span className="pc-scenario-name">{r.name}</span>
            <span className="pc-scenario-kind">{r.kind}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ProductCasePaths({
  label = 'STATE SEPARATION',
  columns
}: {
  label?: string
  columns: { title: string; steps: string[]; outcome: string; tone?: 'ok' | 'danger' | 'muted' }[]
}) {
  return (
    <div className="pc-paths pc-reveal">
      <span className="pc-label">{label}</span>
      <div className="pc-paths-cols">
        {columns.map((c) => (
          <div key={c.title} className={`pc-paths-col pc-tone-${c.tone ?? 'muted'}`}>
            <h3>{c.title}</h3>
            <ol>
              {c.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p className="pc-paths-outcome">{c.outcome}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProductCaseConnected({ items }: { items: string[] }) {
  return (
    <div className="pc-connected pc-reveal">
      <span className="pc-label">CONNECTED SYSTEM</span>
      <div className="pc-connected-flow" role="list" aria-label="Connected application surfaces">
        {items.map((i, n) => (
          <Fragment key={i}>
            {n > 0 && <span className="pc-connected-arrow" aria-hidden="true">/</span>}
            <span className="pc-connected-item" role="listitem">{i}</span>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

/* --------------------------------------------------------------- PROTOTYPE */

export function ProductCaseDisclosure({
  label = 'PROTOTYPE BOUNDARY',
  simulates,
  excludes,
  url,
  cta = 'Open live prototype'
}: {
  label?: string
  simulates: string[]
  excludes: string[]
  url: string
  cta?: string
}) {
  return (
    <div className="pc-disclosure pc-reveal">
      <span className="pc-label">{label}</span>
      <div className="pc-disclosure-cols">
        <div className="pc-disclosure-col">
          <h3>Simulates</h3>
          <ul>
            {simulates.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="pc-disclosure-col">
          <h3>Does not include</h3>
          <ul>
            {excludes.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      </div>
      <a className="pc-disclosure-link" href={url} target="_blank" rel="noopener noreferrer">
        {cta} <span aria-hidden="true">↗</span>
      </a>
    </div>
  )
}

/* ------------------------------------------------------------------- NEXT */

export function ProductCaseNext({
  next,
  onNext
}: {
  next: { slug: string; index: string; title: string; descriptor: string; discipline: string; note: string }
  onNext: (slug: string) => void
}) {
  return (
    <button type="button" className="pc-next pc-reveal" onClick={() => onNext(next.slug)} aria-label={`Next project: ${next.title}`}>
      <div className="pc-next-top">
        <span className="pc-label">NEXT PROJECT</span>
        <span className="pc-index">CASE {pad(next.index)}</span>
      </div>
      <div className="pc-next-line">
        <span className="pc-next-title">{next.title}</span>
        <span className="pc-next-arrow" aria-hidden="true">↗</span>
      </div>
      <div className="pc-next-meta">
        <span className="pc-next-descriptor">{next.descriptor}</span>
        <span className="pc-next-discipline">{next.discipline}</span>
      </div>
    </button>
  )
}

export function ProductCaseClosing({ children, descriptor }: { children: ReactNode; descriptor?: string }) {
  return (
    <div className="pc-closing pc-reveal">
      <div className="pc-closing-inner">
        <span className="pc-label">THANKS FOR READING</span>
        <p className="pc-closing-title">{children}</p>
        {descriptor && <p className="pc-closing-descriptor">{descriptor}</p>}
      </div>
    </div>
  )
}