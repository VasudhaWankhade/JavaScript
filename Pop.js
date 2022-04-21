let Animals = ['Tiger', 'Lion', 'Bear', 'Deer', 'Goat', 'Cow', 'Sheep']
console.log(Animals)
console.log(Animals.length) //length of array
console.log(typeof Animals) //type of array
let A = Animals.pop() //Remove last element from array
console.log(Animals)
console.log(A) //Gives element which is removed from array

let B = Animals.shift() //Remove first element of array
console.log(Animals)
console.log(B) //Gives element which is removed

let C = Animals.unshift('Elephant')
console.log(Animals)
console.log(C)