const cardButtons = document.querySelectorAll(".card button");
const innerModal = document.querySelector(".inner-modal");
const outerModal = document.querySelector(".outer-modal");
function handleCardButtonClick(event) {
  const btn = event.currentTarget;
  console.log(btn);
  // const card = document.querySelector(".card");
  const card = btn.closest(".card");
  const imgSrc = card.querySelector("img").src;
  const name = card.querySelector("h2").textContent;
  const desc = card.dataset.description;

  innerModal.innerHTML = `
     <img src=${imgSrc.replace("200", "400")} alt=${name}>
     <p>${desc}</p>
  `;

  outerModal.classList.add("open");
}

cardButtons.forEach((cardButton) =>
  cardButton.addEventListener("click", handleCardButtonClick)
);

outerModal.addEventListener("click", function (event) {
  console.log(event.target);
  const target = !event.target.closest(".inner-modal");

  console.log(target);
  if (target) {
    outerModal.classList.remove("open");
  }
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    outerModal.classList.remove("open");
  }
});
