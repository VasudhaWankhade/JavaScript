let City = {
        Name: 'Amravati',
        State: 'Maharashtra',
        Famous: ['Ambadevi Temple', 'HVPM']
    }
    //UPDATE

//dot notation
// City.Name = 'Nagpur'
// console.log(City)

// City.State = 'Goa'
// console.log(City)

// City.Famous = 'Oxygen Park'
// console.log(City)

//bracket notation

// City['Name'] = 'Aurangabad'
// City['State'] = 'Goa'
// City['Famous'] = 'Oxygen Park'
// console.log(City)

//Add

//dot notation

// 
// City.Lamguage = 'Marathi'
// City['Diatance'] = 32
// console.log(City)

//Delete

delete City.Name
delete City['Famous']
console.log(City)