const mongoose = require('mongoose');


//Definimimos el modelo de usuario
const User = mongoose.model('User' ,{ 
    email : {type: String, required: true},
    password : {type: String, required: true},
    salt : {type: String, required: true},
})

//Exportamos el modulo
module.exports = User