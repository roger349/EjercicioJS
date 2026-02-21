//De pares a objeto: Usa Object.fromEntries para 
// convertir [['color', 'rojo'], ['talla', 'M']] en un objeto.

const listaP = [['marca', 'addidas'], ['color', 'rojo'], ['talla', 'M']];

const object = Object.fromEntries(listaP);

console.log("objeto:",object)