import { PageHero } from '../components/SiteLayout.jsx'

const questions = [
  [
    'What is DermaCare?',
    'DermaCare is an AI-powered tool that helps users gain initial insight into dermatological conditions based on the information they provide.',
  ],
  [
    'Can DermaCare diagnose a skin condition?',
    'No. It may surface information about possible conditions as an initial aid, but its output is not a diagnosis and may be incomplete or incorrect.',
  ],
  [
    'Can I use the result instead of seeing a professional?',
    'No. AI-generated insights are not a substitute for assessment or advice from a qualified healthcare professional. Discuss your concerns with a professional.',
  ],
  [
    'What if I need urgent medical help?',
    'Contact your local emergency service or go to an emergency department. Do not wait for an AI response or routine appointment.',
  ],
  [
    'How should I use an AI-generated insight?',
    'Treat it as general information and a starting point for questions—not as a confirmed condition or treatment recommendation. A qualified professional can assess your individual situation.',
  ],
]

function FaqPage() {
  return (
    <main>
      <PageHero
        eyebrow="Frequently asked questions"
        title="A few helpful answers."
        description="Learn what DermaCare can do, what its AI-generated insights mean, and why professional medical advice remains important."
      />
      <section className="px-6 py-20 md:px-12 lg:py-28">
        <div className="mx-auto max-w-240">
          <p className="section-label">Good to know</p>
          <div className="mt-8 border-t border-[#b7c9e3]">
            {questions.map(([question, answer]) => (
              <details key={question} className="group border-b border-[#b7c9e3] py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold">
                  {question}
                  <span className="text-2xl font-normal text-[#326da8] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-180 pr-10 text-sm leading-7 text-[#65718a]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default FaqPage
