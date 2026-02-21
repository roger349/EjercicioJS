const opciones=["azul","alan","noVip","michy","rojo","isVip","autoVip"];

const objeto=[{nombre:"luis", propiedad:"noVip"},
              {nombre:"juan", propiedad:"noVip"},
              {nombre:"ale", propiedad:"noVip"},
              {nombre:"ely", propiedad:"noVip"},
              {nombre:"fred", propiedad:"isVip"},
              {nombre:"ana", propiedad:"noVip"}
            ];

console.log(opciones.some(o => o==="isVip"))

console.log(objeto.some(o => o.propiedad==="isVip"))

