"use strict"

var categoria = ["accion", "terror", "comedia"];
var peliculas = ["Rapidos y Furiosos", "Coco", "Spiderman", "Hulk"];

var cine = [categoria, peliculas];

//console.log(cine[0, 1]);
//console.log(cine[1, 2]);
//peliculas.push("Batman");

var elemento = ""

do{
    elemento = prompt("Introduce tu pelicula FAV");
    peliculas.push(elemento);
}while(elemento != "Eso es todo");

peliculas.pop();

console.log(peliculas);

var cadenas = "texto1, texto2, texto3";
var cadena_array = cadenas.split(", ");
console.log(cadena_array);