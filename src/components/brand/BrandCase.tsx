import { Fragment, useEffect, useRef } from 'react'
import type { BrandMediaData, BrandProject, BrandRatio, BrandSegment } from '../../data/branding'
import { brandProjects } from '../../data/branding'

function pad(value: number) { return String(value).padStart(2, '0') }

function Lines({ text }: { text: string }) {
  return <>{text.split('\n').map((line, index) => <Fragment key={index}>{index > 0 && <br />}{line}</Fragment>)}</>
}

export function BrandMedia({ media, priority = false }: { media: BrandMediaData; priority?: boolean }) {
  const ratio: BrandRatio = media.ratio ?? '16:9'
  const frame = media.source ? (
    <img src={media.source} alt={media.alt ?? ''} loading={priority ? 'eager' : 'lazy'} />
  ) : (
    <div className="brand-media-frame" role="img" aria-label={`${pad(media.index)} / ${media.title}`}>
      <span className="brand-media-label">{pad(media.index)} / {media.title}</span>
      <span className="brand-media-swatches" aria-hidden="true"><i /><i /><i /><i /><i /><i /></span>
    </div>
  )
  return <figure className="brand-media brand-reveal" data-ratio={ratio}>{frame}{media.caption && <figcaption>{media.caption}</figcaption>}</figure>
}

export function BrandVideo({ index, title, ratio = '9:16', caption, source, poster, alt }: { index: number; title: string; ratio?: BrandRatio; caption?: string; source?: string; poster?: string; alt?: string }) {
  const video = source ? (
    <video src={source} poster={poster} muted autoPlay loop playsInline aria-label={alt ?? `${pad(index)} / ${title}`} />
  ) : (
    <div className="brand-media-frame" role="img" aria-label={`${pad(index)} / ${title}`}>
      <span className="brand-media-label">{pad(index)} / {title}</span>
      <span className="brand-media-kind">VIDEO SLOT</span>
      <span className="brand-media-swatches" aria-hidden="true"><i /><i /><i /><i /><i /><i /></span>
    </div>
  )
  return <figure className="brand-media brand-reveal" data-ratio={ratio}>{video}{caption && <figcaption>{caption}</figcaption>}</figure>
}

export function BrandPair({ left, right }: { left: BrandMediaData; right: BrandMediaData }) {
  return <div className="brand-pair"><BrandMedia media={left} /><BrandMedia media={right} /></div>
}

export function BrandGrid({ tiles }: { tiles: BrandMediaData[] }) {
  return <div className="brand-grid">{tiles.map((tile, index) => <BrandMedia key={index} media={tile} />)}</div>
}

export function BrandStatement({ text }: { text: string }) {
  return <h2 className="brand-statement brand-reveal"><Lines text={text} /></h2>
}

export function BrandCopy({ text }: { text: string }) {
  return <p className="brand-copy brand-reveal">{text}</p>
}

export function BrandQuote({ text, source }: { text: string; source?: string }) {
  return <blockquote className="brand-quote brand-reveal"><p>{text}</p>{source && <footer>{source}</footer>}</blockquote>
}

export function BrandSectionLabel({ number, title, id }: { number: string; title: string; id?: string }) {
  return <h2 className="brand-movement-label" id={id}><b>{number}</b><span>/ {title.toLowerCase()}</span></h2>
}

export function BrandSpacer({ tall = false }: { tall?: boolean }) {
  return <div className={`brand-spacer${tall ? ' is-tall' : ''}`} />
}

export function BrandNextProject({ next, onNext }: { next: BrandProject['next']; onNext?: (slug: string) => void }) {
  const available = next.available !== false && !!onNext
  const label = <span className="brand-next-eyebrow">NEXT PROJECT <b>{next.name}</b></span>
  return <footer className="brand-next">{label}
    {available
      ? <button type="button" className="brand-next-link" onClick={() => onNext!(next.slug)} aria-label={`Open next project — ${next.name}`}><span className="brand-next-name"><Lines text={next.name} /></span><span className="brand-next-meta"><small>{next.note}</small><span className="brand-next-arrow" aria-hidden="true">→</span></span></button>
      : <div className="brand-next-link is-future"><span className="brand-next-name"><Lines text={next.name} /></span><span className="brand-next-meta"><small>{next.note}</small></span></div>}
  </footer>
}

function BrandHero({ project }: { project: BrandProject }) {
  return <header className="brand-hero" id="top">
    <div className="brand-case-label"><b>B/ {project.category}</b><span>{project.number}</span></div>
    <div className="brand-hero-name">{project.name}</div>
    <h1 className="brand-hero-title brand-reveal"><Lines text={project.tagline} /></h1>
    <p className="brand-descriptor">{project.descriptor}</p>
    <dl className="brand-meta">{project.meta.map(entry => <div key={entry.label}><dt>{entry.label}</dt><dd>{entry.value}</dd></div>)}</dl>
    <p className="brand-intro brand-reveal">{project.intro}</p>
    <BrandMedia media={project.hero} priority />
  </header>
}

function BrandSegmentRenderer({ segment }: { segment: BrandSegment }) {
  switch (segment.kind) {
    case 'label': return <span className="brand-segment-label">{segment.text}</span>
    case 'statement': return <BrandStatement text={segment.text} />
    case 'copy': return <BrandCopy text={segment.text} />
    case 'media': return <BrandMedia media={segment.media} />
    case 'pair': return <BrandPair left={segment.left} right={segment.right} />
    case 'grid': return <BrandGrid tiles={segment.tiles} />
    case 'video': return <BrandVideo index={segment.index} title={segment.title} ratio={segment.ratio} caption={segment.caption} source={segment.source} poster={segment.poster} alt={segment.alt} />
    case 'quote': return <BrandQuote text={segment.text} source={segment.source} />
    case 'spacer': return <BrandSpacer tall={segment.tall} />
  }
}

export function BrandCase({ project, onNext }: { project?: BrandProject; onNext: (slug: string) => void }) {
  const rootRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const root = rootRef.current
    if (!root) return
    const targets = [...root.querySelectorAll<HTMLElement>('.brand-reveal')]
    if (!targets.length) return
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-in'); observer.unobserve(entry.target) }
    }), { threshold: 0.18, rootMargin: '0px 0px -8% 0px' })
    targets.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [project?.slug])
  if (!project) {
    const fallback = brandProjects[0]
    return <section className="brand-preparation" id="top" ref={rootRef}>
      <div className="brand-case-label"><b>B/ BRANDING</b><span>CASE</span></div>
      <h1>CASE STUDY<br /><em>IN PREPARATION.</em></h1>
      <p>This brand case is being prepared.</p>
      {fallback && <button className="brand-preparation-back" onClick={() => onNext(fallback.slug)}>← BACK TO {fallback.name}</button>}
    </section>
  }
  return <article className={`brand-case brand-world-${project.world}`} ref={rootRef} data-world={project.world} id={project.slug}>
    <BrandHero project={project} />
    {project.movements.map(movement => movement.title === 'NEXT PROJECT' ? (
      <BrandNextProject key={movement.id} next={project.next} onNext={onNext} />
    ) : (
      <section key={movement.id} className={`brand-movement${movement.title === 'CLOSING' ? ' is-closing' : ''}`} id={movement.id} aria-labelledby={`${movement.id}-label`}>
        <BrandSectionLabel number={movement.number} title={movement.title} id={`${movement.id}-label`} />
        {movement.segments.map((segment, index) => <BrandSegmentRenderer key={index} segment={segment} />)}
      </section>
    ))}
  </article>
}