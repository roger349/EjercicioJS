//Concatenador: Une un array de strings en una sola frase usando reduce
const arrayString = ["L","o","g","i","c","a"];

const palabra = arrayString.reduce((s,p)=>p=p+s);

console.log("la palabra es: " ,palabra);