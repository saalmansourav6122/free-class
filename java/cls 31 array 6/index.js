
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

  const listName = inventors.filter(function(e){
      if(e.year == 1855){
          return true;
      }else{
          false;
      }
  });
  console.log(listName)

let newInventors = inventors.slice(0, inventors.length - 12);
newInventors = [...newInventors, inventors[inventors.length - 12]];
console.log(newInventors);


const n = inventors.find((e)=>
   e.last.includes("Einstein")
);
console.log(n);

const oldestToYoungest = inventors.find(function(b){
const oldYoungest = b.year;
console.log(oldYoungest);
});



