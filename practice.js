let Prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
console.log(Prime)
console.log(Prime.length)
console.log(Prime.indexOf(47))
console.log(typeof Prime)

console.log(Prime.pop())
console.log(Prime)

console.log(Prime.push(90))
console.log(Prime)

console.log(Prime.shift())
console.log(Prime)

console.log(Prime.unshift(38))
console.log(Prime)

let B = ['what', 'why', 'how', 'where']
console.log(B)
B.forEach(el => hi + el + bye)

let Z = Prime.concat(B)
console.log(Z)

console.log(Z.includes('where'))

// map method of array
let aA = [20, 30, 40, 50, 60, 70, 80, 90]
let BB = aA.map(function(el, index, array) {
    return el / 5
})
console.log(BB)

//filter method of array
let M = [28, 98, 09, 78, 67, 55, 67, 83, 92, 22, 42]
let n = M.filter(function(el, index, array) {
    return el % 2 == 0
})
console.log(n)

//reduce method of array
let R = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let r = R.reduce(function(acc, el, index, array) {
    return acc = acc + el
})
console.log(r)

// forEach

let V = ['My', 'Name', 'is', 'Vasudha']
V.forEach(function(el, index, arr) { console.log("  Hi  " + el + "  Bye  ") })

//findIndex

let Indeax = V.findIndex(function(el, index, arr) {
    return el == 'My'
})