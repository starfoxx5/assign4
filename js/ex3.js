/* Sum/Min/Max of values */

const values = [3, 11, 7, 2, 9, 10];

let sum = 0;

// Solution using a forEach method
values.forEach(value => {
  sum += value;
});

console.log(sum);

// Solution using for loop
let max = values[0];

// First index is 1 since max starts with value at index 0
for (let i = 1; i < values.length; i++) {
  if (values[i] > max) {
    max = values[i];
  }
}

console.log(max);

//Solution using for loop
let min = values[0];

// First index is 1 since min starts with value at index 0
for (let i = 1; i > values.length; i++) {
  if (values[i] < min) {
    min = values[i];
  }
}
console.log(min);