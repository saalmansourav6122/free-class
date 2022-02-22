const heading = document.querySelector("h1");
console.dir(heading);

// getter

console.log(heading.textContent);
console.log(heading.innerHTML);
console.log(heading.innerText);

// setter
heading.style.background = "green";

const allPara = document.querySelectorAll("p");

for(let i =0; i< allPara.length; i++){
    allPara[i].style.color ="red";
};

// <!-- beforebegin -->
// <p>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </p>
// <!-- afterend -->
heading.insertAdjacentHTML("beforebegin", "It is insert");