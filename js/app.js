let elInput = document.querySelector('.list-input')
let elBtn = document.querySelector('.click-button')
let elList = document.querySelector('.list')
let elInput1 = document.querySelector('.list-input1')

elBtn.addEventListener('click', function () {
   let elItem = document.createElement("li")
   elItem.textContent = `${elInput1.value} : ${elInput.value}`
   elList.appendChild(elItem)
   elInput.value = ""
   elInput1.value = ""
})