import {Car,Bike, NullVehicle} from './Vehicles';

export class VehicleFactory{
    getVehicle(money: number){
        if(money >= 1000000)
            return new Car();
        else if(money >= 60000)
            return new Bike();
        else
            return new NullVehicle();
    }
}