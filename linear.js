let A = [12, 3444, 32, 23, 2345, 55, 56, 778, 899, 87, 54, 24, 5556, 3444, 33]
let B = [12, 34, 56, 78, 9900, 442, 23, 445, 66666666667, 34342, 4555, 5456, 34, 5, 544, 6575, 75, 77, 7, 67756, 88]

// function linearsearch(target, array) {
//     for (let i = 0; i <= array.length; i++) {
//         if (array[i] == target) {
//             console.log(array.indexOf(array[i]))
//         }
//     }
// }

// linearsearch(4555, B)

function linear(aR, e) {
    // if (aR.length = 0) {
    //     console.log(-1)
    // }
    aR.forEach(function(el) {
        if (el == e) {
            console.log(aR.indexOf(el))
        } else {
            return -1
        }
    })
}
linear(B, 9900)