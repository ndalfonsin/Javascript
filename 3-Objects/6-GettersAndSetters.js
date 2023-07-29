/*
get: Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada.

set: La sintaxis set asocia la propiedad de un objeto a una función que será llamada cuando haya un 
intento de asignar valor a esa propiedad.

GET: Tenga en cuenta lo siguiente al trabajar con la sintaxis get:

Debe tener exactamente cero parametros.
No debe haber múltiples getters para una misma propiedad.

SET: Tenga en cuenta lo siguiente al trabajar con setters:

Debe tener exactamente un parámentro

*/

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
    get nombreMayuscula() {
        return this.nombre.toUpperCase();
    },
    set nuevoEnemigo(nuevo) {
        this.enemigos.push(nuevo);
    },
};

// GET
console.log(gato.nombreMayuscula);

// SET
gato.nuevoEnemigo = "batman";
console.log(gato.enemigos);

