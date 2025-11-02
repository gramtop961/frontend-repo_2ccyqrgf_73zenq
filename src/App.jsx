import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import QuestionPanel from './components/QuestionPanel'
import ProjectsGrid from './components/ProjectsGrid'

function Footer() {
  return (
    <footer id="contact" className="relative z-10 bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-2xl font-bold text-gray-900">Let’s build something playful and smart</h3>
        <p className="mt-2 max-w-2xl text-gray-600">I design and develop expressive, interactive experiences blending 3D, motion, and thoughtful UI.</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="mailto:hello@example.com" className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-black/90">Email me</a>
          <a href="#" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-900 ring-1 ring-black/10 hover:bg-gray-100">Download resume</a>
        </div>
        <p className="mt-10 text-sm text-gray-500">© {new Date().getFullYear()} My Digital Face. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Navigation on top */}
      <Navbar />

      {/* Hero with 3D Face */}
      <div className="relative">
        <Hero3D />

        {/* Subtle radial glow overlay that does not block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6),transparent_60%)]" />

        {/* Conversational panel that asks questions */}
        <QuestionPanel />
      </div>

      {/* Work section */}
      <ProjectsGrid />

      {/* Footer */}
      <Footer />
    </div>
  )
}
