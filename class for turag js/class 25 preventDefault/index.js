const bluehost = document.querySelector(".bluehost");

// console.log(bluehost);

// bluehost.addEventListener("click", function (event) {
//   console.log(event);
//   console.log("clicked");
//   event.preventDefault();
// });

const signupForm = document.querySelector('[name="signup"]');

function handleSubmit(event) {
  console.log("Hay!!");
  event.preventDefault();
  const name = event.currentTarget.name.value;
  const email = event.currentTarget.email.value;
  console.log(email);
}

signupForm.addEventListener("submit", handleSubmit);

// submit
// keyup
// keyDown
// fouus
