// Objetos anidados

const gato = {
    nombre: 'Sirius',
    duerme: true,
    edad: 2,
    enemigos: ["agua", "yo"],
    otros: {
        amigos: ["Chatran", "Ruth"],
        favoritos: {
            frio: "trocitos",
            caliente: "Pollo"
        }
    }
}

// Acceder

console.log(gato.otros.amigos[0]);
console.log(gato.otros.favoritos.frio);

// ########### Encadenamiento Opcional #############

/* 

Optional chaining: El operador de encadenamiento opcional ?. permite leer el valor de una
propiedad ubicada dentro de una cadena de objetos conectados sin tener que validar expresamente que
cada referencia en la cadena sea valida

*/

console.log(gato.otros?.favoritos);


// PROPIEDADES

const frutas = ["sandía", "pera", "melon"];
console.log(frutas.length);

