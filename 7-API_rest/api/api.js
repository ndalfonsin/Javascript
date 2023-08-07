const express = require('express');
const user = require('./user.controller')
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
app.use(express.json()) //middleware

/*(req, res) => { user.get} */

dotenv.config();
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.adsx3wt.mongodb.net/miapp?retryWrites=true&w=majority`)



app.get("/users", user.list) // 200 para devolver datos al cliente
app.post("/users", user.create)
app.get('/users/:id', user.get)//dato variable que va a aparecer en la ruta
app.put('/users/:id', user.update)
app.patch('/users/:id', user.update)
app.delete('/users/:id', user.destroy)
/* vamos a saber a que metodo estamos apuntando cuando llamemos el fetch con el 
method, especificando si es put, patch o delete */

//Servir archivos
app.use(express.static('client'))


app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(`${__dirname}/index.html`)
})

app.get('*', (req, res) => {
    res.status(404).send('Esta pagina no existe')
})

app.listen(port, () => {
    console.log("Arrancando la app")
})



