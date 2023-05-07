/*
El método join() une todos los elementos de un array en una cadena y devuelve esta cadena. Podemos pasarle cualquier elemento como separador que deseemos.
*/

//for Tradicional:
const elements = ["Water","Fire","Air"]

let rtaFinal = ''
let separator = '🔗'

for(let index = 0 ; index < elements.length ; index++){
    let items = elements[index]
    rtaFinal = rtaFinal + items + separator
}
console.log("for_Tradicional: ",rtaFinal)

//Ejercicio: Eliminar el ultimo separador en el ciclo for con for...
for(let index = 0 ; index < elements.length ; index++){
    let items = elements[index]
    if(index === items.length - 1){ //Si esta en la ultima posicion...
        rtaFinal = rtaFinal + items
    }else{
        rtaFinal = rtaFinal + items + separator
    }
}
console.log("for_Tradicion 2: ",rtaFinal)

//Con el metodo join()
const rta = elements.join("❗")
console.log("metodo_Join: ",rta)

//split() divide un objeto de tipo String en un array de cadenas mediante la separación de la cadena en sub-cadenas.
const titulo = "Manipulacion de arreglos con JavaScript"

console.log(titulo.split(" ").join("-").toLocaleLowerCase())


