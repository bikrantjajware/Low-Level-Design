import { main as compositePattern} from './patterns/composite-pattern/main';
import { main as decoratorPattern} from './patterns/decorator-pattern/main';
import { main as observerPattern } from './patterns/observer-pattern/main';
import { main as strategyPattern } from './patterns/strategy-pattern/main';
import { main as factoryPattern } from './patterns/factory-pattern/main';
import { main as proxyPattern } from './patterns/proxy-pattern/main';
import { main as nullObjectPattern } from './patterns/null-object-pattern/main';
import {main as adapterPattern} from './patterns/adapter-pattern/main';
import {main as commandPattern} from './patterns/command-pattern/main';
import {main as ChainOfResponsibility} from './patterns/chain-of-responsibility/main';
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
    // console.log("### Adapter  PATTERN ###")
    // adapterPattern();
    // console.log("### Command  PATTERN ###")
    // commandPattern();
    console.log("### Chains of responsibility  PATTERN ###")
    ChainOfResponsibility();

}
main();