import { newArray, add, pi } from "./js module.js";
import square from "./js module.js";
// import * as myExport from "./js module.js"

const numbers = [25, 6, 8, 1, 99, 47];
const numbers2 = numbers;
console.log(numbers2);
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);

const maping = numbers.map((number, i) => number + 100);

console.log(maping);
console.log(numbers);

const filtring = numbers.filter((number) => number % 2 === 0);

console.log(filtring);

const sum = numbers.reduce((accumilater, current) => accumilater + current);

console.log(sum);

console.log(numbers.slice(0, 3));

console.log(numbers.concat(newArray));

console.log(square(5));
