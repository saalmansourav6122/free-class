const longText = document.querySelector(".longText");
const shortText = document.querySelector(".shortText");
const result = document.querySelector(".result");

function handleText() {
  if (longText.value.indexOf(shortText.value) === -1) {
    result.innerHTML = `the ${shortText.value} was not found`;
  } else {
    result.innerHTML = `The  ${
      shortText.value
    } was found at location :${longText.value.indexOf(shortText.value)}`;
  }
}

shortText.addEventListener("keypress", handleText);
