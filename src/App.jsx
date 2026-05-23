import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import WhatRemains from './components/WhatRemains.jsx'
import Outcomes from './components/Outcomes.jsx'
import Semester from './components/Semester.jsx'
import StudentVoices from './components/StudentVoices.jsx'
import ApplySteps from './components/ApplySteps.jsx'
import SocialProof from './components/SocialProof.jsx'
import Programme from './components/Programme.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-40 pb-12 lg:px-10">
        <Hero />
      </main>
      <WhatRemains />
      <Outcomes />
      <Semester />
      <StudentVoices />
      <ApplySteps />
      <SocialProof />
      <Programme />
    </div>
  )
}
