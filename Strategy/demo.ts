import { WorkoutStrategy } from "./interfaces";
import { Running, Basketball, Swimming } from "./Sports";

export class Person {
    public strategy: WorkoutStrategy;
    public name: String;
    constructor(name: string, strategy: WorkoutStrategy) {
        this.name = name;
        this.strategy = strategy
    }

    workout(): void {
        console.log(`${this.name} starts:`)
        this.strategy.fire();
    };
}