
var navbar = document.querySelector(".navbar")

function onScroll(){
 navbar.classList.toggle("sticky",window.scrollY > 0)
 console.log(navbar);
};

 window.addEventListener("scroll",onScroll)


