
let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);
let intentos = 1;
function asignarTextoElemento(elemento, texto) {
    let elemetoHTML = document.querySelector(elemento);
    elemetoHTML.innerHTML = texto;
    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //COMO ACTIVAR BOTONES CADA VEZ QUE EL USUARIO TERMINA EL JUEGO O ACIERTA
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{ 
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) { 
            asignarTextoElemento('p', 'El numero es menor');
        }else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    } 
    console.log(numeroDeUsuario);
    return;
}
function condicionesIniciales();
   
function limpiarCaja(){
document.querySelector('#valorUsuario').value = "";
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero Secreto!');
    asignarTextoElemento('p','Indica un numero del 1 al 10');
    let numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}
