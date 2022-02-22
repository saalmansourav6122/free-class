const age = 100;

const person = {
  name: "tamim",
  age: 50,
  sayHi(gretting = "hay") {
    console.log(`${gretting} ${this.name}`, this);
  },
};
person.height = 6.7;

person.job = "web deveoloper";

// Object.freeze(person);
// person.age = 300;
// console.log(person);

person.sayHi();
