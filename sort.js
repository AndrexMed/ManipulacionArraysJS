//El método sort es mutable y consiste en ordenar un array a partir de los valores Unicode de los caracteres y este retorna un array con la misma referencia en memoria que el original.

const months = ["March", "Jan", "Feb", "Dec"];
months.sort() //Ordena de acuerdo a la tabla ASCI
console.log(months)

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((x,y) => x-y)
console.log(numbers)

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

words.sort()
// words.sort((a,b) => a.localeCompare(b)) // Si el navegador fuera una version antigua toca usar esta funcion...
console.log(words)

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

orders.sort((a,b) => a.total - b.total) //Ordenando las compras de menor a mayor...
console.log(orders)