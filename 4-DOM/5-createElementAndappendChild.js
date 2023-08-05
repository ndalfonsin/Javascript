/*
    createElement -> el metodo document.createElement() crea un elemento HTML especificado por su tagname

    ejemplo para crear un <li> : 
*/

const li = document.createElement("li");
li.textContent = "Item desde javascript";
console.log(li);

/* appendChild -> Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado

<ul id="listaDinamica">
    <li>Elemento estático</li>
</ul>

*/

//Elemento donde vamos a incorporar el li
const listaDinamica = document.querySelector("#listaDinamica");

//crear el li
const liHTML = document.createElement("li");

// Agregando el texto al li
li.textContent = "Item desde js";

//Incorporacion al ul
listaDinamica.appendChild(liHTML);

/*
-Si el child hace una referencia a un nodo existente en el documento, el método appendChild se mueve de su posición actual 
a su nueva posición.
-Ésto significa que el nodo no puede estar en dos puntos del documento de manera simultánea.
-Así que si el nodo ya contiene un padre, primero es eliminado, y después se añade a la nueva posición.
-Se puede usar Node.cloneNode para hacer una copia del nodo antes de añadirlo debajo de su nuevo elemento padre.

*/


/* CONSIDERACIONES DE SEGURIDAD

No es extraño que el innerHTML sea usado para introducir texto en una pagina web. Esto añade un riesgo de 
seguridad.

*/

//ejemplo 1
var name = "Juan";
// asumiendo que 'el' es un elemento de HTML DOM
el.innerHTML = name; // sin peligro

// ...

//ejemplo 2
name = "<script>alert('Soy Juan con una alerta molesta!')</script>";
el.innerHTML = name; // fíjese que el texto es molesto y no es realmente lo que se esperaba.

/* Por esa razón, cuando solo tratamos con texto, es recomendable no usar innerHTML, sino Node.textContent, 
que no interpretará la cadena pasada como HTML, sino como texto plano. */

