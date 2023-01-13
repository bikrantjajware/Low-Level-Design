import {WeightMachineInPounds} from './weight-adapter'
import { WeightMachineInKgs } from './weight-machine'

export function main(){
    const machine = new WeightMachineInPounds(new WeightMachineInKgs());
    console.log(machine.getWeight());
}
