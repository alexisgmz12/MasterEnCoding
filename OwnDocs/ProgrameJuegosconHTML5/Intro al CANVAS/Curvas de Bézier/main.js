// Se verifica el canvas con JS

window.onload = function(){
    var canvas = document.getElementById("miCanvas");
    if(canvas && canvas.getContext){
        var ctx = canvas.getContext("2d");
        if(ctx){
           //Colores
           ctx.lineWidth = 10;
           ctx.strokeStyle ="red";

           //Curva Bézier
           ctx.beginPath();
           //Primer punto
           ctx.moveTo(50,20);
           //Se dibuja la cruva
           ctx.bezierCurveTo(50,100,200,100,200,150);
            //Se dibuja la curva
            ctx.stroke();
            //Primer punto
            ctx.fillRect(50,20,5,5);
            //Primer punto tangente
            ctx.fillRect(50,100,5,5);
            //Segundo punto tangente
            ctx.fillRect(200,100,5,5);
            //Segundo punto ancla
            ctx.fillRect(200,150,5,5)
        }
    }
}