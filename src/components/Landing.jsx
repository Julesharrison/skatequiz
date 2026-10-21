import { difficulties } from '../data/difficulties.js'
import Button from './Button.jsx'

function Landing({ questionCounts, onChoose }) {
  return (
    <section className="landing">
      <p>Choose your level</p>
      <div className="landing-options">
        {difficulties.filter((difficulty) => !difficulty.hidden).map((difficulty) => {
          const count = questionCounts[difficulty.id] ?? 0
          return (
            <Button key={difficulty.id} onClick={() => onChoose(difficulty.id)} disabled={count === 0}>
              {difficulty.label}
              {count === 0 && <span className="landing-soon"> (Coming soon)</span>}
            </Button>
          )
        })}
      </div>
    </section>
  )
}

export default Landing
