import { useState } from 'react'
import Button from './Button.jsx'
import Question from './Question.jsx'
import Results from './Results.jsx'

function Quiz({ questions, onExit }) {
  const [index, setIndex] = useState(0)
  // Chosen option id per question id, e.g. { q001: 'b', q004: true }
  const [answers, setAnswers] = useState({})

  if (index >= questions.length) {
    const score = questions.filter((q) => answers[q.id] === q.answer).length
    return (
      <Results
        score={score}
        total={questions.length}
        onRestart={() => {
          setIndex(0)
          setAnswers({})
        }}
        onExit={onExit}
      />
    )
  }

  const question = questions[index]
  const selected = answers[question.id] ?? null
  const isLast = index === questions.length - 1

  function handleSelect(optionId) {
    setAnswers({ ...answers, [question.id]: optionId })
  }

  // Previous question, or back to the level picker from the first one
  function handleBack() {
    if (index === 0) onExit()
    else setIndex(index - 1)
  }

  return (
    <section className="quiz">
      <button className="back-link" onClick={handleBack}>
        Back
      </button>

      <p className="quiz-progress">
        Question {index + 1} of {questions.length}
      </p>

      <Question question={question} selected={selected} onSelect={handleSelect} />

      <Button className="quiz-next" onClick={() => setIndex(index + 1)} disabled={selected === null}>
        {isLast ? 'See results' : 'Next question'}
      </Button>
    </section>
  )
}

export default Quiz
