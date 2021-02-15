/* Calculator */

function calculator() {
  var text;
  let num1 = prompt("Select a number:")
  let num2 = prompt("Select another number")
  let mathop = prompt("Select a math operation: '+', '-', '*', or '/'");
    if (mathop === '+') {
      return(`${num1} + ${num2} =` (num1 + num2));
    }
    if (mathop === '-') {
      return(`${num1} - ${num2} =` (num1 - num2));
    }
    if (mathop === '*') {
      return(`${num1} * ${num2} =` (num1 * num2));
    }
    if (mathop === '/') {
      return(`${num1} / ${num2} =` (num1 / num2));
    }
   document.getElementById("example").innerHTML = text;
  }
 
  console.log(calculator())