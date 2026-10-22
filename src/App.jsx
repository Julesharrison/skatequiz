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
      <div className="powered-by">
        <span>Powered by</span>
        <a href="https://www.downfourlife.com/" target="_blank" rel="noopener noreferrer">
          <img src="/D4L-OG-Logo.svg" alt="Down Four Life" width="75" height="37" />
        </a>
      </div>

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
