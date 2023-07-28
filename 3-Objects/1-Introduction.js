/*  JavaScript está diseñado en un paradigma simple basado en objetos.
    
    Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.
El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método. Los objetos son 
similares a los arreglos (arrays), excepto que en lugar de usar índices para acceder y modificar sus datos, accedes a 
los datos en objetos a través de propiedades (properties).
*/

//############## Objeto literal #################

const gato = {
    nombre: 'Sirius',
    duerme : true, 
    edad : 2,
    enemigos : ["agua","yo"]
}

//ACCEDER A LOS VALORES

    //Notacion de punto
    
    console.log(gato.nombre); //Sirius
    console.log(gato.duerme); //true
    console.log(gato.enemigos[0]); //agua

    //Notacion de corchetes(para recorrerlo):

    console.log(gato['nombre']);
    console.log(gato['edad']);
    console.log(gato['enemigos'][0]);

// CRUD (porpiedades)

    //Crear (create)
    gato.color = 'Gris';

    //Leer (read)
    console.log(gato); //object

    //Actualizar (update)
    gato.edad = 1;

    //Eliminar (delete)
    delete gato.duerme;

/* 
    hasOwnProperty

A veces es util comprobar si existe la propiedad de un objeto dado. Podemos utilizar el metodo
.hasOwnProperty(propname) para determinar si un objeto tiene una propiedad con ese nombre
Devuelve true or false

*/

console.log(gato.hasOwnProperty("nombre")); //true
console.log(gato.hasOwnProperty("salud")); //false



