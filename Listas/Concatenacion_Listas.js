//CONCATENAR LISTA

//METODO lista.concat(lista2)
const lista1=[1,2,3,4]
const lista2=[5,6,7,8]

console.log(lista1.concat(lista2)) //[1,2,3,4,5,6,7,8]
console.log(lista1) //no cambia la lista1 despues de la concatenacion

//FACTOR DE PROPAGACION

const lista3=['A','B','C']
const lista4=['D','E','F']

const lista5=[...lista3,...lista4]

//CON LOS ... SE IMPRIME SIN CORCHETES Y ES MAS FACIL DE CONCATENAR VARIOS ELEMENTOS
console.log(...lista5)
