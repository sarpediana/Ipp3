import { Notification } from './notification';

export interface Subscriber {
  readonly name: string;

  notify(notification: Notification): void;
}
