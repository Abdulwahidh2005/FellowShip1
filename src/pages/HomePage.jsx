import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import WhatRemains from '../components/WhatRemains.jsx'
import Programme from '../components/Programme.jsx'
import Outcomes from '../components/Outcomes.jsx'
import MentorVoices from '../components/MentorVoices.jsx'
import StudentVoices from '../components/StudentVoices.jsx'
import ApplySteps from '../components/ApplySteps.jsx'
import Velorah from '../components/Velorah.jsx'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-40 pb-12 lg:px-10">
        <Hero />
      </main>
      <WhatRemains />
      <Programme />
      <Outcomes />
      <MentorVoices />
      <StudentVoices />
      <ApplySteps />
      <Velorah />
    </>
  )
}
