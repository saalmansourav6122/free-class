// const sentence = "shes \
// good \
// \
// hel\
// ";
// const cool = `hello world
// hello world
// hello world`;
// console.log(cool);

// `template literal string`;
// concat
// var n = "tamim";
// var m = "sakib";
// console.log(m + " frist batsman " + n);
// console.log(`${m} frist batsman ${n}`);

// const st = "Hello";
// console.log(st.charAt(2));
// console.log(st.charCodeAt(0));
// console.log(st.replace("world", "ggggg"));
// console.log(st.trim("").toLocaleUpperCase());
// console.log(st.match("e"));
// console.log(st.indexOf("o"));

const textArea = document.querySelector(".txtArea");
const inp = document.querySelector(".inp");
const result = document.querySelector(".result");

function matchText() {
  var longText = textArea.value.indexOf(inp.value);
  if (longText === -1) {
    result.innerHTML = `That value was ${inp.value} not found`;
  } else {
    result.innerHTML = `That value ${inp.value}  was found loction ${longText} `;
  }
}
inp.addEventListener("keypress", matchText);
