var fullName = "Wankhade" //for window scope we have to use 'var'
console.log(this.fullName)
console.log(window.fullName)
    // let obj = {
    //     fullName: "Vasudha Wankhade",
    //     rollNo: 25,
    //     age: 22,
    //     display: function() { //function expression
    //         console.log(this.fullName) //here this=object name

//         function display2() { //function declaration
//             console.log(this.fullName) //here 'this' scope changes to window
//         }
//         display2()
//     }

// }
// obj.display()

// let fullName = "Wankhade"
// console.log(this.fullName)
// let obj = {
//     fullName: "Vasudha Wankhade",
//     rollNo: 25,
//     age: 22,
//     display: function() { //function expression
//         console.log(this.fullName) //here this=object name

//         display2 = () => { //function declaration
//             console.log(this.fullName) //here 'this' scope changes to window change function to arroe function to change scope of this to object
//         }
//         display2()
//     }

// }
// obj.display()

//Arrow function changes the scope of 'this' as==>The parent of display2() is display()
//parent of display() is object so 'this' value becomes object name

// Client id=AVvtWshyiK8ZdNm9bm8AGBrRttJ4gtcA0kY33PL5NjxTgR3zEsRGU7PWVPXUm3ga9Ts9vgr9y5THS90c
// Secret id=EBIX3_qhABf6G6JKI3ZhPLJnp_40XK9ik_N7GJJ3nbthfCsj1q-X10A85FYv-o0Mx190bAMn0GvVzsvd