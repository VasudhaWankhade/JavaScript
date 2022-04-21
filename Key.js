class Student {
    constructor(A, R, Ag, S, H) {
        this.Name = A
        this.RollNo = R
        this.Age = Ag
        this.Std = S
        this.Hobbies = H
    }
}
let V = new Student("Vasudha Wankhade", 24, 22, "final year", ["Cricket", "Badminton"])
    // console.log(V)
    // for (let key in V) {
    //     console.log(key, V[key])
    // }
let H = new Student("Poorva Patil", 56, 20, "first year", ["Hockey", "Football"])
for (let key in H) {
    console.log(key, H[key])
}

// console.log(Student[Student.length - 1])