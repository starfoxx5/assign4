/* Calculator */

function calculator() {
  
  let num1 = Number(prompt("Select a number:"));
  let num2 = Number(prompt("Select another number:"));
  let mathop = prompt("Select a math operation: ' + ' , ' - ' , ' * ' , or ' / '");
  switch(mathop) {
   case "+":
     Number(prompt(`${num1} + ${num2} = `, (num1+num2)));
     break;
   case "-":
     Number(prompt(`${num1} - ${num2} = `, (num1-num2)));
     break;
   case "*":
     Number(prompt(`${num1} * ${num2} = `, (num1*num2)));
     break;
   case "/":
     Number(prompt(`${num1} / ${num2} = `, (num1/num2)));
     break;
   default:
     text = "I have never heard of that one..";
   }
   /*document.getElementById("example").innerHTML = text; */
 }
 
  console.log(calculator())