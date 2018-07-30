"use strict"

/*
Los arrays sirven para tener inf sobre una variables

var apellidos = ["Huayta", "Rios", "de la Cruz", "Alzamora"]

console.log(apellidos[0])
*/

var lenguajes = new Array("PHP", "JS", "Go", "Java");

document.write("<h1>Lenguajes de programación 2018</h1>");

document.write("<ul>");

for (var i = 0; i <= lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>")
}

document.write("</ul>")