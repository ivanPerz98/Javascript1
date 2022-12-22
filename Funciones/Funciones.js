//FUNCIONES

let persona = { nombre: "Eren", apellido: "Jaeger" }
console.log(persona)

console.log(saludarPersona(persona)) //llamado a la funcion con parametro

function saludarPersona(objeto) {
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`) //Hola Eren Jaeger 
}


/*------------------------------------------------------------*/ 

function imprimeNumero(numero = 7) { // Parámetros por defecto
    console.log(numero)
}

imprimeNumero()

/*------------------------------------------------------------*/ 

function imprimir(...parametros) {
    console.log(parametros)
}

imprimir(1, 3, 9, 2, "hola", { id: 9 })

/*------------------------------------------------------------*/ 