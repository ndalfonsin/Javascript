/* 
    ARROW FUNCTIONS
Una expresion de funcion flecha es una alternativa compacta a una expresion de funcion tradicional
 */

const miNumeroFlecha = (max) => {
    return Math.floor(Math.random() * (max - 1) * 1);
}

console.log(miNumeroFlecha(11));

// REDUCCION 

const miNumeroFlechaRed = max => Math.floor(Math.random() * (max - 1)) + 1;
console.log(miNumeroFlechaRed(11));

// REDUCCION CON PARENTESIS
const miNumeroFlechaRed2 = max => (Math.floor(Math.random() * (max - 1)) + 1 );