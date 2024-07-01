// La clase Estados está inspirada por la idea de máquinas de estados finitos.
// Un objeto Estados tiene la forma un grafo dirigido, donde los nodos representan estados
// y las aristas representan acciones que llevan de un estado a otro.

// En este ejemplo cada nodo/estado representa una habitación, y cada arista/acción representa
// el pasaje de una habitación a otra.

import Estados from './Estados.js';
import TextInterface from './TextInterface.js';

const juego = new Estados();

juego.definirEstado('exterior', {
    titulo: 'Exterior',
    msg: "Es un día soleado. No pasan autos, y a lo lejos se escuchan risas de niños que llegan desde la plaza."
});

juego.definirEstado('cocina', {
    titulo: 'Cocina',
    msg: "La cocina todavía huele al budín de manzana que hiciste más temprano. Aunque afuera hace calor, las cortinas mantienen el lugar fresco."
});

juego.definirEstado('dormitorio', {
    titulo: 'Dormitorio',
    msg: "El dormitorio está oscuro y fresco; el solo entrar te da ganas de echarte a descansar un rato."

});
juego.definirEstado('baño', {
    titulo: 'Baño',
    msg: "No hay nada muy interesante en el baño. Te quedás mirando el espejo que conseguiste esta semana en la feria; fue una buena compra."
});



juego.definirAccion({origen: 'cocina', nombreAccion: 'baño', destino: 'baño'});
juego.definirAccion({origen: 'cocina', nombreAccion: 'dormitorio', destino: 'dormitorio'});
juego.definirAccion({origen: 'cocina', nombreAccion: 'exterior', destino: 'exterior'});
juego.definirAccion({origen: 'baño', nombreAccion: 'cocina', destino: 'cocina'});
juego.definirAccion({origen: 'dormitorio', nombreAccion: 'cocina', destino: 'cocina'});
juego.definirAccion({origen: 'exterior', nombreAccion: 'casa', destino: 'cocina'});

juego.definirEstadoActual('cocina');


// --- Crear interfaz de input/output ---

// Comandos que siempre van a estar disponibles en la interfaz:
const comandosGlobales = {
    'acciones': () => {
        return Object.keys(juego.listarAcciones()).map(accion => `\n > ${accion}`).join('');
    },
    'lugar': () => {
        return `
        --- ${juego.obtenerPropiedades().titulo} ---
            ${juego.obtenerPropiedades().msg}
            `;
    }
};

// Función que crea comandos para las acciones de la habitación en la que estamos:
const comandosLocales = () => {
    const nuevasAccionesPosibles = Object.keys(juego.listarAcciones());
    const nuevosComandos = {};

    nuevasAccionesPosibles.forEach( (accion) => {
        nuevosComandos[accion] = () => {
            juego.realizarAccion(accion);
            // Retornar el texto que se va a mostrar en la interfaz:
            return `
            --- ${juego.obtenerPropiedades().titulo} ---
            ${juego.obtenerPropiedades().msg}
            `;
        }; 
    } );

    return nuevosComandos;
}

const actualizarComandosInterfaz = () => {
    const comandos = {};
    Object.assign(comandos, comandosGlobales);
    Object.assign(comandos, comandosLocales());
    interfaz.defineCommands(comandos);
}

// Construir la interfaz

const interfaz = new TextInterface({
    inputElement: document.querySelector('#input'),
    outputElement: document.querySelector('#output'),
    afterCommand: () => {
        actualizarComandosInterfaz();
    }
});

//Crear set inicial de comandos y mostrar lugar actual
actualizarComandosInterfaz();
interfaz.runCommand('lugar');