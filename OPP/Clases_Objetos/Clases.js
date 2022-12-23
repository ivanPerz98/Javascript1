class Persona{
    constructor(nombre,edad,isDeveloper){
        this.nombre=nombre;
        this.edad=edad;
        this.isDeveloper=isDeveloper;
    }

    //Metodos
    saludo(){
        console.log(`Hola soy ${this.nombre} y tengo  ${this.edad} años `)
       }
}

const persona1=new Persona("Eren",17,false) //INSTANCIAR 

persona1.saludo()

console.log(persona1 instanceof Persona)//TRUE --> VERIFICA SI ES UNA INTANCIA DE LA CLASE DE PERSONA