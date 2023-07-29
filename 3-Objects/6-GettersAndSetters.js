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

/*
-por valor: Cuando asignamos valores primitivos (Boolean, Null, Undefined, Number, String y Symbol), el valor asignado es una copia del 
valor que estamos asignando.

-por referencia: Pero cuando asignamos valores NO primitivos o complejos (Object, Array y Function), JavaScript copia “la referencia”, 
lo que implica que no se copia el valor en sí, si no una referencia a través de la cual accedemos al valor original.
*/

// Primitivos (por valor)

let a = "hola";
let b = a;
console.log(b); //hola

// Si cambiamos el valor de a, b sigue siendo "hola"

a = "chao";
console.log(b); //hola

// No primitivos: (por referencia)

let c = ["hola"];
let d = c;
console.log(d); //hola

let e = ["hola"];
let f = e; 

f.push("chao");

console.log(f);// ['hola', 'chao']

//Lo mismo pasa con los objetos

const aa = {
    nombre: "hola",
};

const bb = aa;

aa.nombre = "chao";

console.log(bb); // { nombre: 'chao'}


