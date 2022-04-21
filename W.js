let Students = [{
            FirstName: 'Vasudha',
            LastName: 'Wankhade',
            Age: 22,
            City: 'Amravati',
            Skills: ['C++', 'Java', 'Python']
        },
        {
            FirstName: 'Sarika',
            LastName: 'Gupta',
            Age: 28,
            City: 'Pune',
            Skills: ['C++', 'Java']
        },
        {
            FirstName: 'Radhika',
            LastName: 'Deshmukh',
            Age: 30,
            City: 'Nagpur',
            Skills: ['C++', 'Java', 'Python']
        }
    ]
    // console.log(Students[0].Skills.length, Students[0].FirstName)


// for (let i = 0; i < Students.length; i++) {
//     console.log(Students[i]['FirstName'], Students[i]['Skills'].length)
// }


//Average of their ages

// let h = Students.reduce(function(acc, el) {
//     return acc = acc + el.Age
// }, 0)
// console.log(h / Students.length)

//every

// let V = [1, 34, 2, 2, 22, 44, 34, 45, 55, 6, 43, 43, 5, 65, 6, 65, 67, 7, 7, 6]
// let Z = V.every(function(el, index, array) {
//     return el >= 1
// })
// console.log(Z)

//name of those having python as a skill

let S = Students.filter(function(el, index, array) {
    return el.Skills.includes('Python')

})

// for (let i = 0; i < S.length; i++) {
//     console.log(S[i].FirstName)
// }

// let I = S.forEach(function(el, index, array) {
//     return S.FirstName
// })
// console.log(I)

//print name city and age 

// let X = Students.forEach(function(el, index, array) {
//     console.log(el.FirstName + '-' + el.City + '-' + el.Age)
// })
// console.log(X)
let F = Students.filter(function(el, index, array) {
    return el.Skills.includes('C++', 'Java')
})
console.log(F)
F.forEach(function(el, index, array) {
    console.log(el.FirstName)
})