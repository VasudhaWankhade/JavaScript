// function as parameter to another function

let add = function(x, y) {
    console.log(x + y)
}

function addition2(fn) {
    let r = fn(12, 13)
    return r
}

function addition1(sn) {
    let v = sn(90, 89)
    return v
}

let ya = addition2(add)
console.log(ya)

let aa = addition1(add)
console.log(aa)