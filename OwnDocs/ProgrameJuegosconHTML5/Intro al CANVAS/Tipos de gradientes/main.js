// Se verifica el canvas con JS

window.onload = function(){
    var canvas = document.getElementById("miCanvas");
    if(canvas && canvas.getContext){
        var ctx = canvas.getContext("2d");
        if(ctx){
           var h = canvas.height;
           var w = canvas.width;
           var gradiente = ctx.createLinearGradient(0,0,w/2,0);
           gradiente.addColorStop(0,"pink");
           gradiente.addColorStop(0.15,"yellow");
           gradiente.addColorStop(0.35, "white");
           gradiente.addColorStop(0.65,"yellow");
           gradiente.addColorStop(1,"red");
           ctx.fillStyle = gradiente;
           ctx.fillRect(0,0,w/2,h/2);
           //Gradiente vertical
           gradiente = ctx.createLinearGradient(0,0,0,h/2);
           gradiente.addColorStop(0,"pink");
           gradiente.addColorStop(0.15,"yellow");
           gradiente.addColorStop(0.35,"white");
           gradiente.addColorStop(0.65,"yellow");
           gradiente.addColorStop(1,"red");
            ctx.fillStyle = gradiente;
            ctx.fillRect(w/2,0,w/2,h/2);
           //Gradiente diagonal 1
           gradiente = ctx.createLinearGradient(0,h/2,w/2,h);
           gradiente.addColorStop(0,"pink");
           gradiente.addColorStop(0.15,"yellow");
           gradiente.addColorStop(0.35,"white");
           gradiente.addColorStop(0.65,"yellow");
           gradiente.addColorStop(1,"red");
            ctx.fillStyle = gradiente;
            ctx.fillRect(0,h/2,w/2,h);

            //Gradiente diagonal 2
           gradiente = ctx.createLinearGradient(w/2,h,w,h/2);
           gradiente.addColorStop(0,"pink");
           gradiente.addColorStop(0.15,"yellow");
           gradiente.addColorStop(0.35,"white");
           gradiente.addColorStop(0.65,"yellow");
           gradiente.addColorStop(1,"red");
            ctx.fillStyle = gradiente;
            ctx.fillRect(w/2,h/2,w,h);


        }
    }
}




