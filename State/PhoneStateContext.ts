import { PhoneState } from "./IPhoneState";

export class PhoneStateContext {

    private phoneState: PhoneState;

    public PhoneStateContext(phoneState: PhoneState) {
        this.phoneState = phoneState;
    }

    public checkSound():void{
        this.phoneState.phoneRingSound();
    }
}