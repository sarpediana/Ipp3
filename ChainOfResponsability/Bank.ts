
import { Account } from "./Account";

export class Bank extends Account {
    public balance;
    // public instance = new Bank();

    public Bank(balance) {
        this.balance = balance;
    }

    public getBalance() {
        return this.balance;
    }
}