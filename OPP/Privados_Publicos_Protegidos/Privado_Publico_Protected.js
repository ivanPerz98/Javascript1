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

    getNombre(){
        return this.#nombre
    }
}

const persona1 = new Persona("Eren",28)
persona1.saludo()  //Hola soy Eren y tengo  28 años  
console.log(`El Nombre es:${persona1.getNombre()}`) //El Nombre es:Eren