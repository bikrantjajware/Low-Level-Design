import { DebugLogProcessor } from "./DebugLogProcessor";
import { ErrorLogProcessor } from "./ErrorLogProcessor";
import { InfoLogProcessor } from "./InfoLogProcessor";
import { LogProcessor } from "./logger";
export function main(){
    let logger: LogProcessor;
    logger = new InfoLogProcessor(new DebugLogProcessor(new ErrorLogProcessor()));
    logger.log(LogProcessor.ERROR,'thrown error')
    logger.log(LogProcessor.DEBUG,'debug this error')
    logger.log(LogProcessor.INFO,'info for this error')
}