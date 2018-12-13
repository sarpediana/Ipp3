import { Command, Receive } from "./interfaces";

export class LaunchCommand implements Command {
    private receiver: Receive;

    constructor(receiver: Receive) {
        this.receiver = receiver;
    }

    execute(): void {
        console.log('Launch!!!');
        this.receiver.action();
    }
}