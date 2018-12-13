import { PhoneState } from "./IPhoneState";

export class SoundState implements PhoneState{

	public  phoneRingSound() {
		console.log("Phone is ringing");
	}

}
