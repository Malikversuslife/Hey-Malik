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
  const isVideo = !!source && /\.(mp4|webm|mov)(?:[?#]|$)/i.test(source)

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
      {source
        ? isVideo
          ? <video ref={videoRef} src={source} muted loop playsInline preload="metadata" />
          : <img src={source} alt="" loading="lazy" />
        : <><span className="project-stack-media-label">{label}</span><span className="project-stack-media-note">{note}</span></>}
    </span>
  )
}
