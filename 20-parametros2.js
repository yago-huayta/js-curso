"use strict"

// Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...noFruta){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(noFruta)
}

listadoFrutas("Manzana", "Pera", "perro", "gato", "loro")