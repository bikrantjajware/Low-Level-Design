import {WeightMachineInterface} from './weight-machine';
import { WeightMachineInKgs } from './weight-machine';

export class WeightMachineInPounds implements WeightMachineInterface{
    weightMachineInterface: WeightMachineInterface;
    constructor(weighMachine: WeightMachineInterface){
        this.weightMachineInterface = weighMachine;
    }
    getWeight(){
        console.log('convering weight to pounds...');
        return this.weightMachineInterface.getWeight() * 45
    }

}