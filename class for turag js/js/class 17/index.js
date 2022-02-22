// Working with class
const pic = document.querySelector(".cool");

pic.classList.add("open");
pic.classList.remove("goone");
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle("round");
}
pic.addEventListener("click", toggleRound);
