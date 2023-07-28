const frutas = [];

const fruta = prompt("FERIA MARKET ¿Que fruta desea comprar?");

frutas.push(fruta);

while (confirm("¿Desea agregar otra fruta?")){
    const fruta = prompt("¿Que fruta desea comprar?");
    frutas.push(fruta);
}

console.log("Compraste: ");
for (const fruta of frutas){
    console.log(fruta);
}

