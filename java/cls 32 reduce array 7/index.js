const x =[3,4,5,67,2,4,5];

const y = x.reduce(function(a,b){
    console.log(a,b)
    const o = a+b;
    return o;
},10);

console.log(y)

const q = [3,4,5,67,2,4,5];

const w = q.reduce((a,b)=> {
    console.log(a,b)
    const l =a+b
    return l},20)

console.log(w);