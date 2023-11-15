
document.getElementById('startGame').onclick = startGame

let firstCard = 3
let secondCard = 8
let sum = firstCard + secondCard

let hasBlacJack = false
let isAlive = true
let message = ''

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')

function startGame() {
  sumEl.textContent = 'Sum: ' +sum
  
  if (sum <= 20) {
    message = 'do you want to draw a new card?'
  }
  else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlacJack = true
  }
  else{
   message = "you're out of the game!"
   isAlive = false
  }
  messageEl.textContent = message


}



