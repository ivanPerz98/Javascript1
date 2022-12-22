
//IMPORTO LA FUNCIONES QUE SE NECESITA
import {suma,cuadrado} from '../ModulosES6/matematicas/basicas.js'
const sum = suma(8,2)
console.log(sum)

//IMPORTO TODAS LAS FUNCIONES QUE SE TENGA EN EL MODULO Y LO ASIGNO A UN NOMBRE
//import * as ModulosMatematicas from '../ModulosES6/matematicas/basicas.js'
//const sum = ModulosMatematicas.suma(4,2)


/*------------------------------------------------------------------------------------*/

import personajes from './SNK/personajes.js'
personajes.forEach(valor=>{
    console.log(`${valor.nombre} ${valor.apellido} `)
})