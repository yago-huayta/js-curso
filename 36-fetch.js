"use strict"

// Fetch y peticiones a servicios / apis rest

var div_usuarios = document.querySelector("#usuarios"); 

getUsuarios()
    .then(data => data.json())
    .then(data => {
        listadoUsuarios(data)
    });

function getUsuarios(){
    fetch("https://jsonplaceholder.typicode.com/users")
}

function getUsuario(){
    
}

function listadoUsuarios(usuarios){
    usuarios.map((data, i) => {
        let nombre = document.createElement('h3');
        
        nombre.innerHTML = i + ". " + data.name + "  ";

        div_usuarios.appendChild(nombre);

        document.querySelector(".cargando").style.display = "none"
    })
}