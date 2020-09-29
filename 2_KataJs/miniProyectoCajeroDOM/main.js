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
var userName;
var passUser;

var numero;
var saldo;

function user(){
    userName = document.getElementById("userName").value;
    passUser = document.getElementById("password").value;

    console.log("Tu nombre es " +userName+ "y tu contra es " + passUser);

    if (userName === "Alexis Gomez" || userName === "alexis gomez" && passUser === alexis.pass){
        bienvenida();
    } else if(userName === "Monse Garcia" || userName === "monse garcia" && passUser === monse.pass){
        bienvenida();
    } else if(userName === "Connor Gomez" || userName === "connor gomez" && passUser === connor.pass){
        bienvenida();
    } else {
        alert(" Usuario no encontrado");
    }

}

// Funciones de pantalla bienvenida
function bienvenida(){

    console.log(userName);
    document.getElementById("cajaLogin").style.display = "none";
    document.getElementById("cajaOpciones").style.display = "flex"; 
    document.getElementById("cajaSalir").style.display = "none";
    document.getElementById("cajaRetirar").style.display = "none";
    document.getElementById("cajaConsultar").style.display = "none";
    document.getElementById("userNameOpciones").textContent = userName;

    if (passUser === alexis.pass){
        document.getElementById("imgPhoto").src = "IMG_D68E219F35C9-1.jpeg";
    } else if(passUser === monse.pass){
        document.getElementById("imgPhoto").src = "IMG_ABB1D9C01828-1.jpeg";
    } else if(passUser === connor.pass){
        document.getElementById("imgPhoto").src ="IMG_0591.jpg";

    } 
}
// Funciones de pantalla consultar
function consultar(){
    console.log("pasa a consultar")
    document.getElementById("cajaAñadir").style.display = "none";
    document.getElementById("cajaLogin").style.display = "none";
    document.getElementById("cajaSalir").style.display = "none";
    document.getElementById("cajaRetirar").style.display = "none";
    document.getElementById("cajaOpciones").style.display = "none";
    document.getElementById("cajaConsultar").style.display = "flex";

    if (passUser === alexis.pass){
        document.getElementById("saldoConsultar").textContent = alexis.saldo + " Rupias";
    } else if(passUser === monse.pass){
        document.getElementById("saldoConsultar").textContent = monse.saldo + " Rupias";
    } else if(passUser === connor.pass){
        document.getElementById("saldoConsultar").textContent = connor.saldo + " Rupias";

    } 
}
// Funciones de pantalla añadir
function añadir(){
    document.getElementById("cajaConsultar").style.display = "none";
    document.getElementById("cajaLogin").style.display = "none";
    document.getElementById("cajaSalir").style.display = "none";
    document.getElementById("cajaRetirar").style.display = "none";
    document.getElementById("cajaOpciones").style.display = "none";
    document.getElementById("cajaAñadir").style.display = "flex";    
}
// Funciones de pantalla retirar
function retirar(){
    document.getElementById("cajaAñadir").style.display = "none";
    document.getElementById("cajaConsultar").style.display = "none";
    document.getElementById("cajaLogin").style.display = "none";
    document.getElementById("cajaSalir").style.display = "none";
    document.getElementById("cajaOpciones").style.display = "none";
    document.getElementById("cajaRetirar").style.display = "flex";
}
// Funciones de pantalla salir
function salir(){
    document.getElementById("cajaAñadir").style.display = "none";
    document.getElementById("cajaConsultar").style.display = "none";
    document.getElementById("cajaLogin").style.display = "none";
    document.getElementById("cajaSalir").style.display = "flex";
    document.getElementById("cajaOpciones").style.display = "none";
    document.getElementById("cajaRetirar").style.display = "none";
}
// Funciones de pantalla cambair cuenta
function cambiarCuenta(){
    document.getElementById("cajaAñadir").style.display = "none";
    document.getElementById("cajaConsultar").style.display = "none";
    document.getElementById("cajaLogin").style.display = "flex";
    document.getElementById("cajaSalir").style.display = "none";
    document.getElementById("cajaOpciones").style.display = "none";
    document.getElementById("cajaRetirar").style.display = "none";
}

//Funciones de operaciones
function sumaF(){
    numero = parseInt(document.getElementById("añadirCantidad").value);
    console.log("numero es"+ numero)
    if (passUser === alexis.pass){
        saldo = alexis.saldo;
    } else if(passUser === monse.pass){
        saldo = monse.saldo;
    } else if(passUser === connor.pass){
         saldo = connor.saldo;
    } 

    var suma = saldo + numero;

    if (suma > 999){
        alert("No se puede realizar la operacion porque la cantidad excede el saldo de tu cuenta");
    } else {
        document.getElementById("nuevoSaldoAñadir").textContent = suma+ " Rupias";
        if (passUser === alexis.pass){
            alexis.saldo = suma;
        } else if(passUser === monse.pass){
            monse.saldo = suma;
        } else if(passUser === connor.pass){
            connor.saldo = suma;
        } 
    }

}

function restaF(saldo, numero){
    numero = parseInt(document.getElementById("retirarCantidad").value);
    console.log("numero es"+ numero)
    if (passUser === alexis.pass){
        saldo = alexis.saldo;
    } else if(passUser === monse.pass){
        saldo = monse.saldo;
    } else if(passUser === connor.pass){
         saldo = connor.saldo;
    } 

    var resta = saldo - numero;

    if (resta < 10){
        alert("No puedes tener menos de 10 rupias en tu cuenta");
    } else {
        document.getElementById("nuevoSaldoRetirar").textContent = resta+ " Rupias";
        if (passUser === alexis.pass){
            alexis.saldo = resta;
        } else if(passUser === monse.pass){
            monse.saldo = resta;
        } else if(passUser === connor.pass){
            connor.saldo = resta;
        } 
    }

}



