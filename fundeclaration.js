//function declaration

function add(x, y) {
    return x + y
}
let h = add(20, 20)
console.log(h) //40

//function expression(Also called as first class function in javascript)

let add1 = function(x, y) {
    return x + y
}
let i = add1(20, 20)
console.log(i) //40

//arrow function

let add2 = (x, y) => {
    return x + y
}
let j = add2(20, 20)
console.log(j) //40


/*
Syntax advantage of Arrow function==>
If there is only  one statement in the blocks we can write it as
calculator=(x,y)=>x+y
 */

let addition = (x, y) => x + y
let b = addition(10, 20)
console.log(b)

//