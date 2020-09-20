"use strict"

/*
Calculadora
Una calculadora que pida dos numeros por pantalla 
Si metemos uno mal que vuelva a pedir
En el cuerpo de la pagina, una alerta y por la consola el resultado
de sumar restar multiplicar dividir esas dos cifras
*/

var numero1 = parseInt(prompt(" Introduce el primer numero ", 0));

var numero2 = parseInt(prompt(" Introduce el segundo numero ", 0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt(" Introduce el primer numero ", 0));

    var numero2 = parseInt(prompt(" Introduce el segundo numero ", 0));   
}

var resultado = "La suma es: "+(numero1+numero2)+" <br/> "+
                "La resta es "+(numero1-numero2)+" <br/> "+
                "La multiplicación es "+(numero1*numero2)+" <br/> "+
                "La división es "+(numero1/numero2)+" <br/> ";

document.write(resultado)

// Prueba git hub

//segunda prueba git 