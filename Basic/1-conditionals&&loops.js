//######## Variables #########
let numero1 = 3;
const numeroConst = 10;
  
numero1 = 5; // toma el valor que se le reasigna
//numeroConst = 5;  No se puede reasignar un valor a una variable constante

console.log(numero1);
console.log(numeroConst);


//######### Concatenacion ###########
console.log("Mi numero es: " + numero1);

//######### Condicionales ###########
if (numero1 == 5){
    console.log("La variable es de tipo let");//<--
}else{
    console.log("La variable es de tipo const");
}

//resultados booleanos en comparaciones
let resultado = numero1 == 7; 
console.log(resultado); //false 5 != 7

/*
 == compara si son el mismo valor (diferente tipo no afecta -> int(6) == str(6))
 === compara si sus valores son los mismos y si son de igual tipo
 && and  EJ-> (miNumero > 2 && miNombre = "Jane")
 || or  EJ-> (miNumero > 2 || miNombre = "Pamela")  
*/

//If concatenados
let edad = 15;
//edad = 21;
//edad = 70;
let edadTope = 65;

if (edad < 18){
    console.log("Eres menor de edad, no puedes obtener tu licencia de conducir");
}else if (edad > 18 && edad < edadTope){
    console.log("Eres mayor de edad, puedes conducir");
}else if (edadTope<edad){
    console.log("Revaza la edad tope");
}

// ############## Ciclos ################

let i = 0

while(i < 3){
    console.log(i);
    i++;
}

for(i=0; i<3; i++){
    console.log(i);
}