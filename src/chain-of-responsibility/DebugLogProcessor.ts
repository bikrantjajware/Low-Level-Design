import { LogProcessor } from "./logger";

export class DebugLogProcessor extends LogProcessor{
    constructor(nextProcessor?: LogProcessor){
        super(nextProcessor);
    }

    log(level: number,message: string){
        if(level == LogProcessor.DEBUG){
            console.debug('DEBUG: ',message);
        }else{
            super.log(level,message);
        }
    }
}