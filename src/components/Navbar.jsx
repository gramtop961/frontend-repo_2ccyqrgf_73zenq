import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/60 p-3 shadow-lg ring-1 ring-black/5 backdrop-blur-md">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-rose-500" />
            <span className="font-semibold tracking-tight">My Digital Face</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-black/5"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              {open ? (
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 0 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 6.75A.75.75 0 0 1 4.5 6h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm.75 4.5a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl bg-white/70 p-4 shadow-lg ring-1 ring-black/5 backdrop-blur-md md:hidden">
            <nav className="flex flex-col gap-3 text-sm font-medium text-gray-700">
              <a href="#about" onClick={() => setOpen(false)} className="hover:text-gray-900">About</a>
              <a href="#work" onClick={() => setOpen(false)} className="hover:text-gray-900">Work</a>
              <a href="#contact" onClick={() => setOpen(false)} className="hover:text-gray-900">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
