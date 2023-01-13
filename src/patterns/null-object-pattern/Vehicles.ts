interface VehicleInterface{
    getPrice:() => number
    getFuelCapacity:() => number
}

export class Car implements VehicleInterface{
    getFuelCapacity() {
        return 100;
    }
    getPrice (){
     return  1000000;
    }
}

export class Bike implements VehicleInterface{
    getFuelCapacity() {
        return 70;
    }
    getPrice (){
     return  80000;
    }
}

export class NullVehicle implements VehicleInterface{
    getFuelCapacity(){
        return 0;
    }
    getPrice(){
        return 0;
    }
}