import { Bank } from "./Bank";
import { PayPal } from "./PayPal";
import { Bitcoin } from "./Bitcoin";


const bank = new Bank();
bank.Bank(150);

const payPal = new PayPal();
payPal.PayPal(200);

const bitcoin = new Bitcoin();
bitcoin.Bitcoin(300);

bank.setNext(payPal);
payPal.setNext(bitcoin);


bank.pay(390);
payPal.pay(390);