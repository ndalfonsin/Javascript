const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.status(200).send('Chanchito feliz') // 200 para devolver datos al cliente
})

app.post("/", (req, res) => {
    res.status(201).send('Creando Chanchito') // 201 se creo exitosamente una entrada
})

app.put('/:id', (req, res) => { //dato variable que va a aparecer en la ruta
    res.sendStatus(204) //solo vamos a hacer el envio del estado
})

app.patch('/:id', (req, res) => { //dato variable que va a aparecer en la ruta
    res.sendStatus(204) //solo vamos a hacer el envio del estado
})

app.delete('/:id', (req, res) => { //dato variable que va a aparecer en la ruta
    res.sendStatus(204) //solo vamos a hacer el envio del estado
})

/* vamos a saber a que metodo estamos apuntando cuando llamemos el fetch con el 
method, especificando si es put, patch o delete */

app.listen(port, () => {
    console.log("Arrancando la app")
})

