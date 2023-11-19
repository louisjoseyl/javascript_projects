
document.getElementById('startGame').onclick = startGame
document.getElementById('newCard').onclick = newCard

let firstCard = 3
let secondCard = 8
let sum = firstCard + secondCard

let hasBlacJack = false
let isAlive = true
let message = ''


// 1. store the message-el pararaph in a variable called messageEl
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

function startGame (){
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard
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

  //2. return the messageEL using message.El.textContent
  messageEl.textContent = message


}

function newCard(){
  console.log("Drawing a new card from deck.")
  let card = 5
  sum += card
  renderGame()
}





