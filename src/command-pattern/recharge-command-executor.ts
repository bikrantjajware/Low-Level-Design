import { Command } from "./others";
import {CommandExecutor} from './command-executor';
import {db} from './db';

export class RechargeCommandExecutor extends CommandExecutor{
     executeValidCommand(command: Command): number {
        const [user,add] = command.getParams();
        console.log(`adding ${add} to ${user} balance`);
        return db[user].balance = db[user].balance + parseInt(add);
    }
    isValid(command: Command): boolean {
        return command.getName() === 'recharge';
    }
}