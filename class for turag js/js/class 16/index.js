const heading = document.querySelector("h1");
console.dir(heading);

// getter
console.log(heading.textContent);

console.log(heading.innerText);

console.log(heading.innerHTML);

heading.style.backgroundColor = "green";

// seter
// heading.textContent = "Hello world";

// heading.style.color = "red";

const allPara = document.querySelectorAll("p");

console.log(allPara.length);

for (let i = 0; i < allPara.length; i++) {
  allPara[i].style.color = "blue";
}

// <!-- beforebegin -->
// <p>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </p>
// <!-- afterend -->
heading.insertAdjacentHTML("beforebegin", "It is insert");
