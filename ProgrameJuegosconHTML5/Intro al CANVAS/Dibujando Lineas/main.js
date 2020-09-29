// Se verifica el canvas con JS

window.onload = function(){
    var canvas = document.getElementById("miCanvas");
    if(canvas && canvas.getContext){
        var ctx = canvas.getContext("2d");
        if(ctx){
           //Descripción de lineas
           ctx.lineWidth = 20;
           ctx.strokeStyle = "yellow";

           //Dibujando las lineas
           ctx.beginPath();
           ctx.moveTo(50,50);
           ctx.lineTo(450,50);
           ctx.stroke();

           //Dibujando las lineas
           ctx.beginPath();
           ctx.lineCap = "round";
           ctx.moveTo(50,100);
           ctx.lineTo(450,100);
           ctx.stroke();

           //Dibujando las lineas
           ctx.beginPath();
           ctx.lineCap = "square";
           ctx.moveTo(50,150);
           ctx.lineTo(450,150);
           ctx.stroke();

           //Dibujando las lineas
           ctx.beginPath();
           ctx.lineCap = "butt";
           ctx.moveTo(50,200);
           ctx.lineTo(450,200);
           ctx.stroke();
        }
    }
}