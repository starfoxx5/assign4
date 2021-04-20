/* Calculator */

function calculator() {
  // have user enter numbers and math operation
  let num1 = Number(prompt("Select a number:"));
  let num2 = Number(prompt("Select another number:"));
  let mathop = prompt(
    "Select a math operation: ' + ' , ' - ' , ' * ' , or ' / '"
  );

  // math operation using switch case
  switch (mathop) {
    case "+":
      Number(prompt(`${num1} + ${num2} = `, num1 + num2));
      break;
    case "-":
      Number(prompt(`${num1} - ${num2} = `, num1 - num2));
      break;
    case "*":
      Number(prompt(`${num1} * ${num2} = `, num1 * num2));
      break;
    case "/":
      Number(prompt(`${num1} / ${num2} = `, num1 / num2));
      break;
  }
}

console.log(calculator());
