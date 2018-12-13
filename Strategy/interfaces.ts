export interface WorkoutStrategy {
    fire(): void;
    stop?(): void;
}