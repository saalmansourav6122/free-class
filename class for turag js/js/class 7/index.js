// Regular function
console.log(userInfo("Tamim"));
function userInfo(name) {
  console.log(`${name}'S  informatino `);
}

// Anon
// function(){
//     console.log("hello annon")
// }

// Arrow function

const inchToCm = (inc) => inc * 2.54;

const inchToCm2 = (inc) => {
  var n = 23;
  var m = 10;
  return n * m + inc;
};
console.log(inchToCm(8));

// -> =>

// IIFE (Immediately Invoked Function Expression)

(function (lastName) {
  console.log(` ${lastName} Immediately Invoked Function Expression`);
})("some");

const name2 = "Musfiq";
const infos = {
  name2,
  age: 100,
  sayHi: () => {
    console.log("say hay");
  },
};
const age = 123;

const infos2 = {
  age: 100,
  sayHi: function () {
    console.log("say hay");
  },
};

console.log(infos2.sayHi());
