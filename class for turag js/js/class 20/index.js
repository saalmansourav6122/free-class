{
  /* <div class="wrapper">
      <h2>heading 2</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
        laboriosam.
      </p>
      <img src="https://picsum.photos/200" alt="cute photo" />
    </div> */
}

const div = document.createElement("div");

div.classList.add("wrapper");

const h2 = document.createElement("h2");
h2.textContent = "heading 2";

div.insertAdjacentElement("afterbegin", h2);

const myHtml = `
<div class="wrapper">
      <h2>heading 2</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
        laboriosam.
      </p>
      <img src="https://picsum.photos/200" alt="cute photo" />
</div>
`;

console.log(myHtml);

const useraName = "tamim";

const items = document.querySelector(".items");

document.body.innerHTML = myHtml;
