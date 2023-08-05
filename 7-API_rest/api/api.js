const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.status(200).send('Chanchito feliz') // 200 para devolver datos al cliente
})

app.post("/", (req, res) => {
    res.status(201).send('Creando Chanchito') // 201 se creo exitosamente una entrada
})
app.listen(port, () => {
    console.log("Arrancando la app")
})