// // program to find the LCM of two integers

// let hcf;
// // take input
// const number1 = 40
// const number2 = 25

// // looping from 1 to number1 and number2 to find HCF
// for (let i = 1; i <= number1 && i <= number2; i++) {

//     // check if is factor of both integers
//     if (number1 % i == 0 && number2 % i == 0) {
//         hcf = i;
//     }
// }

// // find LCM
// let lcm = (number1 * number2) / hcf;
// console.log(lcm)

// // display the hcf
// console.log(`HCF of ${number1} and ${number2} is ${lcm}.`);
// Armstrong

let A = 370
let b = A % 10
let c = b % 10
let d = c % 10
if ((b * b * b) + (c * c * c) + (d * d * d) == A) {
    console.log("A is Armstrong number")
} else {
    console.log("A is not Armstrong number")
}