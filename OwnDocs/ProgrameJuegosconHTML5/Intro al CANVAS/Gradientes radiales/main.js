// Se verifica el canvas con JS

window.onload = function(){
    var canvas = document.getElementById("miCanvas");
    if(canvas && canvas.getContext){
        var ctx = canvas.getContext("2d");
        if(ctx){
           var gradiente = ctx.createRadialGradient(canvas.width/2,canvas.height,10,canvas.width/2,0,100);
            gradiente.addColorStop(0,"pink");
            gradiente.addColorStop(0.15,"yellow");
            gradiente.addColorStop(0.35,"white");
            gradiente.addColorStop(0.65,"yellow");
            gradiente.addColorStop(1,"red");
            ctx.fillStyle = gradiente;
            ctx.fillRect(0,0,canvas.width,canvas.height);



        }
    }
}



