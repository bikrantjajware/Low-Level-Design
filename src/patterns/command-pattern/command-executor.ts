import { Command } from "./others";

export abstract class CommandExecutor {
    execute(command:Command){
        if(!this.isValid(command)){
                console.log('invalid command');
                return;
        }
        return this.executeValidCommand(command);
    }
    isApplicable(command:Command): boolean {
        return  this.isValid(command);
    }
    protected abstract isValid (command:Command): boolean
    protected abstract executeValidCommand(command:Command) : void
} 
