const anmy = ["tamim","sakib","rubel"];

const name=Array.isArray(anmy);
console.log(name);
// check data type array

// mutable -- change original array
const num = [1,2,3,4,5,6];
const num1= [...num];
const num2 = num1.reverse();
console.log(num);
console.log(num2);
// mutable -- change original array

// immutable -- do not change original array
const number = [1,2,3,4,5,6];

const number1 = number.slice(2,5);
console.log(number1);

// array

const player = ["messi","neyemer","ronaldo"];

// add item first positon
player.unshift("pele");
const player1 =[...player,"hulk"];
console.log(player1);
// add item last positon
player.push(p={m:"jamal"});

console.log(player);

const man = new Array(1,2,3);
console.log(man)