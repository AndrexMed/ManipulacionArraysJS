//El metodo every() es lo opuesto al some(), TODAS las condiciones tienen que cumpliar, solo retorna true o false.

//Ejercicio: 
const array = [8,16,32,64,128]

//For tradicional:
let flag = true
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element >= 150){
        flag = false
    }
}
console.log("for_Tradicional: "+flag)

//every()
const rta = array.every(item => item <= 150)
console.log("every(): "+rta)

//Ejercicio propuesto:
const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const rta2 = team.every(item => item.age <= 15)
  //Le estoy diciendo que si TODAS las edades son <= 15, sino false...
  console.log("Ejericio propuesto: "+rta2)
//Retorna false ya que hay una edad > 15.

//Playground - Retornar si todos los numeros de un arreglo son pares y su tamañano es mayor que 0
const numeros = [2,4,6]

const checkArray = (array) => {
  if(array.length > 0){
    return array.every(item => item % 2 === 0)
  }else{
    return false
  }
}
console.log(checkArray(numeros))
//Retorna true ya que cumple con la condicion de que TODOS los item del arreglo sean pares...