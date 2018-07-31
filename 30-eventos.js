"use strict"

//Eventoso
// Fùncion que se ejecuta cuando sucede algo

//Eventos de raton

window.addEventListener('load', function(){
    var boton = document.querySelector("#boton");

    function cambiarColor(){
        console.log("Me has dado click");
        var bg = boton.style.background;
        if(bg == "green"){
            boton.style.background = "red";
        }else{
            boton.style.background = "green";
        }
    
        return true;
    }
    boton.addEventListener('mouseout',function(){
        boton.style.background = '#CCC';
    });
    
    // Focus
    var input = document.querySelector("#campo_nombre")
    
    input.addEventListener('focus', function(){
        console.log("Estas dentro del input");
    })
    
    // Blur
    input.addEventListener('blur', function(){
        console.log("Estas fuera del input");
    })
    
    // Keydown
    input.addEventListener('keydown', function(event){
        console.log("Estas pulsando esta tecla ", String.fromCharCode(event.keyCode));
    });
});

