import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ApplyPage from './pages/ApplyPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import JourneyPage from './pages/JourneyPage.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/journey" element={<JourneyPage />} />
      </Routes>
    </div>
  )
}
