const object={a:1,b:2,c:3,d:4,e:5}

// Objet.keys devuelve un array con las llaves del objeto
// Objet.keys devuelve un array con las llaves del objeto, este array se puede
// manipular con las funciones predeterminadas para arrays o cualquier otra funcion

// Listar llaves

const llaves = Object.keys(object); 

console.log("llaves del objeto: " ,llaves)

// Objet.values devuelve un array con los valores de las llaves del objeto, este array se puede
// manipular con las funciones predeterminadas para arrays o cualquier otra funcion

// Listar valores

const valores = Object.values(object);

console.log("valores de las llaves del objeto: " ,valores);