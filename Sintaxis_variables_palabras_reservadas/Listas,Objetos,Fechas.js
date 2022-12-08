 //LISTAS --> conjunto de datos del mismo tipo o diferentes datos

const lista=[
    "hola",
    16,
    true
]
//console.log(lista)

const lista2=new Array(2,"hola",true,undefined,null)
//console.log(lista2)

//Objetos --> conjunto de datos de tipo clave = valor

const movil = {
    altura:20,
    anchura:5,
    marca:"Samsung XL 10",
    isWhite:true,
    madeIn:"China",
    contactos:[
        "Raul",
        "Eren",
        "Jose"
    ],

    tarjeta:{
        marca:"Galaxy",
        almacenamiento:64
    }
}

//PARA ACCEDER A LOS ELEMENTOS DE UN OBJETO SE ESCRIBE EL NOMBRE['CLAVE] 

console.log(movil['isWhite']) //true
console.log(movil.contactos) //['Raul ','Eren','Jose']

console.log(movil['contactos'][0]) //Raul

console.log(movil['tarjeta']['marca']) //Galaxy
console.log(movil.tarjeta.almacenamiento) //64



//FECHAS

//LIBRERIAS MOMENT.JS
const fecha=new Date()
console.log(fecha)

const fecha_valores = new Date(2022,1,15) 
console.log(fecha_valores) 

//OBTENER EL DIA,MES Y AÑO

const dia = fecha.getDate() //PARA EL DIA ACTUAL
console.log(dia)

const mes = fecha.getMonth() //PARA EL MES ACTUAL --> 0-11
console.log(mes +1)

const anyo= fecha.getFullYear() //PARA EL AÑO ACTUAL
console.log(anyo)






