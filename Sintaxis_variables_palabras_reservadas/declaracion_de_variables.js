//Declaraciond de variables 

//var nombre variable= valor a asignar

//VAR SE PUEDE ACCEDER DE MANERA GLOBAL NO IMPORTA DE DONDE ESTE 
var numbero = 7

if (numbero == 7 ){
    var otronumbero=5
    console.log(otronumbero) //IMPRIMIRA 5
}

console.log(otronumbero) //SEUIRA VALIENDO 5 

//LET nombre variable= valor a asignar
//LET SU ALCANCE ES DEL BLOQUE DE DONDE ESTE 

numero=7

if (numero == 7 ){
    let otronumero=5
    console.log(otronumero) //IMPRIMIRA 5
}
otronumero=8
console.log(otronumero) //IMPRIMIRA 8 ,POR EL LET SOLO ESTARA DISPONIBLE EL VALOR 7 DENTRO DEL IF 

