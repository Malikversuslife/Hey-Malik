import { contact } from '../data/contact'
import { useEffect, useState } from 'react'

type ExperienceRecord = [period: string, role: string, organization: string, location: string, responsibilities: string[]]

const sections = [
  ['Overview', 'about-overview'],
  ['Background', 'about-background'],
  ['Principles', 'about-principles'],
  ['How I Work', 'about-working-system'],
  ['Experience', 'about-experience'],
  ['Beyond Work', 'about-offline'],
  ['Working Together', 'about-together']
] as const

const evolution = [
  ['Visual & brand design', 'Communication, composition, identity'],
  ['Product design', 'Behaviour, usability, user problems'],
  ['Product systems', 'Relationships, scale, complexity'],
  ['Design leadership', 'Critique, collaboration, decisions'],
  ['Design + build', 'Implementation, feasibility, iteration'],
  ['AI product design', 'Intelligent behaviour, trust, uncertainty, human judgement']
] as const

const principles = [
  ['Trust & explainability', 'Make enough of a system visible for people to make informed decisions.'],
  ['Systems thinking', 'Look for relationships, constraints, and effects beyond a single screen or touchpoint.'],
  ['Human-centred AI', 'Use intelligence to support judgement, while keeping meaningful decisions with people.'],
  ['Privacy & identity', 'Treat the information people share about themselves as a responsibility, not just an input.'],
  ['Financial inclusion', 'Make complex financial experiences clearer and more accessible to the people using them.'],
  ['Design to build', 'Let implementation sharpen the design, and use working prototypes to expose assumptions.']
] as const

const process = [
  ['Understand', 'Map the problem, people, context, and constraints.'],
  ['Simplify', 'Reduce complexity without removing what matters.'],
  ['Prototype', 'Make assumptions tangible enough to test.'],
  ['Evaluate', 'Observe what works, what fails, and what remains unclear.'],
  ['Refine', 'Improve behaviour, clarity, and implementation.'],
  ['Ship', 'Move the work into reality and learn from use.']
] as const

const tools = [
  ['Figma + Figma Make', 'Design', 'Interface design, visual systems, and exploratory product concepts.'],
  ['Adobe Photoshop + Illustrator', 'Brand + visual', 'Image making, illustration, and precise identity assets for brand systems.'],
  ['HTML + CSS', 'Build', 'Working interfaces that bring design decisions closer to the final experience.'],
  ['Framer + Lovable', 'Prototype', 'Rapid ways to make an idea tangible and test its flow.'],
  ['Claude + OpenCode', 'Build / iterate', 'AI-assisted development and iteration on working interfaces.'],
  ['ChatGPT', 'Think', 'A partner for exploring possibilities and pressure-testing ideas.'],
  ['Miro + Notion', 'Organise', 'Spaces for mapping systems, collaboration, and keeping decisions visible.'],
  ['Webflow + Shopify', 'Publish', 'Building and refining branded web and commerce experiences.']
] as const

const testimonials = [
  { title: 'A reliable product designer that exceeds expectations', quote: "Malik is amazing to work with. He isn't only all about pushing pixels but also about the user's experience and solving real problems which is what a product should be about. He's also quick to respond and work on feedbacks if necessary. If you're looking for a reliable product designer that will exceed your expectations, he is the one.", author: 'Pleroma', role: 'Product designer & Illustrator' },
  { title: 'Thoughtful & open to feedback', quote: "I've had the opportunity to work with Malik, and one thing that stands out is how intentional he is with his work. He's thoughtful, open to feedback, and genuinely cares about building products that solve real problems. Beyond his design skills, he's someone who shows up for people and is always willing to help. I'd confidently recommend him to any team looking for a reliable product designer.", author: 'Zah', role: 'Design Engineer' },
  { title: 'Projects delivered right on time', quote: 'Malik consistently delivered projects on time and has since become our go-to person for everything from web design and development to content design. I highly recommend Malik.', author: 'Aisha Bello', role: 'Founder, Belsquared Inc.' },
  { title: 'Highly skilled, creative, and detail oriented', quote: 'Working with Malik was a pleasure. His expertise in UI/UX design is impressive. He designed high-performance projects like the PyCon Nigeria website, merchandise, and some other graphic design resources while ensuring a wonderful experience for visitors and the community. Highly skilled, creative, and detail-oriented. A true asset to any team.', author: 'Ichux', role: 'Director, Python Software Foundation, Nigeria' },
  { title: 'Very timely and meticulous', quote: 'Malik is well-knowledgeable at his work. He is very timely and meticulous. You will always be satisfied with his input and contributions.', author: 'Clinton Michael', role: 'Coordinator, T.C.U' }
] as const

