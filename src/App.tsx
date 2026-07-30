import { useMemo, useRef, useState } from 'react'
import Fuse from 'fuse.js'
import { hondaParts } from './data/hondaParts'
import { SearchBar } from './components/SearchBar'
import { PartCard } from './components/PartCard'
import './App.css'

const fuse = new Fuse(hondaParts, {
  keys: [
    { name: 'description', weight: 0.6 },
    { name: 'category', weight: 0.2 },
    { name: 'models', weight: 0.15 },
    { name: 'partNumber', weight: 0.05 },
  ],
  threshold: 0.35,
  ignoreLocation: true,
})

function App() {
  const [query, setQuery] = useState('')
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef<number | undefined>(undefined)

  const results = useMemo(() => {
    const trimmed = query.trim()
    if (!trimmed) return hondaParts
    return fuse.search(trimmed).map((result) => result.item)
  }, [query])

  const handleCopy = async (partNumber: string) => {
    try {
      await navigator.clipboard.writeText(partNumber)
    } catch {
      // clipboard API unavailable; the part number is still visible on screen
    }
    setToast(`Copied ${partNumber}`)
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(null), 1800)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Honda Part Finder</h1>
        <p className="subtitle">Search by description to find the part number</p>
      </header>

      <SearchBar value={query} onChange={setQuery} />

      <main className="results">
        {results.length === 0 ? (
          <p className="empty-state">No parts match "{query}". Try a different description.</p>
        ) : (
          <ul className="part-list">
            {results.map((part) => (
              <PartCard key={part.partNumber} part={part} onCopy={handleCopy} />
            ))}
          </ul>
        )}
      </main>

      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}

      <footer className="app-footer">
        Sample part data for demo purposes — not verified against official Honda catalogs.
      </footer>
    </div>
  )
}

export default App
