const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// splice
const na = numbers.splice(3, 2);

console.log(numbers);
console.log(na);

//

const names = ["tamim", "sakib", "musfiq", "mahmuddlha"];

const sakibIndex = names.findIndex(function (name) {
  if (name === "skib") {
    return true;
  } else {
    return false;
  }
});

console.log(names[sakibIndex]);

const comments = [
  { text: "hello", id: 234 },
  { text: "some thing want wrong", id: 238 },
  { text: "win Bangladsh", id: 237 },
  { text: "Naturan bangladesh", id: 236 },
];
const idMatch = comments.findIndex(function (comment) {
  if (comment.id === 234) {
    return true;
  } else {
    return false;
  }
});
console.log(comments[idMatch].text);
