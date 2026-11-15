import { useEffect, useRef, useState } from 'react'

export function ProjectStackMedia({
  label,
  note = 'Real project capture to be added',
  className = '',
  source,
  poster
}: {
  label: string
  note?: string
  className?: string
  source?: string | null
  poster?: string
}) {
  const mediaRef = useRef<HTMLSpanElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isVideo = !!source && /\.(mp4|webm|mov)(?:[?#]|$)/i.test(source)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

  useEffect(() => {
    const media = mediaRef.current
    if (!media || !isVideo || !source) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setShouldLoadVideo(true)
      observer.disconnect()
    }, { rootMargin: '600px 0px' })
    observer.observe(media)
    return () => observer.disconnect()
  }, [isVideo, source])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !source || !shouldLoadVideo) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) {
      video.pause()
      video.currentTime = 0
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.35) video.play().catch(() => undefined)
      else {
        video.pause()
        video.currentTime = 0
      }
    }, { threshold: [0, .35, .7] })
    observer.observe(video)
    return () => { observer.disconnect(); video.pause(); video.currentTime = 0 }
  }, [shouldLoadVideo, source])

  return (
    <span ref={mediaRef} className={`project-stack-media${className ? ` ${className}` : ''}`} aria-hidden="true">
      {source
        ? isVideo
          ? <video ref={videoRef} src={shouldLoadVideo ? source : undefined} poster={poster} muted loop playsInline preload="none" />
          : <img src={source} alt="" loading="lazy" decoding="async" fetchPriority="low" />
        : <><span className="project-stack-media-label">{label}</span><span className="project-stack-media-note">{note}</span></>}
    </span>
  )
}
