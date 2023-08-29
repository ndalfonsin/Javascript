# Getting Started with Create React App

    npx create-react-app mi-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# React Notes

## Estructura de archivos

### .git

Contiene las configuraciones necesarias para que podamos gestionar nuestra aplicacion en un repositorio. 

### Node_modules

Contiene todas las dependencias necesarias para que podamos ejecutar nuestra aplicacion. 

### Public 

Se encuentran todos los archivos publicos para los usuarios. Ej index.html

manifest.json => en este archivo se guardara toda la informacion relativa a la pagina, nombre corto y largo, iconos, start url, etc. 

robots.txt => permite que nuestra pagina sea mas facil de indexar para los robots

### Package-lock.json

Contiene todas las dependencias que instalamos.

### Package.json

Contiene aun mas configuraciones de la aplicacion. 

### SRC

Los unicos dos archivos importantes para que una web funcione correctamente son ./src/index.js y ./public/index.html

## Como se renderiza nuestra app en el DOM? Index.js

Necesitamos especificar que contenido es el que queremos renderizar y en donde lo vamos a hacer (getElementById)


    #./src/index.js
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );

### reportWebVitals();

Nos sirve para poder obtener todos los rendimientos de la pagina web y asi poder pasarselo a servicios como google analytics o herramientas que hayamos construido. 

# Primeros pasos

## Renderizar contenido sin utilizar jsx

Podemos renderizar contenido sin la necesidad de usar jsx, cosa que no es recomendable, pero se haria de la siguiente forma: 
    
    #./src/index.js

    const x = React.createElement('p', null, 'Hola mundo')
    ReactDom.render(
        x, document.getElementById('root')
    )

Tambien podriamos directamente colocar codigo jsx como parametro para el render

    #./src/index.js

    ReactDom.render(
        <p>Hola mundo</p>, document.getElementById('root')
    )

Para hacer contenido dinamico, lo que podriamos hacer es pasar como parametro una arrow function

    #./src/index.js

    const x = () => <p>hola mundo</p>

    ReactDom.render(
        <X />, document.getElementById('root')
    )

## Pasar contenido dinamico al render

    #./src/index.js

    const Li = ({ children, estado}) =>
        <li>{children} {estado}</li>

    const X = () => 
        <ul>
            <Li apellido={'Doe'}>Jane</Li>
        </ul>

    ReactDom.render(
        <X />, document.getElementById('root')
    )

El {children} se utiliza para pasarle el valor de la propiedad 'Nombre' del Li a los elementos hijos (li). Hace referencia a todos los elementos que les pasamos a nuestros componentes entre sus etiquetas. 

Si le agregamos la propiedad estado (totalmente customizable) a nuestro Li, podemos pasarselo al componente Li mediante object destructuring y hacer uso de 'estado'


