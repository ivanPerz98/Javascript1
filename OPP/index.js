const persona = {
    nombre:"Sion",
    apellido:"Jaeger",
    edad:24,
    saludo:function(){
        console.log(`Hola ${this.nombre} ${this.apellido} DESDE LA FUNCION EN EL "OBJETO" `)  //FUNCION DENTRO DE UN "OBJETO"
    }
}
persona.saludo() // SE LLAMA A LA FUNCION DENTRO DEL "OBJETO"
