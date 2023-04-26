const item = [1, 2, 2, 3, 4, 5]

const rta = item.reduce((obj, item) => { // obj es la variable acumuladora, item los elementos del array...
    if (!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] = obj[item] + 1
    }
    return obj
}, {}) //Se inicializa la variable acumuladora  "obj{}" vacio...

console.log(rta)

//Example 2
const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Andrea",
        level: "medium",
    },
    {
        name: "Zulema",
        level: "hight",
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "hight",
    },
];

//Concatenando...
const rta2 = 
data
.map(item => item.level) //Ya lo habiamos trabajado para obtener los datos de "level"
.reduce((obj, item) => { // obj es la variable acumuladora, item los elementos del array...
    if (!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] = obj[item] + 1
    }
    return obj
}, {})
console.log(rta2)

//Ejercicio propuesto:
//Crear una funcion que cuente cuantos valores estan repetidos, en rangos Ex: '1': 2  -  '2':2, ... '9':1
const numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,10,10]
const rta3 =
numeros
.reduce((obj, item) => { //"obj" es la variable que va almacenar los datos, en este caso un objeto..."item" == elementos del arreglo...
    if (item >= 1 && item <= 5) { // Si los cada elemento del array estan dentro del rango....
        obj["1-5"] += 1 //Se le va insertando a la variable acumuladora su respectivo dato...
    }else if(item >= 6 && item <= 8){
        obj["6-8"] +=  1
    }else{
        obj["9-10"] += 1
    }
    return obj  // Obligatoriamente tiene que retornar algo...
},{"1-5":0,"6-8":0,"9-10":0}) // Aqui se declara e inicializa la variable acumuladora "obj"

console.log(rta3) // 