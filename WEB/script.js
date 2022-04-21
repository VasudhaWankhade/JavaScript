let I = document.querySelector('#email')
console.log(I)
I.addEventListener('click', () => {
    I.style.color = "blue"
})
I.style.color = "green"
console.log(I.textContent)

let N = document.querySelector('#name')
console.log(N.textContent)
N.style.color = "black"
N.style.background = "skyblue"

let P = document.querySelector('p')
console.log(P.textContent)
P.style.color = "orange"

let Add = document.querySelector('#A')
console.log(Add.textContent)

let H = document.querySelectorAll('.h')
H.style.color = "black"
