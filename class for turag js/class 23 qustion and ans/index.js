const btn = document.querySelector(".btn");
console.log(btn);

function clickMe() {
  console.log("ok");
}

btn.addEventListener("click", clickMe);

const btn2 = document.createElement("button");
console.log(btn2);
btn2.classList.add("btn2");
btn2.type = "button";
btn2.textContent = "click me";

btn.insertAdjacentElement("beforebegin", btn2);

btn2.addEventListener("mouseover", clickMe);

function handleMe() {
  const n = document.createElement("p");
  n.textContent = "hay";
  document.body.appendChild(n);
}

const btns = document.querySelectorAll(".myBtn");
const btns2 = document.querySelectorAll(".yourBtn");
// console.log(btns);

btns.forEach(function (a) {
  a.addEventListener("click", handleMe);
});
btns2.forEach(function (a) {
  a.addEventListener("click", handleMe);
});

// const heading = document.querySelector("heading");

// heading.("beforebegin", btns2);
