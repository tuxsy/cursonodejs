'use strict';

// Constructor
function Persona (nombre) {
    this.nombre = nombre;
}

// creamos un objeto
const luis = new Persona('Luís');

// inyectamos un nuevo método a los objetos 'Persona'
Persona.prototype.saluda = function () {
    console.log('Hola soy', this.nombre);
}

luis.saluda();

// Herencia de Persona -------------------------------------------
function Agente(name) {
    // Constructor, llamamos a super
    Persona.call(this, name);
}

Agente.prototype = new Persona(); // Decimos que el padre de Agente es Persona

const smith = new Agente('Smith');
smith.saluda();

console.log('¿Smith es agente?', smith instanceof Agente);
console.log('¿Smith es persona?', smith instanceof Persona);

// Herencia múltiple ---------------------------------

// Mixin Superhéroes
function Superheroe () {
    this.vuela = function () {
        console.log(this.nombre, 'vuela');
    }
    this.esquivaBalas = function () {
        console.log(this.nombre, 'esquiva balas');
    }
}
// Copiamos todas las propiedades de superhéroe al prototipo del agente
Object.assign(Agente.prototype, new Superheroe());

smith.vuela();
smith.esquivaBalas();