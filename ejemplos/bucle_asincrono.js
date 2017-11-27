'use strict';

function escribeTras2Segundos (texto, callback) {
    setTimeout(function () {
        console.log(texto);
        if (callback) {
            callback();
        } 
    }, 2000);
}


// bucle asíncrono en serie
// queremos llamar a una función asíncrona n veces en serie

function serie (n, fn, callbackFinalizador) {
    if ((n === 0) && callbackFinalizador) {
        callbackFinalizador(); // avisamos que hemos terminado
        return; // evitamos que termine ejecutándose más veces
    }

    n = n -1;
    
    fn('texto ' + n, function () {
        serie(n, fn, callbackFinalizador);
    });
}

serie (5 ,escribeTras2Segundos, function () {
    console.log('ya he terminado del todo');
});