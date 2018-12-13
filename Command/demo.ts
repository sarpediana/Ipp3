import { Command, Invoke } from "./interfaces";
import { CommandReceiver } from "./CommandReceiver";
import { LaunchCommand } from "./LaunchCommand";
import { StopCommand } from "./StopCommand";

export class Invoker implements Invoke {
    private commands: Command[];

    constructor() {
        this.commands = [];
    }

    addCommand(command: Command) {
        this.commands.push(command);
    }

    runCommand(command?: Command) {
        if (command) {
            this.commands.push(command);
        }
        const commandOnFire = this.commands.shift();
        commandOnFire.execute();
    }

    main() {
        const receiver = new CommandReceiver();

        const launch = new LaunchCommand(receiver);
        const stop = new StopCommand(receiver);

        const invoker = new Invoker();

        invoker.addCommand(launch);
        invoker.runCommand();

        invoker.addCommand(stop);
        invoker.runCommand();
    }
}