const userInfo = document.querySelector(".userinfo")

const endPoint = " https://jsonplaceholder.typicode.com/users";

const myPromise = fetch(endPoint)
.then((response)=>{
    
    return response.json();
})
.then((date)=>{
    const n = date.map((d)=> `
    <div>
    <h1>${d.name}</h1>
    <h1>${d.phone}</h1>
    <h1>${d.email}</h1>
    `).join("");
    userInfo.innerHTML=n
    // console.log(n)
})
