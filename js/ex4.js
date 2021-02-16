/* Word List */

const words = [];

let word = "";
while (word !== "stop") {
  word = prompt("Enter a word or type 'stop' to quit:");
  if (word !== "stop") {
    words.push(word);
    
  }
}

if (words[0] === words.toLowerCase(stop)){
  console.log("You didn't enter any words");
}
else{
console.log("You have entered the following words:");
words.forEach(w => {
  console.log(w);
})};  