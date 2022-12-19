//SETS  --> conjunto de datos unicos y no ordenado
const array=[1,3,2,2,3,4,5,5,2,3,"Hola",{id:7}]
const SetArray=new Set(array)

console.log(array) //[ 1, 3, 2, 2, 3, 4, 5, 5, 2, 3, 'Hola', { id: 5 } ]
console.log(SetArray)  //Set { 1, 3, 2, 4, 5, 'Hola', { id: 5 } }

//Metodos de Sets

//.add()

SetArray.add(9)
console.log(SetArray) //Set { 1, 3, 2, 4, 5, 'Hola', { id: 5 }, 9 }

//.delete()

SetArray.delete("Hola")
console.log(SetArray) //Set { 1, 3, 2, 4, 5, { id: 5 }, 9 }

//.clear() ===> elimina todos los elementos del set

/*
SetArray.clear()
console.log(SetArray)//Set {  } 
*/

//.has()

//Set { 1, 3, 2, 4, 5, { id: 7 }, 9 }

console.log(SetArray.has(5)) //true
console.log(SetArray.has(8)) //false

//.size
console.log(SetArray.size) //7

SetArray.forEach(valor =>{
    console.log(valor)
})

//pasar de set a un array

const set_to_array=[...SetArray]
console.log(set_to_array)//[ 1, 3, 2, 4, 5, { id: 7 }, 9 ]
