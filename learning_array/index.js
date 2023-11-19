// let featuredPosts = [
// 'Check out my Netflix clone', 
// 'here is the code for my project', 
// "i've just relaunched my portfolio"
// ]


// console.log(featuredPosts.length) 


// let person = [
//   fname = 'Louis Joseph', 
//   age = 23, 
//   likePizza = true
// ]

// person.unshift(height = '6ft', color = 'black')
// let john = [...person]
// console.log(john)

// john.reduce( (a, b) => {
//   console.log(b)
//   return a
// },0)

// let messages = [
//   "Hey, how is it going",
//   "I'm great, thank you! How about you?",
//   "All good. Been working on my portfolio lately"
// ]

// let newmessage = "Same here"

// messages.push(newmessage)
// console.log(messages)

// let cards = [7, 3, 9]
// for (let card=0; card < cards.length; card++){
  //   console.log(cards[card])
  // }

  let sentence = ["Hello", "my", "name", "is", "Peter"]
  let greetingEl = document.getElementById('greeting-el')

  // render the sentence in the greetingEl paragraph using a for loop and .textcontent

  for(let i=0; i< sentence.length; i++){
    let space = " ";
    greetingEl.textContent += sentence[i] + space
  }