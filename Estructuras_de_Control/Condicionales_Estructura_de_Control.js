//Condicionales ===> IF-ELSE    
//COMPARACIONES 

//SI ES TRUE O SI SE CUMPLE IMPRIMIRA LO DE IF SINO LO DEL ELSE
if (true) {
    console.log('Es  Verdadero');//COMO ES TRUE ENTRARA AQUI
}else{
    console.log('Es Falso');  
}

if (false) {
    console.log('Es  Verdadero');
}else{
    console.log('Es Falso');  //COMO ES FALSO ENTRARA AQUI
}


//COMPARACIONES ==> == Y ===

a='5'
b=5

console.log(a==b)  //MISMO CARACTER, NO IMPORTA SI UNO ES UN STRING Y EL OTRO UN NUMBER DARA TRUE
console.log(a===b) //DARA FALSO YA QUE SON DISTINTO TIPOS DE DATOS, PARA QUE SEA TRUE DEBEN SER DEL MISMO TIPO


//ELSE IF

let nota =5

if(nota === 5 ){
    console.log("Felicidades, Aprobaste")
}else if(nota === 4){
    console.log("Buen Trabajo , pero se puede mejorar")
}else{
    console.log("Has Desaprobado :(")
}


switch(nota){
    case 5:
        console.log("Felicidades, Aprobaste")
        break
    case 4:
        console.log("Buen Trabajo , pero se puede mejorar")
        break
    case 3:
        console.log("Has Desaprobado :(")
        break
    default:
        console.log("Introduce una nota de 3 a 5")
        break
}