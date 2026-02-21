//Contar propiedades: Función que retorne cuántas propiedades tiene un objeto sin usar un
//contador manual.

const object = {a:1,b:2,c:3,d:4,e:5};

const array = Object.keys(object);

console.log("la cantidad de propiedades del objeto son: " + array.length)