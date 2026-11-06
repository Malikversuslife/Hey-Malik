import { Icon } from '../Icon'
import { ProductCaseSticky, ProductCase, ProductCaseHero, ProductCaseIntro, ProductCaseSection, ProductCaseStatement, ProductCaseCopy, ProductCaseDecision, ProductCaseMedia, ProductCasePair, ProductCaseNext, ProductCaseClosing } from './ProductCase'
import { productCaseMeta, productCaseProjectMeta } from '../../data/productCases'

const META = productCaseMeta.yousewire
const NEXT = productCaseProjectMeta.prima
const MEDIA_ROOT = '/Yousewire%20Product%20Files/'

export function YousewireProductCase({ onNext }: { onNext: (slug: string) => void }) {
  return <ProductCase className="pc-case-yousewire" id="top">
    <ProductCaseHero meta={META} media={{ index:'01', title:'YOUSEWIRE CONSOLE / PRIMARY PRODUCT VIEW', ratio:'full', source:`${MEDIA_ROOT}01-primary-product-view.mp4` }} />
    <ProductCaseIntro>{META.intro}</ProductCaseIntro>

    <ProductCaseSection id="yousewire-contexts" label="ONE SYSTEM, TWO CONTEXTS">
      <ProductCaseStatement>Cross-border finance becomes complex very quickly.</ProductCaseStatement>
      <ProductCaseCopy>Personal and Business share one product ecosystem while navigation, data and responsibilities remain segmented. The shared system stays consistent, but the complexity changes with the context.</ProductCaseCopy>
      <ProductCasePair a={{ index:'02', title:'PERSONAL DASHBOARD', source:`${MEDIA_ROOT}02-personal-dashboard.mp4` }} b={{ index:'03', title:'BUSINESS DASHBOARD', source:`${MEDIA_ROOT}03-business-dashboard.mp4` }} />
    </ProductCaseSection>

    <ProductCaseSection id="yousewire-money" label="MONEY ACROSS BORDERS">
      <ProductCaseStatement>Multiple currencies. Different rails. One account model.</ProductCaseStatement>
      <ProductCaseCopy>Currency wallets bring balance, account information, funding, sending and conversion into one model. Compliance appears when it becomes relevant to the action instead of dominating the whole experience.</ProductCaseCopy>
      <ProductCasePair a={{ index:'04', title:'MULTI-CURRENCY WALLETS', source:`${MEDIA_ROOT}04-multi-currency-wallets.mp4` }} b={{ index:'05', title:'SEND MONEY / TRANSFER REVIEW', source:`${MEDIA_ROOT}05-send-money.mp4` }} />
    </ProductCaseSection>

    <ProductCaseSection id="yousewire-verification" label="COMPLIANCE WITHOUT FRICTION">
      <ProductCaseStatement>Compliance needed to be visible without feeling hostile.</ProductCaseStatement>
      <ProductCaseDecision statement="Yousewire owns the context. The verification provider owns the verification process." rationale="Verification status and transaction limits stay legible inside the product while the underlying verification process remains separated." />
      <ProductCasePair a={{ index:'06', title:'VERIFICATION + LIMITS', source:`${MEDIA_ROOT}06-verification-limits.mp4` }} b={{ index:'07', title:'ADDRESS VERIFICATION', source:`${MEDIA_ROOT}07-address-verification.mp4` }} />
    </ProductCaseSection>

    <ProductCaseSection id="yousewire-operations" label="FROM WALLET TO OPERATIONS WORKSPACE">
      <ProductCaseStatement>A business needs more than a wallet.</ProductCaseStatement>
      <ProductCaseCopy>The business console expands into pay-ins, payouts, bulk payouts, balances, disputes and referrals. Bulk payouts move from batch creation through recipient validation, review, approval, processing and results without letting invalid rows break the entire mental model.</ProductCaseCopy>
      <ProductCaseMedia media={{ index:'08', title:'BULK PAYOUT CREATION / VALIDATION / BATCH REVIEW', ratio:'full', source:`${MEDIA_ROOT}08-bulk-payouts.mp4` }} />
      <ProductCasePair a={{ index:'09', title:'PAY-INS + PAYOUTS', source:`${MEDIA_ROOT}09-payins-payouts.mp4` }} b={{ index:'10', title:'BALANCES', source:`${MEDIA_ROOT}10-balances.mp4` }} />
    </ProductCaseSection>

    <ProductCaseSection id="yousewire-control" label="DESIGNING CONTROL">
      <ProductCaseStatement>Moving money is an action. Controlling who can move it is a system.</ProductCaseStatement>
      <ProductCaseCopy>Roles, permissions, limits, approvals, transaction states and audit activity form one authority model. Financial states also need to answer what happened, what the user can do, and whether action is required.</ProductCaseCopy>
      <ProductCasePair a={{ index:'11', title:'TEAM + ROLES / PERMISSIONS', source:`${MEDIA_ROOT}11-team-roles-permissions.mp4` }} b={{ index:'12', title:'APPROVAL QUEUE / PAYMENT APPROVAL', source:`${MEDIA_ROOT}12-approval-queue.mp4` }} />
      <ProductCaseSticky>Moving money and deciding who can move it are two different design problems.</ProductCaseSticky>
    </ProductCaseSection>

    <ProductCaseSection id="yousewire-settings" label="THE CONTROL CENTER">
      <ProductCaseStatement>Settings became a control center.</ProductCaseStatement>
      <ProductCaseCopy>Personal settings cover profile, verification, security, payment preferences and linked accounts. Business settings expand into compliance, teams, roles, approval workflows, limits, payment configuration, payout methods, documents and audit activity. Payroll extends the same system into employee pay configuration.</ProductCaseCopy>
      <ProductCasePair a={{ index:'13', title:'BUSINESS SETTINGS / TEAM SETTINGS', source:`${MEDIA_ROOT}13-business-settings.mp4` }} b={{ index:'14', title:'PAYROLL / EMPLOYEE PAY CONFIGURATION', source:`${MEDIA_ROOT}14-payroll.mp4` }} />
    </ProductCaseSection>

    <ProductCaseSection id="yousewire-reflection" label="REFLECTION">
      <ProductCaseStatement>The product became more complex. The experience did not have to.</ProductCaseStatement>
      <ProductCaseCopy>The work was designed in Figma with Product and Project Managers, Developers and Stakeholders around requirements, operational rules, implementation feasibility, edge cases, evolving flows and development handoff.</ProductCaseCopy>
      <a className="pc-disclosure-link" href="https://app.yousewire.com/personal/wallets" target="_blank" rel="noreferrer">Visit live product <Icon name="arrowUpRight" /></a>
    </ProductCaseSection>

    <ProductCaseClosing descriptor="A cross-border financial system for personal money management and business financial operations.">COMPLEXITY WHERE IT BELONGS.</ProductCaseClosing>
    <ProductCaseNext next={NEXT} onNext={onNext} />
  </ProductCase>
}
