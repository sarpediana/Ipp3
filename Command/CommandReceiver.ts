import { Receive } from "./interfaces";

export class CommandReceiver implements Receive {
    action(): void {
        console.log('Receiver takes action');
    }
}