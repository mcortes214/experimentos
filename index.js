// Construir espacios ("estados") y acciones para pasar de un espacio a otro

const juego = new Estados();

juego.definirEstado('exterior', {
    titulo: 'Exterior',
    msg: "Es un día soleado. No pasan autos, y a lo lejos se escuchan risas de niños."
});
juego.definirEstado('cocina', {
    titulo: 'Cocina',
    msg: "La cocina todavía huele al budín de manzana que hiciste más temprano. Aunque afuera hace calor, las cortinas mantienen el lugar fresco."
});
juego.definirEstado('dormitorio', {
    titulo: 'Dormitorio',
    msg: "El dormitorio está oscuro y fresco; el solo entrar te da ganas de meterte en las sábanas, cerrar los ojos y dormir."

});
juego.definirEstado('baño', {
    titulo: 'Baño',
    msg: "No hay nada muy interesante en el baño. Te quedás mirando el espejo que conseguiste esta semana en la feria; fue una buena compra."
});



juego.definirEstado('baño2', {
    titulo: 'Baño',
    msg: "Por un rato, observás tu cara en el espejo. Ves marcas de cansancio y pensás en el pasado, pero sentís orgullo de la vida tranquila que estás llevando ahora.",
});
juego.definirEstado('cocina2', {
    titulo: 'Cocina',
    msg: "La cocina todavía huele al budín de manzana que hiciste más temprano.",
});
juego.definirEstado('dormitorio2', {
    titulo: 'Dormitorio',
    msg: "El dormitorio se enfrió. Dan ganas de dormir.",
});
juego.definirEstado('exterior2', {
    titulo: 'Exterior',
    msg: "Te abrigás y salís a la calle. Hace semanas que el invierno castiga al pueblo, pero la tranquilidad sigue reinando. Te imaginás a la gente dentro de sus hogares, al abrigo de sus familias.",
});
juego.definirEstado('calle', {
    titulo: 'Calle principal',
    msg: "Por la siesta, los negocios están cerrados. En primavera la calle se llena de familias paseando y disfrutando; en este momento deben estar guardados. Desde la panadería solía llegar un olor tenue, pero delicioso.",
});

juego.definirEstado('exterior3', {
    titulo: 'Exterior',
    msg: "La tranquilidad reina en las calles. Recordás a la gente dentro de sus hogares, al abrigo de sus familias.",
});

juego.definirEstado('cocina3', {
    titulo: 'Cocina',
    msg: "La cocina huele a budín de manzana.",
});

juego.definirEstado('baño3', {
    titulo: 'Baño',
    msg: "No hay nada muy interesante en el baño. De hecho, está un poco avejentado; hace mucho que no hacés reformas en la casa. Uno se pregunta si lo vale.",
});

juego.definirEstado('dormitorio3', {
    titulo: 'Dormitorio',
    msg: "No hay nada muy interesante en el dormitorio. Está helado; no dan ganas de estar en este lugar.",
});

juego.definirEstado('baño4', {
    titulo: 'Baño',
    msg: "El espejo tiene un marco hecho en madera, pintado con motivos florales. Con la mano, le limpiás el polvo. Es uno de tus recuerdos más preciados.",
});

juego.definirEstado('cocina4', {
    titulo: 'Cocina',
    msg: "Al entrar a la cocina, viene a tu cabeza un aroma vago a budín de manzana. Tu cabeza se traslada a aquel picnic en la plaza. El estómago se te cierra un poco: enseguida comenzás a pensar en otra cosa.",
});

juego.definirEstado('dormitorio4', {
    titulo: 'Dormitorio',
    msg: "No querés estar en el dormitorio. El aire gélido y la negrura total te producen una sensación desagradable. Te da miedo encender la luz; nunca más pudiste hacerlo.",
});

juego.definirEstado('baño5', {
    titulo: 'Baño',
    msg: "No hay nada muy interesante en el baño. Como una brisa, llega un lindo recuerdo: el espejo con el marco de madera, con motivos florales. Por un momento todo parece un poco más cálido.",
});

juego.definirEstado('exterior4', {
    titulo: 'Exterior',
    msg: "Por un momento, el frío te hace temblar, pero tu cuerpo se aclimata. El viento te despeja la cabeza. Mirás brevemente a la casa de los que eran tus vecinos; recordás por qué pusiste las cortinas. Pero pensás en otra cosa.",
});

juego.definirEstado('calle2', {
    titulo: 'Calle principal',
    msg: "A medida que caminás, el recuerdo de las risas de tus hijos parece casi real; se siente como un puñal. No querés llegar a la panadería. Querés volver inmediatamente.",
});

juego.definirEstado('exterior5', {
    titulo: 'Exterior',
    msg: "No sentís que puedas entrar a la casa. Cuanto más recorrés, los recuerdos desagradables se hacen cada vez más presentes; no necesitás más estímulos por ahora. Mirás al cielo.",
});

