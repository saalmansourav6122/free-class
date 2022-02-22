function incToCm(inc,cm=2.54){
    const res=inc * 2.54;
    return res;
}
const finalRes = incToCm(5);
console.log(finalRes);


function cmToMm(cm, mm=10){
    const res1 = cm * mm;
    return res1;
}
console.log(cmToMm(8));


function feetToM(feet, m=0.30548){
    console.log(feet * m)
}
feetToM(7);

// Celcius to Farenheit
function celToFar  (c,f){
    const res2=(c/5)==(f-32)/9;
    return res2;
}
console.log(celToFar(2))