//.sort() ==>MODIFICA EL ARRAY COMPLETO


const array = [2,5,1,-3,9,8,15,12,2]

array.sort((a,b)=>{

    if(a < b){
        return -1
    }else if(a > b){
        return +1
    }else{
        return 0
    }
})

console.log(array) //[ -3, 1, 2, 2, 5, 8, 9, 12, 15 ]


// Ordenar únicamente arrays numéricos
const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546]

arrayNumerico.sort((a, b) => a - b) // Menor a Mayor 
console.log(arrayNumerico) //[ 1, 1, 1, 3, 3, 4, 7, 56, 546 ]

arrayNumerico.sort((a, b) => b - a) //Mayor a Menor
console.log(arrayNumerico) //[ 546, 56, 7, 4, 3, 3, 1, 1, 1 ]

////////////////////////////////////////////////////////////////////////////////////////////////

//Ordenamiento en array de objetos

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29}
]

listaObjetos.sort((a,b)=>a.edad - b.edad)  //Ordena las edades de Menor a Mayor 
console.log(listaObjetos) //[ { nombre: 'Lucía', edad: 3 },{ nombre: 'Miguel', edad: 28 },{ nombre: 'Amaia', edad: 29 },{ nombre: 'Gorka', edad: 34 },{ nombre: 'Leire', edad: 35 } ]

