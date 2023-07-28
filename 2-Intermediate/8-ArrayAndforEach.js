/* El metodo forEach() ejecuta la funcion indicada una vez por cada elemento del array */

let frutas = ["manzana", "sandia", "pera"];
frutas.forEach(fruta => console.log(fruta));

frutas.forEach((fruta, index) => { // con index muestro el indice de cada elemento en el array
    console.log(index);
    console.log(fruta);
})