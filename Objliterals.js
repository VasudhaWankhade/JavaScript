class Person //Created new data type
{
    FullName = undefined
    Age = undefined
    RollNo = undefined
    Marks = undefined
}

// Update the property outside the class  Object Literals

let Vasudha = new Person()
Vasudha.FullName = 'Vasudha Wankhade'
console.log(Vasudha)
delete Vasudha.Marks
console.log(Vasudha)

class Place //Create new data type Setting the object values at the time of creating new data type
{
    constructor(N, C, D) {
        this.Name = N
        this.City = C
        this.Distance = D
    }
}

let Pune = new Place('Shanivarwada', 'Pune', 300)
console.log(Pune)

Pune.State = 'Maharashtra'
console.log(Pune)

Pune.Distance = 400
console.log(Pune)