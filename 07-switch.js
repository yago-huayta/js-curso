"use strict"


var edad = 18;
var imprime = ""

switch(edad){
    case 18:
    imprime = "acabas de cumplir la mayoria de edad";
    break;

    case 25:
    imprime = "Ya eres Adulto"; 
    break;

    case 40:
    imprime = "Crisis de los 40"; 
    break;
    case 75:
    imprime = "Eres un anciono"; 
    break;
    default:
        imprime = "Tu edad es Neutra"
    break;
}
console.log(imprime)