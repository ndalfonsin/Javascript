const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const dotenv = require('dotenv');
const User = require('./user')

dotenv.config();
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.adsx3wt.mongodb.net/miapp?retryWrites=true&w=majority`)

//App con express
const app = express()

//indicamos que utilice el formato json para establecer conexiones con la api
app.use(express.json());

/* Endpoint REGISTER -> vamos a recibir un objeto Json con "user" y "password"
y solo vamos a sacar el nombre de usuario, buscarlo en la base de datos.
si usuario existe, procede al login, si es que no existe, se crea un usuario.
*/

app.post('/register', async (req, res) => {
    //obtenemos el cuerpo del request
    const { body } = req
    console.log({ body })
    
    //Manejo de errores
    try {
        //Busqueda del usuario
        const isUser = await User.findOne({ email: body.email })
        if (isUser) {
            return res.status(403).send('Usuario ya existente')
        }//no se pone el bloque del else, ya que el return no permite que se ejecute el resto del codigo
        
        //metodo de encriptacion de contraseña y creacion de usuario
        const salt = await bcrypt.genSalt()
        const hashed = await bcrypt.hash(body.password, salt)
        //asignacion de la contraseña al usuario
        const user = await User.create({ email: body.email, password: hashed, salt })

        res.send({_id: user._id})

    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

app.listen(3000, () => {
    console.log('Listening in port 3000');
})