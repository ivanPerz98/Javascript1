/*
Crea un archivo llamado fechas.js que contenga las siguientes líneas
- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

//- La fecha de hoy
const hoy = new Date()
console.log(hoy) // Mon Dec 19 2022 16:23:25 GMT-0300 (GMT-03:00)

//- La fecha de tu nacimiento
const nacimiento = new Date(1998,3,4)

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const esMasTarde = hoy  > nacimiento
console.log(esMasTarde) // true

//- Una variable que contenga el día de tu nacimiento
const diaNacimiento = nacimiento.getDate()
console.log(diaNacimiento)

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento= nacimiento.getMonth()
console.log(mesNacimiento) //3

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyoNacimiento= nacimiento.getFullYear()
console.log(anyoNacimiento) //1998

