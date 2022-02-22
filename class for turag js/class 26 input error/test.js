const form = document.querySelector("form");

console.log(form);

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.name.value;
  const pi = document.querySelector(".pi");
  if (name.length <= 8) {
    pi.innerHTML = `all least put 8 character`;
  }
  if(name.length>=10){
    pi.textContent= "ok"
  }
}

form.addEventListener("submit", handleSubmit);
