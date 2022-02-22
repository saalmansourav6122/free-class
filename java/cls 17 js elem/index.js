const heading = document.createElement("h1")

heading.textContent="This is head";
heading.classList.add("text")

console.log(heading);
document.body.appendChild(heading);

const pic =document.createElement("img")
console.log(pic);
 
pic.src="https://picsum.photos/200";

pic.setAttribute("alt","photo");
pic.dataset.itIs="pic";

document.body.appendChild(pic);

const list =document.createElement("ul")

const li1 = document.createElement("li");

li1.textContent="item"

const li2 = document.createElement("li");

li2.textContent="item2"

const li3 = document.createElement("li");

li3.textContent="item3";


list.insertAdjacentElement("afterbegin", li3);
list.insertAdjacentElement("afterbegin", li2);
list.insertAdjacentElement("afterbegin", li1);

document.body.appendChild(list)

console.log(list)