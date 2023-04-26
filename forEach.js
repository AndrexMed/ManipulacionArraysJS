//Recorriendo un arreglo.
// Ciclo for tradicional...
const letras = ["a","b","c","d"];

for (let index = 0; index < letras.length; index++) {
    const element = letras[index];
    console.log("for Tradicional "+element)
}

//Con Metodo forEach
letras.forEach (item => console.log("Imprimiendo con forEach: "+item));

/*--------------------------------------------------------*/
//Ejercicio clase. Renderizando...

//Creamos un objeto
const products = [
    {titulo: "Hamburguesa", precio: 10},
    {titulo: "Perro", precio: 5}
]

//Seleccionamos el elemento del html
const app = document.querySelector("#app");

//Agregando titulo al ejercicio manipulando el dom
const titulo1 = document.createElement("h3")
titulo1.textContent = "Ejercicio clase."
app.appendChild(titulo1)
app.style.border = "1px solid black"
app.style.margin = "5px"

//Imprimimos los elementos del objeto, dentro de app(div), y dentro de una lista (li))
products.forEach(product => { //product hace referencia a los atributos y propiedades del arreglo...
app.innerHTML += `<li>${product.titulo} - ${product.precio}</li>`
})

//Ejercicio propueto
//Si agotados es true imprimir el boton(check) como true... sino como false...
//Creamos el objeto:
const Plaza = [
    {Producto: "Bareto", Precio: 2000, Agotados: true},
    {Producto: "Blunt", Precio: 5000, Agotados: false},
    {Producto: "Exotico", Precio: 10000, Agotados: true}

]

//Traemos el elemento html a js:
const divEjercicio = document.querySelector("#EjercicioPropuesto")

//Agregando un titulo al ejercicio mediante el DOM
const titulo2 = document.createElement("h3")
titulo2.textContent = "Ejercicio Propuesto"
divEjercicio.style.border = "1px solid red"
divEjercicio.appendChild(titulo2)

//Imprimimos los elementos, obteniendo "divEjercicio" como padre, y le insertamos etiquetas (li), con los elementos del arreglo...
Plaza.forEach(probando => {
    divEjercicio.innerHTML += `<li>${probando.Producto} - ${probando.Precio} - <input type="checkbox" ${probando.Agotados ? 'checked' : ''}/>`
})