// Dev-only sanity check for hand-written question data.
// Logs a console warning for each problem found.

import { difficulties } from './difficulties.js'

const difficultyIds = difficulties.map((d) => d.id)

function checkImage(image, where, problems) {
  if (!image) return
  if (!image.src) problems.push(`${where}: image is missing src`)
  if (!image.alt) problems.push(`${where}: image is missing alt text`)
}

export function validateQuestions(questions) {
  const problems = []
  const seenIds = new Set()

  questions.forEach((q, index) => {
    const where = q.id ?? `question at index ${index}`

    if (!q.id) problems.push(`${where}: missing id`)
    else if (seenIds.has(q.id)) problems.push(`${where}: duplicate id`)
    seenIds.add(q.id)

    if (!difficultyIds.includes(q.difficulty)) {
      problems.push(`${where}: difficulty must be one of ${difficultyIds.join(', ')}`)
    }

    if (!q.question) problems.push(`${where}: missing question text`)
    checkImage(q.image, where, problems)

    if (q.type === 'truefalse') {
      if (typeof q.answer !== 'boolean') {
        problems.push(`${where}: true/false answer must be true or false`)
      }
    } else if (q.type === 'multiple') {
      const options = q.options ?? []
      if (options.length < 2) problems.push(`${where}: needs at least 2 options`)

      const optionIds = new Set()
      options.forEach((option, i) => {
        const optionWhere = `${where} option ${option.id ?? i}`
        if (!option.id) problems.push(`${optionWhere}: missing id`)
        else if (optionIds.has(option.id)) problems.push(`${optionWhere}: duplicate id`)
        optionIds.add(option.id)

        if (!option.text && !option.image) {
          problems.push(`${optionWhere}: needs text or an image`)
        }
        checkImage(option.image, optionWhere, problems)
      })

      if (!optionIds.has(q.answer)) {
        problems.push(`${where}: answer "${q.answer}" doesn't match any option id`)
      }
    } else {
      problems.push(`${where}: unknown type "${q.type}"`)
    }
  })

  problems.forEach((problem) => console.warn(`[questions] ${problem}`))
  return problems
}
