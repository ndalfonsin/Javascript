
/*
Arrays Const
    En el caso de los arrays y funciones que sean const, si podran ser mutables pero no reasignarle la declaracion
*/

const frutas = ["Banana"];
// NO!! -> const frutas = ["Sandia"]; 
frutas[1] = "Sandia";
let i = 0;

/* Push, pop, shift, unshift */

frutas.push("Pera"); //Agrega un nuevo elemento al final del array
frutas.unshift("Manzana"); //Agrega un nuevo elemento al inicio del array
frutas.pop();// elimina el ultimo elemento de un array
frutas.shift(); // elimina el primer elemento de un array

while (i < frutas.length){
    console.log(frutas[i++]);// ++i (Primero suma y luego lee) / i++ (Primero lee y luego suma)
    
}

