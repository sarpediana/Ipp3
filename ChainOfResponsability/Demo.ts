import { Bank } from "./Bank";
import { PayPal } from "./PayPal";
import { Bitcoin } from "./Bitcoin";

export class Transaction {
    public main() {
        const bank = new Bank();
        bank.Bank(400);

        const payPal = new PayPal();
        payPal.PayPal(200);

        const bitcoin = new Bitcoin();
        bitcoin.Bitcoin(300);

        bank.setNext(payPal, 'payPal');
        payPal.setNext(bitcoin, 'bitcoin');


        bank.pay(110);
        payPal.pay(120);
        bitcoin.pay(500);
    }
}