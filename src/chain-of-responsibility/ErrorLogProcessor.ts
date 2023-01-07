import { LogProcessor } from "./logger";

export class ErrorLogProcessor extends LogProcessor{
    constructor(nextProcessor?: LogProcessor){
        super(nextProcessor);
    }

    log(level: number,message: string){
        if(level == LogProcessor.ERROR){
            console.error('ERROR: ',message);
        }else{
            super.log(level,message);
        }
    }
}