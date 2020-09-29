// Se verifica el canvas con JS

window.onload = function(){
    var canvas = document.getElementById("miCanvas");
    if(canvas && canvas.getContext){
        var ctx = canvas.getContext("2d");
        if(ctx){
            //definición de colores
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "#ff0000";
            ctx.lineWidth = 5;

            //Rectanuglos
            ctx.fillRect(50,50,120,100);
            ctx.strokeRect(50,50,120,100);

            //Otro cuadro
            ctx.fillStyle = "rgb(250,0,0,0.3)";
            ctx.fillRect(200,50,100,100);
            ctx.strokeRect(200,50,100,100);
       }
    }
}