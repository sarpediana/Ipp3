export interface Command {
    execute(): void;
}

export interface Receive {
    action(): void;
}

export interface Invoke {
    runCommand(command?: Command): void;
}