"use strict"
/*
BOM  browser object model
innerHeight ancho 
innerWidth altura
*/

function getbom(){
    console.log(screen.height);
    console.log(screen.width);
    console.log(window.location)
    console.log(window.location.href)
}

function ventanita(url){
    window.open(url,"","width=400,height=300");
}
getbom();