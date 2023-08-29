const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt'); //Utilizada para realizar validaciones del usuario
const dotenv = require('dotenv');
const User = require('./user')

dotenv.config();
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.adsx3wt.mongodb.net/miapp?retryWrites=true&w=majority`)

//App con express
const app = express()

//indicamos que utilice el formato json para establecer conexiones con la api
app.use(express.json());


//EXPRESSJWT init
const validateJwt = expressJwt({ secret: process.env.STRINGTOKEN, algorithms: ['HS256']})


/* Endpoint REGISTER -> vamos a recibir un objeto Json con "user" y "password"
y solo vamos a sacar el nombre de usuario, buscarlo en la base de datos.
si usuario existe, procede al login, si es que no existe, se crea un usuario.
*/

const singToken = _id => jwt.sign({ _id}, process.env.STRINGTOKEN)

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

        /*
            tomaremos un objeto {_id} y lo encriptaremos para que tenga 
            un formato de jsonwebtoken. Se lo enviaremos al usuarios y lo
            asignara en sus headers, de donde lo obtendremos para asignarle
            el id desencriptado y buscarlo en la base de datos
        */
              
        //firmar nuestros jsonwebtoken
        //const singed = jwt.sign({ _id: user._id}, '###secret###') //Esto debe estar oculto
        const singed = singToken(user._id)
        res.status(201).send(singed)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

//Endpoint de inicio de sesion
app.post('/login', async (req, res) => {
    const { body } = req
    try{
        // Agarramos las credenciales de user y pass; la utilizamos para buscarlo en la base de datos. 
        // Si no existe User y Pass incorrecto
        // Si existe compararemos la pass de la peticion con la de la base de datos, Si es exitosa, devolvemos el jwt firmado

        const user = await User.findOne({ email: body.email })
        if (!user) {
            res.status(403).send('Usuario y/o contraseña incorrectos.. Reintente')
        } else {
            const isMatch = await bcrypt.compare(body.password, user.password)
            if (isMatch) {
                const singed = singToken(user._id)
                res.status(200).send(singed)
            } else {
                res.status(403).send('Usuario y/o contraseña incorrectos.. Reintente')
            }
        }
    }catch(err){
        res.status(500).send(err.message)
    }
})


/* Middlewares
En el contexto de Express.js, un middleware es una función que tiene acceso al objeto de solicitud (request),
al objeto de respuesta (response) y a la siguiente función en el ciclo de solicitud-respuesta de la aplicación. 
Los middlewares se utilizan para realizar diversas tareas como la validación de datos, la autenticación de usuarios, 
el registro de solicitudes, la manipulación de encabezados y más. 
Pueden ser encadenados juntos para formar un flujo de procesamiento.

app.get('/middlewares', (req, res, next No olvidarse del next) => { //Flujo 1
    req.user = {id: 'Jane'}
    next()
}, (req, res, next No olvidarse del next) => { //Flujo 2
    console.log(req.user)
    res.send('ok')
})
*/ 

app.get('/middlewares', validateJwt , (req, res, next /*No olvidarse del next*/) => { //Flujo 2
    console.log(req.user)
    res.send('ok')
})


// LISTEN
app.listen(3000, () => {
    console.log('Listening in port 3000');
})



