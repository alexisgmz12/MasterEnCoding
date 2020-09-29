//Palindromo
oracion = prompt("Ingrese una oracion")
const palindromo = (oracion) => {
    console.log("la oracion fue"+oracion)
    console.log(oracion.length)
    var palindromo = true;
    for( var i = 0; i<oracion.length; i++){
        console.log(oracion[oracion.length-i -1])

        if (oracion[i]!= oracion[oracion.length-i -1]){
            
            palindromo = false
        }
    }
    if (palindromo){
        alert(`La oracion ${oracion} es un palindromo.`)
    } else {
        alert(`La oracion ${oracion} no es un palindromo.`)
    }
}
palindromo(oracion)




//Longest country

function longestCountry(paises){
    var mayor = "none";
    var x = 1;
	for (var i=0;x < paises.length ;i++){
        if (paises[i].length < paises[x].length){
            mayor = paises[x]
            }
        x++
    }
    alert(`De este arreglo de paises ${paises}, el país con el mayor numero de letras es ${mayor}.`)
}

const paises = [
    "Mexico",
    "Panama",
    "El Salvador",
    "Guatemala",
    "Honduras"
]

longestCountry(paises)

//Farenheit
const farenheitToCelcius = (grados) => alert("Esos son " +parseInt(grados) * 9/5 + 32 +" grados Farenheit.")
  
grados = prompt("Ingresa los grados Celcius para pasarlos a Farenheit")
farenheitToCelcius(grados)


//Piedra, papel o tijera
var jugador_1 = "none";
var jugador_2 = "none";

jugador_1 = prompt("Jugador 1 escoge piedra papel o tijera");
jugador_2 = prompt("Jugador 2 escoge piedra papel o tijera");

const funcion = (jugador_1,jugador_2) =>{
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
    } else{
        alert ("Opción incorrecta")
    }
}
funcion(jugador_1,jugador_2)

//Imprimir el numero de parametros dados

const cantidadParams = (...parametros) => alert(`Hay ${parametros2.length} en el siguiente arreglo ${parametros2}`)

const parametros2 = [
    "Hola",
    "si",
    "no",
    "talvez",
    "ok",
    "equis"
]
cantidadParams(parametros2)
