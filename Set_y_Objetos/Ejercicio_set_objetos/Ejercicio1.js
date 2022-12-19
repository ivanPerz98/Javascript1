/*
Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript"
*/ 

const ArrayFamilia = ["Batman","Joker","Superman","Wonder Woman","Star Fire","Yo"]

const Setfamilia = new Set(ArrayFamilia)
Setfamilia.add("javascript")
console.log(Setfamilia) 