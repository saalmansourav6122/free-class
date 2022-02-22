const toppings = [
  "Mushrooms ",
  "Tomatoes",
  "Eggs",
  "Chili",
  "Lettuce",
  "Avocado",
  "Chiles",
  "Bacon",
  "Pickles",
  "Onions",
  "Cheese",
];

const buns = ["egg", "wonder", "brioche"];

const meats = {
  beyond: 10,
  beef: 5,
  mattan: 7,
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: "Love the burgs", rating: 4 },
  { comment: "Horrible Service", rating: 2 },
  { comment: "Smoothies are great, liked the burger too", rating: 5 },
  { comment: "Ambiance needs work", rating: 3 },
  { comment: "I DONT LIKE BURGERS", rating: 1 },
];

/*
  Static Methods
*/
const n = [4.5];
// Array.of();
const createArr = Array.of(7, 3, 4, 5, 56);

const newArr = Array.of(..."tamim");
console.log(newArr);

// Make a function that creates a range from x to y with Array.from();

function createRange(start, end) {
  const range = Array.from({ length: end - start + 1 }, function (item, index) {
    return index + start;
  });
  return range;
}

const n2 = createRange(30, 70);
n2.push("juhsaddkfsjkj");
console.log(n2);

// Check if the last array you created is really an array with Array.isArray();

console.log(Array.isArray(n2));

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()

console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));

// Object.entries(meats).forEach(([key, value]) => {
//     // const key = meat[0];
//     // const value = meat[1];
//     // const [key, value] = meat;
//     console.log(key, value)
//     })

Object.entries(meats).forEach(function ([key, value]) {
  // console.log(meat);
  // Array destrature
  // const [key, value] = meat;
  // const key = meat[0];
  // const value = meat[1];
  console.log(key, value);
});

/*
  Looping Methods (next)
*/
