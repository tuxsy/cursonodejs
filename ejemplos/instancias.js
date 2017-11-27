'use strict';

//  función que construye objetos 
function Fruta (nombre) {
    this.nombre = nombre;
}

const limon = new Fruta('Limón');

console.log(limon);