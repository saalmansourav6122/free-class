// x = 10; //initialization
// var x; //declaration
// console.log(x);

// human();
// function human() {
//   console.log("inside human");
// }

// const y; // declaration
// y= 3456

// 1-10 loop

// while

// syntax : while(condition){
//     statment
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
let i = 0;
while (i < 10) {
  console.log(i);
  if (i === 5) {
    break;
  }
  i++;
}

// do..while  syntax: do{statement} while(condition)
let n = 0;
do {
  console.log(n);
  n += 2;
} while (n < 100);

let j = 0;
do {
  console.log(j);
  j % 2 == 0;
  j++;
} while (j < 100);
