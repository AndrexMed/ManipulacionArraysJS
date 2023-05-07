/*
includes() determina si una array incluye un determinado elemento, devuelve true o false según corresponda.
*/

//For tradicional:
const array = ['🍕','🍔','🍟','🌭','🍿']

let elementInArray = false
for(let index = 0 ; index < array.length ; index++){
    let element = array[index]
    if(element === '🍕'){
        elementInArray = true
        break //Si encuentra el elemento frena el ciclo.
    }
}
console.log("for_Tradicional: "+elementInArray)

//includes()
const rta = array.includes("🌭")
console.log("metodo_includes: "+rta)

//Ejercicio escribir una funcion que reciba como parametro un arreglo y una "query", y busque la query en el array...
const comidasRapidas = ["🌭","🍔","🍕"]

const rta1 = (array, query) => {
    return array.filter(item => item.includes(query))
}
console.log("Buscador: ",rta1(comidasRapidas, "🍕"))