
export enum VehicleType {
    TWO_WHEELER,
    THREE_WHEELER
}

class Vehicle{
    id: number
    type: VehicleType
    vehicleNumber: string
    static counter: number = 0;
    constructor(type: VehicleType,vehicleNumber:string){
        this.id = ++Vehicle.counter;
        this.type = type;
        this.vehicleNumber = vehicleNumber;
    }
}

export {
    Vehicle
}