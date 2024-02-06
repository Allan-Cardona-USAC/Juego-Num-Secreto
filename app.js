/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';*/
// primer comit
let numeroSecreto =0;
let intentos=0;
//Declaracion de arreglo o array
let listaDeNumerosSorteados= [];
//Declaramos el rango maximo
let numeroMaximo = 10;
//Declaracion de Funcion
function asigarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    //Una buena Practica es poner return siempre sin importar 
    //si retorna o no un valor
    return;
}
function verificarIntento(){
    //usamos selector id y lo llamamos con el metodo get
    // value va en minusculas
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(numeroSecreto === numeroDeUsuario); 
    if (numeroDeUsuario === numeroSecreto) {
        //Mandamos a llamar a nuestra funcion del parrafo
        asigarTextoElemento('p',`Acertartes el Numero en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`); // usamos los alternarios
        activarBotonReinicio();
    }else{
        //El usuario no acerto 
        if (numeroDeUsuario > numeroSecreto) {
            asigarTextoElemento('p','El Número es Menor')
        }else{
            asigarTextoElemento('p','El Número es Mayor')
        }
        intentos++;
        LimpiarCaja();
    }
    return;
}
function LimpiarCaja() {
    //para usar el QuerySelector con ID se tiene que anteponer un #
    /* let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value =''; */
    //Otra Opcion Seria 
    document.querySelector('#valorUsuario').value='';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos el numero 
    if (listaDeNumerosSorteados.length == numeroMaximo) {
        asigarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        //Si el numero generado esta en la lista hacemos unas operacion sino hacemos otra
        // metodo includes verifica si el numero de la lista ya fue mostrado
        if (listaDeNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
    
}
function condicionesIniciales() {
    asigarTextoElemento('h1','Juego Del Número Secreto');
    asigarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    LimpiarCaja();
    numeroSecreto = generarNumeroSecreto();
    // Dom para desactivar el boton de reinicio que lleva 2 parametros
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    intentos=1;
}
function activarBotonReinicio(){
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function reiniciarJuego() {
    /*
    Limpiar Caja
    Indicar el mensaje inicial
    Generar el número Aleatorio
    Desabiliatr el boton de nuevo Juego
    Recetear el contador de intentos
     */
    condicionesIniciales();
}
condicionesIniciales();
