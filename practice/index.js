// let person = {
//   name: "Joseph",
//   age: 23,
//   country: "Nigeria"
// }

// function logData(){
//   console.log(person.name +  " is " + person.age + " years old and lives in " + person.country)
// }

// logData()

// function discount(){
//   let age = 12
//   if (age < 6 ) return 'free'
//   if (age >= 6 && age <= 17) return 'child discount'
//   if (age >= 18 && age <= 26) return 'student discount'
//   if (age >= 27 && age <= 66) return 'full price'
//   return 'senior citizen discount'

// }

// console.log(discount())


// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// console.log("the 5 largest countries in the world:")

// for( country of largeCountries){
//   console.log("- " + country)
// }



// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// console.log("the 5 largest countries in the world:")

// for(let i = 0; i < largeCountries.length; i++){
//   console.log("-" + largeCountries[i])
// }




// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monacco"]

// /* you need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// use push() & pop() and their counterparts unshift() & shift()
//  */

// largeCountries.shift()
// largeCountries.pop()
// largeCountries.unshift("China")
// largeCountries.push("Pakistan")

// console.log(largeCountries)




// let dayOfMonth = 3
// let weekDay = "Friday"

// // if it is friday the 13th, log out this spooky face
// // use the logical "AND OPERATOR" -> &&

// if (dayOfMonth === 13 && weekDay === "Friday"){
//   console.log("spooky face")
// }
// else console.log('out!!!!!')


let hands =  ['rock', 'paper', 'scissor']
 function random(){
  return hands[Math.floor(Math.random() * hands.length)]
 }

 console.log(random())