import { useState } from 'react'
import { PageHero } from '../components/SiteLayout.jsx'

function AuthPage({ mode }) {
  const isRegistration = mode === 'register'
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (isRegistration) {
      const formData = new FormData(event.currentTarget)
      if (formData.get('password') !== formData.get('confirmPassword')) {
        setMessage('The passwords do not match. Please check and try again.')
        return
      }
    }

    setMessage('Authentication is not connected yet. This form does not send or save your information.')
  }

  return (
    <main>
      <PageHero
        eyebrow={isRegistration ? 'Create an account' : 'Welcome back'}
        title={isRegistration ? 'Join DermaCare.' : 'Log in to DermaCare.'}
        description={
          isRegistration
            ? 'Create an account to get started with AI-powered dermatology insights.'
            : 'Sign in to continue to your DermaCare account.'
        }
      />

      <section className="bg-[#edf3fb] px-6 py-16 md:px-12">
        <div className="mx-auto max-w-160">
          <form
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-3xl bg-white p-7 shadow-[0_16px_45px_rgba(16,35,63,0.10)] sm:p-10"
          >
            {isRegistration && (
              <label className="grid gap-2 text-sm font-bold text-[#17223d]">
                Full name
                <input
                  autoComplete="name"
                  className="rounded-xl border border-[#d8e1ef] px-4 py-3 font-normal outline-none transition focus:border-[#2168d7] focus:ring-2 focus:ring-[#2168d7]/15"
                  name="name"
                  required
                  type="text"
                />
              </label>
            )}

            <label className="grid gap-2 text-sm font-bold text-[#17223d]">
              Email address
              <input
                autoComplete="email"
                className="rounded-xl border border-[#d8e1ef] px-4 py-3 font-normal outline-none transition focus:border-[#2168d7] focus:ring-2 focus:ring-[#2168d7]/15"
                name="email"
                required
                type="email"
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-[#17223d]">
              Password
              <input
                autoComplete={isRegistration ? 'new-password' : 'current-password'}
                className="rounded-xl border border-[#d8e1ef] px-4 py-3 font-normal outline-none transition focus:border-[#2168d7] focus:ring-2 focus:ring-[#2168d7]/15"
                minLength={8}
                name="password"
                required
                type="password"
              />
            </label>

            {isRegistration && (
              <label className="grid gap-2 text-sm font-bold text-[#17223d]">
                Confirm password
                <input
                  autoComplete="new-password"
                  className="rounded-xl border border-[#d8e1ef] px-4 py-3 font-normal outline-none transition focus:border-[#2168d7] focus:ring-2 focus:ring-[#2168d7]/15"
                  minLength={8}
                  name="confirmPassword"
                  required
                  type="password"
                />
              </label>
            )}

            <button
              className="mt-2 rounded-full bg-[#2168d7] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#1957bb]"
              type="submit"
            >
              {isRegistration ? 'Create account' : 'Login'}
            </button>

            {message && (
              <p aria-live="polite" className="rounded-xl bg-[#edf3fb] p-4 text-sm leading-6 text-[#17223d]" role="status">
                {message}
              </p>
            )}

            <p className="text-center text-sm text-[#65718a]">
              {isRegistration ? 'Already have an account?' : 'New to DermaCare?'}{' '}
              <a
                className="font-bold text-[#2168d7] hover:underline"
                href={isRegistration ? '/login' : '/register'}
              >
                {isRegistration ? 'Login' : 'Create an account'}
              </a>
            </p>
          </form>

          <p className="mt-5 text-center text-xs leading-5 text-[#65718a]">
            Authentication is not connected yet. Do not enter real credentials.
          </p>
        </div>
      </section>
    </main>
  )
}

export function LoginPage() {
  return <AuthPage mode="login" />
}

export function RegisterPage() {
  return <AuthPage mode="register" />
}
