//El método find() devuelve el primer elemento(COMPLETO) del array que cumpla con la condición dada Sino devuelve "undefined".

//Ejercicios:
//For tradicional
const pets = ["perro","gato","raton"]
let rta = undefined
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === "perro") {
        rta = element
        break
    }
}
console.log("for_Tradicional: "+rta)

//find()
const rta1 = pets.find(item => item === "perro")
console.log("metodo_find(): "+rta1)

//Ejercicio con objetos
const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const rta2 = products.find(item => item.id === "🍔")
  console.log("objeto: ",rta2) // Me retorna TODO el objeto en especifico.

  // El metodo "findIndex", me retorna la POSICION.
  const rta3 = products.findIndex(item => item.id === "🍔") 
  console.log("objeto en posicion: ",rta3)