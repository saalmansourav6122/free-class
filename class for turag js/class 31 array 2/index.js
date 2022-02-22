// Array litaral
const names = ["tamim", "sakib", "musfique"];

// item add last position
// names.push("mahmudullha");

const names2 = [...names, "mamudhallha"];

console.log(names2);

// add item first positon

// names.unshift("Papon");

console.log(names);

// const names2 = new Array(1, 2, 3, 4);
// console.log(typeof names);
// console.log(names2);

// check data type array
Array.isArray(names);
// object

// const newObj = {
//   name: "tamim",
//   age: 20,
// };

// console.log(newObj);

// mutable -- change original array

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.reverse();

// const numback = [...numbers].reverse();

// console.log(numback);
// immutable -- do not change original array

// const portion = numbers.slice(2, 5);

// console.log(portion);
// console.log(numbers);
