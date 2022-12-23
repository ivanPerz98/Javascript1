class Persona{
    //PRIVATE --> # 
    //PRIVATE --> ACCESO DESDE DENTRO DE LA CLASE
    _nombre;
    _edad;

    //PROTECTED --> _
    //PROTECTED --> ACCESO DESDE DENTRO DE LA CLASE Y LAS HEREDADAS
    
   // _isDeveloper=true;
    constructor(nombre,edad){
        this._nombre=nombre;
        this._edad=edad;
    }

    //Metodos
    saludo(){
        console.log(`Hola soy ${this._nombre} y tengo  ${this._edad} años `)
       }
}

class Desarrollador extends Persona {
    constructor(nombre,edad,lenguaje){
        super(nombre,edad)
        this.lenguaje = lenguaje
    }

    saludo(){
        super.saludo()
        console.log(`y soy Desarrollador de ${this.lenguaje}`)
    }

}

const dev = new Desarrollador("Sion",17,"Javascript")
console.log(dev)  //Desarrollador { _nombre: 'Sion', _edad: 17, lenguaje: 'Javascript' }
dev.saludo() //Hola soy Sion y tengo  17 años
            //y soy Desarrollador de Javascript 