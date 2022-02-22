const form = document.querySelector(".form")

const cardShow = document.querySelector(".card")


// array stroge
const items =[];

// function
function handleCard(event){
    event.preventDefault()
    const name = event.currentTarget.user.value;

    // trim not alwo
    if(!name.trim())return;
    // obj push to array
    const item ={
        name1:name,
        id: Date.now(),
        doc:"Made by SaaLman sourv",
        
    };
    items.push(item);
    console.log(items);
    cardDisplay()

    
};
// card html
function cardDisplay(){
    
    const html = items.map((item)=>`   
    <div class="main-card">
    <h1 class="">${item.name1}</h1>
    <p class="item">Id number:${item.id}<p>
    <p class="item-two">${item.doc}<p>
    </div>
    `).join("")

    cardShow.innerHTML=html;

}
// card html end

form.addEventListener("submit",handleCard)