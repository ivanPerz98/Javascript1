//LISTAS : CONJUNTOS DE DATOS QUE PUEDEN CONTENER DIFEReNTES TIPOD

let lista = [1,'a',true,'2.6',7.8, {id:5}]
console.log(lista) //[1,'a',true,'2.6',7.8,{id:5}]

//para acceder al valor de un array es a travez de su posicion
console.log(lista[5]) //{id:5}
console.log(lista[2]) //true

//AÑADIR NUEVOS ELEMENTOS
//.push() .unshift() ---> cambian el valor del array, no hace falta declrar otra variable para que tenga efecto con el valor nuevo 
//SE PUEDE PASAR VARIOS VALORES

lista.push(6,2,"añadido al final") //LO AGREGA AL FINAL DE LA LISTA
console.log(lista) //[1,'a',true,'2.6',7.8,{id:5},6,2"añadido al final"]


lista.unshift("se añade al principio",{nombre:"Eren"}) //LO AGREGA AL PRINCIPIO DE LA LISTA
console.log(lista) //["se añade al principio",{nombre:"Eren"},1,'a',true,'2.6',7.8,{id:5},2]

//ELIMINAR ELEMENTOS DEL ARRAY

//.pop() .shift() //ESTOS METODOS AL IGULAL QUE LOS DE AÑADIR TAMBIEN CAMBIAN EL ARRAY COMPLETO

let lista2=[1,2,3,4,5,6]

//ELIMINAR VALOR AL FINAL
console.log(lista2.pop()) // --->devuelve el valor eliminado ===> 6 
console.log(lista2) // [1,2,3,4,5,6]
//ELIMINAR VALOR AL PRINCIPIO

console.log(lista2.shift()) //--->devuelve el valor eliminado ===> 1
console.log(lista2) //[2,3,4,5,6]

//METODO PARA ELIMINAR Y AÑADIR VALOR AL ARRAY
//.splice(indice,cantidad de veces a eliminar o añadir desde el indice elegido,valor_añdadir)

let lista3=[3,4,5,6,7,8,9,10]
//añadir elementos desde la posicion 2
lista3.splice(2,0,"se añadio este","y este tambien despues del numero 4")
console.log(lista3)// [3,4,"se añadio este","y este tambien despues del numero 4",5,6,7,8,9,10]


lista3.splice(2,4) //despues de indice 2 , elimina los 4 subsiguientes ---> []
console.log(lista3) //[3,4,7,8,9,10]