import doctorImage from '../assets/hero-doctor.jpeg'

const specialities = [
  {
    label: 'Understand concerns',
    title: 'Explore possible skin conditions',
    text: 'Use AI-assisted insights to learn about dermatological conditions that may relate to the concerns you share.',
  },
  {
    label: 'Initial insight',
    title: 'Get oriented before seeking help',
    text: 'DermaCare can help you organize what you are noticing and prepare questions for a qualified professional.',
  },
  {
    label: 'Know the limits',
    title: 'AI supports care, it does not replace it',
    text: 'AI insights can be incomplete or incorrect. A healthcare professional is the right person to assess your situation.',
  },
]

function HomePage() {
  return (
    <main>
      <section id="home" className="relative min-h-195 overflow-hidden bg-[#0a1f43] text-white lg:min-h-screen">
        <img
          src={doctorImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[72%_35%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,29,64,0.98)_0%,rgba(7,29,64,0.86)_20%,rgba(7,29,64,0.18)_80%,rgba(7,29,64,0.1)_100%)]" />

        <div className="relative mx-auto flex min-h-195 max-w-360 items-center px-6 md:px-12 lg:min-h-screen">
          <div className="max-w-160 pb-12 pt-40 lg:pb-0">
            <p className="mb-7 flex items-center gap-4 text-sm font-bold uppercase tracking-[0.18em] text-[#bcd4ff]">
              <span className="h-px w-12 bg-[#77a8ff]" />
              AI-powered dermatology insights
            </p>
            <h1 className="max-w-150 text-6xl leading-[0.94] font-bold tracking-tight text-white sm:text-7xl lg:text-[5.8rem]">
              Understand your skin.
              <span className="block text-[#77a8ff]">Know your next step.</span>
            </h1>
            <p className="mt-7 max-w-140 text-lg leading-8 text-[#dce6f4]">
              DermaCare uses AI to help you gain insight into dermatological
              conditions. It can support an initial assessment, but it is not a
              diagnosis or a substitute for professional medical help.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/how" className="rounded-full bg-[#77a8ff] px-7 py-4 text-sm font-bold text-[#10233f] transition hover:bg-white">
                How it works
              </a>
              <a href="/safety" className="rounded-full border border-white/50 px-7 py-4 text-sm font-bold text-white transition hover:border-white hover:bg-white/10">
                Important safety information
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden w-[38%] border-l border-t border-white/20 bg-[#10233f]/75 px-8 py-6 backdrop-blur-sm lg:block">
          <div className="grid grid-cols-3 divide-x divide-white/20">
            <div className="pr-5">
              <p className="text-lg font-bold text-[#77a8ff]">AI-assisted</p>
              <p className="mt-1 text-xs text-[#dce6f4]">Initial insights</p>
            </div>
            <div className="px-5">
              <p className="text-lg font-bold text-[#77a8ff]">Skin health</p>
              <p className="mt-1 text-xs text-[#dce6f4]">Condition awareness</p>
            </div>
            <div className="pl-5">
              <p className="text-lg font-bold text-[#77a8ff]">Not a diagnosis</p>
              <p className="mt-1 text-xs text-[#dce6f4]">Professional help matters</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#edf3fb] px-6 py-20 md:px-12 lg:py-28">
        <div className="mx-auto max-w-360">
          <p className="section-label">Our specialities</p>
          <h2 className="mt-4 max-w-180 text-4xl leading-tight font-bold sm:text-5xl">
            Expertise for every skin story
          </h2>
          <div className="mt-12 border-t border-[#b7c9e3] md:grid md:grid-cols-3">
            {specialities.map((item, index) => (
              <a href="/how" key={item.title} className="speciality-card group">
                <p className="text-sm font-bold text-[#326da8]">0{index + 1}</p>
                <p className="mt-12 text-xs font-bold uppercase tracking-[0.16em] text-[#738198]">{item.label}</p>
                <h3 className="mt-4 text-2xl leading-tight font-bold">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[#65718a]">{item.text}</p>
                <span className="mt-7 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#aebfd5] text-xl transition group-hover:border-[#2168d7] group-hover:bg-[#2168d7] group-hover:text-white">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#10233f] px-6 py-12 text-white md:px-12 lg:py-12">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-128 border-[#77a8ff]/10" />
        <div className="relative mx-auto max-w-360 md:p-12">
          <p className="section-label text-[#77a8ff]">The Dermacare difference</p>
          <div className="mt-2 grid items-end gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <h2 className="max-w-180 text-5xl leading-[1.02] font-bold text-white sm:text-6xl">
              Useful insight. Responsible next steps.
            </h2>
            <div>
              <p className="text-base leading-7 text-[#dce6f4]">
                AI can help you explore possible dermatological conditions and
                prepare questions. A qualified professional can provide an
                assessment tailored to you.
              </p>
              <a href="/about" className="mt-7 inline-flex items-center gap-4 text-sm font-bold text-[#77a8ff]">
                Discover our approach <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
