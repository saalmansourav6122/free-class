const a = Array.of(1,2,3,4,5,6)
console.log(a);

const b = Array.of(..."tamim");
console.log(b);

// const range2 = Array.from({length:8})
// console.log(range2)

function range1(s,e){
const range = Array.from({length:e-s+1},function(item,index){
    return index+s;
});
return range;
}

const c =range1(40,70);
console.log(c);

const prices = {
    hotDog: 453,
    burger: 765,
    sausage: 634,
    corn: 234,
    cake: 284,
  };

  console.log(Object.entries(prices))

console.log(Object.keys(prices));

console.log(Object.values(prices));


Object.entries(prices).forEach(function([k,v]){
    // const g = prices;
    console.log(k,v);
    // console.log(g);
})