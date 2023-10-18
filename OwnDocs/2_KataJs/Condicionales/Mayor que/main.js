var num1;
var num2;
var num3;

num1 = (prompt("Ingresa el primer número"));
num2 = (prompt("Ingresa el segundo número"));
num3 = (prompt("Ingresa el tercer número"));

if ( parseInt(num1) > parseInt(num2) && parseInt(num1) > parseInt(num3)){
    alert("El mayor numero fue el primero " + parseInt(num1))
} else if (parseInt(num2) > parseInt(num1) && parseInt(num2) > parseInt(num3)){
    alert("El mayor numero fue el segundo " + parseInt(num2))
} else if (parseInt(num3) > parseInt(num1) && parseInt(num3) > parseInt(num2)){
        alert("El mayor numero fue el tercero " + parseInt(num3))}