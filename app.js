
let numeroSecreto = generarNumeroSecreto
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elemetoHTLM = document.querySelector(elemento) ;
    elemetroHTLM.innerHTML = texto
    return;
}
function verificarIntento(){
    alert('click desde el boton');
    return;
}
asignarTextoElemento('h1','Juego del numero Secreto!');
asignarTextoElemento('p','Indica un numero del 1 al 100');

function generarNumeroSecreto(/*sin parametros*/) {
    return Math.floor(Math.random()*10)+1;
}

/*INPUT*/
function verificarIntento(){
    let numeroDeUsuario = document.getElementById("valorUsuario").value;
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario == numeroSecreto);
    return;
 
}
