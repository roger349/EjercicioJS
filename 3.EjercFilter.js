const element=[1,2,3,4,5,6,7,8,9,10];

const arreglo = element.filter(e => e % 2 ===0);

console.log("sin const: " + element.filter(e => e % 2===0));

console.log("usando const: " + arreglo);