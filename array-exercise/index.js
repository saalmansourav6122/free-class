const peoples = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: "07/07/1978",
    department: "Development",
    salary: 45000,
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: "02/04/1989",
    department: "Development",
    salary: 35000,
  },
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: "11/01/1985",
    department: "Marketing",
    salary: 38000,
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: "12/07/1991",
    department: "Sales",
    salary: 40000,
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: "03/15/1988",
    department: "Development",
    salary: 41000,
  },
  {
    firstName: "Madison",
    lastName: "Marshall",
    DOB: "09/22/1980",
    department: "Sales",
    salary: 32000,
  },
  {
    firstName: "Ava",
    lastName: "Pena",
    DOB: "11/02/1986",
    department: "Development",
    salary: 38000,
  },
  {
    firstName: "Gabriella",
    lastName: "Steward",
    DOB: "08/26/1994",
    department: "Marketing",
    salary: 46000,
  },
  {
    firstName: "Charles",
    lastName: "Campbell",
    DOB: "09/04/1977",
    department: "Sales",
    salary: 42000,
  },
  {
    firstName: "Tiffany",
    lastName: "Lambert",
    DOB: "05/11/1990",
    department: "Development",
    salary: 34000,
  },
  {
    firstName: "Antonio",
    lastName: "Gonzalez",
    DOB: "03/24/1985",
    department: "Office Management",
    salary: 49000,
  },
  {
    firstName: "Aaron",
    lastName: "Garrett",
    DOB: "09/04/1985",
    department: "Development",
    salary: 39000,
  },
];

// Exercises

// 1) What is the average income of all the peoples in the array?

const avgIncom =
  peoples.reduce(
    (total, currentVal) => total + parseInt(currentVal.salary),
    0
  ) / peoples.length;
console.log(avgIncom);

// 2) Who are the peoples that are currently older than 30?

const olderThan30 = peoples.filter(
  (person) => new Date().getFullYear() - new Date(person.DOB).getFullYear() > 30
);
console.log(olderThan30);

// 3) Get a list of the people's full name (firstName and lastName).

const fullName = peoples.map(
  (person) => `${person.firstName} ${person.lastName}`
);
console.log(fullName);

// addition avobe result in an array of strings
const fullName2 = peoples.map((persion) => ({
  ...persion,
  fullName: `${persion.firstName} ${persion.lastName}`,
}));
console.log(fullName2);

// 4) Get a list of peoples in the array ordered from youngest to oldest.
const youngestToOldest = peoples.sort(
  (a, b) => new Date(a.DOB) - new Date(b.DOB)
);

// 5) How many peoples are there in each department?
const dep = peoples.reduce((obj, person) => {
  if (!obj[person.department]) {
    obj[person.department] = 0;
  }
  obj[person.department] += 1;
  return obj;
}, {});
console.log(dep);

const vichels = [
  "car",
  "truck",
  "bus",
  "car",
  "truck",
  "bus",
  "bus",
  "car",
  "car",
];

const indVichel = vichels.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(indVichel);

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log(isAdult);
// Array.prototype.every() // is everyone 19 or older?
const allAdult = people.every(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log(allAdult);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find((comment) => comment.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex((comment) => comment.id === 823423);
console.log(index);

// V2l1QnkweEdyVTVhL0ZkNDJtdmhpdz09

// find the lowest number from an array