juego.definirEstado('exterior6', {
    titulo: 'Exterior',
    msg: "El pasto está crecido; se siente como un colchón. Hace tiempo no tenés un buen descanso y la sensación es sorpresivamente agradable, pese al frío. Mirar las nubes te calma. Algunos recuerdos dejan de invadir tu cabeza, y otros, más agradables, vuelven a tomar forma. Por un momento pareciera que tu cabeza se traslada al pasado, el frío no se siente tanto. Quizá puedas intentar olvidar por un rato lo que pasó. De a poco, comenzás a sentirte en otro estado.",
});

juego.definirEstado('exterior7', {
    titulo: 'Exterior',
    msg: `Por tu cabeza siguen pasando recuerdos: las salidas con tu familia al centro del pueblo, el día que visitaron la feria. El picnic que hicieron en la plaza, el budín, y el olor a manteca que llegaba desde la panadería; y el marco de madera con motivos florales. Como un loop, los recuerdos se pasean cada vez más intensamente por tu cabeza. De a poco, el frío se siente cada vez menos; el cuerpo se hace ligero y te entregás al tren de los recuerdos. Abrigado por tu cabeza, eventualmente perdés la noción de los sentidos. Como una sábana, con delicadeza y paciencia, la nieve se acumula sobre el cuerpo. Hacía mucho que no tenías un buen descanso, y la vida es agotadora.

    Está oscuro y fresco; te dan ganas de cerrar los ojos, y dormir.
    
    -fin-`,
});



juego.definirAccion('cocina', 'Ir al baño', 'baño');
juego.definirAccion('cocina', 'Ir al dormitorio', 'dormitorio');
juego.definirAccion('cocina', 'Ir al exterior', 'exterior');
juego.definirAccion('baño', 'Volver a la cocina', 'cocina');
juego.definirAccion('baño', 'Ver espejo', 'baño2');
juego.definirAccion('dormitorio', 'Volver a la cocina', 'cocina');
juego.definirAccion('exterior', 'Entrar a la casa', 'cocina');

juego.definirAccion('cocina2', 'Ir al baño', 'baño2');
juego.definirAccion('cocina2', 'Ir al dormitorio', 'dormitorio2');
juego.definirAccion('cocina2', 'Ir al exterior', 'exterior2');
juego.definirAccion('baño2', 'Volver a la cocina', 'cocina2');
juego.definirAccion('dormitorio2', 'Volver a la cocina', 'cocina2');
juego.definirAccion('exterior2', 'Entrar a la casa', 'cocina2');
juego.definirAccion('exterior2', 'Caminar por la calle', 'calle');

juego.definirAccion('calle', 'Volver a la casa', 'exterior3');

juego.definirAccion('exterior3', 'Entrar a la casa', 'cocina3');
juego.definirAccion('exterior3', 'Caminar por la calle', 'calle');

juego.definirAccion('cocina3', 'Ir al baño', 'baño3');
juego.definirAccion('cocina3', 'Ir al dormitorio', 'dormitorio3');
juego.definirAccion('cocina3', 'Ir al exterior', 'exterior3');
juego.definirAccion('baño3', 'Volver a la cocina', 'cocina3');
juego.definirAccion('baño3', 'Ver espejo', 'baño4');
juego.definirAccion('dormitorio3', 'Volver a la cocina', 'cocina3');
juego.definirAccion('exterior3', 'Entrar a la casa', 'cocina3');

juego.definirAccion('baño4', 'Volver a la cocina', 'cocina4');
juego.definirAccion('cocina4', 'Ir al baño', 'baño5');
juego.definirAccion('baño5', 'Volver a la cocina', 'cocina4');
juego.definirAccion('cocina4', 'Ir al dormitorio', 'dormitorio4');
juego.definirAccion('cocina4', 'Ir al exterior', 'exterior4');
juego.definirAccion('dormitorio4', 'Volver a la cocina', 'cocina4');
juego.definirAccion('exterior4', 'Entrar a la casa', 'cocina4');
juego.definirAccion('exterior4', 'Caminar por la calle', 'calle2');

juego.definirAccion('calle2', 'Volver a la casa', 'exterior5');

juego.definirAccion('exterior5', 'Acostarte y mirar al cielo', 'exterior6');

juego.definirAccion('exterior6', 'Seguir acostado', 'exterior7');
juego.definirAccion('exterior6', 'Entrar a la casa', 'cocina');


juego.definirEstadoActual('cocina');

//---

// --- Crear interfaz de texto ---

// Comandos que siempre van a estar disponibles en la interfaz:
const comandosGlobales = {
    'listar acciones': () => {
        return Object.keys(juego.listarAcciones()).join(', ');
    },
    'lugar actual': () => {
        return `--- ${juego.obtenerPropiedades().titulo} ---
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
            return `--- ${juego.obtenerPropiedades().titulo} ---
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
interfaz.runCommand('lugar actual');