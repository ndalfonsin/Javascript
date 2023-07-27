/* El Json tiene un formato similar que el de un objeto en js, debe estar encapsulado en comillas dobles
podemos transformarlo con prettier (ya instalado). 
simulamos que el contenido viene de la base de datos

tenemos la api fetch, que nos permite traer los datos del json, a modo de simular una consulta a la base de datos
el fetch devuelve una promesa.*/


console.log("hi");

fetch("datos.json").then((res) =>{
    console.log(res);
});

/*
Response {type: 'basic', url: 'http://127.0.0.1:5500/datos.json', redirected: false, status: 200, ok: true, …}
body: (...)
bodyUsed: false
headers: Headers {}
ok: true
redirected: false
status: 200
statusText: "OK"
type: "basic"
url: "http://127.0.0.1:5500/datos.json"
[[Prototype]]: Response
*/


/*
Como los datos que obtenemos son promesas, es necesario al resultado redirijirlo nuevamente
con un then. El achivo json es un string.
*/

fetch("datos.json").then((res) =>{
    res.json().then((data) =>{
        console.log(data);
    })
});

//otra forma de escribir esto es:
fetch("datos.json")
    .then((res) =>{
        if(!res.ok) {
            throw new Error("Error 404"); // para mostrar el codigo de error
        }
        return res.json();
    })
    .then((data) => 
        data.forEach((element) => {
            data.innerHTML += element;
        }))
    .catch((err) => console.log(err.message))
    .finally(()=> {
        console.log('hola')
    });

//el json es un string y no puede leerlo javascript, por ende es necesario convertirlo

const stringJson = '[{"ok":true}]';
console.log(JSON.parse(stringJson)[0].ok);

//for each
let arr = [];

arr.forEach((el) => {
    console.error(el);
})

