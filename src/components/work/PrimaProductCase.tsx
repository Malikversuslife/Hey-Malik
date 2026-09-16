import { ProductCase, ProductCaseHero, ProductCaseIntro, ProductCaseSection, ProductCaseStatement, ProductCaseCopy, ProductCasePull, ProductCaseQuote, ProductCaseThesis, ProductCaseNote, ProductCaseDecision, ProductCaseMedia, ProductCasePair, ProductCaseSystem, ProductCaseChips, ProductCaseCompare, ProductCaseScenarios, ProductCaseConnected, ProductCasePaths, ProductCaseDisclosure, ProductCaseNext, ProductCaseClosing } from './ProductCase'
import { productCaseMeta, productCaseProjectMeta } from '../../data/productCases'

const PRIMA = productCaseMeta.prima
const NOMI = productCaseProjectMeta.nomi

export function PrimaProductCase({ onNext }: { onNext: (slug: string) => void }) {
  return (
    <ProductCase className="pc-case-prima" id="top">
      <ProductCaseHero
        meta={PRIMA}
        media={{ index: '01', title: 'OPERATIONS DASHBOARD', ratio: 'full', note: 'The command surface for the Prima system: verification volume, blocked transactions, service health and Priority Review.' }}
      />

      <ProductCaseIntro>Prima explores a future where decentralized identity, Verifiable Credentials and digital currencies have become part of everyday retail payments — and what the merchant side of that future needs to look like.</ProductCaseIntro>

      {/* MOVEMENT 02 — THE PROBLEM */}
      <ProductCaseSection id="prima-premise" label="THE PROBLEM">
        <ProductCaseStatement>VERIFICATION WAS HAPPENING. UNDERSTANDING WASN’T.</ProductCaseStatement>
        <ProductCaseCopy>A customer can authorize a payment directly from a digital wallet, without relying on the traditional card infrastructure merchants use today. But removing those intermediaries creates another problem.</ProductCaseCopy>
        <ProductCaseQuote>CAN I TRUST THIS TRANSACTION ENOUGH TO ACCEPT IT?</ProductCaseQuote>
        <ProductCaseCopy>A decentralized payment can fail for very different reasons — an expired credential, an invalid cryptographic proof, an unavailable issuer, a revoked credential, a replayed presentation, or behaviour that looks unusual. Reducing all of those situations to a red FAILED status creates another problem: what exactly failed, and what should I do next?</ProductCaseCopy>
        <ProductCaseCopy>That shifted the project from designing a payment verifier to designing an operational system for understanding trust. A single verification is a composition of independent checks — each one an opportunity to succeed, fail, or become temporarily indeterminate.</ProductCaseCopy>
        <div id="prima-system">
          <ProductCaseSystem
            layers={[
              { label: 'CUSTOMER DID', state: 'INDEPENDENT CHECK' },
              { label: 'CREDENTIAL', state: 'INDEPENDENT CHECK' },
              { label: 'ISSUER', state: 'INDEPENDENT CHECK' },
              { label: 'CRYPTOGRAPHIC PROOF', state: 'INDEPENDENT CHECK' },
              { label: 'CREDENTIAL STATUS', state: 'INDEPENDENT CHECK' },
              { label: 'MERCHANT POLICY', state: 'INDEPENDENT CHECK' },
              { label: 'PAYMENT AUTHORIZATION', state: 'INDEPENDENT CHECK' },
              { label: 'SETTLEMENT', state: 'FINAL SYSTEM STATE' }
            ]}
          />
          <ProductCaseCopy>A cashier needs a clear outcome. An operator needs to understand what requires attention. An investigator needs the evidence behind that outcome — so Prima keeps verification, investigation, authorization and settlement as separate decisions.</ProductCaseCopy>
        </div>
      </ProductCaseSection>

      {/* MOVEMENT 03 — THE PRODUCT DECISION */}
      <ProductCaseSection id="prima-ai-boundary" label="THE PRODUCT DECISION">
        <ProductCaseStatement>I SEPARATED VERIFICATION FROM INTERPRETATION.</ProductCaseStatement>
        <ProductCaseCopy>Introducing AI created an important product decision. If Prima used AI to determine whether cryptographic evidence was valid, the most important decision in the system would become probabilistic. So I separated the system into two layers.</ProductCaseCopy>
        <ProductCaseDecision
          statement="AI should help interpret deterministic evidence, not decide whether that evidence is valid."
          rationale="This single decision determined where probabilistic thinking is allowed to live in the product — and where it must never be."
        />
        <ProductCaseCompare
          label="TWO LAYERS"
          left={{
            heading: 'ESTABLISHES: WHAT THE EVIDENCE SAYS',
            label: 'DETERMINISTIC VERIFICATION',
            items: ['DID Resolution', 'Credential Proof', 'Issuer Information', 'Credential Status', 'Merchant Policy', 'Payment Authorization'],
            outcome: 'VERIFIED / FAILED / INDETERMINATE',
            tone: 'ok'
          }}
          right={{
            heading: 'HELPS HUMANS UNDERSTAND: WHAT THE EVIDENCE MEANS',
            label: 'AI-ASSISTED INVESTIGATION',
            items: ['Failure Explanation', 'Evidence Correlation', 'Probable Causes', 'Anomaly Interpretation', 'Recommended Actions'],
            outcome: 'ANALYSIS / EVIDENCE / RECOMMENDATION',
            tone: 'muted'
          }}
        />
        <ProductCaseThesis>AI CAN INTERPRET THE EVIDENCE. IT CANNOT CHANGE WHAT THE EVIDENCE SAYS.</ProductCaseThesis>
      </ProductCaseSection>

      {/* MOVEMENT 04 — DESIGNING THE EXPERIENCE */}
      <ProductCaseSection id="prima-observable" label="DESIGNING THE EXPERIENCE">
        <ProductCaseStatement>MAKE VERIFICATION OBSERVABLE.</ProductCaseStatement>
        <ProductCasePair
          a={{ index: '02', title: 'VERIFY · PIPELINE', ratio: 'wide', note: 'VERIFY / PIPELINE — Each check resolves in view before the answer is delivered.' }}
          b={{ index: '03', title: 'IDENTITY VERIFIED / MERCHANT AUTHORIZATION', ratio: 'wide', note: 'A successful identity verification does not automatically move money.' }}
        />

        <div id="prima-replay">
          {/* REPLAY */}
          <ProductCaseStatement>A FAILED PAYMENT WASN’T ENOUGH. I NEEDED TO SHOW WHERE IT FAILED.</ProductCaseStatement>
          <ProductCaseChips items={[
            { label: 'DID', state: 'PASSED', tone: 'ok' },
            { label: 'CREDENTIAL', state: 'PASSED', tone: 'ok' },
            { label: 'ISSUER', state: 'PASSED', tone: 'ok' },
            { label: 'CRYPTOGRAPHIC PROOF', state: 'FAILED', tone: 'danger' },
            { label: 'SETTLEMENT', state: 'HALTED', tone: 'danger' }
          ]} />
          <ProductCaseMedia media={{ index: '04', title: 'VERIFICATION REPLAY', ratio: 'full', note: 'WHAT PASSED: DID, credential and issuer resolved successfully. WHERE IT FAILED: cryptographic proof verification. WHAT HAPPENED NEXT: settlement authorization halted.' }} />
          <ProductCaseNote label="WHY THIS CHANGED">Instead of a generic failure message, Replay reconstructs the verification and highlights where the trust chain broke. “Failed” explained the outcome; Replay exposes the point of failure.</ProductCaseNote>

          <div id="prima-uncertainty">
            <ProductCaseCompare
              className="pc-compare-compact"
              label="FAILED VS INDETERMINATE"
              left={{
                heading: 'Cryptographic proof invalid.',
                label: 'FAILED',
                items: ['SYSTEM KNOWLEDGE: Enough evidence exists to reject verification.'],
                outcome: 'SETTLEMENT BLOCKED.',
                tone: 'danger'
              }}
              right={{
                heading: 'Issuer service unavailable.',
                label: 'INDETERMINATE',
                items: ['SYSTEM KNOWLEDGE: Prima cannot currently establish validity.'],
                outcome: 'TRANSACTION HELD FOR REVIEW.',
                tone: 'warn'
              }}
            />
          </div>
        </div>

        {/* INVESTIGATOR */}
        <div id="prima-investigator">
          <ProductCaseStatement>AI EXPLAINS THE EVIDENCE. IT DOESN’T DECIDE THE TRUTH.</ProductCaseStatement>
          <ProductCaseCopy>Rather than combining everything into a single trust score, Prima separates the signals that describe a transaction — verification result, proof, credential and issuer status, merchant policy, investigation and settlement — and the Trust Chain shows how they relate. The AI Investigator receives that evidence and turns it into an operational explanation: incident analysis, supporting evidence, probable causes, recommended action. Escalating an investigation never rewrites the verification result.</ProductCaseCopy>
          <ProductCaseMedia media={{ index: '07', title: 'AI INVESTIGATOR · CRYPTOGRAPHIC MISMATCH', ratio: 'full', note: 'AI INVESTIGATOR / MISMATCH — Incident analysis above evidence and ranked probable causes. Analysis confidence describes Prima’s interpretation, not the validity of the cryptographic evidence.' }} />
          <ProductCasePaths
            label="STATE SEPARATION"
            columns={[
              { title: 'FAILED PATH', tone: 'danger', steps: ['VERIFICATION', 'FAILED', '↓', 'INVESTIGATION', 'ESCALATED', '↓', 'SETTLEMENT', 'BLOCKED'], outcome: 'Settlement is halted at the point of failure.' },
              { title: 'SUCCESSFUL PATH', tone: 'ok', steps: ['VERIFICATION', 'VERIFIED', '↓', 'MERCHANT AUTHORIZATION', '↓', 'SETTLEMENT', 'CONFIRMED'], outcome: 'Nothing settles automatically. The merchant authorizes.' }
            ]}
          />
        </div>
      </ProductCaseSection>

      {/* MOVEMENT 05 — FROM FEATURE TO OPERATING SYSTEM */}
      <ProductCaseSection id="prima-operating-system" label="FROM FEATURE TO OPERATING SYSTEM">
        <ProductCaseStatement>VERIFICATION WASN’T A SCREEN. IT BECAME AN OPERATING SYSTEM.</ProductCaseStatement>
        <ProductCaseCopy>Once individual transactions worked, I zoomed out to the merchant’s operational problem. Operations brings verification volume, blocked transactions, service health, Priority Review and AI-assisted interpretation into a single command surface.</ProductCaseCopy>
        <ProductCaseMedia media={{ index: '08', title: 'OPERATIONS · PRIORITY REVIEW', ratio: 'full', note: 'The Priority Review queue surfaces the transactions that need human attention. AI operational summaries sit beside deterministic signals — interpreting the system without replacing the underlying evidence. Alerts surface security, infrastructure and transaction anomalies without treating every unusual event as fraud.' }} />

        <div id="prima-merchant-authority">
          <ProductCaseStatement className="pc-statement-heading">MERCHANT CONTROL STOPS AT THE MERCHANT.</ProductCaseStatement>
          <ProductCasePair
            a={{ index: '09', title: 'ALERTS', ratio: 'wide', note: 'Security, infrastructure and transaction anomalies separated from routine events.' }}
            b={{ index: '10', title: 'TRUST POLICIES', ratio: 'wide', note: 'Active, paused and disabled acceptance rules — integration-bound. A merchant can pause acceptance of an issuer’s credentials; it cannot revoke that issuer.' }}
          />
          <ProductCaseNote label="AUTHORITY BOUNDARY">Prima manages what this merchant accepts, not the decentralized ecosystem. Settlement networks and verification services stay separated from the merchant’s integrations and webhooks.</ProductCaseNote>
        </div>

        {/* CONNECTED PROTOTYPE */}
        <div id="prima-prototype">
          <ProductCaseStatement className="pc-statement-heading">THE SCREENS NEEDED TO BEHAVE LIKE ONE SYSTEM.</ProductCaseStatement>
          <ProductCaseCopy>A verification event opened from Operations remains the same event in Verification Timeline. Investigations contain the same evidence; escalating one updates the investigation state without changing the underlying verification result. A clean verification progresses to merchant authorization and settlement confirmation.</ProductCaseCopy>
          <ProductCaseConnected items={['OPERATIONS', 'VERIFY', 'VERIFICATION TIMELINE', 'TRUST CHAIN', 'VERIFICATION REPLAY', 'AI INVESTIGATION', 'ALERTS', 'TRUST POLICIES', 'SETTLEMENT']} />
          <ProductCaseMedia media={{ index: '15', title: 'VERIFY · SETTLEMENT CONFIRMED', ratio: 'wide', note: 'Verification → merchant authorization → settlement confirmation. Nothing settles automatically.' }} />
          <ProductCasePull>I BUILT ENOUGH OF PRIMA TO TEST THE PRODUCT LOGIC, NOT JUST THE SCREENS.</ProductCasePull>

          <div id="prima-scenarios">
            <ProductCaseScenarios label="EIGHT DETERMINISTIC SCENARIOS" rows={[
              { mark: '✓', name: 'CLEAN VERIFICATION', kind: 'SUCCESSFUL VERIFICATION' },
              { mark: '✕', name: 'CRYPTOGRAPHIC PROOF MISMATCH', kind: 'INVALID EVIDENCE' },
              { mark: '✕', name: 'REVOKED CREDENTIAL', kind: 'CREDENTIAL STATUS' },
              { mark: '✕', name: 'EXPIRED CREDENTIAL', kind: 'CREDENTIAL VALIDITY' },
              { mark: '?', name: 'DID SERVICE UNAVAILABLE', kind: 'INFRASTRUCTURE UNCERTAINTY' },
              { mark: '?', name: 'ISSUER SERVICE UNAVAILABLE', kind: 'INFRASTRUCTURE UNCERTAINTY' },
              { mark: '⚠', name: 'DUPLICATE PRESENTATION / REPLAY', kind: 'SECURITY ANOMALY' },
              { mark: '⚠', name: 'HIGH-VALUE ANOMALY', kind: 'BEHAVIOURAL ANOMALY' }
            ]} />
          </div>
          <ProductCaseCopy>I designed eight deterministic scenarios so the prototype could demonstrate different verification, investigation and settlement outcomes — without relying on random behaviour. Dense flows such as Verification Timeline and AI Investigator become focused list-to-detail flows on smaller screens.</ProductCaseCopy>

          <div id="prima-boundary">
            <ProductCaseDisclosure
              label="PROTOTYPE SCOPE"
              url="https://prima-mu-nine.vercel.app/"
              cta="Open live prototype"
              simulates={['deterministic verification scenarios', 'shared application state', 'connected operational behaviour']}
              excludes={['real authentication', 'real DID resolution', 'real VC verification', 'real AI calls', 'real payment settlement', 'real blockchain/network connections', 'production backend infrastructure']}
            />
          </div>
        </div>
      </ProductCaseSection>

      {/* MOVEMENT 06 — REFLECTION */}
      <ProductCaseSection id="prima-reflection" label="REFLECTION">
        <ProductCaseStatement>EXPLAINABILITY ISN’T THE SAME AS SIMPLIFICATION.</ProductCaseStatement>
        <ProductCaseCopy>Prima started as an interface for verifying decentralized payments. It became an exploration of how people make decisions when the systems providing the evidence are too complex to understand at a glance. For high-stakes systems, the better experience isn’t always to remove complexity — sometimes it is to reveal the right complexity at the right moment. Prima became more believable when AI stopped being the thing that ‘verified’ transactions and became what it was better suited for: helping humans understand evidence and decide what to do next.</ProductCaseCopy>
        <ProductCaseNote label="WHAT CHANGED MY THINKING">I used to hide the system. Now the system teaches when it matters.</ProductCaseNote>
        <ProductCaseClosing descriptor="A speculative exploration of decentralized payments, explainable verification and human-centered AI.">MAKING MACHINE TRUST UNDERSTANDABLE TO humans.</ProductCaseClosing>
      </ProductCaseSection>

      <ProductCaseNext onNext={onNext} next={NOMI} />
    </ProductCase>
  )
}