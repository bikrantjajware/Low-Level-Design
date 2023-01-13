export interface WeightMachineInterface{
    getWeight:() => number
}

export class WeightMachineInKgs implements WeightMachineInterface{
    getWeight(){
        console.log('weight in kgs is', 100);
        return 100;
    }
}
