import type { HondaPart } from '../data/hondaParts'

interface PartCardProps {
  part: HondaPart
  onCopy: (partNumber: string) => void
}

export function PartCard({ part, onCopy }: PartCardProps) {
  return (
    <li className="part-card">
      <div className="part-card-main">
        <p className="part-description">{part.description}</p>
        <span className="part-category">{part.category}</span>
      </div>

      <button
        type="button"
        className="part-number"
        onClick={() => onCopy(part.partNumber)}
        aria-label={`Copy part number ${part.partNumber}`}
      >
        <span>{part.partNumber}</span>
        <svg className="copy-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m0 16H8V7h11z"
          />
        </svg>
      </button>

      {part.models.length > 0 && (
        <p className="part-models">Fits: {part.models.join(', ')}</p>
      )}
    </li>
  )
}
