function ejercicio1(){
    const request = require('request');

    console.log("Empezando peticion1");
    
    request.get('https://pokeapi.co/api/v2/pokemon/pikachu',(err,response,body)=>{
        let pokemon = JSON.parse(body)
        console.log("El tipo del pokemon es: "+ pokemon.types[0]["type"]);
    });
    console.log("Termino peticion 1");
}
//ejercicio1();


function peticionLibro(libro){
    const request2 = require('request');
    console.log("Empieza ejercicio 2");
    request2.get(`http://openlibrary.org/search.json?q=${libro}`,(err,response,body)=>{
        console.log(response.statusCode)
        let libroo = JSON.parse(body)

        console.log(libroo.docs[0]["author_name"])
    })
}

//peticionLibro("i+Robot");

const peticionAutor = (autor) => {
    const request3 = require('request');
    console.log("Empieza ejercicio 3");
    request3.get(`http://openlibrary.org/search.json?author=${autor}`,(err,response,body)=>{
        console.log(response.statusCode);
        const autorr = JSON.parse(body);
        console.log(autorr.results);
        for(var i=0; i<=99; i++){
            console.log(autorr.docs[i]["title_suggest"]);
        }
    })
} 
//peticionAutor("asimov");

const peticionGenero = (banda) =>{
    const request4 = require('request');
    console.log("Empieza ejercicio 4");
    request4.get(`http://www.theaudiodb.com/api/v1/json/1/search.php?s=${banda}`,(err,response,body)=>{
        console.log(response.statusCode);
        let genero = JSON.parse(body);
        console.log(genero.artists[0]["strGenre"])
    })
}
//peticionGenero("muse")

const peticionPersonaje = (personaje) =>{
    const request5 = require('request');
    console.log("Empieza ejercicio 5");
    request5.get(`https://swapi.dev/api/${personaje}`,(err,response,body)=>{
        console.log(response.statusCode);
        let name = JSON.parse(body);
        console.log (name["films"])
    })
}

//peticionPersonaje("people/1/")

const peticionAsteroide = (fechaInicio,fechaFinal) =>{
    const request6 = require('request');
    console.log("Empieza peticion 6")
    request6.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${fechaInicio}&end_date=${fechaFinal}&api_key=DEMO_KEY`, (err,response,body)=>{
        console.log(err)
        console.log(response.statusCode);
        let asteroid = JSON.parse(body);
        asteroid.near_earth_objects.forEach(asteroides => console.log(asteroides))
    })
}

peticionAsteroide("2020-11-10", "2020-11-17")

