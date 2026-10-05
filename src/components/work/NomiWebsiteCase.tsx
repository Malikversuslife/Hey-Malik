import { productCaseMeta, productCaseProjectMeta } from '../../data/productCases'
import { ProductCase, ProductCaseClosing, ProductCaseConnected, ProductCaseDisclosure, ProductCaseHero, ProductCaseIntro, ProductCaseMedia, ProductCaseNext, ProductCaseNote, ProductCasePair, ProductCasePull, ProductCaseSection, ProductCaseStatement, ProductCaseSticky } from './ProductCase'

const META = productCaseMeta['nomi-website']
const NEXT = productCaseProjectMeta[META.nextProject]

function CaseList({ children }: { children: string[] }) {
  return <ul className="pc-case-list pc-reveal">{children.map(item => <li key={item}>{item}</li>)}</ul>
}

export function NomiWebsiteCase({ onNext }: { onNext: (slug: string) => void }) {
  return <ProductCase className="pc-case-nomi pc-case-nomi-website" id="top">
    <ProductCaseHero meta={META} media={{ index:'01', title:'NOMI HOMEPAGE / CURIOUS MASCOT + PLAYABLE PRACTICE', ratio:'full', note:'The hero pairs the product promise with an interactive practice question and a direct call to action.' }} />
    <ProductCaseIntro>The website had to explain Nomi before asking someone to create an account. It turns a connected learning system into a story a learner or parent can understand in a few minutes.</ProductCaseIntro>
    <ProductCaseSection id="nomi-website-overview" label="OVERVIEW">
      <ProductCaseStatement>A clear, playful product story for an adaptive learning system.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">Nomi notices how a learner practises and chooses what should come next. The challenge was to translate that system into an experience that feels warm, intelligent, playful, and calm while remaining credible.</p>
      <ProductCasePull>How might the website demonstrate adaptation instead of relying on broad claims about AI?</ProductCasePull>
    </ProductCaseSection>
    <ProductCaseSection id="nomi-website-problem" label="THE PROBLEM">
      <ProductCaseStatement>“AI tutor” is familiar language, but it rarely explains the product.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">Nomi is valuable because practice, progress, recommendations, and tutoring share the same learner context. A conventional feature grid would flatten that difference.</p>
      <CaseList children={['Explain the product in plain language.', 'Show how assessed practice changes the next step.', 'Distinguish Nomi from a generic chatbot.', 'Introduce the character without making the product feel childish.', 'Present available subjects clearly.', 'Support account creation and returning learners.', 'Work equally well in light and dark modes.', 'Connect seamlessly to the authenticated web app.']} />
    </ProductCaseSection>
    <ProductCaseSection id="nomi-website-role" label="MY ROLE">
      <ProductCaseStatement>From positioning and narrative through production.</ProductCaseStatement>
      <CaseList children={['Product positioning.', 'Information architecture.', 'UX writing and calls to action.', 'Responsive page design.', 'Brand and character integration.', 'Interactive product demonstration.', 'Light and dark theme behaviour.', 'Authentication-aware navigation.', 'SEO, metadata, and social preview assets.', 'Production deployment and browser verification.']} />
    </ProductCaseSection>
    <ProductCaseSection id="nomi-website-story" label="FINDING THE PRODUCT STORY">
      <ProductCaseStatement>Learning that learns you.</ProductCaseStatement>
      <ProductCasePull>Nomi notices how you perform as you practise and chooses what should come next.</ProductCasePull>
      <p className="pc-copy pc-reveal">The message frames Nomi as a continuous learning relationship rather than a list of AI capabilities. The page follows the visitor’s questions in order: what it is, how it works, what changes, what the companion feels like, what they can study, and what they should do next.</p>
      <ProductCaseConnected items={['PROMISE', 'PROOF', 'DETAIL', 'PERSONALITY', 'CATALOGUE', 'ACTION']} />
    </ProductCaseSection>
    <ProductCaseSection id="nomi-website-demo" label="DEMONSTRATING THE PRODUCT">
      <ProductCaseStatement>Show one adaptive moment before explaining the system.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">The hero includes a playable practice question instead of a static dashboard mock-up. A correct answer produces positive reinforcement. An incorrect answer reveals what Nomi noticed and suggests the next step.</p>
      <CaseList children={['Practice is assessed.', 'Feedback is specific.', 'Mistakes can reveal misconceptions.', 'The product responds with direction.', 'Nomi has a voice without becoming a blank chat interface.']} />
      <ProductCasePair a={{ index:'02', title:'HERO QUESTION / BEFORE ANSWER' }} b={{ index:'03', title:'HERO QUESTION / ADAPTIVE RESPONSE' }} />
      <ProductCaseSticky>The interaction gives evidence for the headline before the visitor reaches the next section.</ProductCaseSticky>
    </ProductCaseSection>
    <ProductCaseSection id="nomi-website-loop" label="EXPLAINING THE ADAPTIVE LOOP">
      <ProductCaseStatement>Practise. Notice patterns. Change the next step.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">The page reduces the learning model to three moves, then makes each consequence concrete: difficulty moves with performance, explanations change, misconceptions connect repeated mistakes to an idea, progress becomes readable evidence, and the learner receives a useful next action.</p>
      <ProductCaseMedia media={{ index:'04', title:'HOW IT WORKS / THREE-STEP ADAPTIVE LOOP', ratio:'full' }} />
      <ProductCasePair a={{ index:'05', title:'DIFFICULTY + EXPLANATION' }} b={{ index:'06', title:'MISCONCEPTION + NEXT ACTION' }} />
    </ProductCaseSection>
    <ProductCaseSection id="nomi-website-visual" label="A PLAYFUL, CREDIBLE LANGUAGE">
      <ProductCaseStatement>Expressive enough to feel alive. Calm enough to earn trust.</ProductCaseStatement>
      <CaseList children={['Nomi purple for identity and primary action.', 'Cream and white for warm reading surfaces.', 'Bricolage Grotesque for expressive headlines.', 'Inter for supporting copy and controls.', 'Subject colours for Mathematics, Physics, Chemistry, and Biology.', '3D educational objects for recognition.', 'Nomi character moods for emotional context.', 'Rounded geometry and restrained depth.']} />
      <p className="pc-copy pc-reveal">Curious supports discovery. Challenge accompanies increasing difficulty. Supportive appears around alternative explanations. Reinforcing supports misconception recovery. Encouraging frames the next action.</p>
      <ProductCasePair a={{ index:'07', title:'HOMEPAGE / LIGHT THEME' }} b={{ index:'08', title:'HOMEPAGE / DARK THEME' }} />
    </ProductCaseSection>
    <ProductCaseSection id="nomi-website-subjects" label="SUBJECT DISCOVERY">
      <ProductCaseStatement>Preview the catalogue without overstating its scope.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">Four differentiated cards introduce Mathematics, Physics, Chemistry, and Biology. Each combines a subject colour, a large 3D object, a short description, and a direct identity. The copy makes clear that Nomi begins with secondary-school learning and grows as curriculum and assessed practice become ready.</p>
      <ProductCaseMedia media={{ index:'09', title:'SUBJECT CATALOGUE / FOUR DISTINCT IDENTITIES', ratio:'full' }} />
    </ProductCaseSection>
    <ProductCaseSection id="nomi-website-auth" label="CONNECTING WEBSITE + WEB APP">
      <ProductCaseStatement>The public site remains useful after conversion.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">The website and product share one domain and authenticated session. New visitors see Start learning and Sign in. Authenticated learners see Dashboard and Go to dashboard. The application wordmark returns to the public site without ending the session.</p>
      <ProductCaseConnected items={['WEBSITE', 'SIGN UP OR SIGN IN', 'DASHBOARD', 'NOMI WORDMARK', 'WEBSITE', 'DASHBOARD']} />
      <ProductCaseNote label="PRODUCT CONTINUITY">The marketing website is the front door to Nomi, not a disconnected campaign page.</ProductCaseNote>
    </ProductCaseSection>
    <ProductCaseSection id="nomi-website-responsive" label="RESPONSIVE BEHAVIOUR">
      <ProductCaseStatement>The narrative stays intact as the composition changes.</ProductCaseStatement>
      <CaseList children={['A compact menu for small screens.', 'Touch-friendly calls to action.', 'Reordered hero content for faster comprehension.', 'Scaled character and subject art.', 'Stacked product examples.', 'Shorter line lengths for readable copy.', 'Consistent theme and account controls across breakpoints.']} />
      <ProductCasePair a={{ index:'10', title:'DESKTOP / WIDE EDITORIAL COMPOSITION' }} b={{ index:'11', title:'MOBILE / FOCUSED SINGLE COLUMN' }} />
    </ProductCaseSection>
    <ProductCaseSection id="nomi-website-production" label="PRODUCTION + VALIDATION">
      <ProductCaseStatement>One live experience, shared with the product it promises.</ProductCaseStatement>
      <CaseList children={['Responsive marketing homepage.', 'Playable practice demonstration.', 'Adaptive-learning explainer sections.', 'Character mood showcase.', 'Subject catalogue preview.', 'Authentication-aware calls to action.', 'Light and dark themes.', 'Accessible semantic navigation and controls.', 'Open Graph and X metadata.', 'A 1200 × 630 social preview.', 'Shared brand assets and components with the web application.']} />
      <p className="pc-copy pc-reveal">I checked responsive behaviour, both themes, signed-out calls to action, signed-in Dashboard states, the return path from the application wordmark, authentication continuity, type checking, production builds, metadata, and the live social preview response.</p>
      <ProductCaseDisclosure label="LIVE WEBSITE" url="https://nomi-alpha-bay.vercel.app" cta="Open Nomi website" simulates={['the complete public product story', 'an interactive adaptive-learning moment', 'authenticated and signed-out calls to action']} excludes={['conversion claims before meaningful traffic', 'comprehension claims before research', 'brand-perception claims before research']} />
    </ProductCaseSection>
    <ProductCaseSection id="nomi-website-reflection" label="REFLECTION">
      <ProductCaseStatement>The best explanation was a small experience of the product.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">The playable question connects an action, an observation, and a next step. It does more than a paragraph about personalisation. I also learned that the boundary between a marketing site and an application should be designed as part of the product through shared authentication, visual language, and reliable paths in both directions.</p>
      <ProductCaseStatement>What I would test next.</ProductCaseStatement>
      <CaseList children={['Whether visitors can explain how Nomi differs from a chatbot.', 'Whether the playable question improves product understanding.', 'Which message best motivates account creation.', 'Whether parents and learners need different entry points.', 'Whether the subject section communicates current scope clearly.', 'Where visitors hesitate before starting or signing in.']} />
    </ProductCaseSection>
    <ProductCaseClosing descriptor="A focused promise, a demonstrated learning behaviour, and a seamless path into the product.">CLEAR ABOUT WHAT IT NOTICES. USEFUL ABOUT WHAT COMES NEXT.</ProductCaseClosing>
    <ProductCaseNext next={NEXT} onNext={onNext} />
  </ProductCase>
}
