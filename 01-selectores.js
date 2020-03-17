$(document).ready(function(){
    

   //Selector de ID (Como su nombre dice selecciona atraves del ID)
    //(el ";" colocalo en el ultimo comando por que si no es
    //como si se cerrara antes y te aparecera un error posdata:hasme caso Yago
    // del futuro :V XDd)

    var red = $("#rojo").css("background", "red")
                         .css("color", "white");   


    var yellow = $('#amarillo').css("background", "yellow")
                                 .css("color", "blue");                                

    var green = $('#verde').css("background", "green")
                           .css("color", "white");                        


    /*
     Selector de clase: (Selecciona a traves del class, se usa para
     identificar un conjunto de etiquetas y modificarlos 
     en cambio el ID es para 1 solo
     como un DNI para la persona pero para identificar a todos
     seria humanos)
    */

    var mi_clase = $('.zebra')

    $('.borde_oculto').click(function(){
        
        console.log("Click dado :v")
        
        $(this).addClass('zebra');
    });

    //Selectores de etiqueta (SE selecciona a traves de una etiqueta
    //ya sean parrafos, etc
    //para modificar a una etiqueta en concreta)

    var parrafos = $('p');

    parrafos.click(function(){

        if($(this).hasClass("zebra")){
            
            $(this).addClass("grande"); 

        };

    });

});