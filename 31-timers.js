"use strict"
window.addEventListener('load', function(){
    //Si usamos settimeout se ejecutara solo una vez
   
    function intervalox(){
        var tiempo = setInterval(function(){
            console.log("setInterval activado");
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "30px";
            }else{encabezado.style.fontSize = "50px";}
            
        },1000);
    }

        var tiempo = setInterval(function(){
            console.log("setInterval activado");
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "30px";
            }else{encabezado.style.fontSize = "50px";}
            
        },1000);
    return tiempo;

    var stop = document.querySelector("#stop");
    stop.addEventListener("click",function(){
        alert("Has parado el intervalo con un bucle");
        clearInterval(tiempo);
    });
    
    var start = document.querySelector("#start");
    start.addEventListener("click",function(){
        alert("Has iniciado el intervalo con un bucle");
        intervalox();
    });
    
});
