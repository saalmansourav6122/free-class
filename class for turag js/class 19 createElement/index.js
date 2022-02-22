const myParagraph = document.createElement("p");

myParagraph.textContent = "Cloud Tecnology";
myParagraph.classList.add("open");
myParagraph.id = "id";
console.log(myParagraph);

document.body.appendChild(myParagraph);

const title = document.createElement("h2");

title.textContent = "Heading two";
document.body.appendChild(title);

const list = document.createElement("ul");

const li1 = document.createElement("li");

li1.textContent = "item1";

const li2 = document.createElement("li");

li2.textContent = "item2";

const li3 = document.createElement("li");

li3.textContent = "item3";

// list.appendChild(li1);
// list.appendChild(li3);
// list.appendChild(li2);

list.insertAdjacentElement("afterbegin", li3);
list.insertAdjacentElement("afterbegin", li1);
li1.insertAdjacentElement("afterend", li2);

console.log(list);

document.body.appendChild(list);
