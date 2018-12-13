import { Subscriber } from './subscriber';
import { Notification } from './notification';

export class Listener implements Subscriber {
  constructor(public readonly name: string) { }

  notify(notification: Notification): void {
    console.log(`[${this.name}] from [${notification.sender}]: ${notification.message}`);
  }
}
