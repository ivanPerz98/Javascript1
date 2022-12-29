const boton = document.getElementById("btn")


btn.addEventListener("click",evento =>{    
   console.log(evento)
   alert("click en el botón")
})


//USANDO JQUERY

$( "#btn-jquery" ).click(function() {
    alert( "Hola, estoy utilizando jQuery" );
  });