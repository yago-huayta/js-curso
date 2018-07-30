"use strict"

/* DOM - Document object model

variable.style.background = "un color"

variable.style.padding = "numero de pixeles por ejem 20px"

variable.syle.color = "el color de la letra"  

Para buscarlos según su clasificacion:
-CSS
getElementsByClassName("rojo")

-Etiqueta
getElementsByTagName("div")
*/

function cambiaColor(color){
    caja.style.color = color;
}

var caja = document.getElementById("micaja") ;

caja.innerHTML = "TEXTO DESDE JS 3:{V"
caja.style.background = "#FFFF00"
caja.style.padding = "18px"
caja.style.color = "red"

console.log(caja);