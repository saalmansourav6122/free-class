const btns = document.querySelectorAll(".btn");

function handleMe(even){
    console.log("hey..")
    console.log(even.currentTarget);
    console.log(even.target);
    console.log(even.bubbles);
    console.log(event.target === event.currentTarget);
    event.stopPropagation()
}

btns.forEach(function(a){
a.addEventListener("click",handleMe)
});

window.addEventListener("click",function(){
    console.log("ok")
},
{capture:false})