// Lexical Scope====>function inside another function

// child function has access to parameters,methods,values and properties of parent function

function add() {
    let x = 10
    let y = 20
    console.log(x + y)

    function add2() {
        let r = 40
        let u = 30
        console.log(r + u + x + y)

        function add3() {
            let i = 34
            let j = 67
            console.log(i + j + r + u + x + y)
        }
        add3()
    }
    add2()
}
add()

// =========================================================================================================================================

function addition2(x, y) {
    console.log(x + y)
    return "Hello" //function exit because return is considered as last statement of function
    console.log(x - y) //never read
}
addition2(20, 10)

// =========================================================================================================================================

// Closure============>>The child function which is returned by parent function can access the parameters of parent function due to closure.

function addition3(a, b) {
    return function() {
        console.log(a + b)
        return a + b
    }
}

let r = addition3(10, 30) //function expression
console.log(r)
    //r is returning a function==>
    // function() {
    //     console.log(a + b)
    //     return a + b
    // }
r()
    // console.log(v)

// ==========================================================================================================

let obj = {
    fullName: "Vasudha Wankhade",
    rollNo: 25,
    display: function() { //function expression
        console.log(this.fullName) //this==>obj
    }
}
console.log(obj.fullName)
obj.display() //function call