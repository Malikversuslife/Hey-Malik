import type { ComponentType } from 'react'

export type LabStatus = 'EXPERIMENT' | 'PROTOTYPE' | 'IN PROGRESS' | 'SHIPPED' | 'ARCHIVED'

export type LabExperiment = {
  id: string
  slug: string
  title: string
  year: string
  category: string
  question: string
  summary: string
  experiment: string
  learning: string[]
  tools: string[]
  cover: string | null
  media: string | null
  status: LabStatus
  Artifact?: ComponentType
}

// Intentionally empty until real experiments and their verified content are ready.
export const labExperiments: LabExperiment[] = []
