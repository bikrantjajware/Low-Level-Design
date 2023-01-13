export abstract class LogProcessor{
    public static INFO = 1;
    public static DEBUG = 2
    public static ERROR = 3;
    nextLogProcessor?: LogProcessor;

    constructor(nextLogger?:LogProcessor){
        this.nextLogProcessor = nextLogger;
    }

    log(level:number,message:string){
        if(this.nextLogProcessor){
            this.nextLogProcessor.log(level,message);
        }
    }
}