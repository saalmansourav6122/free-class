const butt = document.querySelector(".but button")
const content = document.querySelector(".box")
const cancel = document.querySelector("i")

function contentButt(){
    content.classList.toggle("content2")
    content.classList.toggle("content3")
}
butt.addEventListener("click", contentButt)
cancel.addEventListener("click",contentButt)