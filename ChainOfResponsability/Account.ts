
export abstract class Account {

    private successor: Account;
    public balance;
    public using: String;

    public setNext(a: Account, b: String) {
        this.successor = a;
        this.using = b;
    }

    public canPay(amount: number): boolean {
        if (this.getBalance() >= amount) {
            return true;
        }
        return false;
    }

    public pay(amountToPay): void {
        if (this.canPay(amountToPay)) {
            console.log("Paid $" + amountToPay + " using " + this.using);
        } else if (this.getSucessor() != null) {
            console.log("Cannot pay using " + this.using);
            this.getSucessor().pay(amountToPay);
        } else {
            console.log("None of the accounts have enough balance");
        }
    }

    public getBalance() {
        return this.balance;
    }

    public getSucessor(): Account {
        return this.successor;
    }
}