import { CommandExecutor } from "./command-executor";
import { Command } from "./others";
import { db } from "./db";

export class BalanceCommandExecutor extends CommandExecutor{
    protected executeValidCommand(command: Command): void {
        const [user] = command.getParams();
        console.log(`${user} balance = ${db[user].balance}`);
    }
    protected isValid(command:Command): boolean {
        return command.getName() === 'balance';
    }
}