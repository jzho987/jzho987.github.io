class WebShell {
    shell = "wsh";

    public invoke(cmd: string) {
        switch (cmd) {
            case "ll":
            case "la":
                return "dir info>"
            default:
                return `${this.shell}: command not found: ${cmd}`
        }
        
    }
}

const terminal: WebShell = new WebShell()

export default terminal;