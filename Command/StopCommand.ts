import { Command, Receive } from "./interfaces";

export class StopCommand implements Command {
    private receiver: Receive;

    constructor(receiver: Receive) {
        this.receiver = receiver;
    }

    execute(): void {
        console.log('Stop!!!');
        this.receiver.action();
    }
}