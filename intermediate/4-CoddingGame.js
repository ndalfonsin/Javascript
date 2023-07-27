/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * Crear un cuadrado con "O" de la altura y ancho que el usuario pida.
 **/

const height = parseInt(readline());
const width = parseInt(readline());

let line = "O".repeat(width);


// Write an answer using console.log()
// To debug: console.error('Debug messages...');
let i = 0;
while (i < height){
    console.log(line);
    i++;
}
