// Se verifica el canvas con JS

window.onload = function(){
    var canvas = document.getElementById("miCanvas");
    if(canvas && canvas.getContext){
        var ctx = canvas.getContext("2d");
        if(ctx){
            alert("Bienvenidos al CANVAS");
        } else{
            alert("Error al crear tu contexto");
        }
    }
}