"use strict"
//conditional if
//si a es igual a b haz algo
var edad = 18;
var nombre = 'Yago Huayta';
/* Operadores Relacionales:
    Mayor >
    Menor <
    Mayor o igual >=
    Menor o igual <=
    igual =
    Diferente !=
*/
if(edad <= 18){
    console.log(nombre+" tiene "+edad+" años es mayor de edad ")
if(edad <= 33){
    console.log("Todavia eres millenial");}
else if (edad >= 70)
    {console.log ("Eres anciano")}
else{console.log(nombre+" edad "+edad+" años, es menor de edad " )}
}


/*
Operadores Lógicos 
And = &&
Or = ||
Negación = !
*/

//Negación
var year = 2018;
if(year != 2016) {console.log("El año no es 2016"+" en realidad el año es: "+year)}

//AND
if(year >= 2000 && year <= 2020){console.log("Estamos en la era actual")}
else{console.log("Estamos en la era post moderna")}

