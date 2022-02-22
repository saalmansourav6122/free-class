const btns = document.querySelectorAll(".btn");

function handleClick(event) {
  console.log("Button Clicked");
  console.log(event.currentTarget);
  console.log(event.target);
  //   event.stopPropagation();
}

btns.forEach((btn) =>
  btn.addEventListener("click", handleClick, { capture: false })
);

window.addEventListener("click", function () {
  console.log("Window clicked");
});
