export function ProjectStackMedia({
  label,
  note = 'Real project capture to be added',
  className = ''
}: {
  label: string
  note?: string
  className?: string
}) {
  return (
    <span className={`project-stack-media${className ? ` ${className}` : ''}`} aria-hidden="true">
      <span className="project-stack-media-label">{label}</span>
      <span className="project-stack-media-note">{note}</span>
    </span>
  )
}