//PRECISION
let a = 0.1
let b = 0.2 

console.log(a+b) //0.3000000000004  --> MALA PRECISION

console.log(Math.round((0.1+0.2)*100)/100) //PRECICION : 0.3

//REDONDEO DECIMALES

let c = 3.3
let d = c*3

console.log(d) //9.899999999

//.toFixed  ->  recibe como parametros la cantidad de numeros despues del punto, pero el resultado lo convierete en string

console.log(typeof(d.toFixed(2))) //STRING
console.log(d.toFixed(2)) //9.90


//toPrecision(x) --> devuelve la cantidad de digitos que se pasa por parametros

console.log(typeof(d.toPrecision(3))) //STRING
console.log(d.toPrecision(3)) //9.90