
let num1 = 8
let num2 = 2

document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;

document.getElementById('add').onclick = add;
document.getElementById('subtract').onclick = subtract;
document.getElementById('divide').onclick = divide;
document.getElementById('multiply').onclick = multiply;


const total = document.getElementById('sum-el')


function add (){
  total.textContent = 'Sum: '
  total.textContent += num1 + num2
  
}

function subtract (){
  total.textContent = 'Sum: '
  total.textContent += num1 - num2
}
function divide (){
  total.textContent = 'Sum: '
  total.textContent += num1 / num2
}
function multiply (){
  total.textContent = 'Sum: '
  total.textContent += num1 * num2
}


 