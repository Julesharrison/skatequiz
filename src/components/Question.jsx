import AnswerOption from './AnswerOption.jsx'

const TRUE_FALSE_OPTIONS = [
  { id: true, text: 'True' },
  { id: false, text: 'False' },
]

function Question({ question, selected, onSelect }) {
  const options = question.type === 'truefalse' ? TRUE_FALSE_OPTIONS : question.options

  return (
    <div className="question">
      <h2 className="question-text">{question.question}</h2>

      {question.image && (
        <img className="question-image" src={question.image.src} alt={question.image.alt} />
      )}

      <div className="question-options">
        {options.map((option) => (
          <AnswerOption
            key={String(option.id)}
            option={option}
            isSelected={selected === option.id}
            onSelect={() => onSelect(option.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Question
