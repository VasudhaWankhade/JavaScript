let Even = []
let Odd = []

for (let j = 1; j <= 20; j++) {
    if (j % 2 == 0) {
        let A = Even.push(j)

    } else {
        let B = Odd.push(j)
    }
}
console.log(Even)
console.log(Odd)