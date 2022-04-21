let A = ["Vasudha", "Dilip", "Wankhade"]
let [a, b, c] = A
console.log(a)
console.log(b)
console.log(c)

let B = {
    fullName: "Vasudha",
    age: 22,
    rollNo: 25
}
let { fullName: fn, age: ag, rollNo: rn } = B
console.log(fn)
console.log(ag)
console.log(rn)


let C = ["Vasudha", ["Rose", "Marigold"],
    {
        cityName: "Nagpur",
        distance: 45
    }
]

let [bb, [d, e], { cityName: ct, distance: ds }] = C
console.log(bb)
console.log(d)
console.log(e)
console.log(ct)
console.log(ds)

let i = {
    flower: "Lily",
    animals: ["Tiger", "Lion"],
    family: {
        mother: "Mamata",
        father: "Dilip"
    },
    cities: ["Amravati", "Nagpur"]
}

let { flower: fl, animals: [m, n], family: { mother: mt, father: ft }, cities: [am, ng] } = i
console.log(fl)
console.log(m)
console.log(n)
console.log(mt)
console.log(ft)
console.log(am)
console.log(ng)

function addition(aa, bbb, cc, ddd, ee, rrr) {
    console.log(aa + bbb + cc + ddd + ee + rrr)
}
addition(12, 34, 56, 78, 90, 12) //What if there are many numbers????

// Solution
//...s =>> is array which stores all the parameter passed to function add
function add(...s) {
    let sum = s.reduce(function(acc, el, index, array) {
        return acc + el
    }, 0)
    return sum
}
let aDD = add(12, 12, 1334, 4445, 656, 77, 6, 78, 7, 88887, 865, 6, 757765, 65654, 4, 344)
console.log(aDD)

// =============================================================================================================================================

// Compare value of a with rest of the given values
function sUm(a, ...t) {
    let com = t.filter(function(el) {
        return el >= a
    })
    return com
}
let x = sUm(5, 23, 233, 34, 10, 1, 2, 3, 4, 5)
console.log(x)


// ================================================================================================================
v = [12, 34, 56, 78, 98, 556]

function addition1(...arr) {
    [a, b, c] = arr
    console.log(a + b + c)
}
addition1(...v)

// ======================================================================================

function addition2(aa, bb, cc) {
    console.log(aa + bb + cc)
}
addition2(...v)

//========================================================================================
console.log("=======================================================================")
   

// Assignment No.1

ages = [12, 13, 14, 15, 34, 56, 67, 45, 24, 36]

function printArr(arr, fn) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]))
    }
    return newArray
}

let above18 = function(el) {
    return el > 18
}

let addTwo = function(el) {
    return el + 2
}

let mulBy3 = function(el) {
    return el * 3
}
let dg = printArr(ages, above18)
let pg = printArr(ages, addTwo)
let cg = printArr(ages, mulBy3)
console.log(dg)
console.log(pg)
console.log(cg)