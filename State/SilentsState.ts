import { PhoneState } from "./IPhoneState";

export  class SilentState implements PhoneState{

	public  phoneRingSound() {
		console.log("No Sound, phone is silent");
	}

}