// La clase Estados está inspirada por la idea de máquinas de estados finitos.
// Un objeto Estados tiene la forma un grafo dirigido, donde los nodos representan estados
// y las aristas representan acciones que llevan de un estado a otro.

export default class Estados {

    constructor () {
        this.estados = {};
        this.estadoActual = undefined;
    }

    definirEstado (nombre, props) {
        this.estados[nombre] = {acciones: {}, props};
    }

    eliminarEstado (nombreEstado) {
        delete this.estados[nombreEstado];
    }

    definirAccion ({origen, nombreAccion, destino}) {
        const nombreEstadoInicial = origen;
        const nombreEstadoFinal = destino;

        if (! Object.hasOwn(this.estados, nombreEstadoInicial)) {
            console.warn(`No hay ningún estado con el nombre ${nombreEstadoInicial}.`);
            return;
        }
        if (! Object.hasOwn(this.estados, nombreEstadoFinal)) {
            console.warn(`No hay ningún estado con el nombre ${nombreEstadoFinal}.`);
            return;
        }
        const estadoInicial = this.estados[nombreEstadoInicial];
        estadoInicial.acciones[nombreAccion] = nombreEstadoFinal;
    }

    definirEstadoActual (nombreEstado) {

        if (! Object.hasOwn(this.estados, nombreEstado)) {
            console.warn(`No hay ningún estado con el nombre ${nombreEstado}.`);
            return;
        }

        this.estadoActual = nombreEstado;
    }

    consultarEstadoActual () {
        return this.estadoActual;
    }

    listarAcciones () {
        return this.estados[this.estadoActual].acciones;
    }

    obtenerPropiedades () {
        return this.estados[this.estadoActual].props;
    }

    realizarAccion (nombreAccion) {
        
        const acciones = this.estados[this.estadoActual].acciones;

        if (! Object.hasOwn(acciones, nombreAccion)) {
           console.warn(`No hay ninguna acción llamada ${nombreAccion} para este estado (${this.estadoActual}).`);
           return;
        }

        //Actualizar estado
        this.estadoActual = acciones[nombreAccion];
    }
}