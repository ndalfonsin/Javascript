const carrito = [];
const frutas = [];

const fruta = prompt("FERIA MARKET ¿Que fruta desea comprar?");

frutas.push(fruta);

while (confirm("¿Desea agregar otra fruta?")){
    const fruta = prompt("¿Que fruta desea comprar?");
    carrito.push(fruta);
}

console.log("Compraste: ");
carrito.forEach((fruta, index) => (
    console.log(`${index + 1}: ${fruta}`)
));


