//FECHAS

const hoy = new Date()

const anyo =hoy.getFullYear() //OBTIENE EL AÑO ACTUAL
const mes = hoy.getMonth() + 1 //OBTIENE EL MES ACTUAL ( 0 - Enero , 11 - Diciembre)
const dia = hoy.getDate() //OBTIENE EL DIA ACTUAL

console.log(`${dia}/${mes}/${anyo}`) //17/12/2022 

const ayer = new Date(2022,11,16)

console.log(ayer)
console.log(hoy)

console.log(ayer < hoy)