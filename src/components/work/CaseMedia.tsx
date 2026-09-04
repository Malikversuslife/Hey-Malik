type CaseMediaProps = {
  index: string
  title: string
  caption?: string
  className?: string
}

export function CaseMedia({ index, title, caption, className = '' }: CaseMediaProps) {
  return <figure className={`case-media ${className}`}>
    <div className="case-media-placeholder"><span>M/ MEDIA {index}</span><strong>{title}</strong><small>REAL PRODUCT CAPTURE<br />PENDING</small></div>
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
}

export function CaseMediaPair({ left, right }: { left: CaseMediaProps; right: CaseMediaProps }) {
  return <div className="case-media-pair"><CaseMedia {...left} /><CaseMedia {...right} /></div>
}
