// find number of vowels in string

// let A = "AEIOUisjdjs"
// let r = A.toLowerCase()
// console.log(r)
// console.log(A[5])
// console.log(A[1])
// console.log(A[6])
// let count = 0
// let a = 0
// let e = 0
// let i = 0
// let o = 0
// let u = 0
// for (let z = 0; z <= r.length - 1; z++) {

//     if (r[z] == 'a') {
//         count = count + 1
//         a = a + 1
//     }
//     if (r[z] == 'e') {
//         count = count + 1
//         e = e + 1
//     }
//     if (r[z] == 'i') {
//         count = count + 1
//         i = i + 1
//     }
//     if (r[z] == 'o') {
//         count = count + 1
//         o = o + 1
//     }
//     if (r[z] == 'u') {
//         count = count + 1
//         u = u + 1
//     }
// }

// console.log(count)
// console.log("Number of a= ", a)
// console.log("Number of e= ", e)
// console.log("Number of i= ", i)
// console.log("Number of o= ", o)
// console.log("Number of u= ", u)


// for (let item in A) {
//     if (item == 'a' 'e' && 'i' && 'o' && 'u')
//         count = count + 1
// }
// console.log(count)

// reverse the string

// for (let i = A.length - 1; i > 0; i--) {
//     console.log(A[i])
// }

//Palindrome number

let A = [676, 234]
A.forEach(function(el, index, array) {
    let b = el % 10
    console.log(b)
    let c = el % 100
    console.log(c)
    let d = el % 1000
    console.log(d)
    let e = d - c
    console.log(e)
    let f = c - b
    console.log(f)
    let add = e + f + b
    console.log(add)
        // if (el == add) {
        //     console.log(el, "-The number is palindrome")
        // } else {
        //     console.log(el, "-The number is not palindrome")
        // }
})