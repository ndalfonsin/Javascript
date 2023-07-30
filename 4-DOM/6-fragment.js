/* FRAGMENT

    -> documentFragment()
    -> createDocumentFragment()

-La interfaz documentFragment representa un objeto de documento minimo que no tiene padre.
-Se utiliza como un version ligera de document que almacena un segmento estructura de documento
compuesta de nodos como un documento estandar
-la gran dif se debe al hecho de que el fragmento de documento no forma parte de la estructura del 
documento activo.
-Los cambios realizados en el fragmento no afrectan al documento (incluso en reflow) ni inciden
en el rendimiento cuando se realizan cambios

*/

const listaDinamica = document.querySelector("#listaDinamica");
const arrayElementos = ["Peru", "Bolivia", "Argentina", "Uruguay"];

const fragment = document.createDocumentFragment();

arrayElementos.forEach((pais) => {
    const li = document.createElement("li")
    li.textContent = pais;
    fragment.appendChild(li);
})

listaDinamica.appendChild(fragment);

arrayElementos.forEach((pais) => {
    const newNode = document.createElement("li");
    newNode.textContent = pais;
})
const referenceNode = fragment.firstChild;
console.log("primer newNode", referenceNode);
fragment.insertBefore(newNode, referenceNode);