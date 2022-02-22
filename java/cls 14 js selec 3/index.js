const ham = document.querySelector(".hamburger");
const li = document.querySelector(".list-item");

function togglHam(){
    li.classList.toggle("listHam");
}
ham.addEventListener("click", togglHam);

// box-sec
const box2 =document.querySelector(".box");

function boxToggle(){
    box2.classList.toggle("boxT");
}
box2.addEventListener("mouseover", boxToggle)