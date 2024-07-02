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

juego.definirEstado('plaza', {
    titulo: 'Plaza',
    msg: "La plaza está llena de familias paseando, y de chicos jugando. También hay parejas y grupos de amigos que salieron de picnic."
});



juego.definirAccion({origen: 'cocina', nombreAccion: 'baño', destino: 'baño'});
juego.definirAccion({origen: 'cocina', nombreAccion: 'dormitorio', destino: 'dormitorio'});
juego.definirAccion({origen: 'cocina', nombreAccion: 'exterior', destino: 'exterior'});
juego.definirAccion({origen: 'baño', nombreAccion: 'cocina', destino: 'cocina'});
juego.definirAccion({origen: 'dormitorio', nombreAccion: 'cocina', destino: 'cocina'});
juego.definirAccion({origen: 'exterior', nombreAccion: 'interior', destino: 'cocina'});
juego.definirAccion({origen: 'exterior', nombreAccion: 'plaza', destino: 'plaza'});
juego.definirAccion({origen: 'plaza', nombreAccion: 'casa', destino: 'exterior'});

juego.definirEstadoActual('cocina');


// --- Crear interfaz de input/output ---


// Funciones para los comandos que se pueden ejecutar desde cualquier habitación.
// Estas funciones siempre retornan texto (que se muestra en el elemento asignado como output)

const listarAcciones = () => {
    return Object.keys(juego.listarAcciones()).map(accion => `\n > ${accion}`).join('');
};

const describirLugar = () => {
    return `
    --- ${juego.obtenerPropiedades().titulo} ---
        ${juego.obtenerPropiedades().msg}
        `;
};

// Función que crea los comandos que dependen de la habitación en la que estemos:

const generarComandosLocales = () => {
    const nuevasAccionesPosibles = Object.keys(juego.listarAcciones());
    const nuevosComandos = {};
    nuevasAccionesPosibles.forEach( (accion) => {
        nuevosComandos[accion] = () => {
            juego.realizarAccion(accion);
            return describirLugar();
        }; 
    } );
    return nuevosComandos;
};

const actualizarComandosPosibles = () => {
    interfaz.setCommands([
        {
            'acciones': listarAcciones,
            'lugar': describirLugar,
        },
        generarComandosLocales()
    ]);
};

// Construir la interfaz

const interfaz = new TextInterface({
    inputElement: document.querySelector('#input'),
    outputElement: document.querySelector('#output'),
    afterCommand: () => {
        actualizarComandosPosibles();
    }
});

//Crear set inicial de comandos y mostrar lugar actual
actualizarComandosPosibles();
interfaz.runCommand('lugar');