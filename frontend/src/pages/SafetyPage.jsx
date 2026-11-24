import { PageHero } from '../components/SiteLayout.jsx'

function SafetyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Your safety matters"
        title="AI insight is a starting point, not a diagnosis."
        description="DermaCare can help you explore dermatological conditions, but AI has limits. Keep these important safety points in mind."
      />
      <section className="px-6 py-20 md:px-12 lg:py-28">
        <div className="mx-auto grid max-w-360 gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="section-label">Important information</p>
          <div className="space-y-10">
            <article className="border-b border-[#d8e1ef] pb-8">
              <h2 className="text-2xl font-bold">DermaCare does not provide a medical diagnosis</h2>
              <p className="mt-4 text-base leading-8 text-[#65718a]">
                AI-generated information may be incomplete or incorrect and is
                provided for general informational purposes. It can support an
                initial assessment of possible dermatological conditions, but it
                cannot confirm a condition or replace assessment and advice from
                a qualified healthcare professional.
              </p>
            </article>
            <article className="border-b border-[#d8e1ef] pb-8">
              <h2 className="text-2xl font-bold">Do not delay urgent medical help</h2>
              <p className="mt-4 text-base leading-8 text-[#65718a]">
                If you believe you may be experiencing a medical emergency, contact
                your local emergency service or go to an emergency department.
                Do not wait for an online response or a routine appointment.
              </p>
            </article>
            <article>
              <h2 className="text-2xl font-bold">Discuss results with a professional</h2>
              <p className="mt-4 text-base leading-8 text-[#65718a]">
                If an AI insight raises a concern, or your symptoms persist or
                worsen, contact a qualified healthcare professional. Do not start
                or change treatment based only on an AI-generated result.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SafetyPage
