let but = document.querySelector('#add')
let text = document.querySelector('input')
let ul = document.querySelector('ul')
let remove = document.querySelector('.rmv')
let up = document.querySelector('.u')
let down = document.querySelector('.d')
let liall = document.querySelectorAll('li')
console.log(remove)
console.log(up)
console.log(down)
console.log(but)
console.log(text)
console.log(ul)

but.addEventListener('click', function() {
    let n = document.createElement('li')
    n.textContent = text.value
    ul.appendChild(n)
    addbutton(n)
})


function addbutton(li) {
    let butOn = document.createElement('button')
    butOn.textContent = "remove"
    butOn.classList = "rmv"
    li.appendChild(butOn)

    let butup = document.createElement('button')
    butup.textContent = "up"
    butup.classList = "u"
    li.appendChild(butup)

    let butdown = document.createElement('button')
    butdown.textContent = "down"
    butdown.classList = "d"
    li.appendChild(butdown)


}



ul.addEventListener('click', function(event) {
    if (event.target.tagName == "BUTTON") {
        if (event.target.classList == "rmv") {
            let E = event.target.parentElement
            let elep = E.parentElement
            ul.removeChild(E)
        }
        if (event.target.classList == "u") {
            let E = event.target.parentElement
            let pre = E.previousElementSibling
            let par = pre.parentElement
            ul.insertBefore(E, pre)
        }
        if (event.target.classList == "d") {
            let P = event.target.parentElement
            let next = P.nextElementSibling
            let par = next.parentElement
            ul.insertBefore(next, P)
        }
    }
})

// uL.addEventListener('click', function(event) {

//     if (event.target.tagName == "BUTTON") {


//         if (event.target.classList == "rem") {
//             let P = event.target.parentElement
//             let Pp = P.parentElement
//             uL.removeChild(P)
//         }


//         if (event.target.classList == "u") {
//             let P = event.target.parentElement
//             let Pre = P.previousElementSibling
//             let Pa = Pre.parentElement
//             uL.insertBefore(P, Pre)
//         }


//         if (event.target.classList == "d") {
//             let p = event.target.parentElement
//             let next = p.nextElementSibling
//             let nextp = next.parentElement
//             uL.insertBefore(next, p)
//         }
//     }
// })