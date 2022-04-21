let Array = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 8, 99, 9, 9, 99, 8, 6, 5, 4, 345, 6, 7, 77, 8, 89, 98965, 4, 224, 54, 64, 6]
console.log(Array.length)
let Prime = Array.map(function(el, index, array) {
    for (let i = 2; i < el; i++) {
        if (el % i != 0) {
            return el
        }

    }
})
console.log(Prime)