/* Guess the Number */

let guessCount = 1
function guessNumber() {

  // generating a random integer from 1 to 100
  const random = Math.floor(Math.random() * 100) + 1;

  // take input from the user
  let number = parseInt(prompt('Guess a number from 1 to 100: '));

  // take the input until the guess is correct
  while(number !== random) {
      number = parseInt(prompt('Guess a number from 1 to 100: '));
      guessCount += 1; {
      if (number < random) {
        console.log("You're number is too low. Guess again.");}
      else if (number > random) {
        console.log("You're number is too high. Guess again.");}
      }
  

  // check if the guess is correct
  if(number == random) {
      console.log(`Correct! It took you ${guessCount} attempt(s) to guess the correct number`);
  }

  } 
}
// call the function
guessNumber(); 