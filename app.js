
let numeroSecreto = generarNumeroSecreto
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elemetoHTML = document.querySelector(elemento);
    elemetoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    alert('click desde el boton');
    return;
}
asignarTextoElemento('h1','Juego del numero Secreto!');
asignarTextoElemento('p','Indica un numero del 1 al 100');

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}
function verificarIntento(){
    let numeroDeUsuario = document.getElementById("valorUsuario").value;
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario == numeroSecreto);
    alert("click desde el boton")
    return;
}
