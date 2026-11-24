import AboutPage from './pages/AboutPage.jsx'
import { LoginPage, RegisterPage } from './pages/AuthPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import HowPage from './pages/HowPage.jsx'
import HomePage from './pages/HomePage.jsx'
import SafetyPage from './pages/SafetyPage.jsx'
import SiteLayout from './components/SiteLayout.jsx'

const pages = {
  '/': HomePage,
  '/about': AboutPage,
  '/how': HowPage,
  '/safety': SafetyPage,
  '/faq': FaqPage,
  '/login': LoginPage,
  '/register': RegisterPage,
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const Page = pages[path] || HomePage

  return (
    <SiteLayout>
      <Page />
    </SiteLayout>
  )
}

export default App
