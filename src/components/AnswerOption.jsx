function AnswerOption({ option, isSelected, onSelect }) {
  const className = isSelected ? 'answer-option answer-option--selected' : 'answer-option'

  return (
    <button className={className} onClick={onSelect} aria-pressed={isSelected}>
      {option.image && <img src={option.image.src} alt={option.image.alt} />}
      {option.text && <span>{option.text}</span>}
    </button>
  )
}

export default AnswerOption
