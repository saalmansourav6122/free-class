const player =[
    {id: 114, age: 12, nick:"a"},
    {id: 214, age: 12, nick:"b"},
    {id: 121, age: 12, nick:"c"},
    {id: 124, age: 12, nick:"d"},
];

for(let i =0; i <player.length; i++){
    console.log(player[i].id)
};

// array
player.forEach((a,b,c)=>{
    console.log(a.nick);
}
);

// string to number

function bill(a , b){
    const n = parseInt(a);
    const m = parseInt(b);
    const result= n + m;
    return result; 
}
console.log(bill(5,"55"))

// for loop 55=***

for(let i = 50; i <=55; i++){
    if(i==53){
        console.log("**");
    }else{
        console.log(i);
    }
};





