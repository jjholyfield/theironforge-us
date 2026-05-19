import { useState } from 'react'

interface FAQProps {
  items: Array<{ q: string; a: string }>
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className="border border-border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left"
            >
              <span className="font-medium text-text-primary pr-4">{item.q}</span>
              <svg
                className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-6 pb-4">
                <p className="text-text-secondary leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
