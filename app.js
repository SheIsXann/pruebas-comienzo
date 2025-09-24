let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);
let intentos = 1;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
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
    /*console.log(numeroDeUsuario);
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario === numeroSecreto);
    alert("click desde el boton")*/
    console.log(numeroSecreto);
    console.log(intentos)
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez': "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto)
            asignarTextoElemento ('p', 'el numero secreto es menor');
        else{(numeroDeUsuario < numeroSecreto)
            asignarTextoElemento ('p', 'el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //let valorCaja = document.querySelector("#valorUsuario");
    //valorCaja.value = "";
    document.querySelector("#valorUsuario").value = "";
}

function condificonesIniciales(){
    asignarTextoElemento('h1','Juego del numero Secreto!');
    asignarTextoElemento('p','Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function jugarDeNuevo(){
    //limpiar la caja
    limpiarCaja()
    //indicar mensaje de intervalo
    //generar el numero aleatorio
    //intentos
    condificonesIniciales()
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute("disabled", 'true');
    
    
}
condificonesIniciales();


//arrays o arreglos
//todos los arreglos empiezan con 0
//tenemos que acceder a posisicones validas
//
