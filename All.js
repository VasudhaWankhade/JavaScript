let array = [23, 34, 45, 56, 67, 78, 89, 90, 100, 68, 98, 35]
console.log(array) //print all elements of array
console.log(array.length) //print the length of array

let R = array.reverse()
console.log(R) //print all elements in reverse order

let I = array.indexOf(89)
console.log(I) //print the index number of given element

let PUSH = array.push(10001)
console.log(array) // includes given element at the last of array
console.log(PUSH) //gives new length of array as a return type

let POP = array.pop()
console.log(array) //Remove the last element of array
console.log(POP) //Gives the element which is  removed as a return type

let UNSHIFT = Array.unshift(1000222)
console.log(array) //Add given element at the starting of the array
console.log(UNSHIFT) //gives new lwngth of array as a return type

let SHIFT = array.shift()
console.log(array) //Remove the first element of array
console.log(SHIFT) //Gives the element which is removed as a return type

let boolean = array.includes(90)
console.log(boolean) // Specify wheather the element is present or not in the array in the form of true or false

let B = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
console.log(B) // New array
console.log(typeof B)

let Combine = Array.concat(B)
console.log(Combine) // Combines elements of two arrays