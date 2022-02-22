import randomNum from "./utils.js";

const list = document.querySelector(".list");
const inputStorageItems = [];

export function handleSubmit(e) {
  e.preventDefault();
  const name1 = e.target.name.value;
  const inputStorageItem = {
    name: name1,
    id: randomNum(),
  };
  console.log(inputStorageItem);
  inputStorageItems.push(inputStorageItem);
  displayInput();
}

export function displayInput() {
  const inputHtml = inputStorageItems.map((i) => `<li>${i.name}</li>`).join("");
  list.innerHTML = inputHtml;
}
