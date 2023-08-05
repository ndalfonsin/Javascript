/* DOM -> es todo el arbol HTML (representacion) Estandar de como ver, cambiar o eliminar elementos html*/

// const nuevoElemento = document.createElement("h1");
// nuevoElemento.textContent = "Hola desde el DOM";
// console.log(nuevoElemento);

const parrafo = document.getElementById('text');
console.log(parrafo.innerHTML); // Intro a DOM

window.onload = () => {}; //Para esperar que cargue el html antes de consultar el js

parrafo.innerText = "Texto actualizado"; //ACTUALIZA SOLO EL TEXTO
parrafo.innerHTML = '<li>elemento</li>'; //ACTUALIZA TODO EL ELEMENTO HTML 





