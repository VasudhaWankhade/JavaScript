let Students = [{
        FirstName: 'Vasudha',
        LastName: 'Wankhade',
        Age: 22,
        City: 'Amravati',
        Skills: ['C++', 'Java']
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

//retrieve Vasudha

// console.log(Students[0].FirstName)

//insert manual testing in Skills array of first object

// Students[0].Skills.push('Manual testing')
// console.log(Students[0])

// Students[2].Skills = 'Python'
// console.log(Students[2])

//for 

for (let i = 0; i <= Students.length; i++) {
    console.log(Students[i]['FirstName'], Students[i]['Skills'].length)
}

//ForEach

// Students.forEach(function(el, index, arr) {
//     console.log(el['FirstName'], el['Skills'].length)
// })