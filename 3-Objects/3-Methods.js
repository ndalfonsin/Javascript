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