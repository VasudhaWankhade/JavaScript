// let uL = document.querySelector('ul')
// let list = document.querySelectorAll('li')
// let text = document.querySelector('#color')
// let button = document.querySelector('#col')
// let button1 = document.querySelector('#ele')
// let text1 = document.querySelector('#element')

// console.log(uL)
// console.log(list)
// console.log(text)
// console.log(button)
// console.log(button1)
// console.log(text1)

// // Change color of all elements according to color entered in the text

// button.addEventListener('click', function() {
//     let val = text.value //read value in the text and store it in val
//     uL.style.color = val //color stored in the val is applied to all elements in ul
// })

// Add new element in the list

// textbox id=element, button id=ele



// button1.addEventListener('click', function() {
//     let t = text1.value
//     let n = document.createElement('li')
//     n.textContent = t
//     uL.appendChild(n)
//     list = document.querySelectorAll('li')
//     Changecolor()
// })



// function Changecolor() {
//     for (let i = 0; i < list.length; i++) {
//         if (i % 2 == 0) {
//             list[i].style.color = "pink"
//         } else {
//             list[i].style.color = "yellow"
//         }
//     }
// }


//Add button of remove,up, down,with each element

// button = rem, u, d

// let rem = document.querySelector('.remove')
// let u = document.querySelector('.up')
// let d = document.querySelector('.down')
// console.log(rem)
// console.log(u)
// console.log(d)

// function addButton(li) {
//     let R = document.createElement('button')
//     R.textContent = "Remove"
//     R.classList = 'remove'
//     li.appendChild(R)

//     let U = document.createElement('button')
//     U.textContent = "Up"
//     U.classList = 'up'
//     li.appendChild(U)

//     let D = document.createElement('button')
//     D.textContent = "Down"
//     D.classList = 'down'
//     li.appendChild(D)
// }

// button1.addEventListener('click', function() {
//     let t = text1.value
//     let n = document.createElement('li')
//     n.textContent = t
//     uL.appendChild(n)
//     addButton(n)
// })

// // Remove Up Down buttons should work

// uL.addEventListener('click', function(event) {

//     if (event.target.tagName == "BUTTON") {

//         if (event.target.classList == "remove") {
//             let P = event.target.parentElement
//             let pp = P.parentElement
//             uL.removeChild(P)
//         }
//     }
//     if (event.target.classList == "up") {
//         let u = event.target.parentElement
//         let upre = u.previousElementSibling
//         let upar = upre.parentElement
//         uL.insertBefore(u, upre)
//     }

//     if (event.target.classList == "down") {
//         let dd = event.target.parentElement
//         let next = dd.nextElementSibling
//         let parel = dd.parentElement
//         uL.insertBefore(next, dd)
//     }

// })

// 1.Add new element in the list
// 2.change color of elements even=pink odd=green
// 3.Add buttons with the elements
// 4.The buttons should work

// 1.Add new element in the list
// textbox,button
// button-addeventlistener
// function-----1)read the value of the text 
//              2)create new li elemnet
// 3)add the value in li element
// 4)append the li element in the ul

let newel = document.querySelector('#element')
let button = document.querySelector('#ele')
let ulist = document.querySelector('ul')
console.log(newel)
console.log(button)
console.log(ulist)

button.addEventListener('click', function() {
    let N = document.createElement('li')
    N.textContent = newel.value
    addButton(N)
    ulist.appendChild(N)
    liall = document.querySelectorAll('li')
    Changecolor(liall)
})

// 2.change color of elements even=pink odd=green
// button

let liall = document.querySelectorAll('li')
    // let colorinput = document.querySelector('#color')
let button1 = document.querySelector('#col')
console.log(liall)
console.log(button1)

function Changecolor(liall) {
    for (let i = 0; i < liall.length; i++) {
        if (i % 2 == 0) {
            liall[i].style.color = "pink"
        } else {
            liall[i].style.color = "green"
        }
    }
}

button1.addEventListener('click', function() {
    Changecolor()
})


// 3.Add buttons with the elements

let r = document.querySelector('.remove')
let u = document.querySelector('.up')
let d = document.querySelector('.down')


function addButton(li) {
    let B = document.createElement('button')
    B.textContent = "Remove"
    B.classList = "rem"
    li.appendChild(B)


    let U = document.createElement('button')
    U.textContent = "Up"
    U.classList = "u"
    li.appendChild(U)


    let D = document.createElement('button')
    D.textContent = "Down"
    D.classList = "d"
    li.appendChild(D)


}

// 4.The buttons should work



ulist.addEventListener('click', function(event) {
    if (event.target.tagName == "BUTTON") {
        if (event.target.classList == "remove") {
            let P = event.target.parentElement
            let Pp = P.parentElement
            ulist.removeChild(P)
        }

        if (event.target.classList == "up") {
            let U = event.target.parentElement
            let Uu = U.previousElementSibling
            let parel = Uu.parentElement
            ulist.insertBefore(U, Uu)
        }

        if (event.target.classList == "down") {
            let D = event.target.parentElement
            let Dd = D.nextElementSibling
            let Ddpre = Dd.parentElement
            ulist.insertBefore(Dd, D)
        }
    }
})