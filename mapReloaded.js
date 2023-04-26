//Map Reloaded...
//Creamos el objeto...
const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
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
];

//Imprimimos por consola el array original....
console.log("Arreglo original: ",orders)

//Almacenamos los "total" del arreglo....
const RTA = orders.map(item => item.total)

//Imprimimos los "totales"
console.log("RTA - Total: "+RTA)

//----------------------------------------------------------------------------

//Creamos otra variable donde le vamos crear otra propiedad al objeto...
// const RTA2 = orders.map(item => {
//     item.impuesto = .19
//     return item
// }) 
// console.log("RTA2: "+RTA2)
// console.log("Array Original: "+orders)

// Al hacer esto a la copia del array (RTA2), tambien modifica el orginal(orders), por la mutabilidad

//Para evitarlo, y poder realizar una copia y evitar la referencia en memoria, utilizamos el spread operator(...)

//-----------------------------------------------------------------------------------------------

//En este ejemplo al implementar el spread operator, tenemos una nueva referencia en memoria...y no afectamos el original.
const RTA3 = orders.map(item => {
    return {
        ...item,
        impuesto2: 0.19
    }
})
console.log("Array modificado: ",RTA3) //Imprimimos el arreglo modificado...
console.log("Array original: ",orders)  //Imprimimos el arreglo original (intacto...)

//Ejercicio propuesto
//Añadirle la propiedad Impuesto(19%),sumarlo con el precio de cada elemento al arreglo copia sin modificar el original...
const arreglo1 = [
    {Producto: "Televisor", Precio: 1000000},
    {Producto: "Celular", Precio: 2000000}
]

const newArreglo1 = arreglo1.map(item => {
    return {
        ...item,
        impuesto: parseInt(item.Precio * 0.19)
    }
})
console.log("Sin Iva: ",arreglo1)
console.log("Con Iva: ",newArreglo1)