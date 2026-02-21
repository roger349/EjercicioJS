
const element=[1,2,3,4,5,6,7,8,9,10];

// con con funcion reduce()

s = element.reduce((sum,e)=>sum=sum+e);

console.log("guardando en variable s : " + s)
console.log("sin guardar en variable: " + element.reduce((sum,e)=>sum=sum+e))

// con for each

let sum = 0; 

element.forEach(n=>sum=sum+n)

console.log("usando for Each: " + sum)