//CONVERSION DE MAYUSCULAS Y MINUSCULAS

//toLowerCase() - toUpperCase()

let cadena1="hello"
let cadena2 = "WORLD" 

console.log(cadena1.toUpperCase()) //HELLO
console.log(cadena2.toLowerCase()) //world


//CONCATENAR DOS STRINGS

console.log(cadena1.concat(" ",cadena2)) //Hello WORLD
console.log(cadena1 + " " + cadena2) //Hello WORLD

//ELIMINAR ESPACIOS AL PRINCIPIO Y AL FINAL
let cadena3="          HOLA SOY EREN JAEGER      "
console.log(cadena3.trim().length) 

//ELIMINAR ESPACIOS AL INICIO
console.log(cadena3.trimStart()) //26

//ELIMINR ESPACIOS AL FINAL
console.log(cadena3.trimEnd().length) //30

//OBTENER EL CARACTER EN CIERTA POSICION

let cadena4="Brasil se fue eliminado y se fue del mundial" 
           //012345
console.log(cadena4.charAt(4)) //i 


//OBTENER LA 1ra POSICION DE UNA PALABRA
console.log(cadena4.indexOf('fue')) //10

//OBTENER LA ULTIMA POSICION DE UNA PALABRA 
console.log(cadena4.lastIndexOf('fue'))  //29