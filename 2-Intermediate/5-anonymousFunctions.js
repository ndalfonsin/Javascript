/* En js usualmente no necesitas nombrar tus funciones, especialmente cuando se pasa
una funcion como argunmento a otra funcion.*/

//########## FUNCION DECLARATIVA #############

// Retorna un numero aleatorio entre 0(incluido) y 1(incluido)
function getRandom(){
    return Math.random();
}

// Retorna un numero aletaroio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max){
    return Math.random() * (max - min) + min;
}

// Retorna un entero aleatorio entre min (incluido) y un max (incluido)
function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

console.log(getRandom());
console.log(getRandomArbitrary(1,11));
console.log(numeroAleatorio(1,11));

//############ FUNCION ANONIMA EXPRESADA EN UNA VARIABLE ##############

const miNumero = function(min,max){
    return Math.floor(Math.random() * (max-min) + min);
}

console.log("Funcion anonima: "+miNumero(1,11));