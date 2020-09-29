// Se verifica el canvas con JS

window.onload = function(){
    var canvas = document.getElementById("miCanvas");
    if(canvas && canvas.getContext){
        var ctx = canvas.getContext("2d");
        if(ctx){
            //Descipcion de lineas
            ctx.linewidth = 10;
            ctx.strokeStyle = "yellow";
            ctx.fillStyle = "red";

            //Primer arco
            ctx.beginPath();
            ctx.arc(100,150,50,1.1*Math.PI, 1.9*Math.PI);
            ctx.stroke();

            //Segundo arco
            ctx.beginPath();
            ctx.arc(250,150,50,1.1*Math.PI,1.9*Math.PI,true);
            ctx.stroke();

            //Tercer arco
            ctx.beginPath();
            ctx.arc(450,150,50,0,2*Math.PI,true);
            ctx.stroke();
        }
    }
}