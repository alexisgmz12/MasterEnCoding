const request = require('request')

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com'


const create_author = (nombre, last, nacionalidad, biografia, genero, edad) =>{
  console.log("Empieza funcion")
    const URL_POST = `${URL_BASE}/api/v1/authors/`;
    const jsonsend = {
        "nombre" : nombre,
        "last_name": last,
        "nacionalidad" : nacionalidad,
        "biography" : biografia,
        "gender" : genero,
        "age" : edad
    };
    console.log("Se hizo el jasonsend")
    request.post (URL_POST, {from:jsonsend} , (err, response, body) => {
    console.log("Se hizo la peticion")
        if (response.statusCode === 201) {
      const json = JSON.parse(body);
      console.log(json);
    } else {
      console.log(response.statusCode);
    }
    });
} 
create_author("José", "Saramago", "USA", "Escritor de muchos libros", "M", 95,);

const get_all_authors = () =>{
  const URL_get = `${URL_BASE}/api/v1/authors/`;

  request.get(URL_get,(err,response,body) => {
    if (response.statusCode === 200) {
      const json = JSON.parse(body);
      console.log(json);
    } else {
      console.log(response.statusCode);
    }
    });
}

const get_one_author = (id) =>{
  const URL_get_one = `${URL_BASE}/api/v1/authors/${id}/`;

  request.get(URL_get_one,(err,response,body) => {
    if (response.statusCode === 200) {
      const json = JSON.parse(body);
      console.log(json);
    } else {
      console.log(response.statusCode);
    }
    });
}

const update_author = (nombre, nacionalidad, biografia, genero, edad, id) =>{
  const URL_update = `${URL_BASE}/api/v1/authors/${id}`;

  const jsonsend = {
    "nombre" : '${nombre}',
    "nacionalidad" : '${nacionalidad}',
    "biography" : '${biografia}',
    "gender" : '${genero}',
    "age" : '${edad}'
}

  request.put(URL_update, {from:jsonsend},(err,response,body) => {
    if (response.statusCode === 200) {
      const json = JSON.parse(body);
      console.log(json);
    } else {
      console.log(response.statusCode);
    }
    });
}

const delete_one_author = (id) =>{
  const URL_delete_one = `${URL_BASE}/api/v1/authors/${id}/`;

  request.delete(URL_delete_one,(err,response,body) => {
    if (response.statusCode === 204) {
      //Body ya no existe
      console.log("Ya no existe");
    } else {
      console.log(response.statusCode);
    }
    });
}

//get_all_authors();
//get_one_author(12811);
//update_author("Jorge","Falcon","Comediante","M",33,12811)
//delete_one_author(12811)