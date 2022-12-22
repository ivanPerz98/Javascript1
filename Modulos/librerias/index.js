import axios from 'axios';

axios.get('https://pokeapi.co/api/v2/pokemon/4/',{ 
    headers: { "Accept-Encoding": "gzip,deflate,compress" } 
})
    .then(function (response) {
        // handle success
        console.log("Success!!!")
        //console.log(response.data)
        const array = response.data
        console.log(array.game_indices)
    })
    .catch(function (error) {
        // handle error
        console.log("Error!!!")
        console.log(error);
    })