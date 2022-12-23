class Persona{
    //PRIVATE --> # 
    //PRIVATE --> ACCESO DESDE DENTRO DE LA CLASE
    #nombre;
    #edad;

    //PROTECTED --> _
    //PROTECTED --> ACCESO DESDE DENTRO DE LA CLASE Y LAS HEREDADAS
    
    _isDeveloper=true;
    constructor(nombre,edad){
        this.#nombre=nombre;
        this.#edad=edad;
    }

    //Metodos
    saludo(){
        console.log(`Hola soy ${this.#nombre} y tengo  ${this.#edad} años `)
       }

    //SETTER
    //Cambia valor de atributos protegidos o privados
    setNombre(nom){
        this.#nombre=nom
    }

    //GETTER
    //Devuelve atributos protegidos o privados
    getNombre(){
        return this.#nombre
    }


    setEdad(edad){
        this.#edad=edad
    }

    getEdad(){
        return this.#edad
    }
}

const persona1=new Persona("Onur",8)

persona1.saludo() //Hola soy Onur y tengo  8 años  
persona1.setNombre("Eren") //CAMBIO EL VALOR DE NOMBRE MEDIANTE SET
persona1.setEdad(17) //CAMBIO EL VALOR DE EDAD MEDIANTE SET
persona1.saludo() // Hola soy Eren y tengo  17 años 
