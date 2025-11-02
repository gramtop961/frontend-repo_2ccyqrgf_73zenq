import { useEffect, useMemo, useRef, useState } from 'react'

const QUESTIONS = [
  "What brings you here today?",
  "Which project caught your eye?",
  "How can I help — freelance, full‑time, or collab?",
  "What's the best way to reach you?",
]

export default function QuestionPanel() {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [value, setValue] = useState('')
  const [done, setDone] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    const stored = localStorage.getItem('face-answers')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (parsed && parsed.__done) {
          setAnswers(parsed)
          setDone(true)
        }
      } catch {}
    }
  }, [])

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 300)
    return () => clearTimeout(t)
  }, [index, done])

  const prompt = useMemo(() => QUESTIONS[index] || QUESTIONS.at(-1), [index])

  const onSubmit = (e) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return

    const nextAnswers = { ...answers, [index]: trimmed }
    setAnswers(nextAnswers)
    setValue('')

    if (index < QUESTIONS.length - 1) {
      setIndex(index + 1)
    } else {
      const final = { ...nextAnswers, __done: true, timestamp: Date.now() }
      setDone(true)
      try {
        localStorage.setItem('face-answers', JSON.stringify(final))
      } catch {}
    }
  }

  const reset = () => {
    setIndex(0)
    setAnswers({})
    setValue('')
    setDone(false)
    try { localStorage.removeItem('face-answers') } catch {}
  }

  return (
    <div className="pointer-events-auto fixed bottom-6 right-6 z-20 w-[min(420px,calc(100vw-2rem))]">
      <div className="rounded-2xl border border-white/40 bg-white/70 p-4 shadow-2xl backdrop-blur">
        {!done ? (
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-rose-500" />
              <p className="text-xs font-medium uppercase tracking-wider text-gray-700">The Face asks</p>
            </div>
            <p className="text-base font-medium text-gray-900">{prompt}</p>

            <form onSubmit={onSubmit} className="mt-3 flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Type your answer..."
                className="flex-1 rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-sm text-gray-900 shadow-inner outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-gradient-to-r from-blue-600 to-rose-600 px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110"
              >
                Send
              </button>
            </form>

            <div className="mt-2 text-xs text-gray-600">Question {index + 1} of {QUESTIONS.length}</div>
          </div>
        ) : (
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <p className="text-xs font-medium uppercase tracking-wider text-gray-700">Thanks! Here’s your recap</p>
            </div>
            <ul className="space-y-2 text-sm text-gray-800">
              {QUESTIONS.map((q, i) => (
                <li key={i} className="rounded-lg bg-white/70 p-2">
                  <p className="font-medium">{q}</p>
                  <p className="text-gray-600">{answers[i]}</p>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex justify-between">
              <a href="#contact" className="text-sm font-medium text-blue-600 hover:underline">Let’s connect</a>
              <button onClick={reset} className="text-sm text-gray-700 underline">Start over</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
