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
  pork: 7,
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

// Array.of();

// Make a function that creates a range from x to y with Array.from();

function createRange(start, end) {
  const range = Array.from({ length: end - start + 1 }, function (item, index) {
    return index + start;
  });
  return range;
}

const myRange = createRange(3, 7);

// Check if the last array you created is really an array with Array.isArray();

console.log(Array.isArray(myRange));

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));

Object.entries(meats).forEach(([key, value]) => {
  // const key = meat[0];
  // const value = meat[1];
  // const [key, value] = meat;
  console.log(key, value);
});

/*
      Instance Methods
    */

// Display all bun types with " or " - use join()

console.log(buns.join(" or "));

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into an array
const foodString = "hot dogs,hamburgers,sausages,corn";
console.log(foodString.split(","));

// take the last item off toppings with pop()
const lastItem = toppings.pop();
console.log(lastItem);

// add it back with push()
toppings.push(lastItem);
console.log(toppings);

// take the first item off toppings with shift()
const firstItem = toppings.shift();
console.log(firstItem);

// add it back in with unshift()
toppings.unshift(firstItem);

// Do the last four,but immutable (with spreads and new variables)
let newTopping = toppings.slice(0, toppings.length - 1);
newTopping = [...newTopping, toppings[toppings.length - 1]];
console.log(newTopping);

// Make a copy of the toppings array with slice()

const toppingsCopy = toppings.slice(0);
console.log(toppingsCopy);

// Make a copy of the toppings array with a spread
const toppingsCopy2 = [...toppings];

// take out items 3 to 5 of your new toppings array with splice()

toppingsCopy.splice(3, 5);
console.log(toppingsCopy);

// find the index of Avocado with indexOf() / lastIndexOf()
const aboIndex = toppings.indexOf("Avocado");

console.log(aboIndex);
// const tamim = { name: "tamim" }
// const people = [{ name: 'sakib' }, tamim];
// console.log(people.indexOf(tamim))

// Check if hot sauce is in the toppings with includes()

const isInToppings = toppings.includes("Hot Sauce");
console.log(isInToppings);

// add it if it's not
if (!isInToppings) {
  toppings.push("Hot Sauce");
}

// console.log(toppings)

// flip those toppings around with reverse()
// toppings.reverse();
const toppingReversed = [...toppings].reverse();
console.log(toppingReversed);

/*
      Callback Methods
    */

/*
  Looping Methods (next)
*/
