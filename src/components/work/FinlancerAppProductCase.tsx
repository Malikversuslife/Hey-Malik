import { productCaseMeta, productCaseProjectMeta } from '../../data/productCases'
import { ProductCase, ProductCaseClosing, ProductCaseCopy, ProductCaseDecision, ProductCaseHero, ProductCaseIntro, ProductCaseMedia, ProductCaseNext, ProductCasePull, ProductCaseSection, ProductCaseStatement } from './ProductCase'

const META = productCaseMeta['finlancer-app']
const NEXT = productCaseProjectMeta[META.nextProject]
const ROOT = '/finlancer-app/'
const image = (index: string, title: string, file: string, note?: string) => ({ index, title, ratio: 'full' as const, source: `${ROOT}${file}.png`, note })
const video = (index: string, title: string, file: string, note?: string) => ({ index, title, ratio: 'full' as const, source: `${ROOT}videos/${file}.mp4`, poster: `${ROOT}videos/${file}.jpg`, note })

export function FinlancerAppProductCase({ onNext }: { onNext: (slug: string) => void }) {
  return <ProductCase className="pc-case-finlancer-app" id="top">
    <ProductCaseHero meta={META} media={image('01', 'FINLANCER / HOME, INCOME AND INTELLIGENCE', '01-cover', 'Three frequently used screens, designed in one visual language.')} />
    <ProductCaseIntro>{META.intro}</ProductCaseIntro>

    <ProductCaseSection id="finlancer-app-problem" label="THE PROBLEM">
      <ProductCaseStatement>Freelancers get paid. They rarely know what is theirs.</ProductCaseStatement>
      <ProductCaseCopy>Independent income arrives unevenly, through clients and platforms, often in several currencies. A balance alone does not show what is available to spend, what belongs in a tax reserve, or whether a savings goal is on track.</ProductCaseCopy>
      <ProductCasePull>How much of this payment is actually mine?</ProductCasePull>
      <ProductCaseCopy>The first Finlancer app had the right features, but the screens did not yet feel like one product. Its colour, charts and layouts needed a shared system.</ProductCaseCopy>
    </ProductCaseSection>

    <ProductCaseSection id="finlancer-app-decision" label="THE PRODUCT DECISION">
      <ProductCaseStatement>Design around the payment, not the account.</ProductCaseStatement>
      <ProductCaseCopy>A paid $2,400 invoice can become $1,560 available, $600 reserved for tax and $240 toward a studio fund. The user's own automation rules determine the split. The same explanation follows the payment through its notification, transaction detail and Intelligence feed.</ProductCaseCopy>
      <ProductCaseMedia media={image('02', 'PAYMENT SPLIT / ONE PAYMENT, THREE ANSWERS', 'diagram-payment-split')} priority />
      <ProductCaseDecision statement="Finlancer interprets numbers. The user makes decisions." rationale="Intelligence presents observations from the user's data and shows the evidence behind each one. It does not give tax, legal or financial advice." />
    </ProductCaseSection>

    <ProductCaseSection id="finlancer-app-brand" label="FROM BRAND TO PRODUCT">
      <ProductCaseStatement>The uneven year became a useful interface idea.</ProductCaseStatement>
      <ProductCaseCopy>The brand identity turns changing monthly income into twelve columns of different heights. I carried that idea into the app's income, expenses, cash flow and FX charts. Navy gives hero cards structure; green marks money in and actions; yellow draws attention to tax and pending invoices.</ProductCaseCopy>
      <ProductCaseCopy>For interaction, I followed iOS conventions: SF Pro, SF Symbols, a floating tab bar and bottom sheets for choices. The brand shapes the content while the platform shapes the behaviour.</ProductCaseCopy>
    </ProductCaseSection>

    <ProductCaseSection id="finlancer-app-system" label="ONE SYSTEM, 108 SCREENS">
      <ProductCaseStatement>Calm came from consistent rules.</ProductCaseStatement>
      <ProductCaseCopy>I wrote a design spec covering typography, spacing, colour meaning, cards, rows, fields, sheets and navigation before rebuilding the app. Screens use 20pt side margins, shared component spacing and one status language for paid, pending and overdue.</ProductCaseCopy>
      <ProductCaseCopy>One prominent figure leads each screen. Supporting labels use a restrained mono style, and photography stays in empty states instead of sitting behind financial information.</ProductCaseCopy>
      <ProductCaseMedia media={image('03', 'APP MAP / FIRST RUN AND FIVE TABS', 'diagram-app-map', 'Home, Income, Expenses and Clients hold everyday tasks. More gives access to Tax, FX, Goals, Intelligence and Automation.')} priority />
    </ProductCaseSection>

    <ProductCaseSection id="finlancer-app-home" label="HOME">
      <ProductCaseStatement>Three answers before the first scroll.</ProductCaseStatement>
      <ProductCaseCopy>Home opens with three hero cards: cash flow health, upcoming tax and savings progress. Their colours identify the question at a glance. Latest activity, tips and income sources sit below, with a direct path to each full view.</ProductCaseCopy>
      <ProductCaseMedia media={video('04', 'HOME / CASH FLOW, TAX AND SAVINGS', '03-home')} />
    </ProductCaseSection>

    <ProductCaseSection id="finlancer-app-income" label="INCOME AND EXPENSES">
      <ProductCaseStatement>A year you can read at a glance.</ProductCaseStatement>
      <ProductCaseCopy>Income uses twelve stacked columns, one for each month, with the current month shown solid. A payment detail explains its split, and the report expands the view to three, six or twelve months. Logging income keeps choices and dates in sheets, without taking the user away from the form.</ProductCaseCopy>
      <ProductCaseMedia media={video('05', 'INCOME / DETAIL, REPORT AND LOG', '04-income')} />
      <ProductCaseCopy>Expenses mirrors the same chart, list and form structure so the pattern needs to be learned only once. Red appears for money out, while the empty state offers clear starting actions.</ProductCaseCopy>
      <ProductCaseMedia media={video('06', 'EXPENSES / OVERVIEW, LOG AND EMPTY STATE', '05-expenses')} />
    </ProductCaseSection>

    <ProductCaseSection id="finlancer-app-clients" label="CLIENTS AND INVOICES">
      <ProductCaseStatement>Payment behaviour belongs beside the client.</ProductCaseStatement>
      <ProductCaseCopy>The client hub shows the last invoice, total billed and payment status together. Client detail adds the pattern behind the numbers, such as a typical nine-day payment delay. Invoices use the same paid, pending, overdue and sent states wherever they appear.</ProductCaseCopy>
      <ProductCaseMedia media={video('07', 'CLIENTS / HUB AND DETAIL', '06-clients')} />
      <ProductCaseMedia media={video('08', 'INVOICES / CREATE, REVIEW AND STATUS', '07-invoices')} />
    </ProductCaseSection>

    <ProductCaseSection id="finlancer-app-goals" label="GOALS AND TAX">
      <ProductCaseStatement>Make future money visible today.</ProductCaseStatement>
      <ProductCaseCopy>Goals pair each target with its saved amount, remaining distance and forecast. Freelance runway translates savings into months of expenses covered, making an abstract balance easier to use.</ProductCaseCopy>
      <ProductCaseMedia media={video('09', 'GOALS / OVERVIEW, DETAIL AND NEW GOAL', '08-goals')} />
      <ProductCaseCopy>Tax leads with the next due date and estimated amount. The reserve, quarterly payments, calendar and document checklist provide context without presenting estimates as professional advice.</ProductCaseCopy>
      <ProductCaseMedia media={video('10', 'TAX / OVERVIEW, ENTRY AND EMPTY STATE', '09-tax')} />
    </ProductCaseSection>

    <ProductCaseSection id="finlancer-app-fx" label="FX AND AUTOMATION">
      <ProductCaseStatement>Show what arrives before anything moves.</ProductCaseStatement>
      <ProductCaseCopy>FX shows balances in their own currencies and a combined reference total. Conversion previews the rate, fee and final amount. Automation gives users explicit switches for tax set-asides, goal contributions and invoice reminders.</ProductCaseCopy>
      <ProductCaseMedia media={video('11', 'FX / BALANCES, CONVERSION AND RULES', '10-fx-and-automation')} />
    </ProductCaseSection>

    <ProductCaseSection id="finlancer-app-intelligence" label="INTELLIGENCE">
      <ProductCaseStatement>Observations, with their evidence attached.</ProductCaseStatement>
      <ProductCaseCopy>Each Intelligence card says what Finlancer noticed, what data supports it and what the user can do next. A “Why you see this” sheet exposes the underlying pattern, such as late payments across a client's recent invoices.</ProductCaseCopy>
      <ProductCaseMedia media={video('12', 'INTELLIGENCE / FEED, EVIDENCE AND NOTIFICATIONS', '11-intelligence')} />
    </ProductCaseSection>

    <ProductCaseSection id="finlancer-app-first-run" label="FIRST RUN AND ACCOUNT">
      <ProductCaseStatement>Show the real product, then ask only what is needed.</ProductCaseStatement>
      <ProductCaseCopy>Onboarding introduces the product through its actual interface, then asks five setup questions one at a time. Identity verification has three visible steps. In More, account settings show current values beside each option, and platform connection previews exact permissions before proceeding.</ProductCaseCopy>
      <ProductCaseMedia media={video('13', 'ONBOARDING / INTRO AND SETUP', '01-onboarding')} />
      <ProductCaseMedia media={video('14', 'SIGN UP / IDENTITY VERIFICATION', '02-sign-up-and-verification')} />
      <ProductCaseMedia media={video('15', 'LOG IN / RETURNING TO THE APP', '13-log-in')} />
      <ProductCaseMedia media={video('16', 'MORE / ACCOUNT SETTINGS AND CONNECTION', '12-account-settings')} />
    </ProductCaseSection>

    <ProductCaseSection id="finlancer-app-rebuild" label="MAKING IT ONE PRODUCT">
      <ProductCaseStatement>Each screen looked fine. Together, they did not.</ProductCaseStatement>
      <ProductCaseCopy>The first restyle exposed different margins, type sizes, form spacing and navigation positions. I rebuilt the screens from the spec with auto layout, then audited all 108 side by side for alignment, overflow, content and repeated data.</ProductCaseCopy>
      <ProductCaseMedia media={image('17', 'BEFORE AND AFTER / INCOME AND LOG INCOME', '12-before-after')} priority />
      <ProductCaseCopy>The result is a coherent pre-launch iOS design across eleven flows. The work includes sample data and a design spec; usability testing, live account connections, Android and dark mode are outside this design scope.</ProductCaseCopy>
    </ProductCaseSection>

    <ProductCaseSection id="finlancer-app-reflection" label="REFLECTION">
      <ProductCaseStatement>Calm is a system property.</ProductCaseStatement>
      <ProductCaseCopy>The strongest change was not a new palette. It was removing small contradictions between screens, so the same money, action and status always mean the same thing.</ProductCaseCopy>
      <ProductCaseMedia media={video('18', 'FINLANCER / FULL PROTOTYPE WALKTHROUGH', '00-full-prototype', 'The complete six-minute prototype. Playback is controlled by the reader.')} />
    </ProductCaseSection>

    <ProductCaseClosing descriptor="A calmer financial operating system for independent work.">MONEY THAT EXPLAINS ITSELF.</ProductCaseClosing>
    <ProductCaseNext next={NEXT} onNext={slug => {
      if (slug === 'finlancer-website') window.open('https://finlancer-virid.vercel.app/', '_blank', 'noopener,noreferrer')
      else onNext(slug)
    }} />
  </ProductCase>
}
