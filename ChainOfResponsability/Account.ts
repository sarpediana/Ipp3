
export abstract class Account {

    private successor: Account;
    public balance ;

    public setNext(a: Account) {
        this.successor = a;
    }

    public canPay(amount: number): boolean {
        if (this.getBalance() >= amount) {
            return true;
        }
        return false;
    }

    public pay(amountToPay): void {
        const instance = this;
        if (this.canPay(amountToPay)) {
            console.log("Paid $" + amountToPay + " using " + Object.keys(instance.constructor())[0]);
        } else if (this.getSucessor() != null) {
            console.log("Cannot pay using " + Object.keys(instance.constructor()));
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