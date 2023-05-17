//El método concat es inmutable y consiste en crear un nuevo array a partir de la unión de otros valores o arrays especificados como argumentos.

const elements = [1,2,3]
const otherElements = [4,5,6]

//Concetenando dos arrays con el ciclo for...

const newArray = [...elements] //Spread operator, para copiar los elementos del array sin la referencia en memoria...

for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element)
}

const rta = elements.concat(otherElements) //Concatenando con el metodo "concat"...

console.log("newArray with For: ",newArray)
console.log("Con el metodo Concat: ",rta)

//Mas ejemplos de tipos de uso del metodo Concat...
const numbers1 = [1,2,3,4]
const numbers2 = [5,6,7,8]
const numbers3 = [9,10,11,12]

const result1 = numbers1.concat("hola", "mundo")
const result2 = numbers1.concat(numbers2)
const result3 = numbers1.concat(numbers2, "hola")
const result4 = numbers1.concat(numbers2, numbers3)

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)