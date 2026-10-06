export type BrandRatio = '1:1' | '4:5' | '3:4' | '9:16' | '16:9' | '21:9' | 'tall' | 'ultra-wide'

export type BrandMediaData = {
  index: number
  title: string
  ratio?: BrandRatio
  caption?: string
  alt?: string
  source?: string
}

export type BrandSegment =
  | { kind: 'label'; text: string }
  | { kind: 'statement'; text: string }
  | { kind: 'copy'; text: string }
  | { kind: 'media'; media: BrandMediaData }
  | { kind: 'pair'; left: BrandMediaData; right: BrandMediaData }
  | { kind: 'grid'; tiles: BrandMediaData[] }
  | { kind: 'video'; index: number; title: string; ratio?: BrandRatio; caption?: string; source?: string; poster?: string; alt?: string }
  | { kind: 'quote'; text: string; source?: string }
  | { kind: 'spacer'; tall?: boolean }

export type BrandMovement = {
  number: string
  title: string
  id: string
  segments: BrandSegment[]
}

export type BrandProject = {
  slug: string
  category: string
  number: string
  name: string
  tagline: string
  descriptor: string
  intro: string
  meta: { label: string; value: string }[]
  hero: BrandMediaData
  movements: BrandMovement[]
  next: { name: string; slug: string; note: string; available?: boolean }
  world: string
}

export type BrandingIndexProject = {
  id: string
  index: string
  slug: string
  title: string
  category: string
  descriptor: string
  ratio: BrandRatio
  caseStudy: 'live' | 'preparing'
  cover?: string
}

export const brandingIndex: BrandingIndexProject[] = [
  { id: 'b-side-b', index: '001', slug: 'side-b', title: 'SIDE B', category: 'BRANDING', descriptor: 'Brand Identity · Packaging · Art Direction', ratio: 'ultra-wide', caseStudy: 'live', cover: '/Side%20b%20files/Side%20b%20thumbnail.png' },
  { id: 'b-the-kim-couture', index: '002', slug: 'the-kim-couture', title: 'THE KIM COUTURE', category: 'BRANDING', descriptor: 'Brand Identity · Fashion', ratio: '3:4', caseStudy: 'live', cover: '/Kim%20Branding%20files/Kim%20Thubnail.png' },
  { id: 'b-finlancer', index: '003', slug: 'finlancer', title: 'FINLANCER', category: 'BRANDING', descriptor: 'Brand / Visual Identity', ratio: '21:9', caseStudy: 'live' },
  { id: 'b-nomi', index: '005', slug: 'nomi', title: 'NOMI', category: 'BRANDING', descriptor: 'Brand / Visual Identity', ratio: '1:1', caseStudy: 'live', cover: '/Nomi%20Branding%20Files/Thimbnail.gif' },
  { id: 'b-belsquared', index: '006', slug: 'belsquared', title: 'BELSQUARED', category: 'BRANDING', descriptor: 'Brand Identity · Packaging', ratio: '21:9', caseStudy: 'live' }
]

