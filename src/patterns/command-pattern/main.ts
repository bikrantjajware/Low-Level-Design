import { BalanceCommandExecutor } from "./balance-command-executor";
import { CommandExecutor } from "./command-executor";
import { Command } from "./others";
import { RechargeCommandExecutor } from "./recharge-command-executor";


export function main(){

    const allExecutors = [new BalanceCommandExecutor(), new RechargeCommandExecutor()]
    const commandToRun1 = new Command('balance',['bikrant']);
    const commandToRun2 = new Command('recharge',['bikrant','20']);
    const commandToRun3 = new Command('balance',['bikrant']);

    console.log('running cmd 1 ...');
    for(const exc of allExecutors){
        if(exc.isApplicable(commandToRun1))
            exc.execute(commandToRun1);
    }
    console.log('running cmd 2 ...');
    for(const exc of allExecutors){
        if(exc.isApplicable(commandToRun2))
            exc.execute(commandToRun2);
    }

    console.log('running cmd 3 ...');
    for(const exc of allExecutors){
        if(exc.isApplicable(commandToRun3))
            exc.execute(commandToRun3);
    }
}
