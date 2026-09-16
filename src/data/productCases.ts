export type ProductRatio = 'full' | 'wide' | 'tall' | 'square'

export type ProductCaseMediaData = {
  index: string
  title: string
  ratio?: ProductRatio
  caption?: string
  note?: string
}

export type ProductCaseMeta = {
  slug: string
  index: string
  title: string
  descriptor: string
  discipline: string
  role: string
  scope: string
  platform: string
  projectType: string
  prototypeLabel?: string
  prototypeUrl?: string
  intro: string
  nextProject: string
}

export type ProductCaseProjectMeta = {
  slug: string
  index: string
  title: string
  descriptor: string
  discipline: string
  note: string
}

export const productCaseMeta: Record<string, ProductCaseMeta> = {
  prima: {
    slug: 'prima',
    index: '01',
    title: 'PRIMA',
    descriptor: 'AI-assisted verification OS for decentralized payments.',
    discipline: 'Product Design · AI',
    role: 'Product Designer',
    scope: 'Product Strategy · UX/UI Design · AI Experience · Prototyping',
    platform: 'Merchant Web Application',
    projectType: 'Speculative Product Concept',
    prototypeLabel: 'Connected Frontend Prototype',
    prototypeUrl: 'https://prima-mu-nine.vercel.app/',
    intro: 'Prima explores how merchants could verify decentralized identity evidence, investigate uncertainty, and make safer settlement decisions without handing deterministic trust decisions to AI.',
    nextProject: 'nomi'
  },
  nomi: {
    slug: 'nomi',
    index: '02',
    title: 'NOMI',
    descriptor: 'An adaptive learning companion where practice, progress, recommendations, and contextual AI work together to shape what the learner does next.',
    discipline: 'Product Design · AI',
    role: 'Product Designer',
    scope: 'Product Strategy · UX Architecture · AI Interaction Design · Adaptive-Learning Flows · Design System · Brand Experience',
    platform: 'Responsive Web Application',
    projectType: 'Product Concept',
    intro: 'Nomi is an adaptive learning product designed around a simple idea: learning should respond to the learner, not force every learner through the same path.',
    nextProject: 'hanya'
  },
  hanya: {
    slug: 'hanya',
    index: '03',
    title: 'HANYA',
    descriptor: 'AI-assisted healthcare navigation that helps people understand what kind of care to seek next.',
    discipline: 'Product Design · AI',
    role: 'Product Designer + Frontend Implementation',
    scope: 'Product Strategy · UX Flows · Interaction Design · Safety Architecture · UI Design · Prototyping · Frontend Implementation',
    platform: 'Responsive Web Application',
    projectType: 'Functional MVP',
    intro: 'An AI-assisted healthcare navigator that helps people understand what kind of care to seek next, without pretending to diagnose them.',
    nextProject: 'yousewire'
  },
  yousewire: {
    slug: 'yousewire',
    index: '04',
    title: 'YOUSEWIRE',
    descriptor: 'A unified cross-border financial system designed for personal money management and business financial operations.',
    discipline: 'Product Design · Fintech',
    role: 'Product Designer',
    scope: 'Product Strategy · UX & Interaction Design · UI Design · Design Systems · Prototyping',
    platform: 'Responsive Web Application',
    projectType: 'Live Product',
    intro: 'A cross-border financial platform designed to help individuals and businesses hold, move, receive, convert, and manage money across currencies and payment networks.',
    nextProject: 'prima'
  }
}

export const productCaseProjectMeta: Record<string, ProductCaseProjectMeta> = {
  prima: { slug: 'prima', index: '01', title: 'PRIMA', descriptor: 'AI · Fintech', discipline: 'Product Design · AI', note: 'AI-assisted verification OS for decentralized payments.' },
  nomi: { slug: 'nomi', index: '02', title: 'NOMI', descriptor: 'AI · Education', discipline: 'Product Design · AI', note: 'An adaptive learning companion that responds to how the learner learns.' },
  hanya: { slug: 'hanya', index: '03', title: 'HANYA', descriptor: 'Healthcare · AI', discipline: 'Product Design · AI', note: 'AI-assisted healthcare navigation built around guidance, safety and human judgement.' },
  yousewire: { slug: 'yousewire', index: '04', title: 'YOUSEWIRE', descriptor: 'Fintech', discipline: 'Product Design · Fintech', note: 'A cross-border financial system for personal and business money.' }
}