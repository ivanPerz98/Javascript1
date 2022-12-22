
//1ra forma
//const basicas = require('./matematicas/basicas')
//const suma = basicas.suma

//forma mas actual
const {cuadrado,suma} = require('./matematicas/basicas')
console.log(suma(3,5))//8
console.log(cuadrado(2,2)) //4