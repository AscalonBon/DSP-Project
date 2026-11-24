import { PageHero } from '../components/SiteLayout.jsx'

const steps = [
  ['Share your concern', 'Provide information about the dermatological concern you want to understand. Only share details you are comfortable providing.'],
  ['Review AI-generated insight', 'DermaCare uses AI to surface general information about possible dermatological conditions related to what you shared.'],
  ['Seek professional guidance', 'Use the insight as a starting point for questions. A qualified healthcare professional can assess your situation and advise you.'],
]

function HowPage() {
  return (
    <main>
      <PageHero
        eyebrow="How it works"
        title="From skin concern to informed next step."
        description="DermaCare offers AI-powered initial insight to help you explore dermatological conditions—not a diagnosis or a replacement for professional help."
      />
      <section className="px-6 py-20 md:px-12 lg:py-28">
        <div className="mx-auto max-w-360">
          <p className="section-label">How DermaCare works</p>
          <div className="mt-8 border-t border-[#b7c9e3] md:grid md:grid-cols-3">
            {steps.map(([title, text], index) => (
              <article key={title} className="border-b border-[#b7c9e3] py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <p className="text-sm font-bold text-[#326da8]">STEP 0{index + 1}</p>
                <h2 className="mt-10 text-2xl leading-tight font-bold">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#65718a]">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col justify-between gap-6 bg-[#edf3fb] p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold">Ready to take the first step?</h2>
              <p className="mt-2 text-sm leading-6 text-[#65718a]">Use AI-generated insights as a starting point, then discuss your concerns with a qualified professional.</p>
            </div>
            <a href="/faq" className="inline-flex shrink-0 items-center gap-3 font-bold text-[#2168d7]">
              Read the FAQs <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HowPage
