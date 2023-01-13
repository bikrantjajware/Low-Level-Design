import { LogProcessor } from "./logger";

export class InfoLogProcessor extends LogProcessor{
    constructor(nextProcessor?: LogProcessor){
        super(nextProcessor);
    }

    log(level: number,message: string){
        if(level == LogProcessor.INFO){
            console.info('INFO: ',message);
        }else{
            super.log(level,message);
        }
    }
}