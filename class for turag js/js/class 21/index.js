const mypargarph = document.querySelector("p");

console.log(mypargarph.childNodes);
console.log(mypargarph.children);

console.log(mypargarph.previousElementSibling);

const myp = document.createElement("p");

myp.textContent = "Externsal paragraph";

document.body.appendChild(myp);

myp.remove();
console.log(myp);
