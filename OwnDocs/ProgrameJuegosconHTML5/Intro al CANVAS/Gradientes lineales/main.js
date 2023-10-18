// Se verifica el canvas con JS

window.onload = function(){
    var canvas = document.getElementById("miCanvas");
    if(canvas && canvas.getContext){
        var ctx = canvas.getContext("2d");
        if(ctx){
           var gradiente = ctx.createLinearGradient(0,0,canvas.clientWidth,0);
           gradiente.addColorStop(0,"green");
           gradiente.addColorStop(0.35,"white");
           gradiente.addColorStop(0.65,"white");
           gradiente.addColorStop(1, "red");
           ctx.fillStyle = gradiente;
           ctx.fillRect(0,0,canvas.clientWidth,canvas.height);
        }
    }
}



