// Using set method

class Student {
    setName(N) {
        this.Name = N
    }
    setClass(Class) {
        this.Class = Class
    }
    setAge(Age) {
        this.Age = Age
    }
    setAll(N, A, C) {
        this.Nam = N
        this.Ag = A
        this.CL = C

    }
}
let V = new Student()
    // V.setName("Vasudha Wankhade")
    // console.log(V)
V.setAll('Vasudha', 22, 12)
console.log(V)