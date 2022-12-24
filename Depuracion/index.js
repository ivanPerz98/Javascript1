const Evangelion = [
    {
        eva: "Eva00",
        piloto:"Rei Ayanami",
        color:["Amarillo Anarajado"],
        edad:12
    },
    {
        eva: "01",
        piloto:" Shinji Ikari",
        color:["púrpura oscuro","verde neón"],
        edad:20
    },
    {
        eva:"02",
        piloto:"Asuka Langley",
        color:[ "rojo intenso", "naranja"],
        edad:26
    }
]

console.log(Evangelion)

function getDobleEdad(edad){
    return 2 * edad
}

//console.log(Evangelion.length) //3

//const dobleEdad = getDobleEdad(Evangelion[1].edad)
//console.log(dobleEdad) //40


for (var i=0;i<Evangelion.length;i++){
    console.log(i)
    const dobleEdad = getDobleEdad(Evangelion[i].edad)
    console.log(dobleEdad)
}

