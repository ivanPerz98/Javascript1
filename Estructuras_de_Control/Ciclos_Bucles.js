
for (let i = 0; i < 10; i++) {
    // Esto es el bucle
    console.log(i) //0,1,2,3,4,5,6,7,8,9
}



let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 2) //2,8,12,4,6,14,20,24,1600
}

// Estructura for...of
for (let valor of lista) {
    console.log(valor) //1,4,6,2,3,7,10,12,800
}

// Estructura forEach
lista.forEach(valor => {
    console.log(valor) //1,4,6,2,3,7,10,12,800
})

// Estructura for...in   utilizao para objetos
let persona = {
    nombre: "Gorka",
    apellido: "Villar",
    edad: 34,
    isDeveloper: true
}



console.log(persona.nombre) //Gorka

let prop = "edad";
console.log(persona[prop]) //34


for (let propiedad in persona) {
    console.log(propiedad); //nombre,apellido,edad,isDeveloper
    console.log(persona[propiedad]) //Gorka,Villar,34,True
}




//------------------BUCLES WHILE Y DO WHILE

let i = 0;
let max = 10;
while (i < max) {
    console.log(i);
    i++;
}

i = 15;
// Do...while
do {
    console.log("Estoy en el do while")
} while (i < max)