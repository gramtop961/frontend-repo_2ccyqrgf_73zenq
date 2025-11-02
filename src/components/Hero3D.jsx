import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/XuAg4PYWfzmy0iW1/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top gradient glow - does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent" />

      {/* Centered copy over the scene */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm sm:text-6xl">
            A playful, modern face that talks to you
          </h1>
          <p className="mt-5 text-lg text-gray-700 sm:text-xl">
            Red and blue vibes. White glowing eyes. Technology meets personality.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#work" className="rounded-full bg-gradient-to-r from-blue-600 to-rose-600 px-5 py-3 text-white shadow-lg transition hover:brightness-110">
              See my work
            </a>
            <a href="#contact" className="rounded-full bg-white/70 px-5 py-3 text-gray-900 shadow ring-1 ring-black/5 backdrop-blur hover:bg-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
