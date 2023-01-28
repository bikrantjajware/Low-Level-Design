import { Spot } from "./spot"
import { Vehicle } from "./vehicle"

class Ticket{
    vehicle: Vehicle
    parkingSpot: Spot
    entryTime: Date
    constructor(vehicle: Vehicle,parkingSpot: Spot,time:Date){
        this.parkingSpot = parkingSpot;
        this.vehicle = vehicle;
        this.entryTime = time;
    }
}
export {
    Ticket
}