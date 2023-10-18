function cambio(){
    console.log("si entra a la funcion")
document.getElementById("imagen").src = "https://i.ytimg.com/vi/6Xr5hgv2WPg/maxresdefault.jpg" ;
document.getElementById("button").innerHTML = "cambiar a perro";
if(document.getElementById("button").onclick){
    regreso()
}
}

function regreso(){
    console.log("Hace regreso")
    document.getElementById("imagen").src = "https://i.pinimg.com/originals/f4/fc/45/f4fc454d1deea66de1e895cf8b8eff9b.jpg" ;
    document.getElementById("button").innerHTML = "cambiar a humano";
}