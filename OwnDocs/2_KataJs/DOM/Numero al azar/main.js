var ishumano = false;
function cambioP(){
 

if(ishumano){
    console.log("si entra a la funcion")
    document.getElementById("imagenP").src = "https://i.pinimg.com/originals/f4/fc/45/f4fc454d1deea66de1e895cf8b8eff9b.jpg";
    document.getElementById("buttonP").innerHTML = "cambiar a humano";   
    ishumano = false;
} else{
    console.log("imagen perro")
    document.getElementById("imagenP").src = "https://i.ytimg.com/vi/6Xr5hgv2WPg/maxresdefault.jpg" ;
    document.getElementById("buttonP").innerHTML = "cambiar a perro";
    ishumano = true;
}
} 


function regreso(){
    
}

function cambio1(){
    document.getElementById("boton").innerHTML = "Hecho"
    document.getElementById("boton").style.backgroundColor = "green";
    console.log("Si cambia");
}

function cambio2(){
    document.getElementById("boton2").innerHTML = "Hecho"
    document.getElementById("boton2").style.backgroundColor = "red";
    console.log("Si cambia");
}

function cambio3(){
    document.getElementById("boton3").innerHTML = "Hecho"
    document.getElementById("boton3").style.backgroundColor = "blue";
    console.log("Si cambia");
}

function cambio4(){
    document.getElementById("boton4").innerHTML = "Hecho"
    document.getElementById("boton4").style.backgroundColor = "yellow";
    console.log("Si cambia");
}

function numeroAzar(){
    var aleatorio = Math.round(Math.random()*100);
alert("Tu número es "+aleatorio+ ", adios!");
}