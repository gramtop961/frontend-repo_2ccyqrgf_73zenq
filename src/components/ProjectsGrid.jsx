export default function ProjectsGrid() {
  const items = [
    {
      title: 'Neural Sketches',
      desc: 'Generative art explorations in WebGL',
      tag: 'Creative Coding',
      color: 'from-rose-500 to-amber-500',
      emoji: '🎨',
    },
    {
      title: 'Voice React',
      desc: 'Micro-interactions driven by audio cues',
      tag: 'R&D',
      color: 'from-blue-600 to-cyan-500',
      emoji: '🎙️',
    },
    {
      title: 'Bot UI Kit',
      desc: 'Conversational interface components',
      tag: 'Design System',
      color: 'from-violet-600 to-fuchsia-500',
      emoji: '🤖',
    },
  ]

  return (
    <section id="work" className="relative z-10 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Selected Work</h2>
            <p className="mt-2 text-gray-600">A few projects that show how I build playful, modern experiences.</p>
          </div>
          <a href="#contact" className="hidden rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-black/90 sm:block">Get in touch</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-2xl border border-black/5 bg-gray-50 shadow-sm transition hover:shadow-lg">
              <div className={`h-40 w-full bg-gradient-to-br ${item.color} p-4`}> 
                <div className="flex h-full w-full items-end justify-between">
                  <span className="text-4xl">{item.emoji}</span>
                  <span className="rounded-full bg-white/30 px-2 py-1 text-xs font-medium text-white ring-1 ring-white/50">{item.tag}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                <button className="mt-3 rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-black/10 transition hover:bg-gray-100">View details</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
