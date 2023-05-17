const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const products2 = [
    { title: 'Perro', price: 121, id: '🌭' },
    { title: 'Crispetas', price: 121, id: '🍿' },
    { title: 'Salchipapas', price: 121, id: '🍟' },
];

const myProducts = [];
const myProducts2 = [];

const product = products.find(item => item.id === '🍔')

if(product){ // Si encuentra el producto lo almacena en un nuevo array.
myProducts.push(product)
}

//Como hacemos para que cuando insertemos un producto que encontro, lo elimine del array original?

const findIndexProduct = products.findIndex(item => item.id === '🍔') //Este metodo nos devuelve la posicion

if(findIndexProduct !== -1){ //Si no lo encuentra retorna -1, por eso lo condicionamos...
    myProducts2.push(products2[findIndexProduct])
    products2.splice(findIndexProduct, 1); //1er parametro la Posicion que vamos eliminar, el 2do Los elementos a eliminar
}

console.log(products2)
console.log(myProducts2)


console.log("products", products);

console.log("myProducts", myProducts);

console.log("-".repeat(10));

// Reto 1
// Eliminar un elemento sin borrarlo del la lista original.
// Solución: usar filter:
const reto1 = products.filter(item => item.id !== "🍕")
console.log(reto1)

//Como podriamos hacer una actualizacion de un dato en un array.

const productsV3 = [
    { title: 'Zana', price: 121, id: '🥕' },
    { title: 'Patata', price: 121, id: '🥔' },
    { title: 'Queso', price: 121, id: '🧀' },
];

const update = {
    id: "🧀",
    changes: {
        price: 200,
        description: "delicious"
    }
}
const findIndexProduct2 = productsV3.findIndex(item => item.id === update.id) //Este metodo nos devuelve la posicion
if(findIndexProduct2 !== -1){
    productsV3[findIndexProduct2] = {
        ...productsV3[findIndexProduct2],
        ...update.changes
    }
}

console.log(productsV3)