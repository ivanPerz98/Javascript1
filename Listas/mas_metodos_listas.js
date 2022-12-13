//mas metodos javascript

//.map() .filter() .reduce()

const ciudades = ["San Juan","San Luis",'Buenos Aires','Santa Fe','Chubut','Misiones','Salta']
ciudades.forEach(valor=>{
    console.log(valor)
})


//.map()
const newLista=ciudades.map(valor=>{
    return valor
})

console.log(newLista) // returna la lista ["San Juan","San Luis",'Buenos Aires','Santa Fe','Chubut','Misiones','Salta']

const lista_provincias=ciudades.map((prov,indice) => `${indice+1} - ${prov}`)

console.log(lista_provincias) //[ '1 - San Juan','2 - San Luis','3 - Buenos Aires','4 - Santa Fe','5 - Chubut','6 - Misiones','7 - Salta' ]

//.FILTER()

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29}
]


// const personasMayores=listaObjetos.filter(valor => {
//     if (valor.edad > 30){
//         return true
//     }else{
//         return false
//     }
// })

const personasMayores=listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores) //[ { nombre: 'Leire', edad: 35 }, { nombre: 'Gorka', edad: 34 } ]


//.REDUCE()

const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma)
