"use strict"

/*
// Funciones 
// Un conjunto de funciones o reglas que se aplicaran 

//defino la función
function calculadora(){

    //Conjunto de funciones
    console.log("Hola soy la calculadora")
    console.log("Si soy yo")

    return "Hola soy la calculadora!!";

}

// Invocar o llamar a las funciones
//calculadora();
var resultado = calculadora();

console.log(resultado)

PARAMETRO!!!!!!!!!!!!!!!!
*/
/*
function calculadora(){

    //Conjunto de funciones
    console.log("Suma: "+ (10+15))
    console.log("Resta: "+ (10-15))
    console.log("Multiplicación: "+ (10*15))
    console.log("División: "+ (10/15))

    return "Hola soy la calculadora!!";

}

// Invocar o llamar a las funciones
calculadora();
//var resultado = calculadora();
//console.log(resultado)
*/
function calculadora(numero1, numero2, mostrar = false){

    //Conjunto de funciones
    if(mostrar == false){
        console.log("Suma: "+ (numero1+numero2));
        console.log("Resta: "+ (numero1-numero2));
        console.log("Multiplicación: "+ (numero1*numero2));
        console.log("División: "+ (numero1/numero2));
        console.log("-------------------------------");
    }else{
        document.write("Suma: "+ (numero1+numero2)+"</br>");
        document.write("Resta: "+ (numero1-numero2)+"</br>");
        document.write("Multiplicación: "+ (numero1*numero2)+"</br>");
        document.write("División: "+ (numero1/numero2)+"</br>");
        document.write("-------------------------------");
    }

    //return "Hola soy la calculadora!!";

}

// Invocar o llamar a las funciones
calculadora(12, 4);
calculadora(9, 31, true);
//var resultado = calculadora();
//console.log(resultado)