import { main as compositePattern} from './composite-pattern/main';
import { main as decoratorPattern} from './decorator-pattern/main';
import { main as observerPattern } from './observer-pattern/main';
import { main as strategyPattern } from './strategy-pattern/main';
import { main as factoryPattern } from './factory-pattern/main';
import { main as proxyPattern } from './proxy-pattern/main';
import { main as nullObjectPattern } from './null-object-pattern/main';
import {main as adapterPattern} from './adapter-pattern/main';

function main(){
    // console.log("### COMPOSITE PATTERN ###")
    // compositePattern();
    // console.log("### DECORATOR PATTERN ###")
    // decoratorPattern();
    // console.log("### OBSERVER  PATTERN ###")
    // observerPattern();
    // console.log("### STRATEGY PATTERN ###")
    // strategyPattern();
    // console.log("### Factory PATTERN ###")
    // factoryPattern();
    // console.log("### Proxy PATTERN ###")
    // proxyPattern();
    // console.log("### Null Object PATTERN ###")
    // nullObjectPattern();
    console.log("### Adapter  PATTERN ###")
    adapterPattern();

}
main();