const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.adsx3wt.mongodb.net/miapp?retryWrites=true&w=majority`)

const User = mongoose.model('User',{ //modelo user, 2 parametros, nombre y objeto javascript con la forma de los documentos
    username: String,
    edad: Number,
})

//Crear un modelo
const crear = async () => {
    const user = new User({
        username: 'Chanchito triste', 
        edad: 45,
    })
    const savedUser = await user.save()//promise
    console.log(savedUser)
}
//Buscar todos los usuarios
const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}
//Buscar por nombre de usuario
const buscar = async () => {
    const user = await User.find({username: 'Chanchito triste'})//busca todos los elementos que cumplan con esa condicion
    console.log(user)
}
//Buscar por nombre de usuario uno solo
const buscarUno = async () => {
    const user = await User.findOne({username: 'Chanchito triste'})//devuelve el primero que aparece
    console.log(user)
}
//Actualizar un recurso en la base de datos
const actualizar = async () => {
    const user = await User.findOne({username: 'Chanchito feliz'})
    console.log(user)
    user.edad = 30
    await user.save()
    console.log(user)
}
//Eliminar un recurso
const eliminar = async () => {
    const user = await User.findOne({username: 'Chanchito triste'})
    console.log(user)
    await User.deleteOne({ _id: user._id });
    console.log('Elminado con exito!')
}


// crear()
// buscarTodo()
// buscar()
// buscarUno()
// actualizar()
// eliminar()
