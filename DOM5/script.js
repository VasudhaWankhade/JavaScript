let uL = document.querySelector('ul')
let R = document.querySelector('.rem')
let U = document.querySelector('.u')
let D = document.querySelector('.d')
let T = document.querySelector('input')
let button = document.querySelector('#A')

console.log(uL)
console.log(R)
console.log(U)
console.log(D)
console.log(T)
console.log(button)



// Add element

button.addEventListener('click', function() {
    let newel = document.createElement('li') //<li></li>
    newel.textContent = T.value //<li>value</li>
    Createbutton(newel)
    uL.appendChild(newel)
})



// Add buttons with element

function Createbutton(li) {
    let B = document.createElement('button')
    B.textContent = "Remove"
    B.classList = "rem"
    li.appendChild(B)

    let C = document.createElement('button')
    C.textContent = "Up"
    C.classList = "u"
    li.appendChild(C)

    let E = document.createElement('button')
    E.textContent = "Down"
    E.classList = "d"
    li.appendChild(E)
}

// Remove Up Down buttons should work

uL.addEventListener('click', function(event) {

    if (event.target.tagName == "BUTTON") {


        if (event.target.classList == "rem") {
            let P = event.target.parentElement
            let Pp = P.parentElement
            uL.removeChild(P)
        }


        if (event.target.classList == "u") {
            let P = event.target.parentElement
            let Pre = P.previousElementSibling
            let Pa = Pre.parentElement
            uL.insertBefore(P, Pre)
        }


        if (event.target.classList == "d") {
            let p = event.target.parentElement
            let next = p.nextElementSibling
            let nextp = next.parentElement
            uL.insertBefore(next, p)
        }
    }
})