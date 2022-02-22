const h = " hjkhjkhkj"

const main = `
<div class="wrapper">
<h1>${h}</h1>
<p>Lorem ipsum dolor sit amet consectetur.</p>
<img src="https://picsum.photos/200" alt="" />
</div>
`;
document.body.innerHTML=main;

const heading = document.querySelector("h1");
heading.classList.add("h")

console.log(main);


