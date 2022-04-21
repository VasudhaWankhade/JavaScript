let Cities = ['Amravati', 'Nagpur', 'Pune', 'Wardha', 'Akola']
console.log(Cities) //print the elements of the array
let L = Cities.length
console.log(L) //number of elements in array
let A = Cities.push('Agra')
console.log(Cities)
console.log(A)

console.log(Cities[3]) //print the element stored on index 3 i.e. Wardha
let i = Cities
for (i = 0; i < Cities.length; i++) {
    console.log(i)
    console.log(Cities[i])
} //print the index number and the city stored in it in ascending order

let j = Cities
for (j = Cities.length - 1; j >= 0; j--) {
    console.log(j)
    console.log(Cities[j])
} //print the index number and the city stored in it in descending order