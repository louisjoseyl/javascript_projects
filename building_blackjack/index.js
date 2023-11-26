
document.getElementById('startGame').onclick = startGame
document.getElementById('newCard').onclick = newCard


let player = {
  name : 'John',
  chips : 145
}
let cards = []//array ordered list of cards
let sum = 0

let hasBlackJack = false
let isAlive = false
let message = ''


// 1. store the message-el pararaph in a variable called messageEl
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips



// create a function, getRandomCard(), that always return the number 5

function getRandomCard() {
  const number =  Math.floor(Math.random() * 13) + 1 

  if (number === 1) return 11
  if (number > 10) return 10
  return number 
}


function startGame (){
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  // create a for loop that renders out all the cards instead of just two
  for(let i = 0; i < cards.length; i++){
    let space = " "
    cardsEl.textContent += cards[i] + space
  }


  sumEl.textContent = 'Sum: ' +sum
  
  if (sum <= 20) {
    message = 'do you want to draw a new card?'
  }
  else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  }
  else{
   message = "you're out of the game!"
   isAlive = false
  }

  //2. return the messageEL using message.El.textContent
  messageEl.textContent = message

}

function newCard(){
  // only allow a player to get a new card if she is alive 
  // and does not have blackjack
  if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}



/// what we learned in this part is getting an array skills
// we also worked with object
// we also worked with boolean
// the if else statement ( these are keys in any program)
// comparison operators 
// logical operators
// for loops
// math object
// functions and how to use the return statement
