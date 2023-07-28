/* Destructuring Objects

    La sintaxis de desestructuración es una expresión de JavaScript que
permite desempacar valores de arreglos o propiedades de objetos en distintas variables.
*/

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["Cobarde", "Tímido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmón",
                caliente: "pollo",
            },
        },
    },
};

const nombreGato = gato.nombre;
console.log(nombreGato);

const {nombre, duerme, edad, enemigos} = gato;
console.log(nombre);
console.log(duerme);
console.log(edad);
console.log(enemigos);


// ANIDADOS

const {
    otros: {amigos},
} = gato;
console.log(amigos);


// La destructuring también sirve para Array, solo reemplazar por []

const [agua, perro] = enemigos;
console.log(agua);
console.log(perro);