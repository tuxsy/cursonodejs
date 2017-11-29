'use strict';

// Vamos a crear la closure, función factoía 

function creaAgente (nombre) {
  return {
    getNombre: function () {
        return nombre;
    },
    setNombre: function (valor) {
      nombre = valor;
    },
    saluda: function () {
      console.log('Hola soy', nombre);
    }
  }
}

var nombre = 'Manolo'

const jones = creaAgente(nombre);
jones.setNombre('Jones');

jones.saluda();

// setTimeout(jones.saluda, 2000);

console.log('variable nombre:', nombre);