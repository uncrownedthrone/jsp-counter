const qs = e => document.querySelector(e)

let score = 0

const totalScoreText = qs('.total-score')
totalScoreText.textContent = score

const addOne = () => {
  score += 1
  totalScoreText.textContent = score
  if (score === 21) {
    qs('.total-score').textContent = 'Winner!'
    qs('button.add').disabled = true
    qs('button.subtract').disabled = true
  }
}

const subtractOne = () => {
  score -= 1
  totalScoreText.textContent = score
  if (score === 21) {
    qs('.total-score').textContent = 'Winner!'
    qs('button.add').disabled = true
    qs('button.subtract').disabled = true
  }
}

const resetGame = () => {
  const resetMode = 0
  score = 0
  qs('button.add').disabled = false
  qs('button.subtract').disabled = false
  qs('.total-score').textContent = resetMode
}

qs('button.add').addEventListener('click', addOne)
qs('button.subtract').addEventListener('click', subtractOne)
qs('button.reset').addEventListener('click', resetGame)
