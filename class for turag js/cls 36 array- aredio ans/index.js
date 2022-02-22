const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta nam maxime? Unde nulla, exercitationem veritatis eius sunt impedit consequuntur.",
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta nam maxime? Unde nulla, exercitationem veritatis eius sunt impedit consequuntur.",
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta nam maxime? Unde nulla, exercitationem veritatis eius sunt impedit consequuntur.",
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta nam maxime? Unde nulla, exercitationem veritatis eius sunt impedit consequuntur.",
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta nam maxime? Unde nulla, exercitationem veritatis eius sunt impedit consequuntur.",
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta nam maxime? Unde nulla, exercitationem veritatis eius sunt impedit consequuntur.",
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta nam maxime? Unde nulla, exercitationem veritatis eius sunt impedit consequuntur.",
  },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta nam maxime? Unde nulla, exercitationem veritatis eius sunt impedit consequuntur.",
  },
  {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta nam maxime? Unde nulla, exercitationem veritatis eius sunt impedit consequuntur.",
  },
  {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta nam maxime? Unde nulla, exercitationem veritatis eius sunt impedit consequuntur.",
  },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta nam maxime? Unde nulla, exercitationem veritatis eius sunt impedit consequuntur.",
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta nam maxime? Unde nulla, exercitationem veritatis eius sunt impedit consequuntur.",
  },
];
console.table(inventors);

// const fifteen = inventors.filter(
//   (inventor) => inventor.year >= 1500 && inventor.year < 1600
// );

// console.table(fifteen);

// const fullName = inventors.map(function (inventor) {
//   return `${inventor.first} ${inventor.last}`;
// });

// console.log(fullName);

// const sortYear = inventors.sort(function (a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// console.table(sortYear);

// const liveYear = inventors.sort(function (a, b) {
//   const aYear = -a.year + a.passed;
//   const bYear = b.passed - b.year;

//   if (aYear < bYear) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.table(liveYear);

const number = [1, 2, 3, 4, 5, 6];

const n = number.reduce(function (a, b) {
  console.log(a, b);
  return a + b;
}, 0);

console.log(n);
