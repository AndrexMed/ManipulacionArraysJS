//Transformar Arreglo - Forma tradicional con ciclo for...
const arreglo = [1,2,3,4,5]
const newArreglo = []

for (let index = 0; index < arreglo.length; index++) {
    const element = arreglo[index];
    newArreglo.push(element + "++")
}
console.log("Original_for: "+arreglo)
console.log("NewArreglo_for: "+newArreglo)

//Metodo "map"
const newArray2 = arreglo.map(hola => hola + "++")

console.log("Original_map: "+arreglo)
console.log("NewArray_map: "+newArray2)

//Renderizando en base al ejercicio anterior(forEach)...
//Creamos el objeto
const Plaza = [
    {Producto: "Cripy", Precio: 2000, Agotado: true},
    {Producto: "Perez", Precio: 5000, Agotado: false}
]

//Traemos el objeto div del html...
const div = document.querySelector("#metodoMap")

//Implementando el metodo map...
//Generamos el nuevo array implementando el metodo map en base al array padre, para imprimirlo de forma directa y no en cada iteracion como en el forEach...
const list = Plaza.map(plazas => { 
    return `<li>${plazas.Producto} - ${plazas.Precio} - <input type="checkbox" ${plazas.Agotado ? 'checked' : ''}/></li>`
})
//Como list es un array y lo necesito pasar a texto para mostrarlo en el html utilizo el join que lo que hace es concatenar las posiciones del arreglo, volviendolo haci un "String"
div.innerHTML = list.join("")


//Ejercicio propuesto, Recibir un array y devolverlo * 2

//Solucion 1.
const numeros = [1,2,3,4,5]
const divNumeros = document.querySelector("#numeros")

function multiplicarArray(arrayNums){
    return arrayNums.map(prueba => prueba * 2) //Prueba hace referencia a los elementos del array "arrayNums"
}
const resultado = multiplicarArray(numeros)
console.log(resultado + " - Imprimiendo desde solucion 1")

//Solucion 2.
function multiArray2(arreglo){
    return arreglo.map(iterador => iterador*2) //Iterador hace referencia a los atributos y valores del array "arreglo"
}
console.log(multiArray2(numeros) + " - Imprimiendo solucion 2")