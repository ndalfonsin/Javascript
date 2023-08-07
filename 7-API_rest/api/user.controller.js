const mongoose = require('mongoose');

const Users = mongoose.model('User', {
    name: { type: String, required: true, minLength: 3 },
    lastname: { type: String, required: true, minLength: 3 },
})


const User = {
    get: async (req, res) => {
        const { id } = req.params
        const user = await Users.findOne({ _id: id })
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
          }
        res.status(200).send(user);
    },
    list: async (req, res) => {
        const users = await Users.find()
        res.status(200).send(users);// 200 para devolver datos al cliente
    },
    create: async (req, res) => {
        // console.log(req.body) //para esto necesitamos ejecutar un middleware
        const user = new Users(req.body)
        const savedUser = await user.save()
        res.status(201).send(savedUser._id)// 201 se creo exitosamente una entrada
    },
    update: async (req, res) => {
        const { id } = req.params
        const user = await Users.findOne({ _id: id})
        Object.assign(user, req.body)
        await user.save()
        res.status(200)//solo vamos a hacer el envio del estado
    },
    destroy: async (req, res) => {
        const { id } = req.params
        const user = await Users.findOne({ _id: id})
        if (user){
            await user.deleteOne({ _id: user._id });
            console.log("Eliminado")
        }
        res.status(204).send('Destruyendo');//solo vamos a hacer el envio del estado
    },
}

module.exports = User //cuando exportemos este archivo en el app se nos creara el objeto User

