/* Recorrer un objeto: 


//############### For..In ####################

La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas

Dado que for...in está construido para iterar propiedades de objeto, no se recomienda su uso con arreglos y 
opciones como Array.prototype.forEach() y existe for...of, ¿cuál podría ser el uso de for...in?

Es posible que se utilice de forma más práctica con fines de depuración, ya que es una forma fácil de comprobar
las propiedades de un objeto (mediante la salida a la consola o de otro modo)

for (const propiedad in gato) {
    console.log(gato[propiedad]);
}

*/

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
};

for (const prop in gato) {
    console.log(gato[prop]);
}


// ############### Object.values() ###################

console.log(Object.values(gato)); // Devuelve un array con los valores correspondientes a las propiedades de un objeto


// con forEach()

Object.values(gato).forEach((item) => console.log(item));

