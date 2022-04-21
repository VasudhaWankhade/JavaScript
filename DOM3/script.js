let ulist = document.querySelector('ul')
let rem = document.querySelector('.remove')
let u = document.querySelector('.up')
let d = document.querySelector('.down')
let text = document.querySelector('input')
let add = document.querySelector('#addd')
let list = document.querySelectorAll('li')
console.log(ulist)
console.log(rem)
console.log(u)
console.log(d)
console.log(text)
console.log(add)

add.addEventListener('click', function() {
    let element = text.value
    let newel = document.createElement('li')
    newel.textContent = element
    Createbutton(newel)
    ulist.appendChild(newel)

})

function Createbutton(li) {
    let remove = document.createElement('button')
    remove.textContent = "Remove"
    remove.classList = "remove"
    li.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = "Up"
    up.classList = "up"
    li.appendChild(up)

    let down = document.createElement('button')
    down.textContent = "Down"
    down.classList = "down"
    li.appendChild(down)
}
for (let i = 0; i < list.length; i++) {
    rem.addEventListener('click', function(el) {
        delete el[i]
    })
}