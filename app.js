
let numeroSecreto= 0;
let intentos = 0;
console.log(numeroDeUsuario);
console.log(generarNumeroSecreto);
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
    document.getElementById('reiniciar').removeAttribute('disabled');
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
    return;
}


condicionesIniciales();
   
function limpiarCaja(){
document.querySelector('#valorUsuario').value = "";
}

function condicionesIniciales() {
    
    asignarTextoElemento('h1','Juego del numero Secreto!');
    asignarTextoElemento('p','Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
}