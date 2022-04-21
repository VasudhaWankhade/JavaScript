let Array = [{
        Name: 'Vasudha Wankhade',
        Class: '12th',
        Grade: 'A+',
        Address: 'Amravati',
        Subjects: ['Maths', 'Physics'],
        Age: 18,
        Score: 450
    },
    {
        Name: 'Sara Patil',
        Class: '10th',
        Grade: 'B',
        Address: 'Bhandara',
        Subjects: ['Maths', 'Physics', 'Chemistry'],
        Age: 16,
        Score: 423
    },
    {
        Name: 'Pratiksha Deshmukh',
        Class: '10th',
        Grade: 'A+',
        Address: 'Gadchiroli',
        Subjects: ['Maths', 'Physics', 'Chemistry', 'History'],
        Age: 16,
        Score: 476
    },
    {
        Name: 'Sarika Joshi',
        Class: '11th',
        Grade: 'B+',
        Address: 'Wardha',
        Subjects: ['Physics', 'Chemistry', 'History'],
        Age: 17,
        Score: 489
    }
]

//To print Name of those who have history as their subject
// let F = Array.filter(function(el, index, array) {
//     return el.Subjects.includes('History')
// })
// console.log(F)

// for (let i = 0; i < F.length; i++) {
//     console.log(F[i]['Name'])
// }

// Remove age from all objects

// for (i = 0; i < Array.length; i++) {
//     delete Array[i]['Age']
// }
// console.log(Array)

// let S = Array.forEach(function(el, index, array) {
//     delete el['Age']
// })
// console.log(Array)

// Add new property to each object

// for (let i = 0; i < Array.length; i++) {
//     Array[i].Hobby = 'Reading Books';
//     'Playing Cricket'
// }
// console.log(Array)

// let R = Array.forEach(function(el, index, array) {
//     el.Hobby = 'Cricket', 'Books', 'Carrom', 'Hockey'
// })
// console.log(Array)

//Print name of those who are in 10th std

// let X = Array.filter(function(el, index, array) {
//     return el.Class == '10th'
// })
// console.log(X)

//Print the name of those who got A+ grade

// let F = Array.filter(function(el, index, array) { return el.Grade == 'A+' })
// console.log(F)

// for (let i = 0; i < F.length; i++) {
//     console.log(F[i]['Name'])

// }

// Print the score and name of those students having score > 450

// let E = Array.filter(function(el, index, array) {
//     return el.Score >= 450
// })
// console.log(E)
// for (let i = 0; i < E.length; i++) {
//     console.log(E[i]['Name'], '-', E[i]['Class'], '-', E[i]['Score'])

// }

//Average of addition of scores of all students

// let S = Array.reduce(function(acc, el) {
//     return acc = acc + el.Score
// }, 0)
// console.log(S / Array.length)

// Print Subjects in front of their name

// for (let i = 0; i < Array.length; i++) {
//     console.log(Array[i].Name, '--', Array[i].Subjects)
// }

//Slice

// let R= Array.slice(1,3)
// console.log(R)

//Splice

// let z = Array.splice(1, 3, 'a', 'b', 'c')
//      console.log(z)
// console.log(Array)

//Fill
// let G = Array.fill('VasudhaW', 0, 2)
// console.log(G)

// for (let i = 0; i < Array.length; i++) {
//     console.log(Array[i]['Name'])
// }

// let G = Array.filter(function(el, index, array) {
//     return el.Grade == 'A+'
// })
// console.log(G)
// for (let i = 0; i < G.length; i++) {
//     console.log(G[i]['Name'])
// }

// for Each

// G.forEach(function(el, index, array) {
//     console.log(el.Name)
// })

//print the name of those having physics as their subject

// let Physics = Array.filter(function(el, index, array) {
//     return el.Subjects.includes('Chemistry')
// }).forEach(function(el, index, array) {
//     console.log(el.Name)
// })

// let P = Array.filter(function(el, index, array) {
//     return el.Subjects.includes("Maths")
// })

// P.forEach(function(el) {
//     console.log(el.Name)
// })

// Addition of scores

// let R = Array.reduce(function(acc, el) {
//     return acc + el.Score
// }, 0)
// console.log(R)

// percentage of each student

let M = Array.map(function(el) {
    return el.Score * 100 / 500
})
console.log(M)

// Print the name of student from Wardha

let W = Array.filter(function(el) {
    return el.Address == 'Wardha'
}).forEach(function(el) {
    console.log(el.Name)
})

//Update sara patil to rutuja Deshmukh

let U = Array.filter(function(el) {
    return el.Name == 'Sara Patil'
})
console.log(U)
U[0].Name = "Rutuja Deshmukh"
console.log(Array)