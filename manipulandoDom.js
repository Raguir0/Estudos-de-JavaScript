// CAPTURANDO UM ELEMENTO POR ID

let titulo = document.getElementById("titulo1");


// CAPTURANDO POR CLASS

let titulo2 = document.getElementsByClassName("titulo2");

// CAPTURANDO POR TAGS

let tags = document.getElementsByTagName("h1");


let novoTitulo = document.getElementById("nome").innerHTML = prompt("Qual e o seu nome?");

let msg = prompt("Ver msg escodida? Digite 1 para sim e 2 para nao");

if(msg === "1"){
let novoElemento = document.createElement("h2");
novoElemento.innerHTML = "Ola sou um elemento gerado via JavaScript";
document.body.appendChild(novoElemento);
}

// Remove o nome

//let removerNome = document.getElementById("nome");
//removerNome.remove();


