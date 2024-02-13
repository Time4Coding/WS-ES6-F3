// template literal
let name = "Baha"
//befor ES6
console.log("My name is " + name + " how are you!")

//With ES6
console.log(`My name is ${name} how are you! `)


//Ternary operator
// let marks = prompt('Enter your marks:')

//befor ES6
/* if (marks >= 40) {
   console.log("You pass the exam.")
} else {
   console.log("You fail the exam.")

} */

//With ES6

// let result = marks >= 40 ? "You pass the exam." : "You fail the exam."
// console.log(result)
marks = 40
let res = (marks < 50) ? "You fail the exam." : (marks === 50) ? "Try again" : "You pass the exam."
console.log(res)

let num = 6
num < 5 ? console.log(num + 10) : num === 5 ? console.log(num - 5) : console.log(num)