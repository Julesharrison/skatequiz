import { useState } from 'react'
import Landing from './components/Landing.jsx'
import Quiz from './components/Quiz.jsx'
import { questions } from './data/questions.js'

const questionCounts = {}
for (const q of questions) {
  questionCounts[q.difficulty] = (questionCounts[q.difficulty] ?? 0) + 1
}

function App() {
  const [difficulty, setDifficulty] = useState(null)

  return (
    <main className="app">
      <h1>Blade IQ</h1>
      {difficulty === null ? (
        <Landing questionCounts={questionCounts} onChoose={setDifficulty} />
      ) : (
        <Quiz
          questions={questions.filter((q) => q.difficulty === difficulty)}
          onExit={() => setDifficulty(null)}
        />
      )}
    </main>
  )
}

export default App
