var jugador_1;
var jugador_2;

var piedra;
var papel;
var tijera;

jugador_1 = prompt("Jugador 1 escoge piedra papel o tijera");
jugador_2 = prompt("Jugador 2 escoge piedra papel o tijera");

console.log(jugador_1);
console.log(jugador_2);


if (jugador_1 == "piedra" && jugador_2 == "tijera"){
    alert("Ganó jugador 1");
} else if( jugador_1 == "tijera" && jugador_2 == "tijera"){
    alert("Empate de tijera");
} else if (jugador_1 == "papel" && jugador_2 == "tijera"){
    alert ("Ganó jugador 2")
} else if (jugador_1 == "piedra" && jugador_2 == "piedra" ){
    alert ("Empate de piedra")
} else if (jugador_1 == "tijera" && jugador_2 == "piedra" ){
    alert ("Ganó el jugador 2")
} else if (jugador_1 == "papel" && jugador_2 == "piedra" ){
    alert ("Ganó el jugador 1")
} else if (jugador_1 == "piedra" && jugador_2 == "papel" ){
    alert ("Ganó el jugador 2")
} else if (jugador_1 == "tijera" && jugador_2 == "papel" ){
    alert ("Ganó el jugador 1")
} else if (jugador_1 == "papel" && jugador_2 == "papel" ){
        alert ("Empate de papel")
    
    }