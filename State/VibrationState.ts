import { PhoneState } from "./IPhoneState";

export  class VibrationState implements PhoneState{

	public  phoneRingSound() {
		console.log("Phone is vibrating");
	}

}
