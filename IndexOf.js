let Birds = ['Eagle', 'Sparrow', 'Peacock', 'Crow']
console.log(Birds)
console.log(Birds.length)

let I = Birds.indexOf('Peacock') //Gives the index number of this element
console.log(I)
let M = Birds.indexOf('Kingfisher') //-1
console.log(M)
console.log(typeof M)

let Z = !Birds.includes('Kingfisher') // element is present or not specify in terms of true or false
console.log(Z)
console.log(typeof Z)

let U = Birds.toUpperCase()
console.log(U)