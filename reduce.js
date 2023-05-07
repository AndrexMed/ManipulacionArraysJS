//Con el metodo reduce, como lo dice su nombre reducimos todos los elementos a UNO, no devuelve un nuevo arreglo....
//Ejercicio: Sumar todos los item de un arreglo.

const numeros = [2,4,6,8]

//For tradicional
let suma = 0; //Variable que va acumular...
for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    suma = suma + element
}
console.log("For_tradicional: "+suma)

//Reduce                    acum,item             //El 0 para iniciar la variable "acum"
const rta = numeros.reduce((suma,item) => suma + item, 0)
console.log("reduce: "+rta)

//Cuando el valor inicial de "suma" es 0, no es necesario ponerselo como en el ejercicio anterior.
const rta2 = numeros.reduce((suma, item) => suma + item)
console.log("reduce 2: "+rta2)