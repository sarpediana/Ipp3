import { Account } from "./Account";

export  class PayPal extends Account{
	public balance;
    // public instance = new PayPal();

    public PayPal( balance) {
        this.balance = balance;
    }

    public  getBalance() {
    	return this.balance;
    }
    
    
}