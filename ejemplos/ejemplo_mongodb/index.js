'use strict';

const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost/cursonode', (err, db) => {
  if (err) {
    console.log('ERROR DE CONEXIÓN A LA BD', err);
    process.exit(1);
  }
  db.collection('agentes').find().toArray((err, docs) => {
    if (err) {
      console.log('ERROR AL RECUPERAR LOS AGENTES', err);
    }

    for (let i=0; i < docs.length; i++) {
      const agente = docs[i];
      console.log(agente.name, agente.age);
      db.close();
    }
  });
});