// Se verifica el canvas con JS

window.onload = function(){
    var canvas = document.getElementById("miCanvas");
    if(canvas && canvas.getContext){
        var ctx = canvas.getContext("2d");
        if(ctx){
            //Descipcion de lineas
            ctx.lineWidth = 10;
            ctx.strokeStyle = "yellow";
            ctx.fillStyle = "red";
            //Path
            ctx.beginPath();
            ctx.moveTo(50,100);
            ctx.lineTo(100,50);
            ctx.lineTo(150,100);
            ctx.lineTo(100,150);
            ctx.stroke();

            //Path
            ctx.beginPath();
            ctx.moveTo(200,100);
            ctx.lineTo(250,50);
            ctx.lineTo(300,100);
            ctx.lineTo(250,150);
            ctx.closePath();
            ctx.stroke();

            //Path
           ctx.beginPath();
			ctx.moveTo(350,100);
			ctx.lineTo(400,50);
			ctx.lineTo(450,100);
			ctx.lineTo(400,150);
			ctx.fill();
			ctx.closePath();
			ctx.stroke();
        }
    }
}