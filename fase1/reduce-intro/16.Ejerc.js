//Suma con reduce: Multiplica todos los números de un array usando reduce.
const arrayNum = [1,2,3,4,5,6,7,8,9,10];

const producto = arrayNum.reduce((n,p)=>p=p*n);

console.log("el producto total es: " + producto);