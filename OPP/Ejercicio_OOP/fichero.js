/**
Crea un nuevo fichero JS que contenga las siguientes líneas
- Una clase llamada "Estudiante" que tenga:
- Una variable llamada nombre
- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
- Crea una nueva instancia de "Estudiante"
- Haz la llamada al método obtenDatos

**/

class Estudiante{

    #asignaturas =["Javascript","HTML","CSS"]

    constructor(nombre){
        this.nombre=nombre
    }


    getDatos(){
        return `Nombre: ${this.nombre} - Asignaturas: ${this.#asignaturas} `
    }
}

const student= new Estudiante("Sion")

console.log(student.getDatos()) //Nombre: Sion - Asignaturas: Javascript,HTML,CSS 