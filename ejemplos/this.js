'use strict';

const persona = {
    name: 'Luís',
    surname: 'Gómez',
    sayName: function () {
        console.log(this, '-', this.name + ' ' + this.surname);
    }
}

// persona.sayName()

// setTimeout(persona.sayName.bind(persona), 2000);

const saluda = persona.sayName.bind(persona);

saluda();