function galleryProject(config: {
  slug: string
  number: string
  name: string
  descriptor: string
  tagline: string
  intro: string
  year: string
  world: string
  story: { title: string; statement?: string; copy: string }[]
  hero?: BrandMediaData
  gallery?: BrandMediaData[]
  next: BrandProject['next']
}): BrandProject {
  return {
    slug: config.slug,
    category: 'BRANDING',
    number: config.number,
    name: config.name,
    tagline: config.tagline,
    descriptor: config.descriptor,
    intro: config.intro,
    meta: [
      { label: 'YEAR', value: config.year },
      { label: 'SCOPE OF WORK', value: config.descriptor }
    ],
    hero: config.hero ?? { index: 1, title: 'HERO IMAGE', ratio: 'ultra-wide' },
    movements: [
      ...config.story.map((section, index): BrandMovement => ({
        number: String(index + 1).padStart(2, '0'),
        title: section.title,
        id: `${config.slug}-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        segments: [
          ...(section.statement ? [{ kind: 'statement' as const, text: section.statement }] : []),
          { kind: 'copy' as const, text: section.copy }
        ]
      })),
      {
      number: String(config.story.length + 1).padStart(2, '0'),
      title: 'PROJECT GALLERY',
      id: `${config.slug}-gallery`,
      segments: config.gallery?.map(media => ({ kind: 'media' as const, media })) ?? [
        { kind: 'media', media: { index: 2, title: 'PROJECT IMAGE 02', ratio: '16:9' } },
        { kind: 'pair', left: { index: 3, title: 'PROJECT IMAGE 03', ratio: '1:1' }, right: { index: 4, title: 'PROJECT IMAGE 04', ratio: '1:1' } },
        { kind: 'media', media: { index: 5, title: 'PROJECT IMAGE 05', ratio: '21:9' } },
        { kind: 'grid', tiles: [
          { index: 6, title: 'PROJECT IMAGE 06', ratio: '4:5' },
          { index: 7, title: 'PROJECT IMAGE 07', ratio: '4:5' },
          { index: 8, title: 'PROJECT IMAGE 08', ratio: '4:5' }
        ] },
        { kind: 'media', media: { index: 9, title: 'PROJECT IMAGE 09', ratio: 'ultra-wide' } },
        { kind: 'grid', tiles: [
          { index: 10, title: 'PROJECT IMAGE 10', ratio: '4:5' },
          { index: 11, title: 'PROJECT IMAGE 11', ratio: '4:5' },
          { index: 12, title: 'PROJECT IMAGE 12', ratio: '4:5' }
        ] },
        { kind: 'media', media: { index: 13, title: 'PROJECT IMAGE 13', ratio: '16:9' } },
        { kind: 'pair', left: { index: 14, title: 'PROJECT IMAGE 14', ratio: '1:1' }, right: { index: 15, title: 'PROJECT IMAGE 15', ratio: '1:1' } },
        { kind: 'media', media: { index: 16, title: 'PROJECT IMAGE 16', ratio: '21:9' } },
        { kind: 'grid', tiles: [
          { index: 17, title: 'PROJECT IMAGE 17', ratio: '4:5' },
          { index: 18, title: 'PROJECT IMAGE 18', ratio: '4:5' },
          { index: 19, title: 'PROJECT IMAGE 19', ratio: '4:5' }
        ] },
        { kind: 'media', media: { index: 20, title: 'PROJECT IMAGE 20', ratio: '21:9' } }
      ]
    }],
    next: config.next,
    world: config.world
  }
}

export const brandProjects: BrandProject[] = [
  galleryProject({
    slug: 'side-b', number: '001', name: 'SIDE B', descriptor: 'Brand Identity · Packaging · Art Direction', tagline: 'OLD STUFF.\nNEW SOCKS.',
    intro: 'SIDE B is a sock label built on a simple belief: the objects we stop noticing deserve as much attention as the ones we talk about. This pilot walks a full brand arc, from first mark to product world, packaging, campaign and digital space, for the people who dress for themselves.', year: '2026', world: 'sideb',
    hero: { index: 1, title: 'HERO CAMPAIGN IMAGE', ratio: 'ultra-wide', source: '/Side%20b%20files/Hero%20Campaign%20Image.png' },
    gallery: [
      { index: 2, title: 'LOGO SYSTEM', ratio: '16:9', source: '/Side%20b%20files/LOGO%20SYSTEM.png' },
      { index: 3, title: 'CONSTRUCTION GRID', ratio: '16:9', source: '/Side%20b%20files/CONSTRUCTION%20GRID.png' },
      { index: 4, title: 'COLOUR STUDY', ratio: '16:9', source: '/Side%20b%20files/COLOUR%20STUDY.png' },
      { index: 5, title: 'ILLUSTRATION SYSTEM', ratio: '16:9', source: '/Side%20b%20files/ILLUSTRATION%20SYSTEM.png' },
      { index: 6, title: 'REAL × ILLUSTRATED', ratio: '16:9', source: '/Side%20b%20files/REAL%20%C3%97%20ILLUSTRATED.png' },
      { index: 7, title: 'DROP 001', ratio: '4:5', source: '/Side%20b%20files/DROP%20001.png' },
      { index: 8, title: 'DROP 002', ratio: '4:5', source: '/Side%20b%20files/DROP%20002.png' },
      { index: 9, title: 'DROP 003', ratio: '4:5', source: '/Side%20b%20files/DROP%20003.png' },
      { index: 10, title: 'DROP 004', ratio: '4:5', source: '/Side%20b%20files/DROP%20004.png' },
      { index: 11, title: 'DROP 005', ratio: '4:5', source: '/Side%20b%20files/DROP%20005.png' },
      { index: 12, title: 'DROP 006', ratio: '4:5', source: '/Side%20b%20files/DROP%20006.png' },
      { index: 13, title: 'DROP 007', ratio: '4:5', source: '/Side%20b%20files/DROP%20007.png' },
      { index: 14, title: 'EMBROIDERY DETAIL', ratio: '4:5', source: '/Side%20b%20files/EMBROIDERY%20DETAIL.png' },
      { index: 15, title: 'TAGS AND LABELS', ratio: '16:9', source: '/Side%20b%20files/Tags%20and%20Labels.png' },
      { index: 16, title: 'ALL PACKAGING', ratio: '16:9', source: '/Side%20b%20files/All%20Packaging.png' },
      { index: 17, title: 'FRAME 22', ratio: '1:1', source: '/Side%20b%20files/Frame%2022.png' },
      { index: 18, title: 'FRAME 35', ratio: '1:1', source: '/Side%20b%20files/Frame%2035.png' }
    ],
    story: [
      { title: 'Premise', copy: 'Socks are old stuff: repeated daily, worn without ceremony, noticed last. SIDE B starts where most brands stop looking, on the most ordinary object in the drawer.' },
      { title: 'Identity', statement: 'A SMALL ICON.\nA BIGGER STORY.', copy: 'The mark had to live on a hang tag, hold its own on a sock, and survive a billboard three stories up.' },
      { title: 'Visual Language', copy: 'Illustration and photography share one voice; the drawn world extends what the real world gives it.' },
      { title: 'Product World', statement: 'PRESS PLAY.', copy: 'A sock is the closest a brand gets to living with you.' },
      { title: 'Packaging', copy: 'Packaging carries the same point of view as the sock, from the shipping box to the catalogue.' },
      { title: 'Campaign', statement: 'OLD STUFF.\nNEW SOCKS.', copy: 'The campaign treats the sock like a cultural artefact: big enough to claim the street, small enough to be worn.' },
      { title: 'Digital World', copy: 'The same voice at thumb-motion size: feed, story, store and reel.' }
    ], next: { name: 'THE KIM COUTURE', slug: 'the-kim-couture', note: 'Brand Identity · Fashion' }
  }),
  galleryProject({ slug: 'the-kim-couture', number: '002', name: 'THE KIM COUTURE', descriptor: 'Brand Identity · Fashion', tagline: 'MADE TO BE\nREMEMBERED.', intro: 'A fashion identity shaped through elegance, confidence, and a clear visual point of view.', year: '2022', world: 'kim',
    hero: { index: 1, title: 'HERO IMAGE', ratio: 'ultra-wide', source: '/Kim%20Branding%20files/Hero%20Image.png' },
    gallery: [
      { index: 2, title: 'LUXURY BRAND BOARD', ratio: '16:9', source: '/Kim%20Branding%20files/The%20Kim%20Couture%20Luxury%20Brand%20Board.png' },
      { index: 3, title: 'LOGO GRID', ratio: '16:9', source: '/Kim%20Branding%20files/The%20Kim%20Couture%20Logo%20Grid.png' },
      { index: 4, title: 'TYPOGRAPHY BOARD', ratio: '16:9', source: '/Kim%20Branding%20files/The%20Kim%20Couture%20Typography%20Board.png' },
      { index: 5, title: 'EDITORIAL MOODBOARD', ratio: '1:1', source: '/Kim%20Branding%20files/The%20Kim%20Couture%20Editorial%20Moodboard.png' },
      { index: 6, title: 'LUXURY BRAND CARDS', ratio: '16:9', source: '/Kim%20Branding%20files/The%20Kim%20Couture%20Luxury%20Brand%20Cards.png' },
      { index: 7, title: 'LABEL COLLECTION', ratio: '16:9', source: '/Kim%20Branding%20files/The%20Kim%20Couture%20Label%20Collection.png' },
      { index: 8, title: 'COUTURE ELEGANCE', ratio: '3:4', source: '/Kim%20Branding%20files/Couture%20Elegance%20in%20Warm%20Tones.png' },
      { index: 9, title: 'GOLDEN HOUR BRIDE', ratio: '3:4', source: '/Kim%20Branding%20files/Timeless%20Couture%20Bride%20at%20Golden%20Hour.png' },
      { index: 10, title: 'GRAND ATELIER', ratio: '3:4', source: '/Kim%20Branding%20files/Timeless%20Couture%20in%20a%20Grand%20Atelier.png' },
      { index: 11, title: 'BRIDAL SHOWROOM', ratio: '16:9', source: '/Kim%20Branding%20files/The%20Kim%20Couture%20Bridal%20Showroom.png' },
      { index: 12, title: 'LUXURY PACKAGING', ratio: '16:9', source: '/Kim%20Branding%20files/The%20Kim%20Couture%20Luxury%20Packaging.png' },
      { index: 13, title: 'SHOPPING BAG DISPLAY', ratio: '1:1', source: '/Kim%20Branding%20files/Luxury%20Couture%20Shopping%20Bag%20Display.png' },
      { index: 14, title: 'SOCIAL MEDIA', ratio: '16:9', source: '/Kim%20Branding%20files/Social%20media.png' },
      { index: 15, title: 'GOLDEN HOUR CAMPAIGN', ratio: '16:9', source: '/Kim%20Branding%20files/The%20Kim%20Couture%20Golden%20Hour%20Campaign.png' },
      { index: 16, title: 'LOOKBOOK FLATLAY', ratio: '16:9', source: '/Kim%20Branding%20files/The%20Kim%20Couture%20Lookbook%20Flatlay.png' }
    ], story: [
      { title: 'Premise', copy: 'The identity needed to feel considered and expressive without competing with the clothes. The system creates a confident frame for each collection.' },
      { title: 'Identity', statement: 'QUIET FORM.\nCLEAR PRESENCE.', copy: 'Typography, proportion, and restraint work together to give the brand a recognisable presence across large and small applications.' },
      { title: 'Visual Language', copy: 'A controlled visual language keeps photography, campaign layouts, and product communication connected while leaving space for each garment to lead.' },
      { title: 'Application', copy: 'The system extends across labels, packaging, campaign material, social content, and digital touchpoints as one coherent fashion identity.' }
    ], next: { name: 'FINLANCER', slug: 'finlancer', note: 'Brand / Visual Identity' } }),
  galleryProject({ slug: 'finlancer', number: '003', name: 'FINLANCER', descriptor: 'Brand / Visual Identity', tagline: 'FINANCE FOR\nINDEPENDENT WORK.', intro: 'A visual identity for a financial product built around the realities of independent work.', year: '2025', world: 'finlancer', story: [
    { title: 'Premise', copy: 'Independent work can make money management feel fragmented. The brand needed to make financial organisation feel calm, capable, and easy to approach.' },
    { title: 'Identity', statement: 'CLARITY FOR\nEVERY MOVE.', copy: 'The identity balances financial confidence with the flexibility and momentum associated with freelance work.' },
    { title: 'Visual Language', copy: 'A structured system of type, colour, iconography, and interface-led composition turns complex financial information into a clear visual rhythm.' },
    { title: 'Application', copy: 'The visual system is designed to move consistently across product screens, launch communication, social content, and supporting brand materials.' }
  ], next: { name: 'PYCON NIGERIA 2024', slug: 'pycon-nigeria-2024', note: 'Conference Identity' } }),
  galleryProject({ slug: 'pycon-nigeria-2024', number: '004', name: 'PYCON NIGERIA 2024', descriptor: 'Conference Identity', tagline: 'A COMMUNITY\nIN MOTION.', intro: 'A conference identity designed to bring the energy of Nigeria’s Python community into one coherent experience.', year: '2024', world: 'pycon', story: [
    { title: 'Premise', copy: 'The conference brings different people, disciplines, and levels of experience into one community. Its identity needed to feel open, energetic, and unmistakably collective.' },
    { title: 'Identity', statement: 'BUILT BY\nTHE COMMUNITY.', copy: 'The system uses a flexible visual structure that can hold technical information while still feeling celebratory and human.' },
    { title: 'Visual Language', copy: 'Bold colour, modular composition, and expressive graphic elements create continuity across speakers, sessions, schedules, and event communication.' },
    { title: 'Event World', copy: 'The identity scales across the website, stage environment, passes, signage, merchandise, social content, and post-event material.' }
  ], next: { name: 'NOMI', slug: 'nomi', note: 'Brand / Visual Identity' } }),
  galleryProject({ slug: 'nomi', number: '005', name: 'NOMI', descriptor: 'Brand / Visual Identity', tagline: 'LEARNING WITH\nA PERSONALITY.', intro: 'A warm visual identity for an adaptive learning product that responds to each learner.', year: '2022', world: 'nomi',
    hero: { index: 1, title: 'CURIOUS BY DESIGN', ratio: 'ultra-wide', source: '/Nomi%20Branding%20Files/hero%20image.png' },
    gallery: [
      { index: 3, title: 'COLOUR SYSTEM', ratio: '16:9', source: '/Nomi%20Branding%20Files/colour%20system.png' },
      { index: 4, title: 'TYPOGRAPHY', ratio: '16:9', source: '/Nomi%20Branding%20Files/typography.png' },
      { index: 5, title: 'APP ICON', ratio: '1:1', source: '/Nomi%20Branding%20Files/app%20icon.png' },
      { index: 6, title: 'FAVICON', ratio: '1:1', source: '/Nomi%20Branding%20Files/favicon.png' },
      { index: 2, title: 'NOMI MOODS', ratio: '16:9', source: '/Nomi%20Branding%20Files/Nomi%20moods.jpeg' },
      { index: 7, title: 'ILLUSTRATION 1', ratio: '16:9', source: '/Nomi%20Branding%20Files/illustration%201.png' },
      { index: 8, title: 'ILLUSTRATION 2', ratio: '16:9', source: '/Nomi%20Branding%20Files/illustration%202.png' },
      { index: 9, title: 'ILLUSTRATION 3', ratio: '16:9', source: '/Nomi%20Branding%20Files/illustration%203.png' },
      { index: 10, title: 'ILLUSTRATION 4', ratio: '16:9', source: '/Nomi%20Branding%20Files/illustration%204.png' },
      { index: 11, title: 'LEARNING DASHBOARD', ratio: '16:9', source: '/Nomi%20Branding%20Files/Nomi%20Learning%20Dashboard%20Mockup(1).png' },
      { index: 12, title: 'STATIONERY', ratio: '16:9', source: '/Nomi%20Branding%20Files/stationery.png' },
      { index: 13, title: 'SOCIAL MEDIA', ratio: '16:9', source: '/Nomi%20Branding%20Files/social%20media.png' },
      { index: 14, title: 'BANNER', ratio: '3:4', source: '/Nomi%20Branding%20Files/banner.png' },
      { index: 15, title: 'BILLBOARD', ratio: '16:9', source: '/Nomi%20Branding%20Files/billboard.png' },
      { index: 16, title: 'MERCH 1', ratio: '1:1', source: '/Nomi%20Branding%20Files/merch%201.png' },
      { index: 17, title: 'MERCH 2', ratio: '1:1', source: '/Nomi%20Branding%20Files/merch%202.png' },
      { index: 18, title: 'MERCH 3', ratio: '1:1', source: '/Nomi%20Branding%20Files/merch%203.png' },
      { index: 19, title: 'MERCH 4', ratio: '1:1', source: '/Nomi%20Branding%20Files/merch%204.png' }
    ], story: [
      { title: 'Premise', copy: 'Adaptive learning can feel abstract or mechanical. Nomi needed a brand that made intelligence feel supportive, understandable, and personal.' },
      { title: 'Identity', statement: 'SMART ENOUGH\nTO FEEL HUMAN.', copy: 'The identity combines a clear learning system with a warm personality that can guide, encourage, explain, and celebrate progress.' },
      { title: 'Visual Language', copy: 'Colour, rounded forms, character expression, illustration, and approachable typography give the product a consistent emotional language.' },
      { title: 'Product World', copy: 'The brand extends through onboarding, subject discovery, assessed practice, progress, contextual tutoring, campaigns, and the marketing website.' }
    ], next: { name: 'BELSQUARED', slug: 'belsquared', note: 'Brand Identity · Packaging' } }),
  galleryProject({ slug: 'belsquared', number: '006', name: 'BELSQUARED', descriptor: 'Brand Identity · Packaging', tagline: 'EVERYDAY OBJECTS.\nCLEAR CHARACTER.', intro: 'A brand identity and packaging system built to feel direct, useful, and recognisable.', year: '2023', world: 'belsquared', story: [
    { title: 'Premise', copy: 'The brand needed to bring order and personality to a broad consumer experience without becoming complicated or overly decorative.' },
    { title: 'Identity', statement: 'SIMPLE SHAPES.\nSTRONG RECALL.', copy: 'A direct identity system uses clear geometry, typography, and repetition to build recognition across physical and digital touchpoints.' },
    { title: 'Visual Language', copy: 'The visual system balances functional information with confident colour and composition, giving everyday applications a distinct point of view.' },
    { title: 'Packaging', copy: 'The identity is designed to remain consistent across packaging formats, product communication, campaign assets, and the wider customer experience.' }
  ], next: { name: 'SIDE B', slug: 'side-b', note: 'Brand Identity · Packaging · Art Direction' } })
]

