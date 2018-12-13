import { WorkoutStrategy } from "./interfaces";

export class Running implements WorkoutStrategy {
    public fire(): void {
        console.log('Running')
    }
}

export class Basketball implements WorkoutStrategy {
    public fire(): void {
        console.log('Basketball')
    }
}

export class Swimming implements WorkoutStrategy {
    public fire(): void {
        console.log('Swimming')
    }
}