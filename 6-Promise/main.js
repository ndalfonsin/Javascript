/* Las promesas en JavaScript son un mecanismo para trabajar con operaciones asincrónicas de manera más
legible y estructurada. Son objetos que representan un valor que puede estar disponible ahora, en el 
futuro o nunca. La principal ventaja de las promesas es que nos permiten manejar el flujo de código 
asincrónico de forma más ordenada, evitando el anidamiento excesivo de callbacks y mejorando la 
legibilidad del código. */

Promise.resolve(2)
    .then(valor => valor + 1)
    .then(valor => console.log(valor)); // 3

// pero podemos hacerla fallar para demostrar la utilidad de manejo de errores

Promise.reject(2) //Al utilizar reject lo que hacemos es que salte todos los then directo al catch
    .then(valor => valor + 1)
    .then(valor => console.log(valor))
    .catch(e => console.error(e)); // 2 EN FORMATO ERROR

    


