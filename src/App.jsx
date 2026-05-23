import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Outcomes from './components/Outcomes.jsx'
import StudentVoices from './components/StudentVoices.jsx'
import SocialProof from './components/SocialProof.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-40 pb-12 lg:px-10">
        <Hero />
      </main>
      <Outcomes />
      <StudentVoices />
      <SocialProof />
    </div>
  )
}
