import dermacareLogo from '../assets/logo.png'
import '../index.css'

function SiteLayout({ children }) {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#17223d]">
      <header className="landing-nav fixed inset-x-0 top-0 z-50 border-b border-white/15 text-white">
        <div className="mx-auto flex min-h-20 max-w-360 flex-wrap items-center justify-between px-6 md:px-12">
          <a href="/" aria-label="Dermacare home" className="flex items-center gap-3">
            <img src={dermacareLogo} alt="" className="h-12 w-12 object-contain" />
            <span className="text-lg font-bold tracking-[0.08em]">DERMACARE</span>
          </a>

          <nav className="order-3 flex w-full items-center gap-6 overflow-x-auto whitespace-nowrap pb-3 lg:order-0 lg:w-auto lg:gap-8 lg:pb-0">
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/how" className="nav-link">How It Works</a>
            <a href="/safety" className="nav-link">Safety</a>
            <a href="/faq" className="nav-link">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="/login" className="px-5 py-2 text-sm font-bold rounded-full border-2 text-white transition hover:text-[#77a8ff]">
              Login
            </a>
            <a href="/register" className="rounded-full bg-[#77a8ff] px-5 py-3 text-sm font-bold text-[#10233f] transition hover:bg-white hover:text-[#77a8ff]">
              Sign up
            </a>
          </div>
        </div>
      </header>

      {children}

      <footer id="contact" className="border-t border-[#d8e1ef] bg-white px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-360 flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="flex items-center gap-3 text-[#17223d]">
            <img src={dermacareLogo} alt="" className="h-10 w-10 object-contain" />
            <span className="font-bold tracking-[0.08em]">DERMACARE</span>
          </a>
          <p className="max-w-180 text-sm leading-6 text-[#65718a]">
            DermaCare provides AI-generated initial insights about dermatological conditions. It is not a diagnosis or a substitute for professional medical advice.
          </p>
        </div>
      </footer>
    </div>
  )
}

export function PageHero({ eyebrow, title, description }) {
  return (
    <section className="bg-[#0a1f43] px-6 pb-16 pt-40 text-white md:px-12 md:pb-20">
      <div className="mx-auto max-w-360">
        <p className="mb-6 flex items-center gap-4 text-sm font-bold uppercase tracking-[0.18em] text-[#bcd4ff]">
          <span className="h-px w-12 bg-[#77a8ff]" />
          {eyebrow}
        </p>
        <h1 className="max-w-180 text-5xl leading-[1.02] font-bold text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-140 text-lg leading-8 text-[#dce6f4]">
          {description}
        </p>
      </div>
    </section>
  )
}

export default SiteLayout
