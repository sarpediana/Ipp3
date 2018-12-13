import { Account } from "./Account";

export class Bitcoin extends Account {
    public balance;
    // public instance = new Bitcoin();

    public Bitcoin(balance) {
        this.balance = balance;
    }

    public getBalance() {
        return this.balance;
    }
}