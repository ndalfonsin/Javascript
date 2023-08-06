const express = require('express');
const user = require('./user.controller')
const app = express();
const port = 3000;

app.get("/", user.list) // 200 para devolver datos al cliente

app.post("/", user.create)

app.get('/:id', (req, res) => { //dato variable que va a aparecer en la ruta
    console.log(req.params)
    res.sendStatus(200).send(req.params) //solo vamos a hacer el envio del estado
})

app.put('/:id', user.update)

app.patch('/:id', user.update)

app.delete('/:id', user.destroy)
/* vamos a saber a que metodo estamos apuntando cuando llamemos el fetch con el 
method, especificando si es put, patch o delete */

app.listen(port, () => {
    console.log("Arrancando la app")
})

