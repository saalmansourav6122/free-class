// make a div
const div = document.createElement("div");

// add a class of wrapper to it
div.classList.add("wrapper");

// put it into the body
document.body.appendChild(div);

// const unOrderList = document.createElement("ul");
// const li1 = document.createElement("li");

// li1.textContent = "one";

// const li2 = document.createElement("li");

// li2.textContent = "two";
// const li3 = document.createElement("li");

// li3.textContent = "three";

// unOrderList.appendChild(li1);
// unOrderList.appendChild(li2);
// unOrderList.appendChild(li3);

// console.log(unOrderList);

// div.appendChild(unOrderList);

const unOrderList = `
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
`;

div.innerHTML = unOrderList;

const image = document.createElement("img");

image.src = "https://picsum.photos/500";
image.width = 250;

image.classList.add("cute");

image.alt = "cute Puppy";
console.log(image);

div.appendChild(image);

const htmlString = `
<div class="insideiv">
 <p>pragarph one</p>
 <p>pragarph two</p>
 <p>pragarph </p>
</div>
`;

const ul = document.querySelector("ul");
ul.insertAdjacentHTML("beforebegin", htmlString);

const insideDiv = document.querySelector(".insideiv");
insideDiv.children[1].classList.add("warning");
// const secPara = insideDiv.querySelector();

insideDiv.children[0].remove();

function generatePlayerCard(name, age, height) {
  const html = `
    <div class="player card">
        <h2>${name}- ${age}</h2>
        <p>They are ${height} and ${age} years old, In Dogyears this person would be be that wold bea tall dog</p>
        <button class="delete">Delete</button>
    </div>
    `;

  return html;
}

const newDiv = document.createElement("div");
newDiv.classList.add("cards");

let cardHtml = generatePlayerCard("sakib", 20, 5.4);
cardHtml += generatePlayerCard("Tamim", 40, 5.4);
cardHtml += generatePlayerCard("Marshafi", 20, 5.4);
cardHtml += generatePlayerCard("Musfiq", 20, 5.4);

newDiv.innerHTML = cardHtml;

console.log(newDiv);
div.insertAdjacentElement("beforebegin", newDiv);

const btns = document.querySelectorAll(".delete");
console.log(btns);

// const n = [1, 2, 3, 4];
function removeCards(event) {
  //   event.currentTarget.parentElement.remove();

  event.currentTarget.closest(".player").remove();
}

btns.forEach((btn) => {
  btn.addEventListener("click", removeCards);
});
