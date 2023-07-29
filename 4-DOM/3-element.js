// element: eventos disponibles para los elementos HTML

const h1 = document.querySelector("#tituloWeb");

console.log(h1.className);
console.log(h1.id);
console.log(h1.style);
console.log(h1.tagName);
console.log(h1.textContent);

h1.textContent = "nuevo texto";
h1.style.backgroundColor = "red";
h1.style.color = "white";

/* 
Algunos metodos ->

    - addEventListener: Registra un controlador de evento para un tipo de evento específico en un elemento.

    - appendChild: Inserta un nodo así como el último nodo hijo de este elemento.

    - hasAttributes: Verifica si el elemento tiene o no algún atributo.

*/