// Working with class
const pic = document.querySelector(".cool");

pic.classList.add("open");
pic.classList.remove("goone");
// console.log(pic.classList);
console.log(pic);

function toggleRound() {
  pic.classList.toggle("round");
  console.log("ki");
}
pic.addEventListener("click", toggleRound);
