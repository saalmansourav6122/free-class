// const person = {
//     name: 'John',
//     age: 30,
//     job: 'teacher',
// }

// export default person;


import randomNum from './util.js'
const list = document.querySelector(".list");
let items = [];
export function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const item= {
        name,
        id: randomNum()
    }
    console.log(items)
    items.push(item);
    displayItems()
}

export function displayItems() {
    const html = items.map(item => `<li>${item.name}</li>`).join("");
    list.innerHTML = html;
}