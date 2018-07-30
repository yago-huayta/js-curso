"use strict"

// Plantillas de texto

var nombre = prompt("Introduce tu nombre");
var apellidos = prompt("Introduce tus apellidos");

//var texto = "Mi nombre es: "+nombre+"</br>"+" Mis apellidos son: "+apellidos;

// Ejemplo de plantillas
// TIene que ir dentro de una variable se pone asi: ${variable}

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellidos es: ${apellidos}</h3>


`;

document.write(texto);