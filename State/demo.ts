import { VibrationState } from "./VibrationState";
import { PhoneStateContext } from "./PhoneStateContext";
import { SoundState } from "./SoundState";

export class Client {

    public main() {

        const pState = new VibrationState();
        const p2State = new SoundState();
        const context = new PhoneStateContext();

        context.PhoneStateContext(pState);
        context.checkSound();

        context.PhoneStateContext(p2State);
        context.checkSound();
    }
}