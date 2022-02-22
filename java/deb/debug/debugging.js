const people = [
  { name: "Tamim", cool: true, country: "bangladesh" },
  { name: "Babar", cool: true, country: "Pakistan" },
  { name: "maliga", cool: false, country: "srilanka" },
];

people.forEach((person, index) => {
  //   console.group(`${person.name}`)
  //   console.log(person.cool)
  //   console.log(person.country)
  // console.groupEnd(`${person.name}`)
});

//   console.table(people)
// Console Methods

// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doALotOfStuff() {
  // console.group('doing some stuff');
  // console.log('Hay')
  // console.warn("hello")
  // console.error("hello")
  // console.groupEnd('doing some stuff')
}

function doctorize(name) {
  console.count(`running doctorized  ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet("Wes"));
  console.log(name);
}
function bootstrap() {
  go();
}
bootstrap();
const button = document.querySelector(".bigger");
button.addEventListener("click", function (e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "text/plain",
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
