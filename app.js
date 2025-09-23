
let numeroSecreto = generarNumeroSecreto();
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
asignarTextoElemento('p','Indica un numero del 1 al 10');

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', 'Acertaste el numero');

    }else{ 
        if (numeroDeUsuario > numeroSecreto){ 
            asignarTextoElemento('p', 'El numero es menor')
        }else {
            asignarTextoElemento('p', 'El numero secreto es mayor')
        }
    } 
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario == numeroSecreto);
    return;
}
