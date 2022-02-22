function bill(a){
    const result = a+5;
    return result;   
}
console.log(bill(5));


(function(b){
    const result = 8+b;
    console.log(result)
    return result;

})(7);


const result = (a,b)=> a+b;
console.log(result(1,2));

const result1 ={
    name1:"sourav",
    id:(a,b)=> a+b,
}
console.log(result1.id(5,6));

for(let i=0; i<10; i++){
    console.log(i);
};

const name1=["sakib","asik","amirul"]
console.log(name1[2]);

for(let i = 0; i<name1.length; i++){
    console.log(name1[i])
};

const name2=[
    {
        id: "123",
        age: "12",
        year: "2018",
      },
      {
        id: "456",
        age: "12",
        year: "2019",
      },
      {
        id: "789",
        age: "12",
        year: "2020",
      },
      {
        id: "000",
        age: "12",
        year: "2021",
      },
      {
        id: "123",
        age: "12",
        year: "2018",
      },
      {
        id: "456",
        age: "12",
        year: "2019",
      },
      {
        id: "789",
        age: "12",
        year: "2020",
      },
      {
        id: "000",
        age: "12",
        year: "2021",
      },
]

console.log(name2.length);
for (let i =0 ; i<name2.length; i++){
    console.log(name2[i])
}
for (let i =0 ; i<name2.length; i++){
    console.log(name2[i].id)
}