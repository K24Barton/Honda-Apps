interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-bar">
      <svg className="search-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14"
        />
      </svg>
      <input
        type="search"
        inputMode="search"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        placeholder="Describe the part, e.g. front brake pads"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search Honda parts by description"
      />
      {value.length > 0 && (
        <button
          type="button"
          className="clear-button"
          aria-label="Clear search"
          onClick={() => onChange('')}
        >
          ×
        </button>
      )}
    </div>
  )
}
