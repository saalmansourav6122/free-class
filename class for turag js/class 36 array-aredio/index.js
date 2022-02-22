// Some data we can work with

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

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

//   1. Filter the list of inventors for those who were born in the 1500's

// 2. Give us an array of the inventor first and last names
// 3. Sort the inventors by birthdate, oldest to youngest

// 4. Sort the inventors by years lived

// 5.Sort the people alphabetically by last name

let addminData = [];

const root = document.querySelector(".root");

const firstName = inventors.map(function ({ first, desc, last, year }) {
  const n = `<div class="name">
        <h1>${first} ${last}</h1>
        <p>${desc}</p>
        <p>${year}</p>
        <button class="btn">details</button>
  </div>`;

  return n;
});

const m = firstName.join("");

root.innerHTML = m;
function handleCard(e) {
  console.log(e.currentTarget);
}
const btns = document.querySelectorAll(".btn");
btns.forEach((btn)=> {
  btn.addEventListener("click", handleCard);
});
