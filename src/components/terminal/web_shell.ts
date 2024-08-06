import { files } from "./data"

const handleFormatListAll = (files: string[]) => {
    const lines = files.map((file) => {
        return `drwxr-xr-x 00 jayzhou users 00 <date:time> ${file}`
    })

    return lines.join("\n")
}

class WebShell {
    shell = "wsh";

    public invoke(cmd: string) {
        const segments = cmd.split(" ")
        switch (segments[0]) {
            case "ll":
            case "la":
                return handleFormatListAll(Array.from(files.keys()))
            case "ls": 
                return Array.from(files.keys()).join(" ")
            case "cat":
                if (files.has(segments[1])) {
                    return files.get(segments[1])
                } else {
                    return `cat: ${segments[1]}: No such file or directory`
                }
            case "wsh":
                if (segments[1] === "--help") {
                    return "wsh: idk LOL"
                } else {
                    return `${this.shell}: command not found: ${cmd}`
                }
            default:
                return `${this.shell}: command not found: ${cmd}`
        }
        
    }
}

const webShell: WebShell = new WebShell()

export default webShell;