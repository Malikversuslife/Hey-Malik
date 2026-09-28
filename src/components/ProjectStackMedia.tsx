import { useEffect, useRef } from 'react'

export function ProjectStackMedia({
  label,
  note = 'Real project capture to be added',
  className = '',
  source
}: {
  label: string
  note?: string
  className?: string
  source?: string | null
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video || !source) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.35) video.play().catch(() => undefined)
      else video.pause()
    }, { threshold: [0, .35, .7] })
    observer.observe(video)
    return () => { observer.disconnect(); video.pause() }
  }, [source])

  return (
    <span className={`project-stack-media${className ? ` ${className}` : ''}`} aria-hidden="true">
      {source ? <video ref={videoRef} src={source} muted loop playsInline preload="metadata" /> : <><span className="project-stack-media-label">{label}</span><span className="project-stack-media-note">{note}</span></>}
    </span>
  )
}
