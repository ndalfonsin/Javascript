let nombreUsuario = "Jane";
console.log("Bienvenido:" + nombreUsuario);

/*
Para escribir una horacion en multiples lineas si utilizamos las comillas simples o dobles
es necesario unar un \n
*/
console.log("\n"); //salto de linea
console.log("Buenos dias");
console.log("\n"); //salto de linea
console.log(nombreUsuario);

/* 
En cambio podemos utilizar las comillas invertidas para activar un template string
*/

console.log(`
buenos dias
${nombreUsuario}
`);

//EJEMPLO -> pasar variables strigs completamente a mayuscula
console.log(`Bienvenido ${nombreUsuario.toUpperCase()}`);

//Operador ternario
let estado = true;

console.log(`${(estado) ? true:false}`); // ${(variable_a_analizar) ? si_es_true : si_es_false}

//EJEMPLO ->
let estadoV = true;//
let estadoF = false;
const esV = "es verdadero";
const esF = "es falso";

console.log(`${(estadoV) ? esV : esF}`);
console.log(`${(estadoF) ? esV : esF}`);





