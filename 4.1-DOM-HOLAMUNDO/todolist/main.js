
// window.onload = () => {
//     const form = document.getElementById('todo-form'); //referencia al form
//     form.onsubmit = (e) => { //reemplazamos la funcion en onsubmit
//         e.preventDefault(); //prevenir que no refresque la pagina
//         const todo = document.getElementById('todo'); //referencia a todo
//         const todoText = todo.value; // obtengo el valor
//         todo.value = ''; // reemplazo el valor por un campo vacio
//         todos.push(todoText);
//         console.log(todoText);
//         const todoList = document.getElementById('todo-list');
//         todoList.innerHTML = '';
//         for (let i = 0; i < todos.length; i++){
//             todoList.innerHTML += '<li>' + todos[i] + '</li>';
//         }
//     }
// }

//simplificacion con .map
const todos = localStorage.getItem('todos') || [];

render = () => {
    const todoList = document.getElementById('todo-list');
    const todosTemplate = todos.map(t => '<li>' + t + '</li>'); //itera por la cantidad de elementos que tiene
    todoList.innerHTML = todosTemplate.join(''); //como es un arreglo 
    console.log(todosTemplate);


    //ELIMINAR ELEMENTOS CON .SPLICE
    //arr.splice(0,1) elimino 1 elemento

    const elementos = document.querySelectorAll('#todo-list li');
    // para transformar en array => Array.from()
    elementos.forEach((elemento, indice) => {
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento);
            todos.splice(indice, 1);
            render()
        })
    })
}


window.onload = () => {

    const form = document.getElementById('todo-form'); //referencia al form
    form.onsubmit = (e) => { //reemplazamos la funcion en onsubmit
        e.preventDefault(); //prevenir que no refresque la pagina
        const todo = document.getElementById('todo'); //referencia a todo
        const todoText = todo.value; // obtengo el valor
        todo.value = ''; // reemplazo el valor por un campo vacio
        todos.push(todoText);
        const todoStrings = JSON.stringify(todos);
        localStorage.setItem('todos', todoStrings);
        console.log(todoText);
        render();
    }
}
