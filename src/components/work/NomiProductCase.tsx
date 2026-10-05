import { productCaseMeta, productCaseProjectMeta } from '../../data/productCases'
import { ProductCase, ProductCaseClosing, ProductCaseDisclosure, ProductCaseHero, ProductCaseIntro, ProductCaseMedia, ProductCaseNext, ProductCaseNote, ProductCasePair, ProductCasePull, ProductCaseSection, ProductCaseStatement, ProductCaseSticky, ProductCaseSystem, ProductCaseConnected } from './ProductCase'

const META = productCaseMeta.nomi
const NEXT = productCaseProjectMeta[META.nextProject]

function CaseList({ children }: { children: string[] }) {
  return <ul className="pc-case-list pc-reveal">{children.map(item => <li key={item}>{item}</li>)}</ul>
}

export function NomiProductCase({ onNext }: { onNext: (slug: string) => void }) {
  return <ProductCase className="pc-case-nomi" id="top">
    <ProductCaseHero meta={META} media={{ index:'01', title:'SIGNED-IN HOME / RECOMMENDED TOPIC + LEARNING PATH', ratio:'full', note:'Home brings the recommended Factorisation topic, mastery, learning path, and Nomi’s contextual prompt into one starting point.' }} />
    <ProductCaseIntro>Nomi is an adaptive AI learning companion for secondary school learners. It observes assessed practice, identifies patterns in performance, and uses that evidence to recommend what the learner should do next.</ProductCaseIntro>
    <ProductCaseSection id="nomi-overview" label="OVERVIEW">
      <ProductCaseStatement>One curriculum identity. One continuous learning journey.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">The latest web app connects authentication, onboarding, subject discovery, structured learning paths, assessed practice, contextual tutoring, and progress. Each area uses the same learner evidence, allowing one practice result to shape recommendations throughout the product.</p>
      <ProductCasePull>How might a learning product adapt to the learner without making the experience feel opaque or controlling?</ProductCasePull>
    </ProductCaseSection>
    <ProductCaseSection id="nomi-problem" label="THE PROBLEM">
      <ProductCaseStatement>A score shows what happened. It rarely tells a learner what to do next.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">Many education products organise content effectively but leave learners to interpret their own results. Practice and progress become disconnected, recommendations arrive without context, and AI is reduced to a blank chat box that only helps when the learner already knows what to ask.</p>
      <CaseList children={['Turn assessed answers into useful next actions.', 'Preserve the selected topic across Learn, Practice, Progress, and Nomi.', 'Explain adaptation through visible states and plain language.', 'Give the AI tutor relevant context before a conversation begins.', 'Support focused mobile use and a productive desktop dashboard.', 'Build a visual system that feels intelligent, warm, and recognisably Nomi.']} />
      <ProductCaseSticky>Nomi needed to turn learning evidence into direction while keeping the learner informed and in control.</ProductCaseSticky>
    </ProductCaseSection>
    <ProductCaseSection id="nomi-role" label="MY ROLE">
      <ProductCaseStatement>From interaction model through implementation.</ProductCaseStatement>
      <CaseList children={['Product definition and feature prioritisation.', 'User flows and information architecture.', 'Adaptive learning rules and AI boundaries.', 'Responsive interaction design.', 'Authentication and onboarding flows.', 'Design system and component behaviour.', 'Frontend implementation and production verification.']} />
      <p className="pc-copy pc-reveal">Working close to the code mattered because the hardest product problems appeared between screens: route transitions, topic identity, persistence, loading behaviour, and the handoff from assessment to tutoring.</p>
    </ProductCaseSection>
    <ProductCaseSection id="nomi-loop" label="DESIGNING THE LEARNING LOOP">
      <ProductCaseStatement>Assessment became an input for the next learning decision.</ProductCaseStatement>
      <div className="pc-nomi-loop pc-reveal">{[
        ['01','LEARN','Choose or resume a curriculum topic.'], ['02','PRACTISE','Complete a focused five-question assessment.'], ['03','EVALUATE','Record accuracy, difficulty, and misconception evidence.'], ['04','ADAPT','Update mastery, challenge, intervention, and the recommended next action.'], ['05','CONTINUE','Practise again, move through the path, or review weak areas with Nomi.']
      ].map(([n,title,copy]) => <div key={n}><span>{n}</span><b>{title}</b><p>{copy}</p></div>)}</div>
      <ProductCaseStatement>Why five questions?</ProductCaseStatement>
      <p className="pc-copy pc-reveal">A short session creates a clear commitment and a visible completion point. It collects several signals while remaining easy to start. The completion screen becomes a decision moment where the learner can continue practising, return to the path, or review weak spots with Nomi.</p>
      <ProductCasePair a={{ index:'02', title:'PRACTICE / FOCUSED FIVE-QUESTION SESSION' }} b={{ index:'03', title:'COMPLETION / NEXT USEFUL ACTION' }} />
    </ProductCaseSection>
    <ProductCaseSection id="nomi-principles" label="MAKING ADAPTATION UNDERSTANDABLE">
      <ProductCaseStatement>The system recommends. The learner still chooses.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">The adaptive engine is rule based and inspectable. It considers correctness, question difficulty, recent accuracy, repeated easy success, recurring misconceptions, and recency. Mastery remains bounded from 0 to 100, difficulty stays within ten levels, and one wrong answer cannot erase substantial progress.</p>
      <ProductCaseSystem layers={[{ label:'CURRENT LEVEL', state:'CONTINUE', tone:'muted' }, { label:'REPEATED MISTAKE', state:'HINT OR RETRY', tone:'warn' }, { label:'CONCEPT GAP', state:'WORKED EXAMPLE', tone:'warn' }, { label:'PREREQUISITE GAP', state:'REVIEW', tone:'danger' }, { label:'CONSISTENT SUCCESS', state:'INCREASE CHALLENGE', tone:'ok' }]} note="The interface explains what Nomi noticed and what is changing without exposing internal scoring rules." />
      <p className="pc-copy pc-reveal">Home prioritises one action, Learn exposes the wider curriculum, Practice explains feedback as it happens, Progress shows the evidence behind recommendations, and Nomi stays directly accessible.</p>
    </ProductCaseSection>
    <ProductCaseSection id="nomi-continuity" label="SOLVING CONTINUITY">
      <ProductCaseStatement>Topic identity became a product rule, not display copy.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">After a Factorisation session, the tutor could inherit stale shared state and show the generic label “Practice.” This revealed that several parts of the product could compete to define the learner’s context.</p>
      <p className="pc-copy pc-reveal">I made canonical curriculum and route identity authoritative. The topic ID selected in Home or Learn travels into Practice and then into Nomi. The latest assessed session supplies supporting evidence, but shared state cannot overwrite the canonical topic.</p>
      <ProductCaseConnected items={['HOME OR LEARN', 'FACTORISATION PRACTICE', 'FIVE-QUESTION COMPLETION', 'REVIEW WITH NOMI', 'CONTEXTUAL GUIDANCE']} />
      <ProductCasePair a={{ index:'04', title:'FACTORISATION / COMPLETION' }} b={{ index:'05', title:'NOMI / SAME TOPIC + RECENT EVIDENCE' }} />
    </ProductCaseSection>
    <ProductCaseSection id="nomi-ai" label="GIVING AI A DEFINED ROLE">
      <ProductCaseStatement>Nomi is both the system and the tutor.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">Nomi the system interprets evidence and shapes recommendations across the application. Nomi the tutor explains concepts, reviews mistakes, and supports the learner in a dedicated conversational space.</p>
      <p className="pc-copy pc-reveal">The tutor receives the canonical subject and topic, recent assessed performance, mastery, difficulty, and active misconception evidence. A learner entering from Practice begins with relevant support instead of restating the problem.</p>
      <CaseList children={['The application owns canonical curriculum identity.', 'Answer evaluation and mastery updates run on the server.', 'Practice submissions use idempotency protection.', 'Attempts, progress, and misconception state persist together.', 'Generative AI may explain or produce bounded learning material.', 'AI cannot silently rewrite progress or invent curriculum structure.']} />
      <ProductCaseNote label="PRODUCT BOUNDARY">Important learning state remains testable and understandable. Generative support operates inside that trusted structure.</ProductCaseNote>
    </ProductCaseSection>
    <ProductCaseSection id="nomi-shell" label="REBUILDING THE APPLICATION SHELL">
      <ProductCaseStatement>A productive desktop dashboard with a focused mobile experience.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">The navigation centres five learner destinations: Home, Learn, Practice, Nomi, and Progress. Desktop uses a persistent sidebar and dashboard header. Mobile uses a slide-in menu to preserve screen space while maintaining the same hierarchy.</p>
      <ProductCasePair a={{ index:'06', title:'DESKTOP / PERSISTENT SIDEBAR + DASHBOARD HEADER' }} b={{ index:'07', title:'MOBILE / FOCUSED SLIDE-IN NAVIGATION' }} />
    </ProductCaseSection>
    <ProductCaseSection id="nomi-discovery" label="EXPANDING SUBJECT DISCOVERY">
      <ProductCaseStatement>Choosing a first subject and adding one later should feel like one system.</ProductCaseStatement>
      <CaseList children={['Search across the subject catalogue.', 'Classification by field.', 'Scrollable category filters with directional controls.', 'Two-column rectangular subject cards.', 'Distinct subject colours and 3D illustrations.', 'Available and coming-soon states.', 'A subject detail modal with an appropriate Nomi mood.']} />
      <ProductCasePair a={{ index:'08', title:'ONBOARDING / SUBJECT SELECTION' }} b={{ index:'09', title:'LEARN / SUBJECT DETAIL' }} />
    </ProductCaseSection>
    <ProductCaseSection id="nomi-brand" label="VISUAL SYSTEM">
      <ProductCaseStatement>Intelligent, warm, and playful at the moments that need it.</ProductCaseStatement>
      <CaseList children={['Warm cream canvas and calm raised surfaces.', 'Nomi purple for primary actions and adaptive guidance.', 'Bricolage Grotesque for expressive headings and Inter for interface copy.', 'Distinct identities for Mathematics, Physics, Chemistry, and Biology.', 'Hugeicons for functional controls.', '3D subject objects and Nomi artwork at high-value moments.', 'Rounded geometry, restrained borders, and subtle depth.', 'Complete light and dark themes.']} />
      <p className="pc-copy pc-reveal">The mascot communicates rather than decorates. Curious, supportive, encouraging, thinking, reinforcing, and celebrating states appear when tone helps explain the moment.</p>
      <ProductCasePair a={{ index:'10', title:'NOMI / CHARACTER STATES' }} b={{ index:'11', title:'LIGHT + DARK PRODUCT THEMES' }} />
    </ProductCaseSection>
    <ProductCaseSection id="nomi-product-path" label="THE FINISHED PRODUCT">
      <ProductCaseStatement>A complete path from account creation to evidence-backed next action.</ProductCaseStatement>
      <CaseList children={['Email and Google authentication.', 'Account confirmation and password recovery.', 'Learner onboarding and subject selection.', 'Protected authenticated routes.', 'Evidence-backed Home recommendations.', 'Searchable subject catalogue and curriculum paths.', 'Five-question assessed Practice sessions.', 'Correct, incorrect, hint, retry, and reinforcement states.', 'Mastery, difficulty, accuracy, and misconception tracking.', 'Contextual tutoring with recent session evidence.', 'Responsive Progress views.', 'Notifications, profile, settings, theme, and sign-out flows.']} />
      <ProductCaseMedia media={{ index:'12', title:'SIGN UP → ONBOARDING → HOME → LEARN → PRACTICE → NOMI → PROGRESS', ratio:'full' }} />
      <ProductCaseDisclosure label="LIVE PRODUCT" url="https://nomi-alpha-bay.vercel.app" cta="Open Nomi web app" simulates={['responsive authenticated learning journeys', 'assessed practice and persisted progress', 'contextual tutoring and adaptive recommendations']} excludes={['improved-grade claims', 'retention claims', 'learning-effectiveness claims before user studies']} />
    </ProductCaseSection>
    <ProductCaseSection id="nomi-reflection" label="VALIDATION + REFLECTION">
      <ProductCaseStatement>The hardest part of an adaptive product is preserving meaning across the system.</ProductCaseStatement>
      <p className="pc-copy pc-reveal">I verified the build through deterministic domain tests, component tests, type checking, production builds, authenticated browser flows, email confirmation and recovery, Google sign-in, responsive review, and the complete Factorisation journey.</p>
      <CaseList children={['Topic identity became canonical data rather than display copy.', 'Practice became a defined session with a purposeful completion state.', 'Progress shifted from generic charts to actionable learning evidence.', 'The AI tutor became one part of a wider adaptive system.', 'Responsive navigation was designed around context and frequency of use.', 'Authentication, loading, empty, recovery, and error states became core product work.']} />
      <ProductCaseNote label="EVIDENCE BOUNDARY">No claims about improved grades, retention, or learning outcomes are made yet. The functional foundation is ready for moderated usability and learning-effectiveness testing.</ProductCaseNote>
      <ProductCaseStatement>What I would test next.</ProductCaseStatement>
      <CaseList children={['Whether learners understand why Nomi recommends a topic.', 'Whether five questions feel focused or too short.', 'Which feedback language motivates another attempt.', 'When learners prefer a hint, worked example, or tutor explanation.', 'Whether misconception labels feel helpful and respectful.', 'How the adaptive rules calibrate with real learner behaviour.']} />
    </ProductCaseSection>
    <ProductCaseClosing descriptor="Nomi connects practice, progress, recommendations, and contextual AI through one continuous learning relationship.">WHAT SHOULD I WORK ON NOW?</ProductCaseClosing>
    <ProductCaseNext next={NEXT} onNext={onNext} />
  </ProductCase>
}
