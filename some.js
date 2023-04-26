//El metodo some(), sirve para encontrar al menos UN elemento que cumpla con una condicion dada...devuelve true o false.

//Determinar si un elemento del array es par....
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10]

//Con ciclo for tradicional...
let respuesta = false
for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i]
    if (element % 2 === 0) {
        respuesta = true
        break // Para frenar el ciclo cuando encuentre el primer true
    }
}
console.log("for_Tradicional: " + respuesta) //Retorna true ya que cumple.

//SOME
const rta = numbers.some(item => item % 2 === 0)
console.log("metodo_Some: " + rta)

//Metodo some(),Con objetos...
const orders = [
    {
        customerName: "Giovanni",
        total: 60,
        delivered: false,
    },
    {
        customerName: "El Gio",
        total: 120,
        delivered: true,
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

const rta2 = orders.some(item => !item.delivered) //Puedo agregar mas condiciones....
console.log("rta2_objetos: " + rta2)
// Retorna "true", ya que el if anterior pregunta: SI item.delivered : esta en false, y hay un  elemento con el delivered en false...


//Ejercicio 2: Agenda de citas, donde al momento de agendar una nueva cita, NO PUEDE coincidir con una ya agendada...
const dates = [
    {
        startDate: new Date(2021, 1, 1, 10), //10am
        endDate: new Date(2021, 1, 1, 11),  //11am
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15), //3pm
        endDate: new Date(2021, 1, 1, 15, 30), //3:30pm
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20), 
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];
const newAppointment = { // Nueva cita a agendar
    startDate: new Date(2021, 1, 1, 10), //10am
    endDate: new Date(2021, 1, 1, 10, 30), //10:30am
};
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')
//Importamos esta libreria que nos ayuda para encontrar las fechas que se crucen...
//Previamente se ejecuto "npm i date-fns", en la consola para poder utilizarla....
//Fuente : https://date-fns.org/v2.24.0/docs/areIntervalsOverlapping

const comprobarCruceFecha = (nuevaFecha) => { //Aqui recibe el parametro "newAppointment"
    return dates.some(fecha => { //fecha es el iterador de los items dentro del array "dates"
        return areIntervalsOverlapping( //Al llamar esta funcion(libreria) nos pide 2 parametros que serian las fechas a comprobar....
            {start: fecha.startDate, end: fecha.endDate}, //este "fecha" son los items del arreglo "dates"
            {start: nuevaFecha.startDate, end: nuevaFecha.endDate} //nuevaFecha es el parametro que entra como "newAppointment"
        )
    })
}
console.log(comprobarCruceFecha(newAppointment)) // retorna true ya que la la nueva fecha "newAppointment", la hora se cruza con otra ciya que ya se encuentra agendada...