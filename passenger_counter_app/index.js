// document.getElementById('count-el').innerText = 5;

// let myAge = 23;
// const humanDogRatio = 7;
// myDogAge= myAge * humanDogRatio;

// console.log('my dog age is: ', myDogAge);












/* pseudocode of the entire process

we need to store the count
initialize the count as 0
listen for click from the button and increment the count
change the count-el in the html to reflect the new count


*/
document.getElementById('increment-btn').onclick=increment;
document.getElementById('save-btn').onclick=save;
document.getElementById('clear-btn').onclick=clear;


const countEl = document.getElementById("count-el")
const saveEl = document.getElementById('save-el')

let count = 0

function increment() {
  count+=1;
  countEl.textContent = count;
}


let newSave = '';
function save(){
  newSave =" " + count + " - "
  saveEl.textContent += newSave 
  
  count = 0;
  countEl.textContent= count;
  
}


function clear() {
  let defualtClear = 'Previous Entries: '
 saveEl.textContent = defualtClear

}
