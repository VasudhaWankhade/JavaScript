let City = {
    Name: 'Amravati',
    State: 'Maharashtra',
    Famous: ['Ambadevi Temple', 'HVPM']
}

// //                                      RETRIEVE
// //dot notation
// console.log(City.Name)
// console.log(City.State)
// console.log(City.Famous)
//     //bracket notation
// console.log(City['Name'])
// console.log(City['State'])
// console.log(City['Famous'])

//                                     UPDATE

//dot notation
City.Name = 'Nagpur'
console.log(City)

City.State = 'Goa'
console.log(City)

City.Famous = 'Oxygen Park'
console.log(City)

//bracket notation
// City['Name'] = 'Nagpur'
// console.log(City)

// City['State'] = 'Goa'
// console.log(City)

// City['Famous'] = 'Oxygen Park'
// console.log(City)

//                                   ADD