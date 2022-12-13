//Comparacion de listas
//.every() ==> se fija si todos los elementos cumplen con una condicion y devuelve un booleano
const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40]

const resultado = array.every(valor => valor > 0) // compara si todos los elementos son mayores a 0

console.log(resultado) //false

//COMPARACION DE ARRAY

const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

console.log(ar1 === ar2)

const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}

console.log(compararArrays(ar1, ar2))