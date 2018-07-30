"use strict"

// Que muestre todos los numeros divisores de un número introduce en promt

var numero = parseInt(prompt("Mete el numero", 1));

for(var i = 1; i<= numero; i++){

    if(numero%i == 0){
    console.log("Divisores: "+ i);
    }
}