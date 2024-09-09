// Las escenas se construyen en HTML. Acá solo definimos la escena inicial,
// y cómo se conectan las escenas entre sí usando Estados.js.
// Ej: Si existe un <section> con id "inicio", representa el estado "cocina".
// Si tenemos un onclick="realizarAccion('subir')", realizamos la acción "subir".

import Estados from '../lib/Estados.v2.js';

const juego = new Estados();

juego.definirEstado('inicio', {
});

juego.definirEstado('grafo', {
});

juego.definirEstado('cocina', {
    musica: './ambient jungle.mp3',
});

juego.definirEstado('patio', {
    musica: './ambient jungle.mp3',
});


juego.definirAccion({nombreAccion: 'comenzar', origen: 'inicio', destino: 'cocina'});
juego.definirAccion({nombreAccion: 'salir al patio', origen: 'cocina', destino: 'patio'});
juego.definirAccion({nombreAccion: 'volver adentro', origen: 'patio', destino: 'cocina'});

juego.definirAccion({nombreAccion: 'terminar juego', origen: 'cocina', destino: 'inicio'});
juego.definirAccion({nombreAccion: 'terminar juego', origen: 'patio', destino: 'inicio'});

juego.definirAccion({nombreAccion: 'ver grafo', origen: 'inicio', destino: 'grafo'});
juego.definirAccion({nombreAccion: 'volver a inicio', origen: 'grafo', destino: 'inicio'});

juego.definirEstadoActual('inicio');

actualizarVista();

// ---------------------------

// Funciones del juego:


function actualizarVista() {
    // Ocultar escenas
    [...document.querySelectorAll('.escena')]
        .forEach(escena => escena.classList.remove('visible'));

    // Y volver a visibilizar escena actual
    console.log('escena actual:', juego.consultarEstadoActual());
    document.querySelector(`#${juego.consultarEstadoActual()}`)
        .classList.add('visible');
}

function reproducirAudioEscena() {
    const player = document.querySelector('audio');
    const props = juego.obtenerPropiedades();
    const musica = props.musica;
    if (!musica) {
        player.pause();
        return;
    }
    player.pause();
    player.src = musica;
    player.currentTime = 0;
    player.play();
}

// Extendemos juego.realizarAccion para que también se actualice la vista.
// + Exponemos la función a window para usarla desde el HTML

window.realizarAccion = (nombreAccion) => {
    juego.realizarAccion(nombreAccion);
    actualizarVista();
    reproducirAudioEscena();
}

// Exponemos el objeto completo para usarlo para el grafo en d3
window.juego = juego;