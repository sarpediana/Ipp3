import { Transaction } from "./ChainOfResponsability/Demo";
import { Client } from "./State/demo";
import { Listener } from "./Observer/listener";
import { Publisher } from "./Observer/publisher";
import { Invoker } from "./Command/demo";

chainOfResponsability();
state();
observer();
command();

function chainOfResponsability() {
    console.log('Chain Of Responsability');
    const chain = new Transaction();
    chain.main();
}

function state() {
    console.log('\nState');
    const state = new Client();
    state.main();
}

function observer() {
    console.log('\nObserver');

    const chatRoom = new Publisher();
    const alice = new Listener('Alice');
    const bob = new Listener('Bob');
    const joe = new Listener('Joe');

    const aliceToken = chatRoom.subscribe(alice);
    chatRoom.subscribe(bob);
    chatRoom.subscribe(joe);

    chatRoom.notify({ sender: 'Bob', message: 'Hello' });
    chatRoom.notify({ sender: 'Alice', message: 'Hi guys. I need to go...' });

    chatRoom.unsubscribe(aliceToken);

    chatRoom.notify({ sender: 'Joe', message: 'Buy Alice' });
}

function command() {
    console.log('\nCommand');
    const invoker = new Invoker();
    invoker.main();
}