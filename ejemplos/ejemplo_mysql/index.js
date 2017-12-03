'use strict';

// Cargamos el driver de mysql
const mysql = require('mysql');

// Establecemos conexión
const conexion = mysql.createConnection({
  host: 'didimo.es',
  user: 'usuariocurso',
  password: 'us3r',
  database: 'cursonode'
});

// Lanzamos una consulta
conexion.connect();


conexion.query('SELECT * FROM agentes', (err, rows, fields) => {
  if (err) {
    console.log('Ha habido un error', err);
    process.exit(1);
  }

  for (let i = 0; i < rows.length; i ++) {
    const agente = rows[i];
    console.log(agente.idagentes, agente.name, agente.age);
  }

  // cerramos la conexión
  conexion.end();
  console.log('Bye.')
});

//cerramos la conexión