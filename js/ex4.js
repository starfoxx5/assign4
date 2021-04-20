/* Word List */
//Ask user for list of words.
//When they type 'stop', then console out
//The list of words they typed in

const words = [];

let word = "";
while (word !== "stop") {
  word = prompt("Enter a word or type 'stop' to quit:");
  if (word !== "stop") {
    words.push(word);
  }
}

console.log("You have entered the following words:");
words.forEach((w) => {
  console.log(w);
});
