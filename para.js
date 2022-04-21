// Number as a parameter to a function

function mul(x, y) {
    console.log(x * y)
}
mul(9, 45)

// String as a parameter to a function

function Greet(greet, Name) {
    console.log(greet + ' ' + Name + '!')
}
Greet("Good Evening", "Vasudha")

// Array as a parameter to a function

let Arrr = ["Vasudha", "Poorava", "Jyoti"]

function Arr(Array) {
    Array.forEach(function(el) {
        console.log("Hello" + " " + el)
    })
}
Arr(Arrr)

// Boolean as a parameter to a function

function El(pass) {
    if (pass) {
        console.log("You are eligible for exam")
    } else {
        console.log("You are not eligible for exam")
    }
}
El(true)

// Function as a parameter to another function

function add(x, y) {
    console.log(x + y)
}

function addition(fn) {
    let v = fn(20, 30)
    return v
}

add(addition)