import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { questions } from './data/questions.js'
import { validateQuestions } from './data/validateQuestions.js'

if (import.meta.env.DEV) {
  validateQuestions(questions)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
