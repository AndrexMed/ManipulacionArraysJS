//El metodo filter(), nos sirve para buscar varios o uno o ningun elementos en un array que cumplan con una condicion, creando un nuevo arreglo con los datos encontrados...

//Ejemplo: Buscar las palabras que tengas menos de 5 caracteres en un array de strings...

const planets = ["Saturno", "Marte", "Jupiter", "Mercurio","Luna"]

//For tradicional
const newArray = []   // Array auxiliar
for (let index = 0; index < planets.length; index++) {
    const element = planets[index];   //
    if (element.length <= 5) {  //
        newArray.push(element)//Agregamos cada elemento que cumpla la condicion al newArray...
    }
}
console.log("Array original : " + planets) 
console.log("NewArray_for: " + newArray)

//Metodo filter...
const rta = planets.filter(item => item.length <= 5)
console.log("Array_Filter: " + rta)

//Filter con objetos...
const orders = [
    {
        customerName: "Giovanni",
        total: 60,
        delivered: false,
    },
    {
        customerName: "El Gio",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
]

const rta2 = orders.filter(iterador => !iterador.delivered && iterador.total <= 100)
console.log("Prueba con objeto: \n",rta2) //Encuentra un elemento que cumple con las dos condiciones...

//Buscador con filter...

const search = (query) => { //Funcion que recibe un parametro "consulta", para buscarla en el arreglo...
    return orders.filter(item => {
        return item.customerName.includes(query) //El metodo includes sirve para hacer una comparacion...
    })
}
console.log(search("Gio"))
//Retorna un arreglo nuevo con dos valores que cumplieron con la condicion en la busqueda...

//Ejercicio propuesto, buscador que no distinga mayus y minus...
const Personas = [
    {Nombre : "Giovanni", Apellido: "Alzate", Edad: 27}
]
const buscador = (query) => {
    return Personas.filter(item => {
        return item.Nombre.toString().toLowerCase().includes(query.toLowerCase())
    })
}
console.log(buscador("gio"))