let elInput = document.querySelector('.list-input')
let elBtn = document.querySelector('.click-button')
let elList = document.querySelector('.list')


elBtn.addEventListener('click', function () {
   let elItem = document.createElement("li")
   elItem.textContent = elInput.value
   elList.appendChild(elItem)
   elInput.value = ""
})