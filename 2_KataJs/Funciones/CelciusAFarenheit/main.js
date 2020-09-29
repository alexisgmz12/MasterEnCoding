


function celciusToFarenheit(temp){
    console.log("Se recive " + temp)
    var farenheit = Math.round(temp * 1.8) + 32;
    alert("La temperatura en Farenheit es " + farenheit);


}

var valor ;
valor = prompt("Ingresa tu temperatura")
celciusToFarenheit(parseInt(valor));

