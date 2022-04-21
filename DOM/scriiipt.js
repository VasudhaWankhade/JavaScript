let heading = document.querySelector('h1')
let inputText = document.querySelector('input')
let button = document.querySelector('button')
console.log(heading.textContent)
console.log(inputText)
console.log(button)

// change color of text on click


// button.addEventListener('click', function() {
//     heading.style.color = "yellow"
// })

// change the color on click of button as mentioned in the text


button.addEventListener('click', function() {
    let flower = inputText.value
    heading.style.color = flower
})