'use strict';

const EventEmitter = require('events');

// Creamos un emisor de eventos
const emisor = new EventEmitter();

emisor.on('llamar telefono', suenaTelefono);
emisor.on('llamar telefono', vibrarTelefono);

function suenaTelefono (quien, ubicacion) {
  if (quien === 'madre') {
    console.log('Madre, lo de wikileaks');
  }
  console.log('Rring Ring', '-', ubicacion);
}

function vibrarTelefono () {
  console.log("Brrr Brrrrr")
}

emisor.emit('llamar telefono', 'madre', 'desde casa');

/* process.stdin.on('data', function (data) {
  console.log('he recibido', data);
}) */