function TestimonialCards() {
  return <>
    {testimonials.map((testimonial) => <article className="about-testimonial-card" key={testimonial.author}>
      <h4>{testimonial.title}</h4>
      <blockquote>{testimonial.quote}</blockquote>
      <footer><strong>{testimonial.author}</strong><small>{testimonial.role}</small></footer>
    </article>)}
    <article className="about-testimonial-card about-testimonial-pending"><p>Sixth testimonial coming soon.</p></article>
  </>
}

export function AboutEditorial({ experienceRecords }: { experienceRecords: ExperienceRecord[] }) {
  const [activeSection, setActiveSection] = useState<string>(sections[0][1])

  useEffect(() => {
    let frame = 0
    const canvas = document.querySelector<HTMLElement>('.home-canvas')
    const usesCanvas = Boolean(canvas && getComputedStyle(canvas).overflowY === 'auto')
    const scrollRoot: Window | HTMLElement = usesCanvas && canvas ? canvas : window
    const updateActiveSection = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        let current: string = sections[0][1]
        const threshold = (usesCanvas ? canvas!.getBoundingClientRect().top : 0) + 160
        for (const [, id] of sections) {
          const element = document.getElementById(id)
          if (element && element.getBoundingClientRect().top <= threshold) current = id
        }
        const atEnd = usesCanvas
          ? canvas!.scrollTop + canvas!.clientHeight >= canvas!.scrollHeight - 4
          : window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4
        if (atEnd) current = sections[sections.length - 1][1]
        setActiveSection(current)
      })
    }
    updateActiveSection()
    scrollRoot.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      cancelAnimationFrame(frame)
      scrollRoot.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return <div className="about-editorial" id="about">
    <div className="about-editorial-main">
    <nav className="about-contents" aria-label="About page contents">
      {sections.map(([label, id]) => <a key={id} href={`#${id}`} className={activeSection === id ? 'is-active' : undefined} aria-current={activeSection === id ? 'location' : undefined}>{label}</a>)}
    </nav>

    <div className="about-story">
      <section className="about-section about-overview" id="about-overview">
        <h2>Temitayo Lawal Malik</h2>
        <p className="about-kicker">Product &amp; Brand Designer <span>·</span> Visual systems <span>·</span> AI product design</p>
        <h3>Overview</h3>
        <p className="about-lead">Designing technology that feels more human.</p>
        <p>I'm a Product &amp; Brand Designer working across digital products and visual identities. My practice began with brand design in 2018 and expanded into product thinking, interaction, systems, prototyping, and AI experiences.</p>
        <p>On one side, I shape how a brand looks, speaks, and holds together across packaging, campaigns, print, and digital spaces. On the other, I design how products behave, how people navigate complexity, and how decisions become clearer through an interface.</p>
        <p>Both parts of the work ask the same question: how do you turn an idea into a coherent experience people can understand and use?</p>
        <div className="about-capabilities" aria-label="Capabilities"><span>Product strategy · UX &amp; interaction design · UI design · Design systems · Prototyping · AI experiences</span><span>Brand identity · Visual direction · Campaign design · Packaging · Illustration · Motion &amp; digital content</span><span>Web design · HTML / CSS · Framer · Webflow · Shopify · AI-assisted prototyping</span></div>
      </section>

      <section className="about-section" id="about-background">
        <h3>Background</h3>
        <p>I didn't really leave visual design behind. I kept adding new questions to it. Brand work taught me to pay attention to expression and consistency; product work pushed that attention toward behaviour, usability, and the systems behind an experience.</p>
        <p>Since then, I've worked across fintech, SaaS, e-commerce, education, healthcare, and Web3, both independently and with product teams. I increasingly work at the point where design and implementation meet, using prototypes to test what a system actually does.</p>
        <div className="about-evolution" aria-label="How Malik's practice expanded">
          {evolution.map(([stage, detail], index) => <div key={stage}><span>{String(index + 1).padStart(2, '0')}</span><strong>{stage}</strong><small>{detail}</small></div>)}
        </div>
      </section>

      <section className="about-section" id="about-principles">
        <h3>Principles</h3>
        <div className="about-card-grid">
          {principles.map(([title, detail]) => <article className="about-card" key={title}><h4>{title}</h4><p>{detail}</p></article>)}
        </div>
      </section>

      <section className="about-section" id="about-working-system">
        <h3>How I Work Now</h3>
        <p>Different tools, different jobs. The design decisions are still mine. I use AI across the process to explore, test, prototype, and iterate, rather than as a substitute for thinking.</p>
        <div className="about-process-list" aria-label="Design process">
          {process.map(([stage, detail], index) => <div key={stage}><span>{String(index + 1).padStart(2, '0')}</span><strong>{stage}</strong><p>{detail}</p></div>)}
        </div>
        <div className="about-tool-grid">
          {tools.map(([name, category, detail]) => <article className="about-tool" key={name}><span>{category}</span><h4>{name}</h4><p>{detail}</p></article>)}
        </div>
      </section>

      <section className="about-section" id="about-experience">
        <h3>Experience</h3>
        <p>Selected roles across product design, design leadership, consulting, and brand identity. The independent brand practice has continued alongside the product work.</p>
        <div className="about-career">
          {experienceRecords.map(([period, role, organization, location, responsibilities]) => <article key={`${period}-${organization}`}>
            <span className="about-career-dot" aria-hidden="true" />
            <h4>{organization}</h4>
            <p className="about-career-meta">{role} <span>·</span> {period}{location ? <> <span>·</span> {location}</> : null}</p>
            <ul>{responsibilities.map(item => <li key={item}>{item}</li>)}</ul>
          </article>)}
        </div>
      </section>

      <section className="about-section" id="about-offline">
        <h3>Beyond Work</h3>
        <p>Personal notes are not indexed here yet. For now, the projects and the way I approach them are the clearest introduction. This section can grow when I have more of that story to share.</p>
      </section>

      <section className="about-section about-together" id="about-together">
        <h3>Interested in Working Together?</h3>
        <p>I'm available for work across product design, brand identity, and the space where the two meet. If you're building something that needs clarity, character, and a considered system behind it, let's talk.</p>
        <div className="about-contact-actions"><a href={`mailto:${contact.email}`}>Get in touch <span aria-hidden="true">↗</span></a><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div>
      </section>

    </div>

    <aside className="about-profile-card" aria-label="Malik profile">
      <div className="about-profile-art" aria-hidden="true"><span>M<span>/</span></span><i>DESIGNING ACROSS<br />PRODUCT + BRAND</i></div>
      <strong>Temitayo Lawal Malik</strong>
      <span>Product &amp; Brand Designer</span>
      <small>Available for work</small>
    </aside>
    </div>

    <section className="about-section about-testimonials" aria-labelledby="about-testimonials-title">
      <div className="about-testimonials-heading"><div><small>THE PEOPLE BEHIND THE WORK</small><h3 id="about-testimonials-title">Testimonials</h3></div></div>
      <p>Kind words from people I've worked with.</p>
      <div className="about-testimonials-track" aria-label="Testimonials from collaborators" aria-live="off" tabIndex={0}>
        <div className="about-testimonials-rail">
          <div className="about-testimonials-set"><TestimonialCards /></div>
          <div className="about-testimonials-set" aria-hidden="true"><TestimonialCards /></div>
        </div>
      </div>
    </section>
  </div>
}
