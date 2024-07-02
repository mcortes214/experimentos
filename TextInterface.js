// Toma textos del input, y como respuesta devuelve texto en el output.
// A cada comando se asigna una función; esa función debe retornar texto.

export default class TextInterface {
    constructor ({inputElement, outputElement, beforeCommand, afterCommand}) {
        this.inputElement = inputElement;
        this.outputElement = outputElement;
        this.commands = {};
        this.beforeCommand = beforeCommand ? beforeCommand : ()=>{};
        this.afterCommand = afterCommand ? afterCommand : ()=>{};

        //Enter: ejecutar comando
        this.inputElement.addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                const command = event.target.value;
                this.inputElement.value = '';
                this.runCommand(command);
            }
          });
    }

    runCommand (command) {
        if (! Object.hasOwn(this.commands, command)) {
            this.outputElement.innerText = `No such command: ${command}`;
            return;
        }
        this.beforeCommand();
        this.outputElement.innerText = this.commands[command]();
        this.afterCommand();
    }

    addCommands (commandObjects) {
        Object.assign(this.commands, commandObjects);
    }

    resetCommands () {
        console.log('--reset--');
        this.commands = {};
    }

    setCommands (commandObjects) {
        this.resetCommands();
        if (! Array.isArray(commandObjects)) {
            this.addCommands(commandObjects);
            return;
        }
        // Si es un Array, iterar
        for (let obj of commandObjects) {
            this.addCommands(obj);
        }
    }

}