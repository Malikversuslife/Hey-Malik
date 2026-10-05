import { Icon } from '../Icon'
import { contact } from '../../data/contact'
import { Fragment, useEffect, useRef } from 'react'
import type { BrandMediaData, BrandProject, BrandRatio, BrandSegment } from '../../data/branding'
import { brandProjects } from '../../data/branding'

function pad(value: number) { return String(value).padStart(2, '0') }

function standardGallery(segments: BrandSegment[]) {
  const media: BrandMediaData[] = []
  segments.forEach(segment => {
    if (segment.kind === 'media') media.push(segment.media)
    if (segment.kind === 'pair') media.push(segment.left, segment.right)
    if (segment.kind === 'grid') media.push(...segment.tiles)
  })
  const ratios: BrandRatio[] = ['16:9', '1:1', '1:1', '21:9', '4:5', '4:5', '4:5', '21:9', '4:5', '4:5', '4:5', '16:9', '1:1', '1:1', '21:9']
  const slots = media.slice(0, 15).map((item, index) => ({ ...item, ratio: ratios[index] }))
  const arranged: BrandSegment[] = []
  if (slots[0]) arranged.push({ kind: 'media', media: slots[0] })
  if (slots[1] && slots[2]) arranged.push({ kind: 'pair', left: slots[1], right: slots[2] })
  if (slots[3]) arranged.push({ kind: 'media', media: slots[3] })
  if (slots[4] && slots[5] && slots[6]) arranged.push({ kind: 'grid', tiles: slots.slice(4, 7) })
  if (slots[7]) arranged.push({ kind: 'media', media: slots[7] })
  if (slots[8] && slots[9] && slots[10]) arranged.push({ kind: 'grid', tiles: slots.slice(8, 11) })
  if (slots[11]) arranged.push({ kind: 'media', media: slots[11] })
  if (slots[12] && slots[13]) arranged.push({ kind: 'pair', left: slots[12], right: slots[13] })
  if (slots[14]) arranged.push({ kind: 'media', media: slots[14] })
  return arranged
}

function Lines({ text }: { text: string }) {
  return <>{text.split('\n').map((line, index) => <Fragment key={index}>{index > 0 && <br />}{line}</Fragment>)}</>
}

export function BrandMedia({ media, priority = false }: { media: BrandMediaData; priority?: boolean }) {
  const ratio: BrandRatio = media.ratio ?? '16:9'
  const frame = media.source ? (
    <img src={media.source} alt={media.alt ?? ''} loading={priority ? 'eager' : 'lazy'} />
  ) : (
    <div className="brand-media-frame" role="img" aria-label={`${pad(media.index)} / ${media.title}`} />
  )
  return <figure className="brand-media brand-reveal" data-ratio={ratio}>{frame}</figure>
}

export function BrandVideo({ index, title, ratio = '9:16', source, poster, alt }: { index: number; title: string; ratio?: BrandRatio; caption?: string; source?: string; poster?: string; alt?: string }) {
  const video = source ? (
    <video src={source} poster={poster} muted autoPlay loop playsInline aria-label={alt ?? `${pad(index)} / ${title}`} />
  ) : (
    <div className="brand-media-frame" role="img" aria-label={`${pad(index)} / ${title}`} />
  )
  return <figure className="brand-media brand-reveal" data-ratio={ratio}>{video}</figure>
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
      ? <button type="button" className="brand-next-link" onClick={() => onNext!(next.slug)} aria-label={`Open next project: ${next.name}`}><span className="brand-next-name"><Lines text={next.name} /></span><span className="brand-next-meta"><small>{next.note}</small><Icon name="arrowRight" className="brand-next-arrow" /></span></button>
      : <div className="brand-next-link is-future"><span className="brand-next-name"><Lines text={next.name} /></span><span className="brand-next-meta"><small>{next.note}</small></span></div>}
  </footer>
}

function BrandHero({ project }: { project: BrandProject }) {
  const narrative = project.movements.filter(movement => movement.segments.some(segment => ['copy', 'statement', 'quote', 'label'].includes(segment.kind)))
  return <header className="brand-hero" id="top">
    <BrandMedia media={{ ...project.hero, caption: project.hero.caption ?? project.movements.flatMap(movement => movement.segments).find((segment): segment is Extract<BrandSegment, { kind: 'media' }> => segment.kind === 'media' && segment.media.index === project.hero.index && segment.media.title === project.hero.title)?.media.caption }} priority />
    <div className="brand-overview">
      <dl className="brand-meta">
        <div><dt>PROJECT</dt><dd>{project.name}</dd></div>
        <div><dt>DISCIPLINE</dt><dd>{project.category}</dd></div>
        {project.meta.map(entry => <div key={entry.label}><dt>{entry.label}</dt><dd>{entry.value}</dd></div>)}
      </dl>
      <div className="brand-story">
        <h1 className="brand-hero-title"><Lines text={project.tagline} /></h1>
        <p className="brand-descriptor">{project.descriptor}</p>
        <p className="brand-intro">{project.intro}</p>
        {narrative.length > 0 && <details className="brand-story-details">
          <summary><span className="brand-expand-label">Expand info</span><span className="brand-collapse-label">Less info</span><Icon name="arrowRight" /></summary>
          <div className="brand-story-expanded">{narrative.map(movement => <section key={movement.id} aria-labelledby={`${movement.id}-story-title`}>
            <h2 id={`${movement.id}-story-title`}>{movement.title.toLowerCase()}</h2>
            {movement.segments.filter(segment => ['copy', 'statement', 'quote', 'label'].includes(segment.kind)).map((segment, index) => <BrandSegmentRenderer key={index} segment={segment} />)}
          </section>)}</div>
        </details>}
      </div>
    </div>
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
  const gallerySegments = standardGallery(project.movements.flatMap(movement => movement.segments
    .filter(segment => ['media', 'pair', 'grid', 'video'].includes(segment.kind))
    .filter(segment => !(segment.kind === 'media' && segment.media.index === project.hero.index && segment.media.title === project.hero.title))))
  return <article className={`brand-case brand-world-${project.world}`} ref={rootRef} data-world={project.world} id={project.slug}>
    <BrandHero project={project} />
    <div className="brand-gallery" aria-label={`${project.name} brand gallery`}>
      {gallerySegments.map((segment, index) => <BrandSegmentRenderer key={`${project.slug}-${index}`} segment={segment} />)}
    </div>
    <div className="brand-contact"><a href={`mailto:${contact.email}`}>Start a project <Icon name="arrowUpRight" /></a></div>
    <BrandNextProject next={project.next} onNext={onNext} />
  </article>
}
