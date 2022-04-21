let list = document.querySelectorAll('li')
let button = document.querySelector('button[id="Change"]')
let button1 = document.querySelector('button[id="Add"]')
let input1 = document.querySelector('input')
let ull = document.querySelector('ul')
console.log(list)
console.log(button)
console.log(button1)
console.log(input1)
console.log(ull)

// even = red  odd=yellow
button1.addEventListener('click', function() {
    let element = input1.value
    let li = document.createElement('li')
    li.textContent = element
    ull.appendChild(li)
    list = document.querySelectorAll('li')
    Changecolor()
})

function Changecolor() {

    for (let i = 0; i < list.length; i++) {
        if (i % 2 == 0) {
            list[i].style.color = "red"
        } else {
            list[i].style.color = "yellow"
        }
    }

}
button.addEventListener('click', function() {
    Changecolor()
})