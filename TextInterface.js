class TextInterface {
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

    defineCommands (commandObject) {
        this.commands = Object.assign(commandObject);
    }
}