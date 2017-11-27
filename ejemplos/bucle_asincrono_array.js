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
// queremos llamar a una función asíncrona procesando un array en serie
function serie (arr, fn, callbackFinalizador) {
    
    var i = arr.shift()
    
    if ((! i) && callbackFinalizador) {
        callbackFinalizador(); // avisamos que hemos terminado
        return; // evitamos que termine ejecutándose más veces
    }

    fn('texto ' + i, function () {
        serie(arr, fn, callbackFinalizador);
    });
}

serie ([1, 2, 3] ,escribeTras2Segundos, function () {
    console.log('ya he terminado del todo');
});