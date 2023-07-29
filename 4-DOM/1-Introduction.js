/* 
    DOM 

    El modelo de objeto de documento (DOM) es una interfaz de programación para los documentos HTML. Facilita una representación
estructurada del documento y define de qué manera los programas pueden acceder, al fin de modificar, tanto su estructura, estilo y contenido. 

Una página web es un documento. Éste documento puede exhibirse en la ventana de un navegador o también como código fuente HTML.

*/

// DOCUMENT -> sirve como punto de entrada al contenido de la pagina (El arbol DOM)

console.log("holamundo");

console.log(document); //Punto de entrada al contenido de la pagina

console.log(document.title);
console.log(document.querySelector('body').innerHTML);// Obtener el contenido de la pagina (innerHTML)-> accede al html interno de la etiqueta
console.log(document.domain); //dominio

/*
ALGUNOS METODOS: 
Document.getElementsByClassName(String className)
Document.getElementsByTagName(String tagName)
Document.getElementById(String id)
Document.querySelector(String selector)
Document.querySelectorAll(String selector)
Document.createDocumentFragment()
Document.createElement(String name)
*/


//########### getElementById ############

console.log(document.getElementById("tituloWeb"));
console.log(document.getElementById("tituloWeb").textContent); //devuelve el texto interno
console.log(document.getElementById("tituloWeb").innerHTML); //devuelve el html interno

/* DOMContentLoaded: el navegador HTML está completamente cargado y el árbol DOM está construido, 
pero es posible que los recursos externos como <img> y hojas de estilo aún no se hayan cargado. */

document.addEventListener("DOMContentLoaded", () => {
    console.log(document.querySelector("h1"));
});

//############## querySelector ##############

// El primer elemento que encuentre
console.log(document.querySelector(".text-danger"));

// Todos
console.log(document.querySelectorAll(".text-danger"));

// Todo lo que esté en "container"
console.log(document.querySelectorAll(".container .text-danger"));

