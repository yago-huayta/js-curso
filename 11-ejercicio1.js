"use strict"

/*
Programa que pida dos numeros y que vea cual es mayor menor o igual
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0))
var numero2 = parseInt(prompt("Introduce el segundo numero", 0))

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1)|| isNaN(numero2)){
    var numero1 = parseInt(prompt("Introduce el primer numero", 0))
    var numero2 = parseInt(prompt("Introduce el segundo numero", 0))    
}

if(numero1 == numero2){
    alert(" Los numeros son iguales")
}else if(numero1 > numero2){
    alert(" El primer numero es mayor que el numero 2 ")
}else if(numero1 != numero2){
    alert(" Los numeros son distintos ")
}