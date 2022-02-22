var icon =document.querySelector('[alt="icon"]')
console.log(icon);

function themeChng(){
    document.body.classList.toggle("dark-theme")

    if(document.body.classList.contains("dark-theme")){
        icon.src = "/dark theme icon/sun.png";
    }else{
        icon.src = "/dark theme icon/moon.png"
    }
}

icon.addEventListener("click",themeChng)