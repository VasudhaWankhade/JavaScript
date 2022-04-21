//                                           Program 1

let Birthyear = [2000, 2002, 1999, 1982, 2015]
let Ages = []

//for (let i = 0; i < Birthyear.length; i++) {
//  let age = 2021 - Birthyear[i]
//Ages.push(age)
//}  
//console.log(Ages)

//using map function

let Z = Birthyear.map(function(el, index, array) {
    return 2021 - el

})
console.log(Z)

//                                           Program 2

let Numbers = [1, 4, 34, 25, 67, 13, 12, 11, 15, 17, 20, 69]
let Above20 = []

//for (i = 0; i < Numbers.length; i++) {
//  if (Numbers[i] >= 20) {
//    Above20.push(Numbers[i])
//}
//}
//console.log(Above20)

//using filter method

let Y = Numbers.filter(function(el, index, array) {
    return el > 20
})
console.log(Y)


//                                           Program 3

let Add = [22, 33, 44, 56, 78, 90]
let Sum = 0

//for (let i = 0; i < Add.length; i++) {
//  Sum = Sum + Add[i]
//}
//console.log(Sum)

//using reduce method

let U = Add.reduce(function(acc, el, index, array) {
    return acc = acc + el
})
console.log(U)