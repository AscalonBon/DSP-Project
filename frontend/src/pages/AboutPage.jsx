import { PageHero } from '../components/SiteLayout.jsx'

const values = [
  ['AI-powered insight', 'We use AI to help users explore information about dermatological conditions.'],
  ['Initial assessment', 'The tool can offer an initial indication based on the information provided, not a definitive diagnosis.'],
  ['Professional care matters', 'We encourage users to discuss concerns and AI-generated insights with a qualified healthcare professional.'],
]

function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Dermacare"
        title="AI-powered insight into dermatological conditions."
        description="DermaCare helps users explore skin concerns and gain an initial understanding of possible dermatological conditions."
      />
      <section className="px-6 py-20 md:px-12 lg:py-28">
        <div className="mx-auto grid max-w-360 gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="section-label">Who we are</p>
          <div>
            <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
              A helpful starting point—not the final word.
            </h2>
            <p className="mt-6 max-w-180 text-base leading-8 text-[#65718a]">
              DermaCare is an AI-powered diagnostic aid designed to make
              dermatological information easier to explore. It can provide
              initial insights into conditions that may relate to the information
              you share, helping you better understand your concerns and prepare
              for a conversation with a healthcare professional. Its output is
              not a medical diagnosis and must never replace professional advice,
              assessment, or treatment.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#edf3fb] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-360">
          <p className="section-label">Our principles</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {values.map(([title, text], index) => (
              <article key={title} className="border-t border-[#b7c9e3] py-6">
                <p className="text-sm font-bold text-[#326da8]">0{index + 1}</p>
                <h3 className="mt-8 text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#65718a]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
