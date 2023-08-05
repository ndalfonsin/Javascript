/* 
    Eventos

En JavaScript, la interacción con el usuario se consigue mediante la captura de los eventos que éste produce. 
Un evento es una acción del usuario ante la cual puede realizarse algún proceso (por ejemplo, el cambio del valor 
de un formulario, o la pulsación de un enlace).


    addEventListener

Registra un evento a un objeto en específico. El Objeto especifico puede ser un simple elemento en un archivo, 
el mismo documento , una ventana o un XMLHttpRequest.

    target.addEventListener(tipo, listener);

tipo: tipo de evento a escuchar.
listener: El objeto que recibe una notificación cuando un evento de el tipo especificado ocurre. Debe ser un objeto 
implementando la interfaz EventListener o solo una function en JavaScript.

*/

//############## CLICK ################

const boton = document.querySelector("#boton");
const parrafo = document.querySelector("#parrafo");

boton.addEventListener("click", () => {
    parrafo.textContent = "Nuevo texto desde evento";
});


