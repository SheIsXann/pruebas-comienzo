//let titulo = document 
/* DOM es un puente entre HTML y java, que permite trabajar con metodos, como es el querySelector*/
//.querySelector /*querySelector es un metodo que necesita de parametros*/
// /*('h1'/*espera un selector para acceder, en este caso la etiqueta h1)*/ /*parametro*/;
/* se le tiene que asignar = una variable a este valor con let, const o var, */
/*esta es una caja y tiene metodos que definen su comportamiento, en este caso, mantener un texto.*/
/* necesita de una llamda*/
// titulo /* este es una variable de HTML*/ /*Metodo innerHTML para este elemento*/ 
// .innerHTML /*con esta llamada se puede definir un titulo*/ 
// = 
// 'juego del numero secreto'/* texto que aparece */
// ; /*buena practica ;*/

// EJEMPLO

// let titulo =document.querySelector('h1);
//titulo.innerHTML = 'juego del numero secreto'

/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10'*/


/*COMO INTERACTUAR CON BOTONES PARA ENVIAR ACCIONES O EVENTOS (CLICK, TECLEAR, MOVER CURSOR, ETC)*/

/*IR AL CODIGO HTML
BUSCAR LA ETIQUETA BUTTON <>
TODOS LOS EVENTOS CON (ON) en o cuando
onclick="" se usa cuando se quiere interactuar, pero lo usado es no colocar codigo java.
Si no una funcion, que es un proceso que realiza una tarea y puede o no retornar un valor.
TODA FUNCION LLEVA PARENTESIS.
La funcion es un encapsulamiento de lo que queremos que haga.
 <button onclick="nombre de funcion con camelcase" class="container__boton">Intentar</button>

 ejemplo en HTML

 <button onclick="intentoDeUsuario();" class="container__boton">Intentar</button> */

 /* JAVA FUNCION*/
 /*No importa como tal donde este declarada la funcion HOISTING*/
 /*function (funcion) intentoDeUsuario (nombre de la funcion conectada a HTLM)(parentesis) {  }*/

/* function intentoDeUsuario(){
    alert('click desde el boton');
 }*/
 /*todo el codigo se puede optimizar, o sea hacerse mas pequeno u automatizado*/

/*function asignarTextoElemento() {
let titulo = document
/* DOM es un puente entre HTML y java, que permite trabajar con metodos, como es el querySelector*/
/*.querySelector 
/*querySelector es un metodo que necesita de parametros*/
///*('h1')/*espera un selector para acceder, en este caso la etiqueta h1*//*parametro*/
//; /*buena practica*/
/* se le tiene que asignar = una variable a este valor con let, const o var, */
/*esta es una caja y tiene metodos que definen su comportamiento, en este caso, mantener un texto.*/
///* necesita de una llamda*/ 
// titulo /* este es una variable de HTML*/ 
// /*Metodo innerHTML para este elemento*/ 
// .innerHTML /*con esta llamada se puede definir un titulo*/ 
// = 'juego del numero secreto ACTUALIZADO'/* texto que aparece */; /*buena practica ;
// }*/

//ejemplo

/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10'*/

/*function asignarTextoElemento() {
let titulo = document.querySelector('h1'):*/
/*titulo.innerHTML = 'juego del numero secreto ACTUALIZADO'
}*/

/*llamar a la funcion*/

/*asignarTextoElemento(); */

let numeroSecreto = generarNumeroSecreto /*variable de alcance global para el numeroSecreto*/
console.log(numeroSecreto);

/*HACER LA FUNCION GENERICA*/ 
function asignarTextoElemento(elemento/*parametro*/,texto /*parametro*/ /*estas son variables dentro de la funcion*/) {
    let elemetroHTLM /*variable*/ = document.querySelector(elemento /*se cambian las nuevas variables*/) ;
    elemetroHTLM.innerHTML = texto /*se cambia a una variable*/; 
    /*la funcion puede recibir parametros*/
    /*return;*/ /* sirve para retornar la funcion*/
    return;
}
function verificarIntento(){
    alert('click desde el boton');
    return;
}

/*llamar a la funcion, puede se fuera del bloque de texto{}*/
asignarTextoElemento('h1','Juego del numero Secreto!');
asignarTextoElemento('p','Indica un numero del 1 al 100');

//FUNCION PARA GENERAR UN NUMERO ALEATORIO 

function generarNumeroSecreto(/*sin parametros*/) {
    /*let numeroSecreto = Math.floor(Math.random()*10)+1;*/ /* en este caso no es necesario crear una variable*/
    return Math.floor(Math.random()*10)+1;
}

/*INPUT*/
function verificarIntento(){
    /*let numeroDeUsuario = document.querySelector ('input')*/
    /*vamos a crear que cada input tenga un indentificador con el atributo id en HTML, ejmplo el minimo maximo, etc*/
    //hay mas de un imput por ello tenemos que identificarlos//
    //funcion solo para buscar por id (document.get que tiene diferentes fucniones como getElement7ById, cerramos con el parametro)
    let /*variable*/numeroDeUsuario = document.get/*get de obtener */ElementById("valorUsuario")/*tiene atributos como el value*/.value;
    /*alert('click desde el boton');*/
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario);
    /*DATO BOOLEANO DA VALORES TRUE OR FALSE*/
    console.log(numeroDeUsuario /*COMPARAR*/ == numeroSecreto); /*esta condicion nos va a retornar el numero booleano*/
    return;
}
