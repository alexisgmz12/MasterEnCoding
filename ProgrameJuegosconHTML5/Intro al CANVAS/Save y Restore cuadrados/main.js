// Se verifica el canvas con JS

window.onload = function(){
    var canvas = document.getElementById("miCanvas");
    if(canvas && canvas.getContext){
        var ctx = canvas.getContext("2d");
        if(ctx){
            ctx.lineWidth = 10;
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "red";
            //Primer cuadro
            ctx.fillRect(50,50,100,100);
            ctx.strokeRect(50,50,100,100);
            //Salvamos estado
            ctx.save();
            //Modificamos los colores
            ctx.fillStyle ="black";
            ctx.strokeStyle = "white";
            //Segundo cuadro
            ctx.fillRect(200,50,100,100);
            ctx.strokeRect(200,50,100,100);
            //Restauramos colores
            ctx.restore();
            //Tercer cuadro
            ctx.fillRect(350,50,100,100);
            ctx.strokeRect(350,50,100,100);

       }
    }
}