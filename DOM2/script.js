let li1 = document.querySelector('li') //Give first occured li element
let liall = document.querySelectorAll('li') //Give all li elements
let button = document.querySelector('button')
let text = document.querySelector('input')
let ul = document.querySelector('ul')
console.log(li1)
console.log(liall)
console.log(button)
console.log(text)
console.log(ul)

// add element in the list entered in the textbox on click of button
// 1. select button
// 2. read text in the textbox and store it in a variable 'element'
// 2. create new blank li element and store it in 'li'
// 3. update the value of list by 'element'
// 3. append list  in  the parent tag ul


button.addEventListener('click', function() {
    let element = text.value
    let list = document.createElement('li')
    list.textContent = element
    ul.appendChild(list)
})