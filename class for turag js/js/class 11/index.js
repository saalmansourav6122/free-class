const people = [
  { name: "Tamim", cool: true, country: "Bangladesh" }, // index -0
  { name: "Babar", cool: true, country: "pakistan" }, // index -1
  { name: "Malinga", cool: false, country: "srilnka" }, // index -2
];

people.forEach((persion, ind) => {
  console.group(`${persion.name}`);
  console.error("Hay");
  console.warn("Hay");
  console.log("Hay");
  console.info("Hay info");
  console.groupEnd(`${persion.name}`);
});

// console.table(people);

// function nameCount(name) {
//   console.count(`count name :${name} `);

// }

fun;
