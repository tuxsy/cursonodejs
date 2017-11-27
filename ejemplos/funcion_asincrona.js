'use strict';

function escribeTras2Segundos (texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000);
}

escribeTras2Segundos('Hola 1', function () {

    escribeTras2Segundos('Hola 2', function () {
        console.log('He terminado.')
    });
});


console.log('Mientras esperas voy haciendo otra cosa');

