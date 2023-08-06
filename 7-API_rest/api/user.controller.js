const User = {
    list: (req, res) => {
        res.status(200).send('Hola mundo!');// 200 para devolver datos al cliente
    },
    create: (req, res) => {
        res.status(201).send('Creando');// 201 se creo exitosamente una entrada
    },
    update: (req, res) => {
        res.status(204).send('Actualizando');//solo vamos a hacer el envio del estado
    },
    destroy: (req, res) => {
        res.status(204).send('Destruyendo');//solo vamos a hacer el envio del estado
    },
    get: (req, res) => {
        res.status(200).send('Hola sin listar');
    }
}

module.exports = User //cuando exportemos este archivo en el app se nos creara el objeto User

