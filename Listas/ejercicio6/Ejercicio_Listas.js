/*
const fecha_valores = new Date(2022,1,15) 
console.log(fecha_valores) 
console.log(fecha_valores.getFullYear())  //2022
*/

//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
const buyList=[
    'Manzana',
    'Fideos',
    'Yogurt',
    'Leche',
    'Galletitas'
]

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
buyList.push('Aceite de Girasol')
console.log(buyList) //[ 'Manzana','Fideos','Yogurt','Leche','Galletitas','Aceite de Girasol' ]

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
buyList.pop()
console.log(buyList)//[ 'Manzana','Fideos','Yogurt','Leche','Galletitas']

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const favouriteMovies=[
    {titulo:'La Guerra de los Mundos',director:' Steven Spielberg',fecha:new Date(2005,7,23)},
    {titulo:'Mision Imposible',director:' Brian De Palma',fecha:new Date(1996,7,4)},
    {titulo:'Superman',director:'Zack Snyder',fecha:new Date(2013,7,13)}
]

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const post_veinteDiez=favouriteMovies.filter(valor => valor.fecha.getFullYear() > 2010 )
console.log(post_veinteDiez) //[ { titulo: 'Superman',director: 'Zack Snyder',fecha: Tue Aug 13 2013 00:00:00 GMT-0300 (GMT-03:00) } ]
 
// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = favouriteMovies.map(valor => valor.director)
console.log(directores) //[ ' Steven Spielberg', ' Brian De Palma', 'Zack Snyder' ]

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const peliculas = favouriteMovies.map(movie => movie.titulo)
console.log(peliculas) //[ 'La Guerra de los Mundos', 'Mision Imposible', 'Superman' ]

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const movie_director = directores.concat(peliculas)
console.log(movie_director) //[ ' Steven Spielberg',' Brian De Palma','Zack Snyder','La Guerra de los Mundos','Mision Imposible','Superman' ]

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const movie_director1=[...directores,...peliculas]
console.log(movie_director1) //[ ' Steven Spielberg',' Brian De Palma','Zack Snyder','La Guerra de los Mundos','Mision Imposible','Superman' ]
