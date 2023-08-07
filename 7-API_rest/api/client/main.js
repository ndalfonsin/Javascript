const loadInitialTemplate = () => {
    const template = `
        <h1>holamundo</h1>
        <form id="user-form">
            <div>
                <label>Nombre</label>
                <input name="name" />
            </div>
            <div>
                <label>Apellido</label>
                <input name="lastname" />
            </div>
            <button type="submit">Enviar</button>
        </form>
        <ul id="user-list"></ul>
    `
    const body = document.getElementsByTagName('body')[0]
    body.innerHTML = template
}

const getUsers = async () => {

}

const addFormListener = () => {
    const userForm = document.getElementById('user-form')
    userForm.onsubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(userForm)
        /* 
            console.log(formData.get('name')) => una forma de obtener el nombre, y por igual el lastname
        
        si tuvieramos mas campos, el metodo de usar el formData.get(??) deja de ser util, ya que para cada input del formulario
        deberiamos utilizar este metodo. Ademas de que esto debe ser transformado en un objeto */

        //Nueva alternativa
        const data = Object.fromEntries(formData.entries()) //transformarlo en un objeto JSON
        // console.log(data) //objeto JSON
        
        //Crear usuarios

        await fetch('/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            }
        })

        //Limpiar el formulario
        userForm.reset()
        getUsers()
    }
}

window.onload = () => {
    loadInitialTemplate()
    addFormListener()
}