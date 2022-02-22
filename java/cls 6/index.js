function cToF(f){
    const res = ((f-32)*5)/9;
    return res;
}
const result = cToF(200)
console.log(result);

const res2 =(a)=> (a+52);
console.log(res2(5));

const cToF1=(f)=>((f-32)*5)/9;
console.log(cToF1(200))

const ok={
  ma : "shully",
  son : function(f){
      const man = ((f-32)*5)/9
      return man
  }
}
console.log(ok.son(200))

// (function (f){
//     const res = ((f - 32) * 5 / 9);
//     return res;
//     console.log(res);
// }(8))

(function(yu){
    const res6 = yu + 5;
    return res6;
})(10);