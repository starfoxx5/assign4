/* Vowels & Palindrome */

const word = prompt("Enter a word:");

let vowelCount = 0;
let backwardWord = "";

[...word].forEach(letter => {
  const lowerLetter = letter.toLowerCase();
  if (
    lowerLetter === "a" ||
    lowerLetter === "e" ||
    lowerLetter === "i" ||
    lowerLetter === "o" ||
    lowerLetter === "u" ||
    lowerLetter === "y"
  ) {
    vowelCount++;
  }
  // Adding letter at the beginning of the backward string
  backwardWord = letter + backwardWord;
});

// Output
console.log(`The word (${word}) has ${vowelCount} vowel(s)`);
console.log(`Your word written backwards is ${backwardWord}`);
if (word.toLowerCase() === backwardWord.toLowerCase()) {
  console.log("It's a palindrome");}
else { 
  console.log("It's not a palindrome")
}