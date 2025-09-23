
let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);
let intentos = 1;
function asignarTextoElemento(elemento, texto) {
    let elemetoHTML = document.querySelector(elemento);
    elemetoHTML.innerHTML = texto;
    return;
}
asignarTextoElemento('h1','Juego del numero Secreto!');
asignarTextoElemento('p','Indica un numero del 1 al 10');

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);

    }else{ 
        if (numeroDeUsuario > numeroSecreto){ 
            asignarTextoElemento('p', 'El numero es menor');
        }else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
    } 
    console.log(numeroDeUsuario);
    return;
}

