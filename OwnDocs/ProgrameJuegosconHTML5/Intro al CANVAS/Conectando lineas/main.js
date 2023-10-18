// Se verifica el canvas con JS

window.onload = function(){
    var canvas = document.getElementById("miCanvas");
    if(canvas && canvas.getContext){
        var ctx = canvas.getContext("2d");
        if(ctx){
            //Descripción de lineas
            ctx.lineWidth = 25;
            ctx.strokeStyle = "yellow";

            //Dibujamos esquina
            ctx.beginPath()
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            //ctx.lineJoin = "bevel";
            //ctx.lineJoin = "mitter";
            ctx.moveTo(75,150);
            ctx.lineTo(125,50);
            ctx.lineTo(175,150);
            ctx.stroke();      
       }
    }
}