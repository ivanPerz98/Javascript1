//Objetos

const Justice_League ={
    id:1,
    hero:"Batman",
    Alter_Ego:"Bruce Wayne",
    is_alive:true,
    aliados:["Superman","Constantine","Wonder Woman","Flash","Green Lantern"]
}

//2 formas de acceder a las propiedades

//1 Forma (Comun)
console.log(Justice_League.hero) //Batman
//2 Forma
console.log(Justice_League['aliados']) //[ 'Superman','Constantine','Wonder Woman','Flash','Green Lantern' ]

//PARA EDITAR UNA PROPIEDAD 

const prop = 'Alter_Ego'
Justice_League[prop] ="Dick Grayson"
console.log(Justice_League.Alter_Ego) //Dick Grayson

//COPIAR UN OBJETO A OTRO
const young_Justice = Justice_League // SON IGUALES, SI SE CAMBIA EL NUEVO AFECTA AL ORIGINAL
console.log(young_Justice === Justice_League) 

//PARA CAMBIAR UN OBJETO COPIA SE PUEDE USAR {...Nombre_Objeto}

const J_L_D={ ...Justice_League }
J_L_D.hero="Demyan Wayne"

console.log(Justice_League.hero) //BATMAN
console.log(J_L_D.hero) //DEMYAN WAYNE


//Ordenar Listas de Objetos a partir de una propiedad

const JL=[
    {
        id:5,
        hero:"Batman",
        Alter_Ego:"Bruce Wayne",
        is_alive:true,
    },
    {
        id:3,
        hero:"Superman",
        Alter_Ego:"Clark Kent",
        is_alive:true,
    },
    {
        id:8,
        hero:"Green Arrow",
        Alter_Ego:"Oliver Queen",
        is_alive:true,
    },
    {
        id:2,
        hero:"The Flash",
        Alter_Ego:"Barry Allen",
        is_alive:false,
    }
]

//Utilizando .sort() ==> este cambia la lista completa

JL.sort((a,b)=> a.id - b.id)

console.log(JL) //ORDENA LOS ID ==> 2,3,5,8

//ORDENA POR NOMBRE DE HEROE
/*
JL.sort((a, b) => {
    if (a.hero > b.hero) {
      return 1;
    }
    if (a.hero < b.hero) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

console.log(JL)
*/
//OTRA FORMA DE ORDENAR Y COMPARAR

console.log("----------------------------------------------")
JL.sort((a,b)=> a.hero.localeCompare(b.hero))
console.log(JL)