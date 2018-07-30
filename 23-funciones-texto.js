"use strict"

/* Transformacion de texto 
- .toUpperCase es para ponerlo en mayusculas el texto
- typeof es para ver que tipo es la variable colocada despues del typeof
- .toLowerCase es para ponerlo en minusculas el texto
- .length es para que cuente cuantas letras hay en el texto pero si ay una ray [] en la varialble contara
los elementos que hayan 
- indexOf es para ver desde que carater comienza la palabra, ejem:
var cualquiera = untextocreadopreviamente.indexOf("lapalabraquequierasencontrar")
Tambien si colocamos el last antes del comando se buscara la ultima palabra con ese nombre.
- match hace la misma funcion que el indexOf pero es mas completa me recomiendo usar este esta mas chido V: :V
- substr se coloca esto y entre parentesis el caracter de donde comienze y otro que es cuantos caracteres 
hacia adelante quieres
- slice para cortar el string desde el caracter elegido (se le puede poner fin)
- split se le pone (" ") para que se separen las palabras y nos puede ayudar a organizarnos con los textos.
- trim es para que se coloque todo sin espacios en el final ni comienzo(puede servir para el hackaton del
lunes).

*/   
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "es muy buen curso";
/*
var dato = numero.toString();
    dato = texto1.toUpperCase();
//   dato = texto1.toLowerCase();
console.log(dato);

var nombre = "HAskbsdkjvjksdbavhbskdcaskclbdflknvkslbcdksncsncdkslbxncvxlkfbvlxdbvhlbesjvbjhdxbfvsc"
 //   nombre = ["hoa", "hola"];

console.log(nombre.length);

// Concatenar (Unir textos)

var textototal = texto1+" "+texto2;
console.log(textototal);
*/

var busqueda = texto1.indexOf("curso")
console.log(busqueda);