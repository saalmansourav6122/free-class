// const d = new Date();

// function handleTime() {
//   console.log("hello");
// }
// const setTime = setInterval(handleTime, 7000);

const res = document.querySelector(".result");
console.log(res);

function updateTime() {
  const d = new Date();
  res.innerHTML = `
<h1 class="color">${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}</h1>
`;
}
const time = setInterval(updateTime, 1000);

// clearInterval(time);
