const butt1 = document.querySelector(".butt button");
const togg = document.querySelector(".main-toggle .toggl");
const cancel = document.querySelector("i")

function toggleButt(){
    togg.classList.toggle("tmin")
    cancel.classList.remove("tmin-1")
}
butt1.addEventListener("click",toggleButt);
cancel.addEventListener("click",toggleButt);