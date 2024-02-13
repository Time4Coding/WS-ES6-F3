//Befor ES6

function add(a, b) {
    console.log(a + b)
}

add(5, 2)

const sayHello = function () {

    return "Hello there!"
}

console.log(sayHello())

//With ES6
const sayGoodBy = () => {
    return "GoodBy!"
}
console.log(sayGoodBy())

const hello = (name, a, b) => {
    console.log(`hello ${name}`)
    return a + b
}


console.log(hello("Baha", 8, 8))