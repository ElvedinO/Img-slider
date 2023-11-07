function highAndLow(numbers) {
  let numArray = numbers.split(" ").map(Number);
  let max = Math.max(...numArray);
  let min = Math.min(...numArray);
  return `${max} ${min}`;
}

// Examples
console.log(highAndLow("1 2 3 4 5")); // returns "5 1"
console.log(highAndLow("1 2 -3 4 5")); // returns "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // returns "9 -5"

let str = ["1", "2", "3", "4", "5"];
let test = str.map(Number);
console.log(test);
let test1 = Math.max(1, 2, 3);
console.log(test1);
