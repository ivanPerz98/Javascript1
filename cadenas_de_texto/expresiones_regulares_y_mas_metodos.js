let texto = "Pedro Pablo Pérez Pereira, pobre pintor portugués, pinta preciosos paisajes por poca plata, para poder pasar por París."


//DEVUELVE EN FORMA DE LISTA LA CANTIDAD DE VECES QUE UNA PALBRA O LETRA ESTA DENTRO DE OTRA
console.log(texto.match(/n/g)) // ['n','n'] 

console.log(texto.includes("Pablo"))  //true --> verifica si un texto esta dentro de otra y devuelve un booleano


//Saber si empieza con una palabra 

console.log(texto.startsWith('Pedro')) //TRUE

//Saber si termin con una palabra

console.log(texto.endsWith("paris"))  //FALSE, no es lo mismo p y P

console.log("el máximo valor que se puede obtener en Javascript + 1")