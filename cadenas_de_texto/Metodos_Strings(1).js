//METODOS DE STRINGS

//LONGITUD DE UN STRINGS
let str = "Soy un String"
console.log(str.length) //13 caracteres contando espacios

// OBTENER PARTES DE CADENAS DE CARACTERES

//METODO SLICE
let slice_str =str.slice(4,13)
console.log(slice_str)  // DE LA POSICION 4 A LA 13 ==> un String

//METODO SUBSTRING
let substring_str =str.substring(3,10)
console.log(substring_str) //DE LA POSICION 3 A LA 10 ==> un Str


//REMPLAZO DE UNA CADENA POR OTRA

// .replace(cadena a remplazar, cadena nueva) ==> actua primera coincidencia
let cadena = "Hello my name is Eren Jaeger"
console.log(cadena.replace("Eren Jaeger","Levi Ackerman"))


let cadena_larga="Lugo tubo un tubo, pero el tubo que lugo tubo se le partio, y lugo para poder recuperar el tubo que lugo tubo,lugo tuvo que comprar un nuevo tubo."

//USANDO LA EXPRESION REGULAR /cadena/g --> (global) remplazara todas las coincidencia con el metodo .replace()

console.log(cadena_larga.replace(/tubo/g,'tuvo'))  // --> Lugo tuvo un tuvo, pero el tuvo que lugo tuvo se le partio, y lugo para poder recuperar el tuvo que lugo tuvo,lugo tuvo que comprar un nuevo tuvo. 


