const btn = document.querySelector(".btn");

function heandleMe(){
    const p = document.createElement("p");
    p.textContent="ok bro";
    document.body.appendChild(p);
};

btn.addEventListener("click",heandleMe);


const btn2 = document.createElement("button");

btn2.classList.add(".btn2");

btn2.textContent="ok";

function clickMe(){
    console.log("ok");
};
btn.insertAdjacentElement("beforebegin",btn2)

btn2.addEventListener("click",clickMe);


const yesBtn=document.querySelectorAll("button");

function touchHere(){
    console.log("yes");
};

yesBtn.forEach(function(a,b,c){
    a.addEventListener("click",touchHere)
});