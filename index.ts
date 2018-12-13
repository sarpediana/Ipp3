import { Transaction } from "./ChainOfResponsability/Demo";
import { Client } from "./State/demo";

chainOfResponsability();
state();

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