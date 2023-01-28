import { Vehicle, VehicleType } from "./vehicle";

interface SpotInterface{
    vehicle?: Vehicle
    type: VehicleType
    price: number
    id:number

}


class Spot implements SpotInterface{
    type: VehicleType;
    vehicle?: Vehicle;
    price: number;
    id: number;
    private static counter : number = 0;
    constructor(type:VehicleType,price:number,vehicle?: Vehicle){
        this.type = type;
        this.vehicle = vehicle;
        this.price = price;
        this.id = ++Spot.counter;
    }
    getPrice(){
        return this.price;
    }
}

class TWOWheelerSpot extends Spot{
    constructor(vehicle?: Vehicle){
        super(VehicleType.TWO_WHEELER,200,vehicle);
    }
    
}
class THREEWheelerSpot extends Spot{
    constructor(vehicle?:Vehicle){
        super(VehicleType.THREE_WHEELER,400,vehicle);
    }
}

export{
    Spot,
    SpotInterface,
    TWOWheelerSpot,
    THREEWheelerSpot
}