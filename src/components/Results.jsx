import Button from './Button.jsx'

function Results({ score, total, onRestart, onExit }) {
  return (
    <section className="results">
      <h2>
        You scored {score} out of {total}
      </h2>
      <div className="results-actions">
        <Button onClick={onRestart}>Play again</Button>
        <Button onClick={onExit}>Choose difficulty</Button>
      </div>
    </section>
  )
}

export default Results
