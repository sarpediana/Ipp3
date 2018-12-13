import { Subscriber } from './subscriber';
import { Notification } from './notification';

export class Publisher {
  private lastTokenId = 0;
  private readonly subscribers: Map<number, Subscriber> = new Map();

  subscribe(subscriber: Subscriber): number {
    const token = this.nextToken();
    this.subscribers.set(token, subscriber);

    return token;
  }

  unsubscribe(token: number): boolean {
    return this.subscribers.delete(token);
  }

  notify(notification: Notification) {
    this.subscribers.forEach((subscriber) => {
      if (notification.sender !== subscriber.name) {
        subscriber.notify(notification);
      }
    });
  }

  private nextToken() {
    this.lastTokenId += 1;
    return this.lastTokenId;
  }
}

interface Map<K, V> {
  clear(): void;
  delete(key: K): boolean;
  forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): this;
  readonly size: number;
}

interface MapConstructor {
  new(): Map<any, any>;
  new<K, V>(entries?: ReadonlyArray<[K, V]> | null): Map<K, V>;
  readonly prototype: Map<any, any>;
}

declare var Map: MapConstructor;