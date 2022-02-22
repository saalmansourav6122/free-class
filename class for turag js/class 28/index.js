// object Create

// Object literal Syntax
let age = 100;

const person = {
  name: "tamim",
  age,
  email: "hhehh@gmail.com",
};

person.roll = {
  class: 12,
  board: "rajshai",
};

console.log(person["age"]);

delete person.name;

console.log(person);

// console.log(person);

// const person2 = new Object({});

// simple Example

// const form = document.querySelector("form");

// let personsInfo = [];

// function handleSubmit(event) {
//   event.preventDefault();
//   console.log("clicked");
//   const name = event.currentTarget.name.value;
//   const email = event.currentTarget.email.value;
//   const age = event.currentTarget.age.value;

//   const presonInfo = {
//     name,
//     email,
//     age,
//   };
//   personsInfo.push(presonInfo);

//   console.log(personsInfo);
//   form.reset();
// }

// form.addEventListener("submit", handleSubmit);
