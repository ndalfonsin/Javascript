let perro = {
    nombre:"Scott",
    color:"Cafe",
    edad: 5,
    macho: true,
    ladrar: function(){
      return(`${this.nombre} puede ladrar`)
    }
 
 };
 
 console.log(perro.ladrar()); // Scott puede ladrar


 const gato = {
  nombre: "Valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  comer: function () {
      console.log("Ahora está comiendo");
  },
};

gato.comer();

// REDUCIDO

const gatoR = {
  nombre: "Valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  comer() {
      console.log("Ahora está comiendo");
  },
};

gatoR.comer();

// CON PARAMETROS

const gatoP = {
  nombre: "Valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  comer(comida) {
      return "Ahora está comiendo: " + comida;
  },
};

console.log(gatoP.comer("pez"));

// METHODS con resultados de objetos

const gatoM = {
  nombre: "Valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  comer(comida) {
      return `${nombre} está comiendo ${comida}`; //Lo busca en el objeto global
  },
};

console.log(gatoM.comer("pez"));

//################## THIS ##################

const gatoTHIS = {
  nombre: "Valiente",
  duerme: true,
  edad: 10,
  enemigos: ["agua", "perros"],
  comer(comida) {
      return `${this.nombre} está comiendo ${comida}`;
  },
};

console.log(gatoTHIS.comer("pez"));