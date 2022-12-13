const lista = [1,2,3,'A','Z',true,undefined]

//forma tradicional

for(let i = 0 ; i < lista.length;i++){
    console.log(lista[i]) //1,2,3,'A','Z',true,undefined
}

//nueva formas
//.forEach()
lista.forEach(valor =>{
    console.log(valor) ////1,2,3,'A','Z',true,undefined
})

//Busqueda de un valor en una lista con .find()

const variable = lista.find(valor=>{
    if (valor === 'Z'){
        return true
    }
})
console.log(variable)


const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29}
]

// const objeto = listaObjetos.find(o => {
//     if (o.nombre === "Miguel") {
//         return true
//     }
// })
const objeto = listaObjetos.find(o => o.nombre === "Miguel") //SI UNICAMENTE SE TENDRA UN RETURN SE PUEDE OBVIAR LOS {} Y EL RETURN
console.log(objeto.edad)

const { edad } = listaObjetos.find(o => o.nombre === "Miguel")  // {EDAD} se refiere a la propiedad del objeto y se accedera directamente a su valor
console.log(edad)
