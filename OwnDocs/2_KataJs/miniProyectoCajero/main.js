//Variables
var alexis = {
    nombre: "Alexis",
    apellido: "Gomez",
    saldo: 500,
    pass: "yes"
};
var monse = {
    nombre: "Monse",
    apellido: "Garcia",
    saldo: 300,
    pass: "ajam"
};
var connor = {
    nombre: "Connor",
    apellido: "Gomez",
    saldo: 450,
    pass: "guau"
};

bienvenida();

// Funcion bienvenida
function bienvenida(){
var textoBienvenida;

textoBienvenida = (prompt("Bienvenido a CajerosAlexis. Porfavor ingresa el nombre del titular de la cuenta" ));

if(textoBienvenida === "Alexis Gomez" || textoBienvenida === "alexis gomez"){
    console.log("paso el primer condicional")
    alexisF();    
}else if(textoBienvenida === "Monse Garcia" || textoBienvenida === "monse garcia"){
    monseF();
} else if(textoBienvenida === "Connor Gomez" || textoBienvenida === "connor gomez"){
    connorF()
} else{
    alert("Usted no tiene cuenta aqui, vayase )o)")
    bienvenida();
}
}

//Funciones para objetos

function alexisF (){
    var textPass;
    textPass = (prompt("Bienvenido " + alexis.nombre + " " + alexis.apellido + " porfavor ingresa la contraseña" ));
    if(textPass === alexis.pass){
        var opciones;
        opciones = (prompt("Porfavor elige una opción: Consultar saldo, Añadir saldo, Retirar saldo"));
        if(opciones === "consultar saldo" || opciones === "Consultar saldo" ){
            prompt("Su saldo es de " + alexis.saldo+ " rupias");
            regresar();
        } else if (opciones === "añadir saldo" || opciones === "Añadir saldo" ){
            var añadido;
            añadido = (prompt("Ingresa el monto que quieres añadir"));
            alexis.saldo = sumaF (alexis.saldo, parseInt(añadido));
            regresar();

        } else {
            var restado;
            restado = (prompt("Ingresa el monto que quieres retirar"));
            alexis.saldo = restaF (alexis.saldo, parseInt(restado));
            regresar();

        } 
    } else{
        alert("Contraseña incorrecta");
    bienvenida()
    }
}

function monseF (){
    var textPass;
    textPass = (prompt("Bienvenida " + monse.nombre + " " + monse.apellido + " porfavor ingresa la contraseña" ));
    if(textPass === monse.pass){
        var opciones;
        opciones = (prompt("Porfavor elige una opción: Consultar saldo, Añadir saldo, Retirar saldo"));
        if(opciones === "consultar saldo" || opciones === "Consultar saldo" ){
            prompt("Su saldo es de " + monse.saldo+ " rupias");
            regresar();
        } else if (opciones === "añadir saldo" || opciones === "Añadir saldo" ){
            var añadido;
            añadido = (prompt("Ingresa el monto que quieres añadir"));
            monse.saldo = sumaF (monse.saldo, parseInt(añadido));
            regresar();
        } else {
            var restado;
            restado = (prompt("Ingresa el monto que quieres retirar"));
            monse.saldo = restaF (monse.saldo, parseInt(restado));
            regresar();
        } 
    } else{
        alert("Contraseña incorrecta");
        bienvenida();
    }
}

function connorF (){
    var textPass;
    textPass = (prompt("Bienvenido " + connor.nombre + " " + connor.apellido + " porfavor ingresa la contraseña" ));
    if(textPass === connor.pass){
        var opciones;
        opciones = (prompt("Porfavor elige una opción: Consultar saldo, Añadir saldo, Retirar saldo"));
        if(opciones === "consultar saldo" || opciones === "Consultar saldo" ){
            prompt("Su saldo es de " + connor.saldo + " rupias");
            regresar();
        } else if (opciones === "añadir saldo" || opciones === "Añadir saldo" ){
            var añadido;
            añadido = (prompt("Ingresa el monto que quieres añadir"));
            connor.saldo = sumaF (connor.saldo, parseInt(añadido));
            regresar();
        } else {
            var restado;
            restado = (prompt("Ingresa el monto que quieres retirar"));
            connor.saldo = restaF(connor.saldo, restado);
            regresar();
        } 
    }else{
        alert("Contraseña incorrecta");
        bienvenida();
    }
}

//Funciones de operaciones
function sumaF(saldo, numero){
    var suma = saldo + numero;
    if (suma > 999){
        alert("No se puede realizar la operacion porque la cantidad excede el saldo de tu cuenta");
        regresar();
    } else {
        prompt("El nuevo saldo es " + suma+ " rupias");
        return suma;
    }
}

function restaF(saldo, numero){
    var resta = saldo - numero;
    if (resta < 10){
        alert("No puedes tener menos de 10 rupias en tu cuenta");
        regresar();
    } else {
    prompt("El nuevo saldo es de " +resta+ " rupias");
    return resta;    
    }
}

//Funcion de regresar al menu 
function regresar(){
    var regresar;
    regresar = prompt("Desea realizar otra accion?");
    if(regresar === "si"){
        bienvenida();
    } else{
        alert ("Gracias por usar CajerosAlexis");
    }
}

